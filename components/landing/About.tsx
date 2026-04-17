import { CircleCheck as CheckCircle2 } from 'lucide-react';

const highlights = [
  'Experts certifiés et pédagogues passionnés',
  'Programmes mis à jour trimestriellement',
  'Accompagnement personnalisé post-formation',
  'Environnement d\'apprentissage moderne et stimulant',
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#f6f3f2]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#83c1fd]/20 rounded-full blur-2xl" />
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAgtFJjLpkRY9ssYQlP0ZTeVAoqlegub2RDwFsiHvXKx3D3q1FFqaoV-Cr0RIvttVTiMna2m9lD9_24F7eoj5ogkQH4vtBmTGfdFrbHotJAMRwVWPgAn5mtKd4qTKh6EIp4JhSsFHmkxrX6z6e_ditYcn4k-UiqkIowDixzJhiUmXG5mYkv2iOBuazLk2OKrrd10I41eBRUwOnev8PpoMRTbZcBVaekSoANudhnpMvAADBEzrlHHPa8hFGIV8BjtYE3AF5i1IJiQ9s"
              alt="Session de formation Imani Academia"
              className="rounded-3xl signature-shadow relative z-10 w-full object-cover aspect-[4/3]"
            />
            {/* <div className="absolute -bottom-6 -right-4 bg-white rounded-2xl px-5 py-4 signature-shadow z-20">
              <div className="text-3xl font-black text-[#00609a]">8+</div>
              <div className="text-xs font-semibold text-[#404751] mt-0.5">Années d&apos;excellence</div>
            </div> */}
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#cee5ff] text-[#004a77] text-[10px] font-bold tracking-wider uppercase">
              À propos
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1c1b1b] leading-tight">
              Imani Academia.{' '}
              <br className="hidden sm:block" />
              Un centre engagé pour la{' '}
              <em className="font-light italic text-[#0679c1]">
                qualité de la formation.
              </em>
            </h2>

            <p className="text-base sm:text-lg text-[#404751] leading-relaxed">
              Nous croyons que l&apos;éducation est le pilier du succès dans l&apos;ère numérique. Notre mission est de combler le fossé entre l&apos;apprentissage théorique et les exigences du marché du travail réel, par une approche pédagogique innovante et centrée sur l&apos;étudiant.
            </p>

            <ul className="space-y-3.5 pt-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  {/* <CheckCircle2 className="w-5 h-5 text-[#00609a] flex-shrink-0 mt-0.5" /> */}
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-[#1c1b1b] font-medium text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* <div className="pt-4">
              <a
                href="#formations"
                className="editorial-gradient text-white px-8 py-3.5 rounded-full font-semibold text-sm hover:brightness-105 transition-all inline-block signature-shadow"
              >
                Nos formations
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}