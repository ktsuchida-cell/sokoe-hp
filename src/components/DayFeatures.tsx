import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import {
  ArrowRight,
  Bath,
  Briefcase,
  Calendar,
  CarFront,
  CheckSquare,
  ClipboardList,
  Contact,
  FileText,
  Heart,
  LayoutDashboard,
  type LucideIcon,
  MessageSquare,
  Mic,
  Route,
  ScanLine,
  Smartphone,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';
import Link from 'next/link';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  isAI?: boolean;
};

type Metric = {
  /** 棒グラフ表現: 導入前のバー高さ % (0-100) */
  before: number;
  /** 棒グラフ表現: 導入後のバー高さ % (0-100) */
  after: number;
  prefix: string;
  highlight: string;
  suffix: string;
  caption: string;
};

type FeatureCategory = {
  englishLabel: string;
  category: string;
  /** 主に使う人（介護業界では役割分業が明確なので明示する） */
  user: string;
  /** 大タイトル直下の効能サブタイトル（1 行） */
  subtitle: string;
  lead: string;
  metric: Metric;
  features: Feature[];
  /** 現場発タグ：このカテゴリの機能が生まれた自社実証文脈 */
  origin: string;
};

const featureCategories: FeatureCategory[] = [
  {
    englishLabel: 'FLOOR OPERATIONS',
    category: 'フロア業務',
    user: '介護職員・看護師',
    subtitle: '記録から申し送りまで、フロアの手間をまるごと圧縮。',
    lead: '日々の現場業務を、タブレット1枚で効率化。ご利用者の受け入れから記録・申し送りまで、7つの機能で支えます。',
    metric: {
      before: 100,
      after: 48,
      prefix: '現場の記録業務を、',
      highlight: '約 52%',
      suffix: '削減',
      caption: '自社運営施設「レッツ倶楽部川西能勢口」の実証データから試算。',
    },
    features: [
      { icon: LayoutDashboard, title: 'ダッシュボード', description: '今日の業務状況を一目で把握' },
      { icon: Users, title: '利用者管理', description: '一元管理＋AIケアプラン生成', isAI: true },
      { icon: CheckSquare, title: '出欠管理', description: '配車と完全連動' },
      { icon: Bath, title: '入浴カンバン', description: 'ドラッグ&ドロップで進行管理' },
      { icon: Heart, title: 'バイタル記録', description: '異常値の自動警告' },
      { icon: MessageSquare, title: '申し送り', description: '全員に即共有' },
      {
        icon: Trophy,
        title: '体力測定 AI 評価',
        description: '個別の評価コメントを自動生成',
        isAI: true,
      },
    ],
    origin: 'フロアの記録業務は、自社施設「レッツ倶楽部川西能勢口」で介護職員が毎日使う中で設計されました。',
  },
  {
    englishLabel: 'TRANSPORT',
    category: '送迎業務',
    user: 'ドライバー・運行管理者',
    subtitle: '複雑な便構成も、運行と記録を一画面で。',
    lead: '4便 + 6パターンの便構成にネイティブ対応。AI 最適化された配車計画とドライバー専用 UI で、送迎業務を支える3つの機能。',
    metric: {
      before: 25,
      after: 100,
      prefix: '便構成の組み合わせを、',
      highlight: '24 パターン',
      suffix: '対応',
      caption: '半日型・1日型・ハイブリッド型を含む、複雑な運用構成をネイティブ対応。',
    },
    features: [
      { icon: CarFront, title: '配車計画', description: 'AI最適化＋6パターン便対応', isAI: true },
      { icon: Smartphone, title: 'ドライバー画面', description: 'モバイル専用UI' },
      { icon: Route, title: '送迎記録', description: '監査用に自動記録' },
    ],
    origin: '4便構成の送迎を、自社施設のドライバーが現場で運用しながら磨き上げています。',
  },
  {
    englishLabel: 'BACK OFFICE',
    category: '管理者業務',
    user: '施設長・管理者',
    subtitle: 'ケアマネ営業から議事録・加算判定まで、AI で。',
    lead: 'ケアマネ営業から議事録・加算判定・レポートまで。施設運営に必要なバックオフィスを支える7つの機能。',
    metric: {
      before: 100,
      after: 10,
      prefix: 'ケアプラン転記、',
      highlight: '月 10 時間',
      suffix: 'を取り戻す',
      caption: 'OCR + 生成 AI で計画書を数分に。月20名なら 10 時間の業務がほぼゼロに。',
    },
    features: [
      { icon: Briefcase, title: '営業管理', description: 'ケアマネ営業履歴を一元管理' },
      { icon: Mic, title: '担当者会議 AI', description: '音声→議事録を自動生成', isAI: true },
      { icon: Contact, title: '名刺 OCR', description: '撮影で自動登録', isAI: true },
      {
        icon: ScanLine,
        title: 'ケアプラン AI 生成',
        description: 'OCRで計画書を数分で生成',
        isAI: true,
      },
      { icon: Calendar, title: 'スケジュール管理', description: 'スタッフ・利用者の予定を統合' },
      { icon: FileText, title: '加算管理', description: '半日型加算も自動判定' },
      { icon: ClipboardList, title: 'レポート出力', description: '監査・実績データを即時出力' },
    ],
    origin: '代表（現役の施設長代理）が、自施設の管理業務を毎日 sokoe Day で回しながら改善しています。',
  },
];

