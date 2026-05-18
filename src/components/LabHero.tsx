import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';

/**
 * sokoe AI Lab LP Hero セクション
 *
 * Step 3-D §2 + Step 4.6：
 * - センター集中型レイアウト（Day LP と差別化）
 * - コーポレート赤を継承（オレンジ不使用）
 * - 「机上ではなく、現場で動かす」コンサル思想
 *
 * 背景：無人のモダン会議室写真（Pexels License、人感なし、ガラス壁 + 白テーブル）。
 * コンサルファーム感を出し、白オーバーレイで文字の可読性を確保する。
 */
export function LabHero() {
  return (
    <div className="relative isolate">
      {/* 背景写真 + 白系オーバーレイ */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero/lab-hero-boardroom.jpg"
          alt=""
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/25 to-white/65"
          aria-hidden="true"
        />
      </div>

      <Section spacing="xl" className="!bg-transparent">
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
    </div>
  );
}
