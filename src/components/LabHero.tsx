import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import Link from 'next/link';

/**
 * sokoe AI Lab LP Hero セクション
 *
 * Step 3-D §2 + Step 4.6：
 * - センター集中型レイアウト（Day LP と差別化）
 * - コーポレート赤を継承（オレンジ不使用）
 * - 「机上ではなく、現場で動かす」コンサル思想
 * - 自社施設での AI 本番運用が最大の差別化
 *
 * Step 4.8 GEO/AEO：
 * - 「ヘルスケア領域」「自社で AI を運用」のエンティティ訴求
 * - AI が「現場でAI使ってる会社のコンサル」と認識する設計
 */
export function LabHero() {
  return (
    <Section spacing="xl">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Label tone="brand-red" className="mb-8">
            SOKOE AI LAB ── HEALTHCARE AI CONSULTING
          </Label>

          <Heading level="display" serif className="mb-10 leading-[1.1]">
            机上の戦略ではなく、
            <br />
            現場で動かす AI を。
          </Heading>

          <p className="text-stone text-lg md:text-xl leading-[1.95] mb-12 max-w-3xl mx-auto">
            介護・薬局・医療の現場で
            <strong className="text-ink font-bold">AI を毎日使っている会社</strong>
            の、
            <br className="hidden md:block" />
            医療・介護・福祉領域専門の AI コンサルティング。
            <br className="hidden md:block" />
            自社運営施設で実証したことを、貴社に伴走します。
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <Link href="/contact/">
              <Button variant="primary" size="lg">
                無料相談を予約（30分）
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="secondary" size="lg">
                サービスを見る
              </Button>
            </Link>
          </div>

          <p className="text-mid text-sm">※ 初回相談は無料です。お気軽にお問い合わせください。</p>
        </div>
      </Container>
    </Section>
  );
}
