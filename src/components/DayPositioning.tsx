import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { Check } from 'lucide-react';

/**
 * Positioning セクション
 *
 * 介護業界の方が「sokoe Day = カイポケや既存介護記録ソフトの代替」と
 * 誤解しないように、明示的に位置づけを書くセクション。
 *
 * - sokoe Day は介護給付請求機能を提供しない（既存システムをそのまま使う）
 * - sokoe Day は「現場効率化の支援ツール」として、既存システムの隣で動く
 * - 両者は対立ではなく併用関係
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
              国保連請求や基幹データの保管は、これまで使ってきたソフトで継続いただけます。
              sokoe Day は、この領域は担当しません。
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

          {/* sokoe Day：現場サポート担当 */}
          <div className="rounded-[8px] border-[1.5px] border-brand-red bg-white p-7 md:p-9 shadow-sm">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em] text-brand-red mb-3">
              現場は、sokoe Day が
            </p>
            <h3 className="font-serif text-xl md:text-2xl font-bold text-ink mb-3">sokoe Day</h3>
            <p className="text-product-orange text-[14px] md:text-[15px] font-semibold leading-[1.7] mb-5">
              現場業務の効率化は、お任せください。
            </p>
            <p className="text-stone text-[14px] md:text-[15px] leading-[1.85] mb-5">
              紙の運用や転記の手間を、現場目線で減らしていきます。
              フロア業務と AI 計画書づくりに専念する設計です。
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
                <span>4便 × 6パターンの半日型運用</span>
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

        <p className="mt-10 md:mt-12 max-w-2xl mx-auto text-center text-mid text-[13px] md:text-sm leading-[1.85]">
          請求は介護記録ソフトで、現場は sokoe Day で。
          <br className="hidden md:block" />
          ふたつを役割分担して、施設の毎日を整えていきます。
        </p>
      </Container>
    </Section>
  );
}
