import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * About us セクション（コーポレートTOP）
 *
 * Step 4 + 4.5 E-E-A-T：
 * - 代表（槌田氏）の経験を前面に
 * - 「現役の介護施設長代理」「自社で AI を本番運用」の証明
 * - フルプロフィールページへの導線
 *
 * 編集メディア風の見出し + プロ撮影写真エリア
 */
export function AboutUs() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-start">
          {/* 写真エリア（プロ撮影予定、暫定 placeholder） */}
          <div className="md:col-span-5">
            <div className="aspect-[4/5] bg-gradient-to-br from-soft-bg to-tint-pink/40 border border-border rounded-[4px] overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center px-6">
                  <p className="text-mid text-xs uppercase tracking-[0.2em] mb-3">
                    Portrait placeholder
                  </p>
                  <p className="text-charcoal text-sm">
                    代表 槌田一輝
                    <br />
                    プロ撮影予定
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* テキストエリア */}
          <div className="md:col-span-7">
            <Label className="mb-5">ABOUT US</Label>
            <Heading level="h2" className="mb-8" serif>
              「これ、本来やる必要ないよね」
            </Heading>

            <div className="space-y-5 text-stone text-[15px] md:text-base leading-[1.95] mb-10">
              <p>
                介護施設の管理者として、私はずっと違和感を抱えてきました。
                毎日、現場では「本来の仕事ではないこと」が積み上がっていく。
                紙のバインダー、転記、伝達ミス、終わらない記録──。
              </p>
              <p>
                利用者と家族に向き合う時間が、本来の仕事のはずです。
                その時間を取り戻すために、私たちは自分たちで作り始めました。
              </p>
              <p>
                <strong className="text-ink font-bold">
                  介護施設を運営する会社が、ソフトウェアと AI を作る。
                </strong>
                <br />
                それが sokoe です。
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-8 pb-8 border-b border-border">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-mid mb-1">代表取締役</p>
                <p className="font-bold text-lg text-ink">槌田 一輝</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-mid mb-1">兼任</p>
                <p className="text-[15px] text-charcoal">レッツ倶楽部川西能勢口 施設長代理</p>
              </div>
            </div>

            <Link
              href="/about/founder-message/"
              className="inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-brand-red transition-colors group"
            >
              代表メッセージ全文を読む
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
