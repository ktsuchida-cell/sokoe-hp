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
          <Heading level="h2" tone="white" serif className="mb-4">
            まずは、現場の課題やご一緒に
            <br className="hidden md:block" />
            解決策を考えましょう。
          </Heading>

          <p className="text-white/95 text-lg md:text-xl leading-[1.7] mb-10 font-semibold">
            小さな一歩から、確かな変化を。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/?type=sokoe-ailab">
              <Button
                size="lg"
                className="bg-white text-brand-red hover:bg-white/90 active:bg-white/80 !rounded-full min-w-[200px]"
              >
                無料相談する →
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
