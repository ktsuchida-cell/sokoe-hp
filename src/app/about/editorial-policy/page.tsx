import { Breadcrumb } from '@/components/Breadcrumb';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { JsonLd } from '@/components/JsonLd';
import { PageHero } from '@/components/PageHero';
import { ProseSection } from '@/components/ProseSection';
import { Section } from '@/components/Section';
import { createWebPageSchema } from '@/lib/schemas';
import { siteConfig } from '@/lib/siteConfig';
import type { Metadata } from 'next';
import Link from 'next/link';

const SITE_URL = siteConfig.url;
const PAGE_URL = `${SITE_URL}/about/editorial-policy/`;
const PUBLISHED_AT = '2026-05-12';
const UPDATED_AT = '2026-05-12';
const UPDATED_AT_LABEL = '2026年5月12日';

export const metadata: Metadata = {
  title: '編集ポリシー ｜ sokoe',
  description:
    'sokoe コーポレートサイトおよびオウンドメディアの編集ポリシー。記事制作の方針、ファクトチェック体制、YMYL レビューフロー、引用ルール、訂正ポリシーを公開しています。',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: '編集ポリシー ｜ sokoe',
    description:
      'sokoe の編集ポリシー。ヘルスケア領域における情報発信の方針・ファクトチェック・引用ルール。',
    url: PAGE_URL,
    siteName: 'sokoe',
    locale: 'ja_JP',
    type: 'website',
  },
};

const breadcrumbItems = [{ label: '会社情報', href: '/about/' }, { label: '編集ポリシー' }];

