import { Breadcrumb } from '@/components/Breadcrumb';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { Section } from '@/components/Section';
import { createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';

const SITE_URL = siteConfig.url;
import { ContactForm } from './ContactForm';

const PAGE_URL = `${SITE_URL}/contact/`;

export const metadata: Metadata = {
  title: 'お問い合わせ ｜ sokoe',
  description:
    '株式会社ソコエへのお問い合わせフォーム。sokoe Day（デイサービス向けアプリ）、sokoe AI Lab（AI コンサルティング）、採用、取材依頼など、ご相談を承ります。担当者より2営業日以内にご連絡いたします。',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'お問い合わせ ｜ sokoe',
    description:
      '株式会社ソコエへのお問い合わせ。sokoe Day / sokoe AI Lab / 採用 / 取材依頼を承ります。',
    url: PAGE_URL,
    siteName: 'sokoe',
    locale: 'ja_JP',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: 'お問い合わせ ｜ sokoe',
          description: '株式会社ソコエへのお問い合わせフォーム。',
          url: PAGE_URL,
          datePublished: '2026-05-12',
          dateModified: '2026-05-12',
        })}
      />
      <Header />
      <main>
        <Breadcrumb items={[{ label: 'お問い合わせ' }]} />

        <PageHero
          label="CONTACT"
          title="お問い合わせ"
          lead="sokoe Day（デイサービス向けアプリ）、sokoe AI Lab（AI コンサルティング）、採用、取材ご依頼など、お気軽にご相談ください。担当者より 2 営業日以内にご返信いたします。"
        />

        <Section spacing="md">
          <Container size="default">
            <div className="grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
              {/* フォーム本体 */}
              <ContactForm />

              {/* サイドの問い合わせガイド */}
              <aside className="space-y-8 md:pt-8">
                <div>
                  <h2 className="text-sm font-medium uppercase tracking-wider text-charcoal-muted">
                    対応時間
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-ink">
                    平日 10時〜18時
                    <br />
                    <span className="text-sm text-charcoal-muted">（土日祝・年末年始除く）</span>
                  </p>
                </div>

                <div>
                  <h2 className="text-sm font-medium uppercase tracking-wider text-charcoal-muted">
                    返信目安
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-ink">通常 2 営業日以内</p>
                </div>

                <div>
                  <h2 className="text-sm font-medium uppercase tracking-wider text-charcoal-muted">
                    直接メール
                  </h2>
                  <p className="mt-2 text-base leading-relaxed text-ink">
                    <a
                      href="mailto:k.tsuchida@phelix-hd.com"
                      className="text-brand-red underline transition-opacity hover:opacity-70"
                    >
                      k.tsuchida@phelix-hd.com
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-sm font-medium uppercase tracking-wider text-charcoal-muted">
                    所在地
                  </h2>
                  <address className="mt-2 text-base not-italic leading-relaxed text-ink">
                    株式会社ソコエ
                    <br />
                    〒532-0033
                    <br />
                    大阪府大阪市淀川区
                    <br />
                    新高3丁目7番17-603号
                  </address>
                </div>

                <div className="border-t border-border-soft pt-6">
                  <p className="text-sm leading-relaxed text-charcoal-muted">
                    お問い合わせいただいた個人情報は、
                    <a
                      href="/privacy/"
                      className="text-brand-red underline transition-opacity hover:opacity-70"
                    >
                      プライバシーポリシー
                    </a>
                    に基づき適切に取り扱います。
                  </p>
                </div>
              </aside>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
