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
  icon: typeof LayoutDashboard;
  title: string;
  description: string;
  isAI?: boolean;
};

type FeatureCategory = {
  category: string;
  features: Feature[];
};

const featureCategories: FeatureCategory[] = [
  {
    category: 'フロア業務',
    features: [
      {
        icon: LayoutDashboard,
        title: 'ダッシュボード',
        description: '今日の業務状況を一目で把握',
      },
      {
        icon: Users,
        title: '利用者管理',
        description: '一元管理＋AIケアプラン生成',
        isAI: true,
      },
      {
        icon: CheckSquare,
        title: '出欠管理',
        description: '配車と完全連動',
      },
      {
        icon: Bath,
        title: '入浴カンバン',
        description: 'ドラッグ&ドロップで進行管理',
      },
      {
        icon: Heart,
        title: 'バイタル記録',
        description: '異常値の自動警告',
      },
      {
        icon: MessageSquare,
        title: '申し送り',
        description: '全員に即共有',
      },
      {
        icon: Trophy,
        title: '体力測定 AI 評価',
        description: '個別の評価コメントを自動生成',
        isAI: true,
      },
    ],
  },
  {
    category: '送迎',
    features: [
      {
        icon: CarFront,
        title: '配車計画',
        description: 'AI最適化＋6パターン便対応',
        isAI: true,
      },
      {
        icon: Smartphone,
        title: 'ドライバー画面',
        description: 'モバイル専用UI',
      },
      {
        icon: Route,
        title: '送迎記録',
        description: '監査用に自動記録',
      },
    ],
  },
  {
    category: '管理者業務',
    features: [
      {
        icon: Briefcase,
        title: '営業管理',
        description: 'ケアマネ営業履歴を一元管理',
      },
      {
        icon: Mic,
        title: '担当者会議 AI',
        description: '音声→議事録を自動生成',
        isAI: true,
      },
      {
        icon: Contact,
        title: '名刺 OCR',
        description: '撮影で自動登録',
        isAI: true,
      },
      {
        icon: ScanLine,
        title: 'ケアプラン AI 生成',
        description: 'OCRで計画書を数分で生成',
        isAI: true,
      },
      {
        icon: Calendar,
        title: 'スケジュール管理',
        description: 'スタッフ・利用者の予定を統合',
      },
      {
        icon: FileText,
        title: '加算管理',
        description: '半日型加算も自動判定',
      },
      {
        icon: ClipboardList,
        title: 'レポート出力',
        description: '監査・実績データを即時出力',
      },
    ],
  },
];

/**
 * Features セクション（17機能グリッド）
 *
 * Step 3-C §7 + Step 4.6 オレンジアクセント：
 * - カテゴリ別（フロア / 送迎 / 管理者）に整理
 * - AI 機能には Sparkles アイコンと「AI」バッジ
 * - lucide-react で統一感のあるアイコン
 *
 * Step 4.8 GEO/AEO：
 * - 機能の名前と説明文に固有名詞を多用
 * - AI が「sokoe Day の機能一覧」として引用しやすい構造
 */
export function DayFeatures() {
  return (
    <Section variant="soft" spacing="lg" bordered>
      <Container>
        <div className="text-center mb-14 md:mb-16">
          <Label className="mb-5">FEATURES</Label>
          <Heading level="h2" className="mb-6">
            デイサービスの全業務を、ひとつのアプリで。
          </Heading>
          <p className="text-stone text-base md:text-lg leading-[1.85] max-w-2xl mx-auto">
            フロア業務・送迎・管理者業務 ── 17の主要機能で、現場を支えます。
          </p>
        </div>

        <div className="space-y-12 md:space-y-16">
          {featureCategories.map((cat) => (
            <div key={cat.category}>
              <h3 className="font-bold text-lg md:text-xl text-ink mb-6 pb-3 border-b border-border">
                {cat.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {cat.features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="bg-white border border-border rounded-[6px] p-6 hover:border-ink transition-colors"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <Icon className="w-6 h-6 text-charcoal" strokeWidth={1.5} />
                        {feature.isAI && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-product-orange bg-tint-orange px-2 py-1 rounded-[3px]">
                            <Sparkles className="w-2.5 h-2.5" strokeWidth={2} />
                            AI
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-base text-ink mb-2 leading-snug">
                        {feature.title}
                      </h4>
                      <p className="text-stone text-[13px] leading-[1.75]">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/day-service/feature/"
            className="inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-brand-red transition-colors group"
          >
            機能一覧の詳細を見る
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
