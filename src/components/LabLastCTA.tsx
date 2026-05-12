import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import Link from 'next/link';

/**
 * sokoe AI Lab LP 最終 CTA
 *
 * Step 4.6：
 * - コーポレート赤を継承（オレンジ不使用）
 * - 「無料相談」を最重要 CV として強調
 */
export function LabLastCTA() {
  return (
    <section className="bg-brand-red text-white py-24 md:py-36" aria-label="AI Lab お問い合わせ">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Label tone="white" className="mb-8">
            FREE CONSULTATION
          </Label>

          <Heading level="h2" tone="white" serif className="mb-10">
            まず30分、
            <br className="hidden md:block" />
            話を聞かせてください。
          </Heading>

          <p className="text-white/90 text-base md:text-lg leading-[1.85] mb-12">
            「うちの場合、何ができるんだろう」を、
            <br className="hidden md:block" />
            事前準備なしの 30 分でお話しできます。
            <br className="hidden md:block" />
            営業的な押し付けはしません。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/">
              <Button variant="white" size="lg">
                無料相談を予約
              </Button>
            </Link>
            <Link href="/media/">
              <Button
                variant="ghost"
                size="lg"
                className="text-white hover:text-white/70 border border-white/30 hover:border-white/50"
              >
                記事から知る
              </Button>
            </Link>
          </div>

          <p className="text-white/70 text-sm mt-10">
            ※ 初回相談は完全無料。1営業日以内に折り返しご連絡します。
          </p>
        </div>
      </Container>
    </section>
  );
}
