import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Section } from '@/components/Section';
import Image from 'next/image';
import Link from 'next/link';

/**
 * コーポレートTOP Hero セクション
 *
 * - 背景に自社運営施設の現場写真をフルブリードで配置
 * - 文字読みやすさのため白系オーバーレイで写真をやわらげる
 * - セリフ体（Playfair Display + Noto Serif JP）の大見出し
 */
export function Hero() {
  return (
    <div className="relative isolate">
      {/* 背景画像 + 白系オーバーレイ */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero/corporate-facility-1672x941.webp"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px]" aria-hidden="true" />
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
