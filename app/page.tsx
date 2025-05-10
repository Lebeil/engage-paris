import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Engage Paris 2025
              <span className="block text-blue-200 mt-2">
                Le rendez-vous incontournable des <span className="underline decoration-blue-400">leaders du Customer Success</span>
              </span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              25-26 Mars 2025 • Paris Convention Center • En présentiel et streaming
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

      {/* Key Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2">Plus de 20 conférences</h2>
              <p className="text-gray-600">
                Explorez les dernières stratégies et technologies en Customer Success Management avec des experts de renommée internationale.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2">Networking d&apos;élite</h2>
              <p className="text-gray-600">
                Rencontrez plus de 500 directeurs et responsables Customer Success d&apos;entreprises de premier plan.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold mb-2">Ateliers pratiques</h2>
              <p className="text-gray-600">
                Participez à des sessions interactives pour maîtriser les outils et méthodologies Customer Success les plus innovants.
              </p>
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
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Sophie Laurent</h3>
              <p className="text-blue-600">Directrice Customer Success, Salesforce</p>
            </div>

            {/* Speaker 2 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Thomas Moreau</h3>
              <p className="text-blue-600">VP Customer Experience, HubSpot</p>
            </div>

            {/* Speaker 3 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Marie Durand</h3>
              <p className="text-blue-600">Head of Customer Success, Qonto</p>
            </div>

            {/* Speaker 4 */}
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500">Photo</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold">Pierre Martin</h3>
              <p className="text-blue-600">Directeur Relation Client, Doctolib</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/speakers" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              Voir tous les intervenants
            </Link>
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Thématiques 2025</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les sujets qui définiront l&apos;avenir du Customer Success Management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">IA et Automatisation en CSM</h3>
              <p className="text-gray-600">
                Explorez comment l&apos;intelligence artificielle révolutionne le Customer Success en automatisant les tâches répétitives et en prédisant les comportements clients.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Stratégies de rétention client</h3>
              <p className="text-gray-600">
                Apprenez les meilleures pratiques pour réduire le churn et augmenter la fidélité client à l&apos;ère de la concurrence digitale.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Customer Health Score</h3>
              <p className="text-gray-600">
                Maîtrisez les métriques essentielles pour mesurer efficacement la santé de vos relations clients et anticiper leurs besoins.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Voice of Customer</h3>
              <p className="text-gray-600">
                Transformez le feedback client en actions concrètes grâce à des méthodologies innovantes de collecte et d&apos;analyse de données.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Scaling Customer Success</h3>
              <p className="text-gray-600">
                Découvrez comment faire évoluer votre équipe CSM pour soutenir efficacement la croissance de votre entreprise.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">CSM et Revenue Growth</h3>
              <p className="text-gray-600">
                Positionnez votre équipe Customer Success comme un véritable moteur de croissance et de génération de revenus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Newsletter */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
            <p className="text-xl mb-8 text-blue-100">
              Inscrivez-vous à notre newsletter pour être alerté des nouvelles annonces concernant l&apos;événement et recevoir nos contenus exclusifs sur le Customer Success
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Votre email professionnel"
                className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none"
              />
              <button type="submit" className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50">
                S&apos;inscrire
              </button>
            </form>

            <p className="text-sm mt-4 text-blue-200">
              En vous inscrivant, vous acceptez de recevoir des communications d&apos;Engage Paris. Vous pourrez vous désinscrire à tout moment.
            </p>
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ils seront présents</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoignez les leaders du Customer Success issus de ces entreprises
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400 font-medium">Logo</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
