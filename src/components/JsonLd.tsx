import type { Thing, WithContext } from 'schema-dts';

type JsonLdProps = {
  data: WithContext<Thing> | WithContext<Thing>[];
};

/**
 * JSON-LD 構造化データを <script type="application/ld+json"> で出力する
 *
 * Step 4.8 GEO/AEO 対策の中核：
 * - Organization Schema
 * - Person Schema
 * - Article Schema
 * - FAQPage Schema
 * - HowTo Schema
 * - BreadcrumbList Schema
 * など、ページ毎に必要な構造化データを埋め込む
 *
 * @example
 *   <JsonLd data={organizationSchema} />
 *   <JsonLd data={[organizationSchema, personSchema]} />
 */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD 出力に必要
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data, null, 0),
      }}
    />
  );
}
