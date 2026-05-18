/**
 * sokoe Day の 16 機能の詳細データ。
 * /day-service/feature/ ページで RECORE 風の縦並びブロックとして表示。
 *
 * 画像は後でユーザーが撮影して差し替える前提で、現状は src を空にし
 * プレースホルダーを描画する。差し替え時は `image.src` を埋めるだけで OK。
 */

export type FeatureCategoryId = 'floor' | 'transport' | 'backoffice';

export type FeatureDetail = {
  id: string;
  category: FeatureCategoryId;
  categoryLabel: string;
  /** 機能タイトル直上の 1 行ポジショニング（RECORE で言う "査定のハードルと育成コストを下げる"）*/
  positioning: string;
  title: string;
  /** 3-4 個のメリット（緑チェック付き）。具体動作で書く */
  bullets: string[];
  /** 画像差し替え用。当面 src は未設定（プレースホルダー） */
  image: {
    src?: string;
    alt: string;
  };
  /** AI 機能か */
  isAI?: boolean;
};

export const featureDetails: FeatureDetail[] = [
  // フロア業務 ── 7 機能
  {
    id: 'dashboard',
    category: 'floor',
    categoryLabel: 'フロア業務',
    positioning: '今日の業務状況を、一画面に集約',
    title: 'ダッシュボード',
    bullets: [
      '本日の出欠・バイタル・入浴・申し送りを、1 画面で俯瞰できる',
      'ご利用者ごとの「気になる兆候」が AI で自動ハイライトされる',
      'アプリ起動から数秒で、その日のフロア全体が見える',
    ],
    image: { alt: 'ダッシュボード画面：本日の業務状況をスマホで表示' },
  },
  {
    id: 'user-management',
    category: 'floor',
    categoryLabel: 'フロア業務',
    positioning: '利用者情報を、フロアで一画面に',
    title: '利用者管理',
    bullets: [
      'バイタル・申し送り・写真をご利用者ごとに時系列で確認できる',
      '管理者業務側で生成したケアプランを、現場のスマホから常時参照',
      'ご家族との連絡帳も、アプリから直接送信',
    ],
    image: { alt: '利用者管理画面：ご利用者の詳細プロフィールと履歴' },
  },
  {
    id: 'attendance',
    category: 'floor',
    categoryLabel: 'フロア業務',
    positioning: '出欠と配車を、自動で同期',
    title: '出欠管理',
    bullets: [
      '前日確定の出欠が、自動的に配車計画へ反映される',
      '当日のキャンセル・追加もタップ 1 つで、ドライバー画面に即時通知',
      '実績データは月次レポートへ自動連携',
    ],
    image: { alt: '出欠管理画面：ご利用者の出欠状況をリスト表示' },
  },
  {
    id: 'bathing-kanban',
    category: 'floor',
    categoryLabel: 'フロア業務',
    positioning: 'ドラッグ&ドロップで、入浴を進行管理',
    title: '入浴カンバン',
    bullets: [
      'カンバンボードで「待ち → 入浴中 → 完了」をドラッグして進行管理',
      '個浴・シャワー浴・機械浴をアイコンで識別、混乱を防ぐ',
      '実施記録は自動でバイタル記録と紐付けられる',
    ],
    image: { alt: '入浴カンバン画面：カンバンボードによる入浴進行管理' },
  },
  {
    id: 'vital-records',
    category: 'floor',
    categoryLabel: 'フロア業務',
    positioning: 'バイタルの異常値を、自動で警告',
    title: 'バイタル記録',
    bullets: [
      '体温・血圧・脈拍をタップで記録、過去推移をグラフで表示',
      '個人ごとの基準値からの逸脱を AI が自動検知し、警告を表示',
      'ご家族連絡帳にも自動で反映（任意設定）',
    ],
    image: { alt: 'バイタル記録画面：バイタルサインの記録とグラフ' },
    isAI: true,
  },
  {
    id: 'handover',
    category: 'floor',
    categoryLabel: 'フロア業務',
    positioning: '申し送りを、全員にリアルタイム共有',
    title: '申し送り',
    bullets: [
      '入力した申し送りが、全スタッフのスマホへ即時通知',
      '既読・未読が一目で分かり、抜け漏れを防止',
      '送迎変更・ご家族からの伝言も、同じ画面に集約',
    ],
    image: { alt: '申し送り画面：スタッフ間の情報共有' },
  },
  {
    id: 'fitness-ai',
    category: 'floor',
    categoryLabel: 'フロア業務',
    positioning: '体力測定の評価を、AI が代筆',
    title: '体力測定 AI 評価',
    bullets: [
      'TUG・握力など測定値を入力すると、AI が個別評価コメントを自動生成',
      'ご利用者ごとの改善ポイントを、専門用語を抑えた優しい言葉で表現',
      '賞状 PDF も自動で書き出し、ご家族にお渡しできる',
    ],
    image: { alt: '体力測定 AI 評価画面：測定結果と個別フィードバック' },
    isAI: true,
  },

  // 送迎業務 ── 3 機能
  {
    id: 'route-planning',
    category: 'transport',
    categoryLabel: '送迎業務',
    positioning: 'AI が、最適なルートを計算',
    title: '配車計画',
    bullets: [
      '4 便 × 6 パターンの便構成に、ネイティブ対応',
      '出欠データから自動で最適ルートを生成、運転負荷を分散',
      '当日変更にも、再計算ボタン 1 つで対応',
    ],
    image: { alt: '配車計画画面：地図上に最適ルートを表示' },
    isAI: true,
  },
  {
    id: 'driver-app',
    category: 'transport',
    categoryLabel: '送迎業務',
    positioning: '当日の運転席で、迷わない設計',
    title: 'ドライバー画面',
    bullets: [
      '送迎計画で登録した内容がそのままドライバーアプリへ連携。順番通りに操作すれば進められる',
      '初めて訪問するご自宅も、写真・ドア位置・ご家族連絡先・注意点を事前に参照可能',
      '急な便変更や飛び込みの追加も、その場でアプリ上で対応',
      '乗車完了・出発のボタンで、リアルタイムにフロアへ通知',
    ],
    image: { alt: 'ドライバー画面：訪問先情報と当日運行をスマホで支援' },
  },
  {
    id: 'transport-records',
    category: 'transport',
    categoryLabel: '送迎業務',
    positioning: '送迎記録を、監査用に自動保存',
    title: '送迎記録',
    bullets: [
      '乗車・降車時刻が自動記録され、紙の運行記録簿が不要に',
      '監査対応の様式で、いつでも CSV / PDF 出力',
      '事故・ヒヤリハットの記録も、同じ画面に紐付け',
    ],
    image: { alt: '送迎記録画面：監査対応の送迎ログ' },
  },

  // 管理者業務 ── 7 機能
  {
    id: 'sales-mgmt',
    category: 'backoffice',
    categoryLabel: '管理者業務',
    positioning: 'ケアマネ営業を、属人化から解放',
    title: '営業管理',
    bullets: [
      '担当ケアマネージャーごとの訪問履歴・紹介実績を一元管理',
      '次回フォロー予定をリマインダーで自動通知',
      '人事異動時も、データ引き継ぎがスムーズ',
    ],
    image: { alt: '営業管理画面：ケアマネ営業の活動履歴' },
  },
  {
    id: 'meeting-ai',
    category: 'backoffice',
    categoryLabel: '管理者業務',
    positioning: '担当者会議の議事録を、AI が代筆',
    title: '担当者会議 AI',
    bullets: [
      '録音した音声を、その場で文字起こし + 要約 + 議事録化',
      '発言者を識別し、ケアマネ・ご家族・施設スタッフごとに整理',
      '1 時間の会議が、10 分の見直しで完了',
    ],
    image: { alt: '担当者会議 AI 画面：音声を AI で議事録化' },
    isAI: true,
  },
  {
    id: 'card-ocr',
    category: 'backoffice',
    categoryLabel: '管理者業務',
    positioning: '名刺をスマホで撮るだけ、AI が自動登録',
    title: '名刺 OCR',
    bullets: [
      '撮影で氏名・事業所・連絡先・役職を自動抽出',
      'ケアマネージャーの担当ご利用者リストにも自動で紐付け',
      '名刺管理ソフトの追加導入が不要',
    ],
    image: { alt: '名刺 OCR 画面：名刺の自動登録' },
    isAI: true,
  },
  {
    id: 'careplan-ai',
    category: 'backoffice',
    categoryLabel: '管理者業務',
    positioning: 'ケアプランを、数分で施設様式に',
    title: 'ケアプラン AI 生成',
    bullets: [
      '通所介護計画書を OCR で読み取り、AI が施設様式へ自動変換',
      '個別機能訓練計画書も、過去履歴をベースに AI が下書き',
      '月 20 名で 10 時間の転記業務が、ほぼゼロに',
    ],
    image: { alt: 'ケアプラン AI 生成画面：計画書の自動変換' },
    isAI: true,
  },
  {
    id: 'schedule',
    category: 'backoffice',
    categoryLabel: '管理者業務',
    positioning: '連絡帳・お知らせ・活動レポートを、一元管理',
    title: '配付物管理',
    bullets: [
      'ご家族向けの連絡帳やお知らせ、活動レポートをアプリ内で作成・印刷',
      'どのご利用者さんに何をいつ渡したかを配付履歴で一覧管理、渡し漏れを防ぐ',
      'よく使う配付物はテンプレートとして保存し、毎月の運用に流用',
    ],
    image: { alt: '配付物管理画面：連絡帳・お知らせの作成と配付履歴' },
  },
  {
    id: 'reports',
    category: 'backoffice',
    categoryLabel: '管理者業務',
    positioning: '監査・実績データを、即時に出力',
    title: 'レポート出力',
    bullets: [
      '指定様式の監査資料を、ボタン 1 つで PDF / CSV 出力',
      '請求業務に必要な実績データも、月締めワンクリック',
      '保険者・自治体ごとの提出フォーマットに対応',
    ],
    image: { alt: 'レポート出力画面：監査・実績データの自動出力' },
  },
];

export const featureCategories: {
  id: FeatureCategoryId;
  label: string;
  englishLabel: string;
  lead: string;
}[] = [
  {
    id: 'floor',
    label: 'フロア業務',
    englishLabel: 'FLOOR OPERATIONS',
    lead: 'ご利用者の受け入れから記録・申し送りまで。日々の現場業務を、スマホ 1 台で支える 7 機能。',
  },
  {
    id: 'transport',
    label: '送迎業務',
    englishLabel: 'TRANSPORT',
    lead: '4 便 + 6 パターンの便構成にネイティブ対応。AI 配車計画とドライバー専用 UI で送迎を支える 3 機能。',
  },
  {
    id: 'backoffice',
    label: '管理者業務',
    englishLabel: 'BACK OFFICE',
    lead: 'ケアマネ営業から議事録・名刺データ・レポートまで。バックオフィスを支える 6 機能。',
  },
];
