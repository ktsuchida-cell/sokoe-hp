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

type FeatureCategory = {
  englishLabel: string;
  category: string;
  /** 大タイトル直下の効能サブタイトル（1 行） */
  subtitle: string;
  lead: string;
  features: Feature[];
};

const featureCategories: FeatureCategory[] = [
  {
    englishLabel: 'FLOOR OPERATIONS',
    category: 'フロア業務',
    subtitle: '記録から申し送りまで、フロアの手間をまるごと圧縮。',
    lead: 'ご利用者の受け入れ、バイタル記録、入浴・申し送り、体力測定の評価まで。日々の現場業務をスマホ 1 台で完結できるよう、7 つの機能で支えます。',
    features: [
      { icon: LayoutDashboard, title: 'ダッシュボード', description: '今日の業務状況を一目で把握' },
      {
        icon: Users,
        title: '利用者管理',
        description: 'バイタル・申し送り・写真を時系列で確認',
      },
      { icon: CheckSquare, title: '出欠管理', description: '配車と完全連動' },
      { icon: Bath, title: '入浴カンバン', description: 'ドラッグ&ドロップで進行管理' },
      { icon: Heart, title: 'バイタル記録', description: '異常値の自動警告' },
      { icon: MessageSquare, title: '申し送り', description: '全員に即時共有、伝達ミスを防ぐ' },
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
    subtitle: '当日のドライバーに、寄り添った設計。',
    lead: '4 便 + 6 パターンの便構成や AI 配車最適化に対応。ドライバー画面では訪問先の写真・ご家族連絡先・注意点を事前参照できます。送迎計画とアプリの連携で、急な便変更や飛び込みの追加もその場で対応できる、現場発の設計です。',
    features: [
      { icon: CarFront, title: '配車計画', description: 'AI 最適化＋6 パターン便対応', isAI: true },
      {
        icon: Smartphone,
        title: 'ドライバー画面',
        description: '訪問先の写真・連絡先・注意点を参照、急な追加にも対応',
      },
      { icon: Route, title: '送迎記録', description: '監査用に自動記録、当日変更履歴も保存' },
    ],
  },
  {
    englishLabel: 'BACK OFFICE',
    category: '管理者業務',
    subtitle: 'ケアマネ営業から議事録・名刺データまで、AI で。',
    lead: 'ケアマネ営業、担当者会議の議事録、名刺管理、ケアプラン作成、スケジュール、レポート出力まで。施設運営のバックオフィスを AI と効率化機能で支える 6 つの機能。',
    features: [
      { icon: Briefcase, title: '営業管理', description: 'ケアマネ営業履歴を一元管理' },
      { icon: Mic, title: '担当者会議 AI', description: '音声 → 議事録を自動生成', isAI: true },
      {
        icon: Contact,
        title: '名刺 OCR',
        description: '撮影で自動登録、営業履歴に紐付け',
        isAI: true,
      },
      {
        icon: ScanLine,
        title: 'ケアプラン AI 生成',
        description: 'OCR で計画書を数分で生成',
        isAI: true,
      },
      { icon: Calendar, title: 'スケジュール管理', description: 'スタッフ・利用者の予定を統合' },
      { icon: ClipboardList, title: 'レポート出力', description: '監査・実績データを即時出力' },
    ],
  },
];

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
            フロア業務・送迎・管理者業務 ── 16機能で、現場の毎日を支えます。
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {featureCategories.map((cat) => (
            <article key={cat.category}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                {/* 左：ヘッダー（英語ラベル + 大タイトル + subtitle + lead） */}
                <div className="lg:col-span-5">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                    {cat.englishLabel}
                  </p>
                  <Heading
                    level="h3"
                    serif
                    className="!text-[28px] sm:!text-[32px] md:!text-[36px] lg:!text-[40px] !leading-[1.2] mb-4"
                  >
                    <span className="text-brand-red">sokoe Day</span>{' '}
                    <span className="text-ink">{cat.category}</span>
                  </Heading>
                  <p className="text-base md:text-lg text-charcoal font-medium leading-[1.6] mb-5">
                    {cat.subtitle}
                  </p>
                  <p className="text-stone text-[15px] md:text-base leading-[1.85]">{cat.lead}</p>
                </div>

                {/* 右：機能カード + 詳しく見る */}
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
                        {cat.category}の全機能を見る →
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <Link
            href="/day-service/feature/"
            className="inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-brand-red transition-colors group"
          >
            16機能の詳細を一覧で見る
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
