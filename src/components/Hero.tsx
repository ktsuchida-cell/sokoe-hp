import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';

/**
 * コーポレートTOP Hero セクション
 *
 * - 背景に「無人のモダンクリニック内装」写真をフルブリードで配置
 *   （Pavel Danilyuk on Pexels、Pexels License、人感なし、teal/white の cool tone）
 * - 上に弱めの白オーバーレイ + 縦グラデーションで、画像のニュアンスを残しつつ
 *   見出し・CTA の可読性を担保する
 * - 方針: design-notes 内のデザイナーエージェントレポート（2026-05-19）に基づく
 */
export function Hero() {
  return (
    <div className="relative isolate">
      {/* 背景画像 + 白系オーバーレイ */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero/corporate-hero-clinic.jpg"
          alt=""
          fill
          priority
          quality={82}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* 純白で被せると画像が消えるので、白 60% に弱める + 上→下に向かって白を強くするグラデーションを重ね、CTA 周辺だけ可読性を上げる */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-[1px]" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/30 to-white/70"
          aria-hidden="true"
        />
      </div>

      <Section spacing="xl">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            {/*
              全画面 2 行固定。最長行「薬局・介護事業を運営する会社が、」が
              約 17 全角字相当なので、各ブレークポイントで折り返さない最大
              サイズに抑えてある。
            */}
            <Heading
              level="display"
              serif
              className="mb-6 !text-[19px] sm:!text-[32px] md:!text-[40px] lg:!text-[52px]"
            >
              薬局・介護事業を運営する会社が、
              <br />
              本気で現場を変える。
            </Heading>

            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal leading-[1.4] mb-12">
              アプリ開発 × AI コンサルティング
            </p>

            <p className="text-stone text-lg md:text-xl leading-[1.85] mb-12 max-w-2xl mx-auto">
              紙運用、情報伝達の分断、終わらない記録。
              <br className="hidden md:block" />
              本来の仕事を取り戻すための、
              <br className="hidden md:block" />
              現場発のソフトウェアと AI コンサルティング。
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/day-service/">
                <Button variant="primary" size="lg">
                  サービスを見る
                </Button>
              </Link>
              <Link href="/about/">
                <Button variant="secondary" size="lg">
                  私たちについて
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
