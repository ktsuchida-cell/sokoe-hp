import type { Metadata } from 'next';
import { siteConfig } from './siteConfig';

const SITE_URL = siteConfig.url;

/**
 * SEO メタデータの中央集約（Step 6-G）。
 *
 * 目的：
 *   - 全 13 ページの title / description / canonical を一覧で管理
 *   - 重複検出を容易にする
 *   - 共通の OG / Twitter Card 設定を一元化
 *
 * 既存ページの metadata 定義は破壊的変更を避けるため、ここの定数を
 * "参照可能" にとどめる。将来 buildMetadata() ヘルパーへの置換は段階的に。
 */

// ─────────────────────────────────────────────
// サイト共通定数
// ─────────────────────────────────────────────

export const SITE_NAME = 'sokoe' as const;
export const SITE_TAGLINE = '現場を、本来の仕事に戻す。' as const;
export const SITE_DESCRIPTION_DEFAULT =
  '株式会社sokoe は、介護施設を運営する会社が、医療・介護・福祉領域のソフトウェアと AI コンサルティングを提供する会社です。デイサービス向けアプリ sokoe Day、医療・介護・福祉 AI コンサルティング sokoe AI Lab を展開。' as const;

// OG 画像（共通）。各ページで個別指定がない場合のフォールバック。
export const SITE_OG_IMAGE = `${SITE_URL}/og/default.png` as const;

// ─────────────────────────────────────────────
// 全 13 ページの SEO 定数
// ─────────────────────────────────────────────

export const PAGE_SEO = {
  home: {
    path: '/',
    title: 'sokoe｜現場を、本来の仕事に戻す。',
    description:
      '株式会社sokoe ── 介護施設を運営する会社が、医療・介護・福祉領域のソフトウェアと AI コンサルティングを提供します。デイサービス向けアプリ「sokoe Day」、医療・介護・福祉 AI コンサルティング「sokoe AI Lab」。',
    ogType: 'website' as const,
  },

  dayService: {
    path: '/day-service/',
    title: 'sokoe Day｜デイサービス向けアプリ（1日型・半日型・ハイブリッド型）',
    description:
      '1日型・半日型・ハイブリッド型のデイサービスにネイティブ対応するアプリ。送迎4便構成・ケアプラン AI 自動生成・体力測定 AI・名刺 OCR ほか。自社運営の介護施設で本番運用しながら磨いているプロダクトです。',
    ogType: 'website' as const,
  },

  consulting: {
    path: '/consulting/',
    title: 'sokoe AI Lab｜医療・介護・福祉 AI コンサルティング',
    description:
      '医療・介護・福祉領域に特化した AI コンサルティング。戦略策定／導入支援／研修／顧問契約の4形態で、現場で動く AI 導入を支援します。介護施設を自社運営しながらの実装経験を、机上の助言ではなく現場のリアルとして提供。',
    ogType: 'website' as const,
  },

  about: {
    path: '/about/',
    title: '会社概要 ｜ sokoe',
    description:
      '株式会社sokoe の会社概要。介護施設を運営する会社が、医療・介護・福祉領域のソフトウェアと AI コンサルティングを提供。本社：大阪府大阪市淀川区。代表取締役 槌田一輝（レッツ倶楽部川西能勢口 施設長代理／株式会社ピースファーマシー 在籍）。',
    ogType: 'website' as const,
  },

  profile: {
    path: '/about/profile/',
    title: '代表プロフィール ｜ 槌田一輝 ｜ sokoe',
    description:
      '株式会社sokoe 代表取締役 槌田一輝のプロフィール。薬学部卒業後、株式会社ピースファーマシーで薬局運営に携わり、現在は同社運営のレッツ倶楽部川西能勢口（兵庫県川西市・1日型デイサービス）施設長代理を兼任。2026年5月に sokoe を設立。',
    ogType: 'profile' as const,
  },

  founderMessage: {
    path: '/about/founder-message/',
    title: 'これ、本来やる必要ないよね ｜ 代表メッセージ ｜ sokoe',
    description:
      '「これ、本来やる必要ないよね」── 株式会社sokoe 代表取締役 槌田一輝が、介護現場の違和感、薬学・IT・薬局・介護を横断したキャリア、自社運営施設で AI を本番運用するまでの経緯を語ります。',
    ogType: 'article' as const,
  },

  editorialPolicy: {
    path: '/about/editorial-policy/',
    title: '編集ポリシー ｜ sokoe',
    description:
      'sokoe コーポレートサイトおよびオウンドメディアの編集ポリシー。記事制作の方針、ファクトチェック体制、YMYL レビューフロー、引用ルール、訂正ポリシーを公開しています。',
    ogType: 'website' as const,
  },

  privacy: {
    path: '/privacy/',
    title: 'プライバシーポリシー ｜ sokoe',
    description:
      'sokoe コーポレートサイトのプライバシーポリシー。個人情報保護法に基づき、当社が取得する個人情報の取扱い、利用目的、第三者提供、Cookie の利用について定めています。',
    ogType: 'website' as const,
  },

  terms: {
    path: '/terms/',
    title: '利用規約 ｜ sokoe',
    description:
      'sokoe コーポレートサイトの利用規約。本サイトの利用条件、著作権、禁止事項、免責事項、準拠法等を定めています。',
    ogType: 'website' as const,
  },

  legal: {
    path: '/legal/',
    title: '特定商取引法に基づく表記 ｜ sokoe',
    description:
      '特定商取引法に基づく表記。販売事業者、所在地、連絡先、価格、支払方法、引渡時期、解約条件等を記載しています。',
    ogType: 'website' as const,
  },

  disclaimer: {
    path: '/disclaimer/',
    title: '免責事項 ｜ sokoe',
    description:
      'sokoe コーポレートサイトの免責事項。掲載情報の正確性、医療・介護関連情報、外部リンク等に関する免責を定めています。',
    ogType: 'website' as const,
  },

  contact: {
    path: '/contact/',
    title: 'お問い合わせ ｜ sokoe',
    description:
      '株式会社sokoe へのお問い合わせフォーム。sokoe Day（デイサービス向けアプリ）、sokoe AI Lab（AI コンサルティング）、採用、取材依頼など、ご相談を承ります。担当者より2営業日以内にご連絡いたします。',
    ogType: 'website' as const,
  },

  recruit: {
    path: '/recruit/',
    title: '採用情報 ｜ sokoe',
    description:
      '株式会社sokoe の採用情報。「現場を、本来の仕事に戻す」をミッションに、医療・介護・福祉領域でソフトウェアと AI を作る仲間を募集しています。まずはカジュアル面談から、お気軽にどうぞ。',
    ogType: 'website' as const,
  },
} as const;

