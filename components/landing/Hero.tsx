import { ArrowRight, Play } from 'lucide-react';

const stats = [
  { value: '2 000+', label: 'Étudiants formés' },
  { value: '95%', label: 'Taux de satisfaction' },
  { value: '8 ans', label: "D'expertise" },
];

export default function Hero() {
  return (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-8 overflow-hidden bg-[#fcf9f8]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#cfe5ff] text-[#004a78] text-xs font-bold tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00609a] animate-pulse" />
              Centre de Formation Premium
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
              <a
                href="#tarifs"
                className="editorial-gradient text-white px-8 py-4 rounded-full font-bold text-base signature-shadow hover:brightness-105 active:scale-95 transition-all duration-200 text-center"
              >
                Commencer maintenant
              </a>
              <a
                href="#formations"
                className="flex items-center justify-center gap-2.5 bg-[#f6f3f2] text-[#1c1b1b] px-8 py-4 rounded-full font-semibold text-base hover:bg-[#eae7e7] transition-colors"
              >
                <Play className="w-4 h-4 text-[#00609a] fill-[#00609a]" />
                Découvrir les formations
              </a>
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
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Étudiants en formation"
                className="w-full aspect-[4/5] object-cover rounded-[2rem_5rem_2rem_2rem] signature-shadow"
              />
              <img
                src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Formation informatique"
                className="w-full aspect-square object-cover rounded-full signature-shadow"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img
                src="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Apprenante concentrée"
                className="w-full aspect-square object-cover rounded-full signature-shadow"
              />
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Équipe professionnelle"
                className="w-full aspect-[4/5] object-cover rounded-[5rem_2rem_2rem_2rem] signature-shadow"
              />
            </div>

            <div className="absolute -z-10 bottom-0 right-0 w-72 h-72 bg-[#83c1fd]/15 rounded-full blur-3xl" />
            <div className="absolute -z-10 top-8 left-8 w-40 h-40 bg-[#cfe5ff]/30 rounded-full blur-2xl" />

            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-5 py-3 signature-shadow flex items-center gap-3 min-w-[200px]">
              <div className="w-10 h-10 rounded-xl editorial-gradient flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#1c1b1b]">Prochain cours</div>
                <div className="text-xs text-[#00609a] font-semibold">Lundi 09h00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}