import { Check } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './Button';
import { Container } from './Container';
import { Heading } from './Heading';
import { Label } from './Label';
import { Section } from './Section';

/**
 * sokoe Day LP のヒーローセクション（v3）。
 *
 * v3 の変更点（v2 からの差分）：
 *   - レイアウトを縦組み → 横並びへ修正（C-1 が正解だった）
 *   - 左 5 / 右 7 のカラム比率で、画像を text より広く取る
 *   - 見出し・リード・CTA は左カラム内で **左寄せ**（lg+）、モバイルでは中央寄せ
 *
 * 設計の意図：
 *   - 一画面でテキスト・CTA・プロダクト画像のすべてを伝える
 *   - 画像（タブレット UI）は画面右半分以上を専有し「良さが伝わる」サイズに
 *   - 短い見出し（A-3）と組み合わせることで、横並びでも折返し破綻しない
 *
 * 色アクセント：「現場発の、」は day-orange（#F49E0B）。
 */
export function DayHero() {
  return (
    <Section spacing="md" className="overflow-x-hidden">
      <Container size="wide">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10 xl:gap-14">
          {/* ─── 左：テキスト + CTA ─── */}
          {/*
            左カラムを広く取ってヒーロー見出しに視覚的体重を与える。
            画像は col-span-5 / col-span-6 でも UI モックの可読性は保てる。
          */}
          <div className="text-center lg:col-span-7 lg:text-left xl:col-span-6">
            <Label className="mb-6 text-product-orange">SOKOE DAY ─ デイサービス向けアプリ</Label>

            {/*
              3 行固定の見出し。2 行目「『心のゆとり』を残し、残業を減らす、」が
              最も長い行（約 18 全角文字）なので、これが折り返さないサイズに
              各ブレークポイントを調整している。
                - mobile  (~335px): 18px → 18×18≈324px で 1 行
                - sm      (~600px): 28px
                - md      (~720px): 36px
                - lg col-7 (~520px): 26px
                - xl col-6 (~580px): 30px
                - 2xl     (~720px): 36px
            */}
            <Heading
              level="h1"
              serif
              className="!text-[18px] !leading-[1.4] sm:!text-[28px] sm:!leading-[1.3] md:!text-[36px] md:!leading-[1.25] lg:!text-[26px] xl:!text-[30px] 2xl:!text-[36px]"
            >
              <span className="text-product-orange">現場発！</span>
              <br />
              「心のゆとり」を残し、残業を減らす、
              <br />
              SOKOEデイサービスアプリ
            </Heading>

            <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-charcoal md:mt-8 md:text-lg md:leading-[1.85] lg:mx-0">
              介護施設を運営する会社がつくった、デイサービスのためのアプリ。 1
              日型・半日型・ハイブリッド型に柔軟に対応。
              紙の記録・書き写し・伝え漏れを、現場発の設計と AI で削減します。
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:mt-10 lg:justify-start">
              <Link href="/day-service/document/">
                <Button variant="primary">資料をダウンロード（無料）</Button>
              </Link>
              <Link href="#pricing">
                <Button variant="secondary">料金を見る →</Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-charcoal-muted">
              自社運営施設で 2026 年 4 月から本番稼働中
            </p>

            {/* 判断材料 3 点バッジ */}
            <ul className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-start">
              {[
                'カスタム開発も可能',
                '1 日型・半日型・ハイブリッドに対応',
                'カイポケ等の介護記録ソフトと併用 OK',
              ].map((badge) => (
                <li
                  key={badge}
                  className="flex items-center gap-1.5 text-[12px] md:text-[13px] font-medium text-charcoal"
                >
                  <Check
                    className="shrink-0 w-3.5 h-3.5 text-product-orange"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  {badge}
                </li>
              ))}
            </ul>
          </div>

          {/* ─── 右：プロダクト画像 ─── */}
          <div className="lg:col-span-5 xl:col-span-6">
            <Image
              src="/images/day/hero-mockup.svg"
              alt="sokoe Day のホーム画面：バイタル・入浴・マシン訓練の進捗、本日の業務、To-Do、メモボード、申し送りが一画面で見える"
              width={1600}
              height={1100}
              priority
              unoptimized
              sizes="(min-width: 1280px) 58vw, (min-width: 1024px) 50vw, 100vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