/**
 * メトリクス棒グラフ（SmartHR「労務管理」の "合計工数 約88%削減" に相当する視覚要素）。
 * 導入前 / 導入後 の 2 本バーを並べて、矢印で変化方向を示す。
 */
function MetricChart({ metric }: { metric: Metric }) {
  return (
    <div className="flex items-end gap-3">
      <div className="flex flex-col items-center">
        <div
          className="w-10 md:w-12 bg-bg-muted rounded-t-[4px]"
          style={{ height: `${metric.before * 0.8}px` }}
          aria-hidden="true"
        />
        <p className="mt-2 text-[11px] text-mid">導入前</p>
      </div>
      <ArrowRight className="w-5 h-5 text-mid mb-7" strokeWidth={1.5} />
      <div className="flex flex-col items-center">
        <div
          className="w-10 md:w-12 bg-product-orange rounded-t-[4px]"
          style={{ height: `${metric.after * 0.8}px` }}
          aria-hidden="true"
        />
        <p className="mt-2 text-[11px] text-mid">導入後</p>
      </div>
    </div>
  );
}

/**
 * Features セクション（SmartHR「サービス」並列展示型に忠実に寄せた中央寄せ縦組み）
 *
 * 各カテゴリブロック：
 *   1. サービス名（大）
 *   2. リード（中央寄せ、2行）
 *   3. 「詳しく見る」ボタン
 *   4. メトリクス棒グラフ + ハイライト数字
 *   5. 機能カード（2 列、横長ボタン風）
 */
