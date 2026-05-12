'use server';

/**
 * お問い合わせフォームの送信処理。
 *
 * 動作モード（環境変数による）：
 *   - RESEND_API_KEY が設定済み：Resend API 経由で info@sokoe.co.jp へ送信
 *   - 未設定：暫定モード。サーバーログに出力したうえで、ユーザーに mailto: 代替を案内する
 *
 * 依存パッケージは追加なし（fetch で Resend API を叩く）。
 * 本格運用時は `pnpm add resend` で公式 SDK へ切り替えてもよい。
 *
 * 配列・型・定数は 'use server' ファイルから export できない（async function のみ）ため、
 * constants.ts に分離している。
 */

import { type ContactField, type ContactFormState, INDUSTRIES, INQUIRY_TYPES } from './constants';

const TO_EMAIL = 'info@sokoe.co.jp';
const FROM_EMAIL = 'noreply@sokoe.co.jp'; // Resend 側でドメイン認証済みである必要あり

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // 1. 値抽出
  const raw = {
    inquiryType: (formData.get('inquiryType') as string | null)?.trim() ?? '',
    name: (formData.get('name') as string | null)?.trim() ?? '',
    company: (formData.get('company') as string | null)?.trim() ?? '',
    role: (formData.get('role') as string | null)?.trim() ?? '',
    email: (formData.get('email') as string | null)?.trim() ?? '',
    phone: (formData.get('phone') as string | null)?.trim() ?? '',
    industry: (formData.get('industry') as string | null)?.trim() ?? '',
    message: (formData.get('message') as string | null)?.trim() ?? '',
    consent: formData.get('consent') === 'on' ? 'on' : '',
  };

  // 2. バリデーション
  const errors: Partial<Record<ContactField, string>> = {};

  if (!raw.inquiryType) errors.inquiryType = 'お問い合わせ種別を選択してください';
  else if (!INQUIRY_TYPES.includes(raw.inquiryType as (typeof INQUIRY_TYPES)[number]))
    errors.inquiryType = 'お問い合わせ種別が不正です';

  if (!raw.name) errors.name = 'お名前を入力してください';
  else if (raw.name.length > 80) errors.name = 'お名前が長すぎます（80文字以内）';

  if (!raw.company) errors.company = '会社名・組織名を入力してください';
  else if (raw.company.length > 120) errors.company = '会社名が長すぎます（120文字以内）';

  if (!raw.email) errors.email = 'メールアドレスを入力してください';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(raw.email))
    errors.email = 'メールアドレスの形式が正しくありません';
  else if (raw.email.length > 200) errors.email = 'メールアドレスが長すぎます';

  if (raw.phone && !/^[\d\-+() 　]{7,20}$/.test(raw.phone)) {
    errors.phone = '電話番号の形式が正しくありません';
  }

  if (raw.industry && !INDUSTRIES.includes(raw.industry as (typeof INDUSTRIES)[number])) {
    errors.industry = '業種が不正です';
  }

  if (!raw.message) errors.message = 'お問い合わせ内容を入力してください';
  else if (raw.message.length < 10) errors.message = 'もう少し詳しくお書きください（10文字以上）';
  else if (raw.message.length > 4000) errors.message = '入力が長すぎます（4,000文字以内）';

  if (!raw.consent) errors.consent = 'プライバシーポリシーへの同意が必要です';

  if (Object.keys(errors).length > 0) {
    return {
      status: 'invalid',
      errors,
      values: raw,
      message: '入力内容をご確認ください。',
    };
  }

  // 3. 送信
  try {
    await sendInquiry(raw);
    return {
      status: 'success',
      message: 'お問い合わせを受け付けました。担当者より2営業日以内にご連絡いたします。',
    };
  } catch (err) {
    console.error('[contact] 送信エラー:', err);
    return {
      status: 'error',
      values: raw,
      message:
        '送信に失敗しました。お手数ですが、info@sokoe.co.jp まで直接メールにてお問い合わせください。',
    };
  }
}

// ────────────────────────────────────────────
// 送信ロジック
// ────────────────────────────────────────────

type Inquiry = {
  inquiryType: string;
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  industry: string;
  message: string;
};

async function sendInquiry(inquiry: Inquiry): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;

  // 暫定モード：サーバーログのみ
  if (!apiKey) {
    console.log(
      '[contact] RESEND_API_KEY 未設定のため、サーバーログにのみ出力します:',
      JSON.stringify(inquiry, null, 2),
    );
    // 暫定運用中は意図的にエラーを投げて、ユーザーに mailto: を案内する。
    // 「ログだけして成功扱い」にすると問い合わせが届かないのに届いた風になり危険。
    throw new Error('RESEND_API_KEY is not configured (暫定運用モード)');
  }

  // 本番モード：Resend API へ POST
  const body = {
    from: `sokoe お問い合わせ <${FROM_EMAIL}>`,
    to: [TO_EMAIL],
    reply_to: inquiry.email,
    subject: `[sokoe.co.jp] ${inquiry.inquiryType} ── ${inquiry.company} ${inquiry.name} 様`,
    text: formatInquiryAsText(inquiry),
  };

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Resend API error ${res.status}: ${errText}`);
  }
}

function formatInquiryAsText(i: Inquiry): string {
  return `sokoe コーポレートサイトより、お問い合わせが届きました。

────────────────────────────
お問い合わせ種別：${i.inquiryType}
お名前：${i.name}
会社・組織名：${i.company}
役職：${i.role || '（未入力）'}
メールアドレス：${i.email}
電話番号：${i.phone || '（未入力）'}
業種：${i.industry || '（未選択）'}
────────────────────────────

【お問い合わせ内容】
${i.message}

────────────────────────────
このメールは sokoe.co.jp のお問い合わせフォームから自動送信されています。
ご返信は ${i.email} 宛にお願いします。
`;
}
