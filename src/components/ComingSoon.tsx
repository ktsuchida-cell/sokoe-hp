import Link from 'next/link';
import { Button } from './Button';
import { Container } from './Container';
import { Heading } from './Heading';
import { Label } from './Label';
import { Section } from './Section';

type ComingSoonProps = {
  /** ラベル（uppercase）。例：'DOCUMENT' / 'DEMO' / 'FEATURE' */
  label: string;
  /** ページタイトル。例：'資料ダウンロード' */
  title: string;
  /** 上の補足説明（任意） */
  description?: string;
  /** お問い合わせフォームに渡す inquiry の文脈（任意。/contact/?inquiry=... で受け取る） */
  inquiry?: string;
};

/**
 * 未実装ルート用の Coming Soon ページ共通コンポーネント。
 *
 * 設計方針：
 *   - 既存ページと同じ Editorial レイアウト（影なしボーダー、セリフ体見出し、
 *     豊かな余白）を踏襲し、サイト全体の印象を崩さない
 *   - /contact/ への明確な導線を 2 系統（赤の primary CTA + テキストリンク）で確保
 *   - <noindex /> 系の SEO 制御は不要（このページは検索に乗ってもデッドエンドではないため）
 */
export function ComingSoon({ label, title, description, inquiry }: ComingSoonProps) {
  const contactHref = inquiry ? `/contact/?inquiry=${encodeURIComponent(inquiry)}` : '/contact/';

  return (
    <Section spacing="lg">
      <Container size="narrow">
        <div className="text-center">
          <Label className="mb-6">{label}</Label>
          <Heading level="h1" serif className="mb-6">
            {title}
          </Heading>
          <p className="mb-12 text-lg leading-relaxed text-charcoal md:text-xl">
            このページは現在準備中です。
            <br />
            お手数ですが、お問い合わせフォームよりご連絡ください。担当者より2営業日以内に
            ご返信いたします。
          </p>

          {description && (
            <p className="mb-12 inline-block border-l-2 border-brand-red bg-bg-muted px-6 py-4 text-left text-base leading-relaxed text-ink">
              {description}
            </p>
          )}

          <div className="flex flex-wrap justify-center gap-4">
            <Link href={contactHref}>
              <Button variant="primary" size="lg">
                お問い合わせフォームへ
              </Button>
            </Link>
            <Link href="/day-service/">
              <Button variant="secondary" size="lg">
                sokoe Day に戻る
              </Button>
            </Link>
          </div>

          <p className="mt-12 text-sm text-charcoal-muted">
            メールで直接ご連絡いただく場合：{' '}
            <a
              href="mailto:info@sokoe.co.jp"
              className="text-brand-red underline transition-opacity hover:opacity-70"
            >
              info@sokoe.co.jp
            </a>
          </p>
        </div>
      </Container>
    </Section>
  );
}
