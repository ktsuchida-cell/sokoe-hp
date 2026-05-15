import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Label } from '@/components/Label';
import { Section } from '@/components/Section';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const recruitPositions = [
  'ソフトウェアエンジニア',
  'AI エンジニア',
  '介護領域のドメインエキスパート',
  'カスタマーサクセス',
  'マーケティング',
];

/**
 * Recruit セクション（コーポレートTOP内）
 *
 * Step 3-B §5.6 の確定方針より、コーポレートTOPに採用セクションを設置。
 * 詳細は /recruit/ ページに誘導。
 */
export function Recruit() {
  return (
    <Section spacing="lg" bordered>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          <div className="md:col-span-7">
            <Label className="mb-5">JOIN US</Label>
            <Heading level="h2" className="mb-8">
              現場を変える仕事を、
              <br className="hidden md:block" />
              いっしょに。
            </Heading>
            <p className="text-stone text-base md:text-lg leading-[1.85] mb-8">
              医療・介護の現場で、本当に動くソフトウェアと AI を作りたい仲間を探しています。
              現役の介護施設長代理が代表だからこそ、現場に届くプロダクトが作れます。
            </p>

            <Link
              href="/recruit/"
              className="inline-flex items-center gap-2 text-base font-semibold text-ink hover:text-brand-red transition-colors group"
            >
              採用情報を見る
              <ArrowRight
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>

          <div className="md:col-span-5">
            <div className="border border-border rounded-[4px] p-8">
              <p className="text-xs uppercase tracking-[0.15em] text-mid mb-5">Open Positions</p>
              <ul className="space-y-3">
                {recruitPositions.map((position) => (
                  <li key={position} className="flex items-center gap-3 text-charcoal text-[15px]">
                    <span
                      className="w-1 h-1 rounded-full bg-brand-red shrink-0"
                      aria-hidden="true"
                    />
                    {position}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