export function DayFeatures() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="text-center mb-16 md:mb-24">
          <Label className="mb-5">FEATURES</Label>
          <Heading level="h2" className="mb-6">
            デイサービスの全業務を、ひとつのアプリで。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85] max-w-2xl mx-auto">
            フロア業務・送迎・管理者業務 ── 17の主要機能で、現場を支えます。
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {featureCategories.map((cat) => (
            <article key={cat.category}>
              {/* 上：英語ラベル + 主に使う人バッジ + 大タイトル + 効能サブタイトル */}
              <div className="mb-10 md:mb-12 text-center lg:text-left">
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                    {cat.englishLabel}
                  </p>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-muted px-3 py-1 text-[11px] md:text-xs font-medium text-charcoal">
                    主に使う人：{cat.user}
                  </span>
                </div>
                <Heading
                  level="h3"
                  serif
                  className="!text-[32px] sm:!text-[40px] md:!text-[48px] lg:!text-[56px] !leading-[1.15] mb-4"
                >
                  <span className="text-brand-red">sokoe Day</span>{' '}
                  <span className="text-ink">{cat.category}</span>
                </Heading>
                <p className="text-lg md:text-xl text-charcoal font-medium leading-[1.6] max-w-2xl mx-auto lg:mx-0">
                  {cat.subtitle}
                </p>
              </div>

              {/* 下：左にリード+メトリクス、右に機能+詳しく見る */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                <div className="lg:col-span-5 space-y-10">
                  <p className="text-stone text-[15px] md:text-base leading-[1.85] max-w-xl mx-auto lg:mx-0">
                    {cat.lead}
                  </p>

                  {/* メトリクスビジュアル */}
                  <div>
                    <span className="inline-flex items-center gap-1.5 mb-4 rounded-full bg-product-orange/10 px-3 py-1 text-[11px] md:text-xs font-semibold tracking-[0.05em] text-product-orange">
                      <Sparkles className="w-3 h-3" strokeWidth={2} />
                      現場実証データ
                    </span>
                    <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6">
                      <MetricChart metric={cat.metric} />
                      <div className="text-center sm:text-left flex-1 min-w-0">
                        <p className="font-serif font-bold text-ink leading-tight">
                          <span className="block text-base md:text-lg mb-1">
                            {cat.metric.prefix}
                          </span>
                          <span className="text-product-orange text-[44px] md:text-[56px] leading-none align-middle">
                            {cat.metric.highlight}
                          </span>
                          <span className="text-2xl md:text-3xl ml-1">{cat.metric.suffix}</span>
                        </p>
                        <p className="mt-3 text-[12px] md:text-[13px] text-stone leading-[1.85] max-w-sm mx-auto sm:mx-0">
                          {cat.metric.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cat.features.map((feature) => {
                      const Icon = feature.icon;
                      return (
                        <li key={feature.title}>
                          <Link
                            href="/day-service/feature/"
                            className="group flex items-start gap-4 bg-white border border-border rounded-[6px] p-4 hover:border-ink transition-colors"
                          >
                            <Icon
                              className="shrink-0 w-5 h-5 text-charcoal mt-0.5"
                              strokeWidth={1.5}
                            />
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-bold text-[14px] md:text-[15px] text-ink leading-snug">
                                  {feature.title}
                                </span>
                                {feature.isAI && (
                                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-product-orange bg-tint-orange px-1.5 py-0.5 rounded-[3px]">
                                    <Sparkles className="w-2.5 h-2.5" strokeWidth={2} />
                                    AI
                                  </span>
                                )}
                              </div>
                              <p className="text-stone text-[12px] md:text-[13px] leading-[1.7]">
                                {feature.description}
                              </p>
                            </div>
                            <ArrowRight
                              className="shrink-0 w-4 h-4 text-mid group-hover:text-ink transition-colors mt-1"
                              strokeWidth={1.5}
                            />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  {/* 詳しく見る（機能リスト直下） */}
                  <div className="mt-6 text-center sm:text-left">
                    <Link href="/day-service/feature/" className="inline-block">
                      <Button variant="secondary" size="sm">
                        {cat.category}を詳しく見る →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* 現場発タグ（カテゴリ末尾） */}
              <div className="mt-10 md:mt-12 border-t border-border pt-6">
                <p className="text-[12px] md:text-[13px] text-mid leading-[1.85] flex items-start gap-2">
                  <span className="shrink-0 inline-block mt-0.5 text-brand-red font-bold">●</span>
                  <span>{cat.origin}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <Link
            href="/day-service/feature/"
            className="inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-brand-red transition-colors group"
          >
            17機能の詳細を一覧で見る
            <ArrowRight
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              strokeWidth={1.5}
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
