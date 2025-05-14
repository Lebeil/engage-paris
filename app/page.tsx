import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 overflow-hidden">
        {/* Vidéo en arrière-plan */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            muted
            loop
            className="object-cover w-full h-full opacity-50"
          >
            <source src="/videos/resume2024.mp4" type="video/mp4" />
          </video>
          {/* Overlay pour assurer la lisibilité du texte */}
          <div className="absolute inset-0 bg-blue-900 bg-opacity-60"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Engage Paris 2025 <span className="block text-blue-200 mt-2">
                Le rendez-vous incontournable des <span className="underline decoration-blue-400">leaders du Customer Success</span>
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              24 Juin 2025 • Maison.A - VERSO Paris • En présentiel et streaming
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/inscription" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg">
                S&apos;inscrire à l&apos;événement
              </Link>
              <Link href="/streaming" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800">
                Accéder au streaming
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Event Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              L&apos;événement Customer Success de l&lsquo;année
            </h2>
            <p className="text-xl text-gray-600">
              Deux jours d&rsquo;immersion au cœur des stratégies et pratiques qui façonnent le Customer Success Manager aujourd&apos;hui et demain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">20+ conférences</h3>
              <p className="text-gray-600">
                Des keynotes inspirantes et des sessions pratiques pour tous les niveaux d&apos;expertise en Customer Success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">500+ participants</h3>
              <p className="text-gray-600">
                Une communauté de professionnels du Customer Success, dirigeants et experts avec qui échanger et networker.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">10+ partenaires</h3>
              <p className="text-gray-600">
                Découvrez les solutions et services innovants proposés par nos partenaires spécialisés en Customer Success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Pourquoi participer ?
            </h2>
            <p className="text-xl text-gray-600">
              Une occasion unique de développer vos compétences, votre réseau et votre carrière dans le Customer Success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Inspiration et innovation</h3>
                  <p className="mt-2 text-gray-600">
                    Découvrez les dernières tendances et innovations qui façonnent l&apos;avenir du Customer Success Manager.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Networking de qualité</h3>
                  <p className="mt-2 text-gray-600">
                    Échangez avec des professionnels partageant les mêmes intérêts et développez votre réseau dans un cadre convivial.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Compétences pratiques</h3>
                  <p className="mt-2 text-gray-600">
                    Participez à des ateliers pratiques animés par des experts et repartez avec des outils concrets à appliquer immédiatement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Croissance professionnelle</h3>
                  <p className="mt-2 text-gray-600">
                    Développez votre carrière et positionnez-vous comme un professionnel à la pointe du Customer Success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Aperçu du programme
            </h2>
            <p className="text-xl text-gray-600">
              Un programme riche et diversifié pour répondre aux besoins de tous les professionnels du Customer Success
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
                <h3 className="text-lg font-semibold text-blue-800">24 Juin 2025</h3>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 text-gray-500 font-medium">08:30</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Accueil des participants 🥐</h4>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 text-gray-500 font-medium">09:15</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Session d&apos;ouverture</h4>
                    <p className="text-gray-600 text-sm">Conférenciers:

                      Sue Nabeth Moore
                      Co-fondatrice - Success Chain & Engage Paris

                      Justine Joliveau
                      Co-fondatrice - Engage Paris

                      Valentin Lejot
                      Engage Paris

                      Gabrièle de Lamaze
                      La fabrique CS</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 text-gray-500 font-medium">09:40</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI au coeur du CS</h4>
                    <p className="text-gray-600 text-sm">L&apos;Intelligence Artificielle, gadget ou alliée indispensable du Customer Success ? Plongeons ensemble dans le sujet, ses promesses et ses limites, et explorons comment l&apos;IA transforme nos interactions clients, automatise nos tâches, améliore la priorisation et devance les besoins. Grâce aux outils tels que la Machine Learning, Modèle de Langage (LLM), analyse de données... découvrez les cas d’usages de l’IA pour des expériences client efficaces et mémorables. Préparez-vous à une session riche en exemples concrets pour comprendre comment faire de l&apos;IA un véritable levier de performance de notre métier CS.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-20 text-gray-500 font-medium">11:00</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Aligner CS & Produit : les clés d&apos;une collaboration win-win pour faire de la voix du client une réalité produit</h4>
                    <p className="text-gray-600 text-sm">Aligner CS & Produit, c’est bien plus qu’une question de process : c’est un état d’esprit et une dynamique à cultiver. Trop souvent, le manque de ...</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 text-sm mb-4">Programme détaillé disponible. Sous réserve de modifications.</p>
              <Link href="/inscription" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Voir le programme complet
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Intervenants d&apos;exception</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des leaders du Customer Success partagent leur vision et expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Speaker 1 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/images/speaker1.jpg"
                  alt="Sue Nabeih Moore"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sue Nabeih Moore</h3>
              <p className="text-blue-600">Customer Experience Manager | Acme</p>
            </div>

            {/* Speaker 2 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/images/speaker2.jpg"
                  alt="Sébastien Brun"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sébastien Brun</h3>
              <p className="text-blue-600">Director CX | TechProgress</p>
            </div>

            {/* Speaker 3 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/images/speaker3.jpg"
                  alt="Bérénice Carropo"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Bérénice Carropo</h3>
              <p className="text-blue-600">Head of Customer Success | Nexus</p>
            </div>

            {/* Speaker 4 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/images/speaker4.jpg"
                  alt="Elliot Ghassia"
                  width={160}
                  height={160}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Elliot Ghassia</h3>
              <p className="text-blue-600">CEO | CXPower</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/speakers" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Voir tous les intervenants
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Ce qu&apos;en disent les participants
            </h2>
            <p className="text-xl text-gray-600">
              Témoignages des éditions précédentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 font-medium text-sm">JD</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Julie Dufour</h3>
                  <p className="text-sm text-gray-500">Head of CS, Scale-up</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &ldquo;Une expérience enrichissante qui m&lsquo;a permis de revenir avec des idées concrètes et un réseau de professionnels partageant les mêmes défis.&ldquo;
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 font-medium text-sm">ML</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Marc Leroy</h3>
                  <p className="text-sm text-gray-500">Directeur CS, Enterprise</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Le niveau des interventions était remarquable. J&#39;ai pu échanger avec des pairs sur nos problématiques communes et découvrir de nouvelles approches.&quot;
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-500 font-medium text-sm">SB</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">Sarah Benali</h3>
                  <p className="text-sm text-gray-500">CS Manager, Startup</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;Un événement incontournable pour tous les professionnels du Customer Success. La qualité des échanges et des contenus était exceptionnelle.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Nos partenaires
            </h2>
            <p className="text-xl text-gray-600">
              Ils soutiennent Engage Paris 2025
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { name: "Gainsight", img: "/images/gainsight.png" },
              { name: "Planhat", img: "/images/planhat.png" },
              { name: "MeltingSpot", img: "/images/meltingspot.png" },
              { name: "SuccessChain", img: "/images/successchain.png" },
              { name: "RocketSchool", img: "/images/rocketschool.png" },
              { name: "KareSchool", img: "/images/kareschool.png" },
              { name: "Dust", img: "/images/dust.png" }
            ].map((company) => (
              <div key={company.name} className="h-24 w-44 bg-white rounded shadow-md flex items-center justify-center p-2">
                <Image
                  src={company.img}
                  alt={`Logo ${company.name}`}
                  width={200}
                  height={100}
                  className="max-h-20 max-w-40 object-contain"
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              Devenir partenaire →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Prêt à rejoindre la communauté Customer Success ?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Ne manquez pas cet événement majeur de l&lsquo;année 2025 pour les professionnels du Customer Success
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/inscription" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg">
                S&apos;inscrire à l&apos;événement
              </Link>
              <Link href="/streaming" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800">
                Accéder au streaming
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
