import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { Check } from 'lucide-react';

/**
 * Positioning セクション
 *
 * 介護記録ソフト（カイポケ等）と sokoe Day の関係を「対立ではなく加算」として伝える。
 *
 * 設計判断は design-notes/positioning.md に集約。
 * 主要な原則：
 *   - カード 2 枚の間に「＋」円形チップを置いて加算を視覚化
 *   - 左右カードは同寸・同枠線太さ（差別化は背景色とラベル色のみ）
 *   - 末尾コピーは結論文として H2 と本文の中間サイズで強調（serif + ink）
 */
export function DayPositioning() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <Label className="mb-5">POSITIONING</Label>
          <Heading level="h2" serif className="mb-6">
            sokoe Day は、
            <br className="hidden md:block" />
            介護現場をサポートするアプリです。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85]">
            いま使っている介護記録ソフト（カイポケ・ナーシングネット 等）はそのまま、
            <br className="hidden md:block" />
            その隣で sokoe Day が
            <strong className="text-ink font-bold">フロアの記録・申し送り・計画書づくり</strong>
            をお手伝いします。
          </p>
        </div>

        {/* スクリーンリーダー向けの関係性補足 */}
        <p className="sr-only">
          介護記録ソフトに sokoe Day を加える関係です。請求業務は介護記録ソフト、現場業務は sokoe
          Day が担当します。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-6 items-stretch">
          {/* 介護記録ソフト：請求担当 */}
          <div className="rounded-[8px] border border-border bg-bg-muted p-7 md:p-9">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] text-mid mb-3">
              請求は、これまで通り
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-charcoal mb-3">
              介護記録ソフト
            </h3>
            <p className="text-mid text-[13px] leading-[1.7] mb-5">
              カイポケ・ナーシングネット・ファーストケア 等
            </p>
            <p className="text-stone text-[14px] md:text-[15px] leading-[1.85] mb-5">
              国保連請求や基幹データの保管は、これまで使ってきたソフトで継続いただけます。 sokoe Day
              は、この領域は担当しません。
            </p>
            <ul className="space-y-2.5 text-[13px] md:text-[14px] text-stone">
              <li className="flex items-start gap-2">
                <Check
                  className="shrink-0 w-4 h-4 text-charcoal mt-0.5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>介護給付請求（国保連伝送）</span>
              </li>
              <li className="flex items-start gap-2">
                <Check
                  className="shrink-0 w-4 h-4 text-charcoal mt-0.5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>利用者基本情報の管理</span>
              </li>
              <li className="flex items-start gap-2">
                <Check
                  className="shrink-0 w-4 h-4 text-charcoal mt-0.5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>監査対応の基幹データ保管</span>
              </li>
            </ul>
          </div>

          {/* ＋ チップ（デスクトップは中央カラム、モバイルは縦の間） */}
          <div className="hidden md:flex items-center justify-center" aria-hidden="true">
            <span
              className="flex items-center justify-center
                         w-14 h-14 lg:w-16 lg:h-16 rounded-full
                         bg-white border border-border
                         text-brand-red text-[28px] lg:text-[32px] font-light leading-none
                         shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)]"
            >
              +
            </span>
          </div>
          <div className="md:hidden flex justify-center -my-2" aria-hidden="true">
            <span
              className="flex items-center justify-center
                         w-11 h-11 rounded-full bg-white border border-border
                         text-brand-red text-[22px] font-light leading-none shadow-sm"
            >
              +
            </span>
          </div>

          {/* sokoe Day：現場サポート担当 */}
          <div className="rounded-[8px] border border-brand-red/40 bg-tint-pink/40 p-7 md:p-9">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] text-brand-red mb-3">
              現場は、sokoe Day が
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-ink mb-3">sokoe Day</h3>
            <p className="text-product-orange text-[14px] md:text-[15px] font-semibold leading-[1.7] mb-5">
              現場業務の効率化は、お任せください。
            </p>
            <p className="text-stone text-[14px] md:text-[15px] leading-[1.85] mb-5">
              紙の運用や転記の手間を、現場目線で減らしていきます。 フロア業務と AI
              計画書づくりに専念する設計です。
            </p>
            <ul className="space-y-2.5 text-[13px] md:text-[14px] text-stone">
              <li className="flex items-start gap-2">
                <Check
                  className="shrink-0 w-4 h-4 text-brand-red mt-0.5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>フロア業務の効率化（記録・申し送り・入浴）</span>
              </li>
              <li className="flex items-start gap-2">
                <Check
                  className="shrink-0 w-4 h-4 text-brand-red mt-0.5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>ケアプラン・議事録の AI 自動生成</span>
              </li>
              <li className="flex items-start gap-2">
                <Check
                  className="shrink-0 w-4 h-4 text-brand-red mt-0.5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>4 便 × 6 パターンの半日型運用</span>
              </li>
              <li className="flex items-start gap-2">
                <Check
                  className="shrink-0 w-4 h-4 text-brand-red mt-0.5"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
                <span>体力測定 AI 評価・名刺 OCR</span>
              </li>
            </ul>
          </div>
        </div>

        {/* 結論文（注記ではなく結論として昇格） */}
        <div className="mt-14 md:mt-16 max-w-2xl mx-auto text-center">
          <p className="font-serif text-[20px] md:text-[24px] lg:text-[26px] leading-[1.7] text-ink">
            請求は介護記録ソフトで、現場は sokoe Day で。
            <br className="hidden md:block" />
            ふたつを役割分担して、
            <br className="md:hidden" />
            施設の毎日を整えていきます。
          </p>
          <div className="mx-auto mt-6 h-px w-12 bg-brand-red/40" aria-hidden="true" />
        </div>
      </Container>
    </Section>
  );
}
