import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';

/**
 * コーポレートTOP Hero セクション
 *
 * - 背景に「朝日がカーテンを抜けて室内に差し込む」写真を配置
 *   （Pexels License、人感なし、暖色 4500K 系の情景）
 * - 方針: IT/SaaS の Hero パターン調査（kubell の暖色テクスチャ、Vercel の
 *   半抽象情景）を参考に、医療・介護に静かな光が差すメタファとして採用
 * - オーバーレイは弱め + 下方向グラデで CTA 周辺の可読性を担保
 */
export function Hero() {
  return (
    <div className="relative isolate">
      {/* 背景写真 + 白系オーバーレイ */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero/corporate-hero-morning.jpg"
          alt=""
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* ベース白オーバーレイ：写真が見えつつ文字が読めるバランス */}
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" aria-hidden="true" />
        {/* 縦グラデで CTA 周辺だけ白を強める */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/20 to-white/55"
          aria-hidden="true"
        />
      </div>

      <Section spacing="xl" className="!bg-transparent">
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
