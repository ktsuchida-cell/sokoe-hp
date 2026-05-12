/**
 * お問い合わせフォームの定数・型定義。
 *
 * 'use server' を含まないモジュールとして切り出し、Server Action (actions.ts) と
 * Client Component (ContactForm.tsx) の双方からインポートできるようにしている。
 * Next.js の Server Action ファイル ('use server') は async function のみエクスポート可能で、
 * 配列や型を export すると prerender 時に "h.map is not a function" 等で失敗するため。
 */

export const INQUIRY_TYPES = [
  'sokoe Day について（デイサービス向けアプリ）',
  'sokoe AI Lab について（AI コンサルティング）',
  '採用について',
  '取材・登壇のご依頼',
  'その他のお問い合わせ',
] as const;

export const INDUSTRIES = ['介護', '医療', '薬局', 'その他'] as const;

export type ContactFormState = {
  status: 'idle' | 'success' | 'invalid' | 'error';
  errors?: Partial<Record<ContactField, string>>;
  values?: Partial<Record<ContactField, string>>;
  message?: string;
};

export type ContactField =
  | 'inquiryType'
  | 'name'
  | 'company'
  | 'role'
  | 'email'
  | 'phone'
  | 'industry'
  | 'message'
  | 'consent';
