import type { ReactNode } from 'react';

export type LegalArticle = {
  /** 条番号（"第1条" / "1." など、任意の文字列） */
  number: string;
  /** 条文タイトル */
  title: string;
  /** 本文（プレーンテキストの段落配列、または ReactNode） */
  body: string | string[] | ReactNode;
};

type LegalDocumentProps = {
  articles: LegalArticle[];
};

/**
 * 規約・ポリシーの条文を整然と列挙するレイアウト。
 * 編集メディア風（影なし・薄い罫線・セリフ体の番号）。
 *
 * 使用例：
 *   <LegalDocument articles={[
 *     { number: '第1条', title: '適用', body: '本規約は…' },
 *     { number: '第2条', title: '利用者', body: ['…', '…'] },
 *   ]} />
 */
export function LegalDocument({ articles }: LegalDocumentProps) {
  return (
    <ol className="not-prose space-y-12">
      {articles.map((article) => (
        <li
          key={`${article.number}-${article.title}`}
          className="grid gap-3 border-t border-border-soft pt-8 md:grid-cols-[140px_1fr] md:gap-8"
        >
          <div>
            <p className="font-display text-xl tracking-tight text-charcoal-muted">
              {article.number}
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-medium text-ink">{article.title}</h3>
            <div className="space-y-4 text-base leading-relaxed text-charcoal">
              {renderBody(article.body)}
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}

function renderBody(body: LegalArticle['body']) {
  if (typeof body === 'string') {
    return <p>{body}</p>;
  }
  if (Array.isArray(body)) {
    // 文字列配列なら各要素を段落として描画。
    // 文字列以外（ReactNode 混在）の場合はそのまま並べる。
    return body.map((item, i) => {
      const key = typeof item === 'string' ? `${i}-${item.slice(0, 20)}` : `node-${i}`;
      return typeof item === 'string' ? <p key={key}>{item}</p> : <div key={key}>{item}</div>;
    });
  }
  return body;
}