export default function EditorialPolicyPage() {
  return (
    <>
      <JsonLd
        data={createWebPageSchema({
          name: '編集ポリシー ｜ sokoe',
          description: 'sokoe コーポレートサイトおよびオウンドメディアの編集ポリシー。',
          url: PAGE_URL,
          datePublished: PUBLISHED_AT,
          dateModified: UPDATED_AT,
          reviewedBy: 'self',
        })}
      />
      <Header />
      <main>
        <Breadcrumb items={breadcrumbItems} />

        <PageHero
          label="EDITORIAL POLICY"
          title="編集ポリシー"
          lead="sokoe コーポレートサイトおよびオウンドメディアにおける、情報発信の基本方針を公開しています。ヘルスケア領域における正確性・信頼性を担保するための運用ルールです。"
          updatedAt={UPDATED_AT_LABEL}
        />

        {/* 1. 基本方針 */}
        <ProseSection eyebrow="01" title="基本方針" containerSize="narrow">
          <p>
            株式会社sokoe（以下「当社」といいます）は、介護・薬局・医療をはじめとするヘルスケア領域で事業を行っています。当社が発信する情報は、読者の健康・安全・経営判断に影響を及ぼす可能性があるため、Google
            の品質評価ガイドラインにおける YMYL（Your Money or Your
            Life）領域に該当することを認識し、以下の方針に基づき記事を制作・公開しています。
          </p>
          <ul>
            <li>
              <strong>正確性</strong>を最優先します。確実に検証できない情報は記事化しません。
            </li>
            <li>
              <strong>一次情報</strong>
              を尊重します。厚生労働省・学会・公的機関・査読論文等の一次ソースを優先します。
            </li>
            <li>
              <strong>現場経験</strong>
              を明示します。机上の論ではなく、自社運営施設での実体験に基づく知見であることを開示します。
            </li>
            <li>
              <strong>独立性</strong>
              を保ちます。広告や商業的動機によって、内容の中立性を損なうことはしません。
            </li>
          </ul>
        </ProseSection>

        {/* 2. 制作体制 */}
        <ProseSection eyebrow="02" title="制作体制" variant="muted" containerSize="narrow">
          <p>当社の記事は、以下のいずれかの体制で制作・公開されます。</p>
          <h3>執筆者</h3>
          <p>
            原則として、株式会社sokoe 代表取締役 槌田一輝（薬学部卒業／レッツ倶楽部川西能勢口
            施設長代理）、または当社が公開している外部執筆者が執筆します。執筆者は記事内に明示します。
          </p>
          <h3>監修・レビュアー</h3>
          <p>
            医療・介護・薬学に関する内容は、薬学部卒業の経歴を持つ代表取締役
            槌田一輝（現役の介護施設長代理）が最終レビューを行います。範囲外の内容（労務・法務・税務等）については、必要に応じて外部の有資格者にレビューを依頼します。
          </p>
          <h3>編集責任</h3>
          <p>最終的な編集責任は、株式会社sokoe が負います。</p>
        </ProseSection>

        {/* 3. ファクトチェック */}
        <ProseSection eyebrow="03" title="ファクトチェック体制" containerSize="narrow">
          <p>記事公開前に、以下の項目を確認します。</p>
          <ol>
            <li>
              <strong>数値・統計の出典確認</strong>
              ：市場規模、削減率、効果数値などは、出典を明示し、引用元の文脈を歪めていないかを確認します。
            </li>
            <li>
              <strong>法令・制度の正確性確認</strong>
              ：介護保険法・薬機法・個人情報保護法等の条文は、当社で記事公開時点の最新版を確認します。
            </li>
            <li>
              <strong>医療・薬学情報の確認</strong>
              ：効能・副作用・服薬方法に関する記述は、添付文書・公的ガイドラインを参照します。当社のサイトは医療行為の代替にはなりません。
            </li>
            <li>
              <strong>一次情報の優先</strong>：他社記事や AI
              生成情報をそのまま引用しません。一次ソースに当たって裏取りします。
            </li>
            <li>
              <strong>機械可読化</strong>
              ：構造化データ（Schema.org）として記事メタデータ（著者・公開日・更新日）を機械可読な形で記述します。
            </li>
          </ol>
        </ProseSection>

        {/* 4. YMYL レビューフロー */}
        <ProseSection
          eyebrow="04"
          title="YMYL レビューフロー"
          variant="muted"
          containerSize="narrow"
          lead="ヘルスケア領域の記事は、以下のステップで多重チェックを行います。"
        >
          <ol>
            <li>
              <strong>取材・執筆</strong>：執筆者が一次情報を収集し、初稿を作成します。
            </li>
            <li>
              <strong>事実確認</strong>
              ：数値・引用元・法令条文を執筆者自身が確認し、出典をすべて記事内に明示します。
            </li>
            <li>
              <strong>有資格者レビュー</strong>
              ：医療・薬学に関する内容は、薬学部卒業の経歴を持つ代表取締役
              槌田一輝がレビューします。必要に応じて、外部の有資格者にレビューを依頼します。
            </li>
            <li>
              <strong>編集</strong>：可読性・構造・SEO 観点を含めて編集します。
            </li>
            <li>
              <strong>公開・モニタリング</strong>
              ：公開後も、関連法令・統計の更新があった場合は速やかに記事を更新し、更新日（dateModified）を反映します。
            </li>
          </ol>
        </ProseSection>

        {/* 5. 引用ルール */}
        <ProseSection eyebrow="05" title="引用ルール" containerSize="narrow">
          <h3>引用元の明示</h3>
          <p>
            外部の情報を参照する場合、本文中または記事末尾に出典を明示します。一次ソース（公的機関・学会・査読論文・公式ドキュメント）を優先します。
          </p>
          <h3>引用の範囲</h3>
          <p>
            著作権法第32条に基づき、必要最小限の範囲で引用し、自社のオリジナルな解釈・分析を主、引用部分を従とします。引用部分は本文と明確に区別します。
          </p>
          <h3>禁止事項</h3>
          <ul>
            <li>他社記事のコピー・実質的な丸写し</li>
            <li>出典を伴わない統計・数値の引用</li>
            <li>AI 生成内容をそのまま公開すること（必ず人間が検証・編集）</li>
            <li>競合他社・特定の事業者を中傷する目的の引用</li>
          </ul>
        </ProseSection>

        {/* 6. 訂正・更新ポリシー */}
        <ProseSection
          eyebrow="06"
          title="訂正・更新ポリシー"
          variant="muted"
          containerSize="narrow"
        >
          <p>公開後の記事について、誤りや陳腐化を確認した場合、以下の対応を行います。</p>
          <ul>
            <li>
              <strong>軽微な修正</strong>
              （誤字・表現の改善等）：本文を修正し、必要に応じて記事末尾に修正履歴を追記します。
            </li>
            <li>
              <strong>事実関係の訂正</strong>
              ：本文を訂正し、訂正内容と訂正日を記事末尾に明示します。dateModified を更新します。
            </li>
            <li>
              <strong>大幅な更新</strong>（法令改正・統計更新等）：本文を更新し、updatedAt
              を反映します。タイトルや構造が変わる場合は、旧 URL からの遷移を確保します。
            </li>
          </ul>
          <h3>訂正のご報告</h3>
          <p>
            記事に事実誤認・誤情報がある場合、{' '}
            <a href="mailto:info@sokoe.co.jp">info@sokoe.co.jp</a>{' '}
            までご一報ください。確認のうえ、速やかに対応します。
          </p>
        </ProseSection>

        {/* 7. AI 利用に関する方針 */}
        <ProseSection eyebrow="07" title="AI 利用に関する方針" containerSize="narrow">
          <p>
            当社は、自社事業の一環として ヘルスケア領域における AI
            の活用を推進しています。記事制作においても、調査補助やドラフト生成に生成 AI
            を利用する場合があります。ただし、以下を厳守します。
          </p>
          <ul>
            <li>
              生成 AI の出力をそのまま公開することはせず、必ず人間が事実確認・編集を行います。
            </li>
            <li>
              医療・薬学・法令に関する記述は、生成 AI のみに依拠せず、一次ソースを参照します。
            </li>
            <li>
              生成 AI
              を主たる執筆者として記事に表示することはありません。著者は常に人間として明示します。
            </li>
          </ul>
        </ProseSection>

        {/* 8. 広告・スポンサー表記 */}
        <ProseSection
          eyebrow="08"
          title="広告・スポンサー表記"
          variant="muted"
          containerSize="narrow"
        >
          <p>
            当社サイトの記事は、原則として自社の事業に関する情報発信を目的としており、第三者からの広告・スポンサー収入による記事化は行っていません。今後、提携・スポンサー記事を掲載する場合は、当該記事の冒頭に明示します。
          </p>
        </ProseSection>

        {/* 9. お問い合わせ */}
        <ProseSection eyebrow="09" title="お問い合わせ" containerSize="narrow">
          <p>
            本ポリシーに関するご質問、記事内容に関するご指摘等は、{' '}
            <a href="mailto:info@sokoe.co.jp">info@sokoe.co.jp</a> までお問い合わせください。
          </p>
          <p className="text-sm text-charcoal-muted">
            最終更新日：{UPDATED_AT_LABEL}
            <br />
            策定：株式会社sokoe
          </p>
        </ProseSection>

        {/* CTA */}
        <Section spacing="md" className="bg-bg-muted">
          <Container size="default">
            <div className="text-center">
              <Heading level="h3" className="mb-4">
                関連ページ
              </Heading>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/about/profile/">
                  <Button variant="secondary">代表プロフィール</Button>
                </Link>
                <Link href="/about/">
                  <Button variant="secondary">会社概要</Button>
                </Link>
                <Link href="/privacy/">
                  <Button variant="ghost">プライバシーポリシー</Button>
                </Link>
              </div>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
