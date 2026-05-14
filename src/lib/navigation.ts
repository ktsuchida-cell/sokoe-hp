/**
 * ヘッダー・フッターのナビゲーション構造
 */

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export const mainNavigation: NavItem[] = [
  {
    label: 'アプリ事業',
    href: '#',
    children: [
      { label: 'sokoe Day（デイサービス向けアプリ）', href: '/day-service/' },
      { label: 'sokoe Facility（介護施設向け）', href: '/facility/' },
      { label: 'sokoe Pharma（薬局向け）', href: '/pharmacy/' },
    ],
  },
  {
    label: 'AIコンサル',
    href: '/consulting/',
  },
  {
    label: '導入事例',
    href: '/case/',
  },
  {
    label: 'コラム',
    href: '#',
    children: [
      { label: 'ガイド', href: '/guide/' },
      { label: 'メディア', href: '/media/' },
      { label: '無料ツール', href: '/tool/' },
      { label: '用語集', href: '/glossary/' },
    ],
  },
  {
    label: '会社情報',
    href: '/about/',
  },
];

export const footerNavigation = {
  services: {
    title: 'サービス',
    items: [
      { label: 'sokoe Day', href: '/day-service/' },
      { label: 'sokoe Facility', href: '/facility/' },
      { label: 'sokoe Pharma', href: '/pharmacy/' },
      { label: 'sokoe AI Lab', href: '/consulting/' },
    ],
  },
  knowledge: {
    title: 'お役立ち',
    items: [
      { label: 'ガイド', href: '/guide/' },
      { label: 'メディア', href: '/media/' },
      { label: '事例', href: '/case/' },
      { label: '無料ツール', href: '/tool/' },
      { label: '用語集', href: '/glossary/' },
    ],
  },
  company: {
    title: '会社情報',
    items: [
      { label: '会社概要', href: '/about/' },
      { label: '代表プロフィール', href: '/about/profile/' },
      { label: 'ニュース', href: '/news/' },
      { label: '採用情報', href: '/recruit/' },
      { label: 'お問い合わせ', href: '/contact/' },
    ],
  },
  legal: {
    title: '規約等',
    items: [
      { label: 'プライバシーポリシー', href: '/privacy/' },
      { label: '利用規約', href: '/terms/' },
      { label: '特定商取引法表記', href: '/legal/' },
    ],
  },
};
