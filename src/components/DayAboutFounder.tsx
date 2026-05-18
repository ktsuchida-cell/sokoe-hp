import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * About Founder セクション（sokoe Day LP内）
 *
 * Step 3-C §15 + Step 4.7 E-E-A-T：
 * - 代表（槌田氏）の経歴を明示
 * - 「現場で AI を使い続けてきた」Experience 訴求
 * - YMYL 領域での権威性確立
 */
export function DayAboutFounder() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 md:mb-14">
            <Label className="mb-5">ABOUT FOUNDER</Label>
            <Heading level="h2" serif className="mb-6">
              つくっているのは、
              <br className="hidden md:block" />
              現役の介護施設長代理。
            </Heading>
          </div>

          <div className="bg-off-white border border-border rounded-[6px] p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-start">
              {/* 左：プロフィール写真 placeholder */}
              <div className="shrink-0 mx-auto md:mx-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-tint-pink to-soft-bg border border-border overflow-hidden flex items-center justify-center">
                  <span className="text-mid text-xs uppercase tracking-[0.15em]">Portrait</span>
                </div>
              </div>

              {/* 右：プロフィール情報 */}
              <div className="flex-1">
                <p className="text-mid text-xs uppercase tracking-[0.15em] mb-2">CEO / FOUNDER</p>
                <h3 className="font-bold text-2xl md:text-3xl text-ink mb-2">槌田 一輝</h3>
                <p className="text-stone text-sm mb-6 leading-[1.85]">
                  株式会社ソコエ 代表取締役 / レッツ倶楽部川西能勢口 施設長代理 /
                  株式会社ピースファーマシー 在籍
                </p>

                <p className="text-charcoal text-[15px] md:text-base leading-[1.95] mb-6">
                  薬学部卒業後、株式会社ピースファーマシーで薬局運営に携わり、同社運営の1日型デイサービス施設長代理を経て、株式会社ソコエ
                  を創業。 「介護施設を運営する会社が、ソフトウェアと AI を作る」をコンセプトに、
                  自社施設でプロダクトを毎日使いながら、現場で動くものだけを提供しています。
                </p>

                <Link
                  href="/about/founder-message/"
                  className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-ink hover:text-brand-red transition-colors group"
                >
                  代表メッセージ全文を読む
                  <ArrowRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
