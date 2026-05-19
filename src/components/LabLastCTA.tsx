import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import Link from 'next/link';

/**
 * sokoe AI Lab LP 最終 CTA
 *
 * 仕様書 §11：赤グラデーション背景、中央寄せ、白背景＋赤文字の単独ボタン。
 */
export function LabLastCTA() {
  return (
    <section
      className="relative isolate overflow-hidden text-white py-24 md:py-32"
      aria-label="AI Lab 無料相談"
    >
      {/* 赤グラデ + 微弱なパターン */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-red via-[#d4111d] to-[#a30e1b]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-15"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 0, transparent 35%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.4) 0, transparent 30%)',
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Heading level="h2" tone="white" serif className="mb-6">
            まずは、現場の業務を
            <br className="hidden md:block" />
            一緒に整理しませんか。
          </Heading>

          <p className="text-white/90 text-base md:text-lg leading-[1.85] mb-10">
            無料相談では、課題のヒアリングと改善のヒントをご提案します。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/">
              <Button
                size="lg"
                className="bg-white text-brand-red hover:bg-white/90 active:bg-white/80"
              >
                無料相談する →
              </Button>
            </Link>
          </div>

          <p className="text-white/70 text-sm mt-8">
            ※ 初回相談は完全無料。1 営業日以内に折り返しご連絡します。
          </p>
        </div>
      </Container>
    </section>
  );
}
