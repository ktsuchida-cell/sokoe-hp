import { Container } from './Container';
import { Heading } from './Heading';
import { Label } from './Label';
import { Section } from './Section';

type PageHeroProps = {
  label?: string;
  title: string;
  lead?: string;
  /** 最終更新日（YMYL ページで表示）*/
  updatedAt?: string;
  /** タイトルを左寄せ（既定）か中央寄せか */
  align?: 'left' | 'center';
  /** セリフ体を使うか（既定 true） */
  serif?: boolean;
};

/**
 * 規約類・会社情報ページなどの軽量ヒーロー。
 * LP の Hero とは異なり、ラベル + 見出し + リードのみのシンプル構成。
 * Step 4 §4.3 のエディトリアル組み（uppercase ラベル → セリフ見出し）を踏襲。
 */
export function PageHero({
  label,
  title,
  lead,
  updatedAt,
  align = 'left',
  serif = true,
}: PageHeroProps) {
  return (
    <Section spacing="lg" className="pb-0">
      <Container size="default">
        <div className={align === 'center' ? 'text-center' : 'text-left'}>
          {label && <Label className="mb-6">{label}</Label>}
          <Heading level="h1" serif={serif} className="mb-6">
            {title}
          </Heading>
          {lead && (
            <p className="max-w-2xl text-lg leading-relaxed text-charcoal md:text-xl">{lead}</p>
          )}
          {updatedAt && (
            <p className="mt-8 text-sm text-charcoal-muted">
              最終更新日：<time dateTime={updatedAt}>{updatedAt}</time>
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
