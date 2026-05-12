'use client';

import { Button } from '@/components/Button';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitContact } from './actions';
import { type ContactField, type ContactFormState, INDUSTRIES, INQUIRY_TYPES } from './constants';

const initialState: ContactFormState = { status: 'idle' };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);

  // 送信成功時は完了メッセージのみ表示
  if (state.status === 'success') {
    return <ContactSuccess message={state.message} />;
  }

  return (
    <div className="max-w-2xl">
      {/* エラー帯 */}
      {state.status === 'error' && (
        <div
          role="alert"
          className="mb-8 border-l-4 border-brand-red bg-bg-muted p-5 text-sm leading-relaxed text-ink"
        >
          <p className="font-medium">送信に失敗しました</p>
          <p className="mt-2">{state.message}</p>
        </div>
      )}

      {state.status === 'invalid' && (
        <div
          role="alert"
          className="mb-8 border-l-4 border-brand-red bg-bg-muted p-5 text-sm leading-relaxed text-ink"
        >
          <p className="font-medium">入力内容をご確認ください</p>
        </div>
      )}

      <form action={formAction} className="space-y-8" noValidate>
        {/* お問い合わせ種別 */}
        <Field label="お問い合わせ種別" id="inquiryType" required error={state.errors?.inquiryType}>
          <select
            id="inquiryType"
            name="inquiryType"
            required
            defaultValue={state.values?.inquiryType ?? ''}
            className={selectClass(!!state.errors?.inquiryType)}
          >
            <option value="">選択してください</option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        {/* お名前 */}
        <Field label="お名前" id="name" required error={state.errors?.name}>
          <input
            type="text"
            id="name"
            name="name"
            required
            autoComplete="name"
            defaultValue={state.values?.name ?? ''}
            className={inputClass(!!state.errors?.name)}
            placeholder="例：槌田 一輝"
          />
        </Field>

        {/* 会社・組織名 */}
        <Field label="会社名・組織名" id="company" required error={state.errors?.company}>
          <input
            type="text"
            id="company"
            name="company"
            required
            autoComplete="organization"
            defaultValue={state.values?.company ?? ''}
            className={inputClass(!!state.errors?.company)}
            placeholder="例：株式会社○○"
          />
        </Field>

        {/* 役職 */}
        <Field label="役職" id="role" hint="任意" error={state.errors?.role}>
          <input
            type="text"
            id="role"
            name="role"
            autoComplete="organization-title"
            defaultValue={state.values?.role ?? ''}
            className={inputClass(!!state.errors?.role)}
            placeholder="例：代表取締役"
          />
        </Field>

        {/* メール */}
        <Field label="メールアドレス" id="email" required error={state.errors?.email}>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            defaultValue={state.values?.email ?? ''}
            className={inputClass(!!state.errors?.email)}
            placeholder="例：info@example.com"
          />
        </Field>

        {/* 電話番号 */}
        <Field
          label="電話番号"
          id="phone"
          hint="任意（半角数字・ハイフン可）"
          error={state.errors?.phone}
        >
          <input
            type="tel"
            id="phone"
            name="phone"
            autoComplete="tel"
            defaultValue={state.values?.phone ?? ''}
            className={inputClass(!!state.errors?.phone)}
            placeholder="例：050-1234-5678"
          />
        </Field>

        {/* 業種 */}
        <Field label="業種" id="industry" hint="任意" error={state.errors?.industry}>
          <select
            id="industry"
            name="industry"
            defaultValue={state.values?.industry ?? ''}
            className={selectClass(!!state.errors?.industry)}
          >
            <option value="">選択してください</option>
            {INDUSTRIES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>

        {/* お問い合わせ内容 */}
        <Field label="お問い合わせ内容" id="message" required error={state.errors?.message}>
          <textarea
            id="message"
            name="message"
            required
            rows={8}
            defaultValue={state.values?.message ?? ''}
            className={textareaClass(!!state.errors?.message)}
            placeholder="現状のお困りごと、ご相談されたい内容をお書きください（10文字以上）"
          />
        </Field>

        {/* プライバシーポリシー同意 */}
        <div>
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              name="consent"
              required
              defaultChecked={state.values?.consent === 'on'}
              className="mt-1 size-5 cursor-pointer accent-brand-red"
            />
            <span className="text-base leading-relaxed text-ink">
              <a
                href="/privacy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-red underline transition-opacity hover:opacity-70"
              >
                プライバシーポリシー
              </a>
              に同意のうえ、お問い合わせ内容を送信します。
              <span className="ml-1 text-sm text-brand-red">*</span>
            </span>
          </label>
          {state.errors?.consent && (
            <p className="mt-2 text-sm text-brand-red">{state.errors.consent}</p>
          )}
        </div>

        {/* 送信ボタン */}
        <SubmitButton />
      </form>

      {/* mailto: フォールバック案内 */}
      <div className="mt-12 border-t border-border-soft pt-8 text-sm leading-relaxed text-charcoal-muted">
        <p>
          フォームがうまく送信できない場合は、お手数ですが{' '}
          <a
            href="mailto:info@sokoe.co.jp"
            className="text-brand-red underline transition-opacity hover:opacity-70"
          >
            info@sokoe.co.jp
          </a>{' '}
          まで直接メールでお問い合わせください。
        </p>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────
// 部品
// ────────────────────────────────────────────

type FieldProps = {
  label: string;
  id: ContactField | string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
};

function Field({ label, id, required, hint, error, children }: FieldProps) {
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-ink">
          {label}
          {required && <span className="ml-1 text-brand-red">*</span>}
        </label>
        {hint && !required && <span className="text-xs text-charcoal-muted">{hint}</span>}
      </div>
      {children}
      {error && (
        <p role="alert" className="mt-2 text-sm text-brand-red">
          {error}
        </p>
      )}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <div className="pt-4">
      <Button type="submit" variant="primary" disabled={pending}>
        {pending ? '送信中…' : '送信する'}
      </Button>
    </div>
  );
}

function ContactSuccess({ message }: { message?: string }) {
  return (
    <div className="border-l-4 border-brand-red bg-bg-muted p-8">
      <h2 className="font-display text-2xl font-medium tracking-tight text-ink">
        お問い合わせありがとうございました。
      </h2>
      <p className="mt-4 text-base leading-relaxed text-charcoal">
        {message ?? 'お問い合わせを受け付けました。担当者より2営業日以内にご連絡いたします。'}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-charcoal-muted">
        ※ 2営業日を過ぎても返信がない場合は、メール到着不具合の可能性があります。お手数ですが{' '}
        <a
          href="mailto:info@sokoe.co.jp"
          className="text-brand-red underline transition-opacity hover:opacity-70"
        >
          info@sokoe.co.jp
        </a>{' '}
        まで直接ご連絡ください。
      </p>
    </div>
  );
}

// ────────────────────────────────────────────
// スタイル
// ────────────────────────────────────────────

const baseInputClass =
  'w-full border bg-bg-base px-4 py-3 text-base text-ink transition-colors focus:border-ink focus:outline-none';

function inputClass(hasError: boolean): string {
  return `${baseInputClass} ${hasError ? 'border-brand-red' : 'border-border-soft'}`;
}

function textareaClass(hasError: boolean): string {
  return `${baseInputClass} resize-vertical ${hasError ? 'border-brand-red' : 'border-border-soft'}`;
}

function selectClass(hasError: boolean): string {
  return `${baseInputClass} appearance-none ${hasError ? 'border-brand-red' : 'border-border-soft'}`;
}
