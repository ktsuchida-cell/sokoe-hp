import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import Image from 'next/image';
import Link from 'next/link';

/**
 * sokoe Day LP の中間 CTA
 *
 * Solution → Positioning の間に挿入し、共感 → 解決策提示が済んだ温度
 * 50-55°C の読者に、2 つの導線を提示する：
 *   - 主：お問い合わせ（直接相談）
 *   - 従：料金を確認する（#pricing アンカーへジャンプ）
 *
 * 視覚言語：
 *   - 背景に「ノート + ペン + デスク」の Unsplash 画像（Clay Banks 撮影、
 *     人感なし、Unsplash License）を配置
 *   - 上にクリーム色オーバーレイ（tint-orange/85）でテキスト可読性を確保
 *   - LastCTA（オレンジベタ）との差別化で、こちらは柔らかい暖色の現場感
 */
export function DayMidCTA() {
  return (
    <section
      className="relative isolate overflow-hidden py-20 md:py-24"
      aria-label="sokoe Day 中間 CTA"
    >
      {/* 背景画像 + クリームオーバーレイ */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/midcta/desk-notebook.jpg"
          alt=""
          fill
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-tint-orange/85 backdrop-blur-[1px]"
          aria-hidden="true"
        />
      </div>

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Heading level="h3" serif className="mb-6">
            気になった方は、
            <br className="hidden md:block" />
            こちらからどうぞ。
          </Heading>

          <p className="text-stone text-base md:text-lg leading-[1.85] mb-10">
            直接ご相談いただくか、
            <br className="hidden md:block" />
            まずは費用感をご確認いただけます。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/?type=sokoe-day">
              <Button variant="primary" size="lg">
                お問い合わせ
              </Button>
            </Link>
            <Link href="#pricing">
              <Button variant="secondary" size="lg">
                料金を確認する →
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
