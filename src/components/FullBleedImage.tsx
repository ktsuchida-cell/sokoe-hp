import Image from 'next/image';

/**
 * Full Bleed Image セクション
 *
 * Step 4 §6.1：コーポレートTOPのヒーロー直下、
 * 自社運営施設（レッツ倶楽部川西能勢口）の現場写真。
 *
 * 編集メディア風、温かい光、スタッフ連携の瞬間。
 * Step 5 §3.1 の修正版プロンプトで生成、WebP変換済み。
 */
export function FullBleedImage() {
  return (
    <section className="relative w-full overflow-hidden bg-soft-bg" aria-label="自社運営施設の風景">
      <div className="relative aspect-[16/9] md:aspect-[16/9] w-full max-h-[80vh]">
        <Image
          src="/images/hero/corporate-facility-1672x941.webp"
          alt="介護スタッフ2人がスマホで業務情報を確認しながら連携している現場の様子"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
