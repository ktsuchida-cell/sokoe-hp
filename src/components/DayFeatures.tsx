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
import Image from 'next/image';
import Link from 'next/link';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  isAI?: boolean;
};

type Metric = {
  value: string;
  label: string;
  caption: string;
};

type FeatureCategory = {
  englishLabel: string;
  category: string;
  lead: string;
  metric: Metric;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    unoptimized?: boolean;
  };
  features: Feature[];
};

const featureCategories: FeatureCategory[] = [
  {
    englishLabel: 'FLOOR OPERATIONS',
    category: 'フロア業務',
    lead: 'ご利用者の受け入れから記録・申し送りまで。日々の現場業務を、タブレット1枚で進める7つの機能。',
    metric: {
      value: '7',
      label: '機能で、フロア業務ぜんぶ',
      caption: 'バインダー・端末・付箋を、タブレット1枚にまとめる設計。',
    },
    image: {
      src: '/images/day/hero-mockup.svg',
      alt: 'sokoe Day のフロア業務ダッシュボード画面',
      width: 1600,
      height: 1100,
      unoptimized: true,
    },
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
    englishLabel: 'TRANSPORT',
    category: '送迎業務',
    lead: '4便 + 6パターンの便構成にネイティブ対応。AI 最適化された配車計画と、ドライバー専用 UI で送迎を支える3つの機能。',
    metric: {
      value: '4便 × 6',
      label: 'パターンの便構成に対応',
      caption: '半日型・1日型・混在運用、いずれの便構成も追加料金なし。',
    },
    image: {
      src: '/images/hero/dayservice-collab-1672x941.webp',
      alt: 'sokoe Day を使ってスタッフが送迎情報を確認するシーン',
      width: 1672,
      height: 941,
    },
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
    englishLabel: 'BACK OFFICE',
    category: '管理者業務',
    lead: 'ケアマネ営業から議事録・加算判定・レポートまで。施設運営に必要なバックオフィスを支える7つの機能。',
    metric: {
      value: '4 × AI',
      label: 'でバックオフィスを自動化',
      caption: '議事録 / 名刺 OCR / ケアプラン生成 / AI 評価 ── 4 つの AI を統合。',
    },
    image: {
      src: '/images/hero/dayservice-ui-mockup-1672x941.webp',
      alt: 'sokoe Day の管理者業務画面',
      width: 1672,
      height: 941,
    },
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
 * Features セクション（SmartHR「サービス」並列展示型に寄せた構成）
 *
 * 各カテゴリブロックの構造：
 *   - 上半: 左カラム（英語ラベル + カテゴリ名 + リード + メトリクスハイライト + 詳細リンク）
 *           右カラム（プロダクト UI モック or 現場シーン画像）
 *   - 下半: 機能カードグリッド（全幅、アイコン + ラベル + AI バッジ + 説明 + 矢印）
 *
 * AI 機能には product-orange の AI バッジ。
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
            <div key={cat.category} className="space-y-10 md:space-y-12">
              {/* 上半：左ヘッダー + 右 UI モック */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                <div className="lg:col-span-5">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                    {cat.englishLabel}
                  </p>
                  <Heading level="h3" serif className="mb-5">
                    {cat.category}
                  </Heading>
                  <p className="text-stone text-[15px] md:text-base leading-[1.85] mb-7">
                    {cat.lead}
                  </p>

                  {/* メトリクスハイライト */}
                  <div className="rounded-[8px] border border-border bg-white px-6 py-5 md:px-7 md:py-6 mb-7">
                    <p className="font-serif text-[44px] md:text-[56px] font-bold text-product-orange leading-none">
                      {cat.metric.value}
                    </p>
                    <p className="mt-2 text-sm md:text-base font-semibold text-ink">
                      {cat.metric.label}
                    </p>
                    <p className="mt-2 text-[13px] md:text-sm text-stone leading-[1.85]">
                      {cat.metric.caption}
                    </p>
                  </div>

                  <Link
                    href="/day-service/feature/"
                    className="inline-flex items-center gap-2 text-sm md:text-base font-semibold text-ink hover:text-brand-red transition-colors group"
                  >
                    {cat.category}の機能を詳しく見る
                    <ArrowRight
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={1.5}
                    />
                  </Link>
                </div>

                <div className="lg:col-span-7">
                  <div className="relative overflow-hidden rounded-[8px] border border-border bg-white">
                    <Image
                      src={cat.image.src}
                      alt={cat.image.alt}
                      width={cat.image.width}
                      height={cat.image.height}
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      unoptimized={cat.image.unoptimized}
                      className="h-auto w-full"
                    />
                  </div>
                </div>
              </div>

              {/* 下半：機能カードグリッド */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                {cat.features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <li
                      key={feature.title}
                      className="group flex items-start gap-4 bg-white border border-border rounded-[6px] p-5 hover:border-ink transition-colors"
                    >
                      <Icon
                        className="shrink-0 w-6 h-6 text-charcoal mt-0.5"
                        strokeWidth={1.5}
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-[15px] md:text-base text-ink leading-snug">
                            {feature.title}
                          </h4>
                          {feature.isAI && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.1em] text-product-orange bg-tint-orange px-1.5 py-0.5 rounded-[3px]">
                              <Sparkles className="w-2.5 h-2.5" strokeWidth={2} />
                              AI
                            </span>
                          )}
                        </div>
                        <p className="text-stone text-[13px] leading-[1.7]">
                          {feature.description}
                        </p>
                      </div>
                      <ArrowRight
                        className="shrink-0 w-4 h-4 text-mid group-hover:text-ink transition-colors mt-1"
                        strokeWidth={1.5}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
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
