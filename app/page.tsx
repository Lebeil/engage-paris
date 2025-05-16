import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-primary text-white py-24 overflow-hidden">
        {/* Effet de parallaxe léger avec animation CSS */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-primary opacity-70"></div>
          <div className="absolute inset-0 bg-[url('/images/hero1.jpg')] bg-cover bg-center opacity-30"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <Image
              src="/images/logo_blanc.png"
              alt="Engage Paris"
              width={180}
              height={60}
              className="mx-auto mb-8"
            />
            <h1 className="text-4xl sm:text-6xl font-heading font-bold mb-6">
              Engage Paris 2025
            </h1>
            <p className="text-xl sm:text-2xl mb-4 font-heading italic">
              Le premier événement francophone dédié aux métiers du Customer Success
            </p>
            <div className="flex items-center justify-center my-8">
              <span className="text-2xl font-bold">24 juin 2025</span>
              <span className="mx-4 text-2xl">•</span>
              <span className="text-2xl">Maison.A - VERSO Paris</span>
            </div>

            <div className="bg-secondary/20 backdrop-blur-sm py-3 px-6 rounded-lg inline-block mb-8">
              <span className="text-white font-bold text-xl">ÉVÉNEMENT COMPLET</span>
            </div>

            <div className="slide-up">
              <Link href="/streaming" className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-md text-white hover:bg-white hover:text-primary transition-all duration-300">
                Réserver votre accès au streaming
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Information Streaming Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-secondary text-white rounded-full text-sm font-bold mb-6">ACCÈS STREAMING</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 text-primary">
              Ne manquez pas cet événement incontournable
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Même si l&apos;événement physique est complet, vous pouvez suivre en direct toutes les conférences, tables rondes et interventions depuis notre plateforme de streaming haute qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center slide-up hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Streaming HD</h3>
              <p className="text-gray-600">
                Accédez à une diffusion haute définition de toutes les présentations avec une interface intuitive.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center slide-up hover:transform hover:-translate-y-2 transition-all duration-300" style={{ animationDelay: "0.2s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Chat en direct</h3>
              <p className="text-gray-600">
                Interagissez avec les autres participants et posez vos questions aux intervenants.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 text-center slide-up hover:transform hover:-translate-y-2 transition-all duration-300" style={{ animationDelay: "0.4s" }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 text-primary rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-primary">Replay disponible</h3>
              <p className="text-gray-600">
                Accédez aux enregistrements pendant 30 jours après l&apos;événement pour ne rien manquer.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/streaming" className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white font-bold rounded-md transition-colors duration-300">
              Découvrir l&apos;offre streaming
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Speakers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">INTERVENANTS 2025</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 text-primary">
              Des experts du Customer Success
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Rencontrez virtuellement les leaders qui partagent leur expertise et vision du Customer Success Management
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Speaker 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/speaker1.jpg"
                  alt="Sue Nabeih Moore"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary">Sue Nabeih Moore</h3>
                <p className="text-secondary font-semibold">Customer Experience Manager | Acme</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Experte en expérience client avec plus de 10 ans dans le secteur SaaS
                </p>
              </div>
            </div>

            {/* Speaker 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/speaker2.jpg"
                  alt="Sébastien Brun"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary">Sébastien Brun</h3>
                <p className="text-secondary font-semibold">Director CX | TechProgress</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Pionnier dans l&apos;implémentation de stratégies customer-centric
                </p>
              </div>
            </div>

            {/* Speaker 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/speaker3.jpg"
                  alt="Bérénice Carropo"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary">Bérénice Carropo</h3>
                <p className="text-secondary font-semibold">Head of Customer Success | Nexus</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Spécialiste des stratégies d&apos;onboarding et de fidélisation client
                </p>
              </div>
            </div>

            {/* Speaker 4 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-all duration-300">
              <div className="relative h-60 w-full">
                <Image
                  src="/images/speaker4.jpg"
                  alt="Elliot Ghassia"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-primary">Elliot Ghassia</h3>
                <p className="text-secondary font-semibold">CEO | CXPower</p>
                <p className="mt-3 text-gray-600 text-sm">
                  Entrepreneur et visionnaire dans l&apos;innovation Customer Success
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/speakers" className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white font-bold rounded-md transition-colors duration-300">
              Découvrir tous les intervenants
            </Link>
          </div>
        </div>
      </section>

      {/* Thématiques */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">PROGRAMME 2025</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 text-primary">
              Les thématiques phares
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Découvrez les sujets qui définiront l&apos;avenir du Customer Success Management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">IA et Automatisation en CSM</h3>
              <p className="text-gray-600">
                Explorez comment l&apos;intelligence artificielle révolutionne le Customer Success en automatisant les tâches répétitives et en prédisant les comportements clients.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Stratégies de rétention client</h3>
              <p className="text-gray-600">
                Apprenez les meilleures pratiques pour réduire le churn et augmenter la fidélité client à l&apos;ère de la concurrence digitale.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Customer Health Score</h3>
              <p className="text-gray-600">
                Maîtrisez les métriques essentielles pour mesurer efficacement la santé de vos relations clients et anticiper leurs besoins.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Voice of Customer</h3>
              <p className="text-gray-600">
                Transformez le feedback client en actions concrètes grâce à des méthodologies innovantes de collecte et d&apos;analyse de données.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">Scaling Customer Success</h3>
              <p className="text-gray-600">
                Découvrez comment faire évoluer votre équipe CSM pour soutenir efficacement la croissance de votre entreprise.
              </p>
            </div>

            <div className="bg-white p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary">CSM et Revenue Growth</h3>
              <p className="text-gray-600">
                Positionnez votre équipe Customer Success comme un véritable moteur de croissance et de génération de revenus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Newsletter */}
      <section className="py-24 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center fade-in">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">Restez informé</h2>
            <p className="text-xl mb-8 text-white/90">
              Inscrivez-vous à notre newsletter pour recevoir les dernières actualités et contenus exclusifs sur le Customer Success
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-secondary"
                aria-label="Votre email professionnel"
              />
              <button type="submit" className="px-6 py-3 bg-white text-primary font-bold rounded-md hover:bg-gray-100 transition-colors duration-300">
                S&apos;inscrire
              </button>
            </form>

            <p className="text-sm text-white/80">
              En vous inscrivant, vous acceptez de recevoir des communications d&apos;Engage Paris. Vous pourrez vous désinscrire à tout moment.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">NOS SPONSORS</span>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6 text-primary">
              Ils soutiennent Engage Paris
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { name: "Gainsight", img: "/images/gainsight.png" },
              { name: "Planhat", img: "/images/planhat.png" },
              { name: "MeltingSpot", img: "/images/meltingspot.png" },
              { name: "SuccessChain", img: "/images/successchain.png" },
              { name: "RocketSchool", img: "/images/rocketschool.png" },
              { name: "KareSchool", img: "/images/kareschool.png" },
              { name: "Dust", img: "/images/dust.png" }
            ].map((sponsor) => (
              <div key={sponsor.name} className="bg-white h-32 w-48 rounded-lg shadow-sm p-4 flex items-center justify-center hover:shadow-md transition-all duration-300">
                <Image
                  src={sponsor.img}
                  alt={`Logo ${sponsor.name}`}
                  width={140}
                  height={70}
                  className="max-h-24 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-primary">
              Ne manquez pas cet événement incontournable du Customer Success
            </h2>
            <Link href="/streaming" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-md transition-colors duration-300">
              Réserver votre accès streaming maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
