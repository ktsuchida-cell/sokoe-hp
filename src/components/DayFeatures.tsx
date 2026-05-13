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
  lead: string;
  metric: Metric;
  features: Feature[];
};

const featureCategories: FeatureCategory[] = [
  {
    englishLabel: 'FLOOR OPERATIONS',
    category: 'フロア業務',
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
  },
  {
    englishLabel: 'TRANSPORT',
    category: '送迎業務',
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
  },
  {
    englishLabel: 'BACK OFFICE',
    category: '管理者業務',
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
            <article key={cat.category} className="mx-auto max-w-3xl">
              {/* ヘッダー */}
              <div className="text-center mb-10 md:mb-12">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                  {cat.englishLabel}
                </p>
                <Heading level="h3" serif className="mb-5">
                  <span className="text-brand-red">sokoe Day</span>{' '}
                  <span className="text-ink">{cat.category}</span>
                </Heading>
                <p className="text-stone text-[15px] md:text-base leading-[1.85] mb-7 max-w-xl mx-auto">
                  {cat.lead}
                </p>
                <Link href="/day-service/feature/" className="inline-block">
                  <Button variant="secondary" size="sm">
                    詳しく見る →
                  </Button>
                </Link>
              </div>

              {/* メトリクスビジュアル */}
              <div className="flex flex-col items-center gap-6 mb-10 md:mb-12 md:flex-row md:justify-center md:gap-10">
                <MetricChart metric={cat.metric} />
                <div className="text-center md:text-left">
                  <p className="font-serif text-2xl md:text-3xl font-bold text-ink leading-tight">
                    {cat.metric.prefix}
                    <span className="text-product-orange text-[40px] md:text-[52px] mx-1 align-middle">
                      {cat.metric.highlight}
                    </span>
                    {cat.metric.suffix}
                  </p>
                  <p className="mt-3 text-[13px] md:text-sm text-stone leading-[1.85] max-w-md">
                    {cat.metric.caption}
                  </p>
                </div>
              </div>

              {/* 機能リスト（ボタン風カード） */}
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {cat.features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <li key={feature.title}>
                      <Link
                        href="/day-service/feature/"
                        className="group flex items-center gap-4 bg-white border border-border rounded-[6px] p-4 hover:border-ink transition-colors"
                      >
                        <Icon
                          className="shrink-0 w-5 h-5 text-charcoal"
                          strokeWidth={1.5}
                        />
                        <span className="flex-1 min-w-0 flex items-center gap-2">
                          <span className="font-bold text-[14px] md:text-[15px] text-ink leading-snug">
                            {feature.title}
                          </span>
                          {feature.isAI && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-product-orange bg-tint-orange px-1.5 py-0.5 rounded-[3px]">
                              <Sparkles className="w-2.5 h-2.5" strokeWidth={2} />
                              AI
                            </span>
                          )}
                        </span>
                        <ArrowRight
                          className="shrink-0 w-4 h-4 text-mid group-hover:text-ink transition-colors"
                          strokeWidth={1.5}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
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
