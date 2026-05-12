import Script from 'next/script';

/**
 * Step 6-G：GA4 + Microsoft Clarity 統合コンポーネント。
 *
 * 環境変数で gated：
 *   - NEXT_PUBLIC_GA_MEASUREMENT_ID（例：G-XXXXXXXXXX）
 *   - NEXT_PUBLIC_CLARITY_PROJECT_ID（例：abcd1234ef）
 * 未設定なら何もレンダリングしない（dev でビルドが通る）。
 *
 * 配置場所：
 *   src/app/layout.tsx の <body> 末尾近辺。
 *   既存の <Footer /> の直後に <Analytics /> を追加してください。
 *
 * 依存パッケージ追加なし（next/script を使用）。
 *
 * 注意：
 *   - GA4 / Clarity の有効化は、本番ドメインでの計測開始時にユーザー（つっちー）が
 *     Vercel の環境変数に登録するタイミングで自動的に有効化される。
 *   - 本番開始前の preview / dev では NEXT_PUBLIC_GA_MEASUREMENT_ID 未設定にして、
 *     計測データを汚さないようにすることを推奨。
 *   - Cookie 同意バナーは Phase 0 では未実装。日本国内向けで GDPR 適用外、
 *     かつ取得情報の透明性はプライバシーポリシーで担保している前提。
 *     法令要件が変わった場合は別途実装。
 */

export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  return (
    <>
      {gaId && <GoogleAnalytics gaId={gaId} />}
      {clarityId && <MicrosoftClarity projectId={clarityId} />}
    </>
  );
}

// ─────────────────────────────────────────────
// Google Analytics 4
// ─────────────────────────────────────────────

function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
          });
        `}
      </Script>
    </>
  );
}

// ─────────────────────────────────────────────
// Microsoft Clarity
// ─────────────────────────────────────────────

function MicrosoftClarity({ projectId }: { projectId: string }) {
  return (
    <Script id="clarity-init" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${projectId}");
      `}
    </Script>
  );
}