// ─────────────────────────────────────────────
// メタデータビルダー（推奨ヘルパー）
// ─────────────────────────────────────────────

type PageSEOKey = keyof typeof PAGE_SEO;

/**
 * 既存ページの metadata を統一的に組み立てるヘルパー。
 * 将来、既存ページが順次これに乗り換えていく想定。
 *
 * 使用例：
 *   export const metadata: Metadata = buildPageMetadata('about');
 */
export function buildPageMetadata(key: PageSEOKey): Metadata {
  const seo = PAGE_SEO[key];
  const url = `${SITE_URL}${seo.path}`;
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: url },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: SITE_NAME,
      locale: 'ja_JP',
      type: seo.ogType,
      images: [
        {
          url: SITE_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [SITE_OG_IMAGE],
    },
  };
}

// ─────────────────────────────────────────────
// 重複検出ユーティリティ（CI / 検証用）
// ─────────────────────────────────────────────

/**
 * 全ページの title / description が重複していないかを検証する。
 * 同一タイトル・同一説明は SEO 上のペナルティ対象。
 *
 * 使用例（CI / Node スクリプト）：
 *   const dupes = detectDuplicateSeo();
 *   if (dupes.length > 0) throw new Error(JSON.stringify(dupes));
 */
export function detectDuplicateSeo(): Array<{
  field: 'title' | 'description';
  value: string;
  paths: string[];
}> {
  const titleMap = new Map<string, string[]>();
  const descMap = new Map<string, string[]>();

  for (const seo of Object.values(PAGE_SEO)) {
    titleMap.set(seo.title, [...(titleMap.get(seo.title) ?? []), seo.path]);
    descMap.set(seo.description, [...(descMap.get(seo.description) ?? []), seo.path]);
  }

  const results: ReturnType<typeof detectDuplicateSeo> = [];
  for (const [value, paths] of titleMap) {
    if (paths.length > 1) results.push({ field: 'title', value, paths });
  }
  for (const [value, paths] of descMap) {
    if (paths.length > 1) results.push({ field: 'description', value, paths });
  }
  return results;
}
