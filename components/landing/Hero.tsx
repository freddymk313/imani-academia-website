import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const stats = [
  { value: '50+', label: 'Étudiants formés' },
  { value: '95%', label: 'Taux de satisfaction' },
  { value: '2 ans', label: "D'expertise" },
];

export default function Hero() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-8 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cfe5ff] text-[#004a78] text-[10px] font-bold tracking-wider uppercase">
              {/* <span className="w-1.5 h-1.5 rounded-full bg-[#00609a] animate-pulse" /> */}
              Centre de Formation
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#001d34] leading-[1.08] tracking-tight">
              Maîtrisez{' '}
              <span className="text-[#00609a]">l&apos;Anglais</span>{' '}
              &amp;{' '}
              <span className="text-[#00609a]">l&apos;Informatique</span>{' '}
              avec{' '}
              <span className="italic font-light">Imani Academia</span>
            </h1>

            <p className="text-base sm:text-lg text-[#404751] max-w-xl leading-relaxed">
              Développez des compétences de classe mondiale grâce à nos programmes certifiants conçus par des experts. Rejoignez une communauté d&apos;apprenants passionnés.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link
                href="#tarifs"
                className="bg-primary text-white px-8 py-3 rounded-full font-bold text-sm transition-all duration-200 text-center"
              >
                Commencer maintenant
              </Link>
              <Link
                href="#formations"
                className="flex items-center justify-center gap-2.5 bg-[#f6f3f2] text-[#1c1b1b] px-8 py-3 rounded-full font-semibold text-sm hover:bg-[#eae7e7] transition-colors"
              >
                <Play className="w-4 h-4 text-[#00609a] fill-[#00609a]" />
                Découvrir les formations
              </Link>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-[#00609a]">{stat.value}</div>
                  <div className="text-xs text-[#404751] font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDim8qgayAjNmcvZJE61oYoexCsPhp9eDVM3cf1J-CIlbZzzQu9ZbcF7epXzhOR_U3zt74DA5eotjq_YRd87_2TB79jo16neUYFP8hk_BdtW_TBbcobphd-JN6z0U9wS5ICdSXqdtfdZ9kNSsWNIk9CeY1EH1N0wLmMrZ1v4Qdv9LiWpI7-5KQFWV2MORXmm6-zGMePeDJSp-XvFR_qbpNhGQ-Fv-ivVVul9VOlCMtyfE7j9j0USZbAhRVcB3DooIPminjKpsv4A_Z-"
                alt="Étudiants en formation"
                className="w-full aspect-[4/5] object-cover rounded-[2rem_5rem_2rem_2rem] signature-shadow"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqulqSorI3A0bJ-ym26y3itrLHC5n51ykJnqQWzAX1DHdEgk3lR17qTiKuaaBRv0MmOZD78pQPsyZwAl64kqK94r9jI4_2x3HIve8rpUlPzzca4JkBuMWElvoH2glAScv6WtQN-vu-5L1V5wyHeZDABGiadLEuIrMsLELCXU9OvUOcerY008xyR1bjOBBlqqoSiBMC9JWErtMTzISp3JgKcaeJhLrpN6eWo0r3aWVfnFbsfYBAsZQT5iPk5wmZ-NOODrcOef1nFfYK"
                alt="Formation informatique"
                className="w-full aspect-square object-cover rounded-full signature-shadow"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANaJt09kSeX4ttR2W_TPugZKopVAIEgXmW66tV38ywYIqxtlDmdDm7fNLABpVs8qFTJCJn4Sj7AX7bdUzWJ3iWXsIUUdbnOEgDibBCZb-wVUlh0H50VtP_bpNIBatEkAzD02AjM75UFQaOHFpxtA0Il0w-qYLVLUNvQ65jDEBdeC88hod1-rQI3PRmOM2uyRzynX3XiY9_4RxGEUqQVMrw-TajAa-BO4kBwi_e37wPko2_rGX9LeqHNBFEOgldvBPCrkoQp4rthAwf"
                alt="Apprenante concentrée"
                className="w-full aspect-square object-cover rounded-full signature-shadow"
              />
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKQ9lm8HDAvR_l494n9b0yJJBYJhUX4AMzTaE-usbCHMJspg3yPRZlxDWIZ8OhXXpHAriyEWwjp63pNmMM9ciravDxjanGuMnHTZwnnuac3AMR7tOhKtrf7qVXsq2B4DG5jscvblZzYVhAYQcK8PWYFvhSrDYP1oUQuDHpEGECJgja70iUI5oZTKu0rdaovrjdjWEuh_7up_KTmP66YcBomOEQ11Pagnrr46LVgl28XVL_xzlkacPfOrCk3nHfdSmQJUOlNr1a4qun"
                alt="Équipe professionnelle"
                className="w-full aspect-[4/5] object-cover rounded-[5rem_2rem_2rem_2rem] signature-shadow"
              />
            </div>

            <div className="absolute -z-10 bottom-0 right-0 w-72 h-72 bg-[#83c1fd]/15 rounded-full blur-3xl" />
            <div className="absolute -z-10 top-8 left-8 w-40 h-40 bg-[#cfe5ff]/30 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}