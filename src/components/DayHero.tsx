import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';
import { Container } from './Container';
import { Heading } from './Heading';
import { Label } from './Label';
import { Section } from './Section';

/**
 * sokoe Day LP のヒーローセクション（v2）。
 *
 * 設計変更（旧版からの差分）：
 *   - 見出し短縮：「現場発の、デイサービスアプリ。」（A-3）
 *   - レイアウトを縦組み + 画像フルブリードに変更（D-1）
 *   - CTA 2 本：資料 DL（primary）+ 相談する（secondary）（B-1）
 *   - 画像を max-w-[1600px] でほぼフルブリード表示（C-1 を D-1 に吸収）
 *
 * 設計の意図：
 *   - ファーストビューに「ラベル → 大見出し → リード → CTA」を縦に積み、
 *     画像はスクロールせず半分以上見える位置に配置。
 *   - フォールド境界が画像中央あたりに来るので、「もっと見たい」を誘発。
 *   - 見出しの色アクセント「現場発の、」を day-orange（#F49E0B）に。
 *     編集メディア風だが、プロダクトカラーで sokoe Day らしさを担保。
 */
export function DayHero() {
  return (
    <Section spacing="md" className="overflow-x-hidden pb-0">
      {/* 上：見出し + リード + CTA（中央寄せ） */}
      <Container size="default">
        <div className="mx-auto max-w-3xl pt-8 text-center md:pt-12">
          <Label className="mb-6 text-product-orange">SOKOE DAY ─ DAY-SERVICE OS</Label>

          <Heading
            level="h1"
            serif
            className="!text-5xl !leading-[1.12] md:!text-7xl md:!leading-[1.05]"
          >
            <span className="text-product-orange">現場発の、</span>
            <br />
            デイサービスアプリ。
          </Heading>

          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-charcoal md:mt-10 md:text-lg md:leading-[1.85]">
            介護施設を運営する会社がつくった、デイサービスのためのアプリ。 1
            日型・半日型・ハイブリッド型に完全対応。 紙運用・転記・伝達ミスを、現場発の設計と AI
            で消す。
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:mt-12">
            <Link href="/day-service/document/">
              <Button variant="primary">資料をダウンロード（無料）</Button>
            </Link>
            <Link href="/contact/?type=sokoe-day">
              <Button variant="secondary">相談する →</Button>
            </Link>
          </div>

          <p className="mt-6 text-sm text-charcoal-muted">
            自社運営施設で 2026 年 4 月から本番稼働中
          </p>
        </div>
      </Container>

      {/* 下：プロダクト画像フルブリード */}
      <div className="mt-16 md:mt-20">
        <div className="mx-auto max-w-[1600px] px-4 md:px-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[16/9]">
            <Image
              src="/images/hero/dayservice-ui-mockup-1672x941.webp"
              alt="sokoe Day のホーム画面：バイタル・入浴・マシン訓練の進捗、本日の業務、To-Do、メモボード、申し送りが一画面で見える"
              fill
              priority
              className="object-cover object-top"
              sizes="(min-width: 1600px) 1600px, 100vw"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
