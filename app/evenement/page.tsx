import Link from 'next/link';

export default function Evenement() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-blue-700 text-white py-20">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 bg-blue-800 bg-opacity-50 text-blue-100 rounded-full text-sm font-semibold mb-4">
                            25-26 Mars 2025 • Paris Convention Center
                        </span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            Engage Paris 2025
                        </h1>
                        <p className="text-xl sm:text-2xl text-blue-100 mb-8">
                            L&lsquo;événement de référence pour les professionnels du Customer Success Manager en France
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/inscription" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg">
                                S&lsquo;inscrire à l&#39;événement
                            </Link>
                            <Link href="/streaming" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800">
                                Accéder au streaming
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Overview */}
            <section className="py-16">
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

            {/* Why Attend */}
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
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">
                            Programme 2025
                        </h2>
                        <p className="text-xl text-gray-600">
                            Une journée entière dédiée aux meilleures pratiques du Customer Success Manager
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
                                <h3 className="text-lg font-semibold text-blue-800">24 Juin 2025</h3>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-20 text-gray-500 font-medium">9h15</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Ouverture</h4>
                                        <p className="text-gray-600 text-sm">Session d&apos;ouverture de la conférence</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-20 text-gray-500 font-medium">9h45</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Le Customer Success augmenté</h4>
                                        <p className="text-gray-600 text-sm">Comment l&apos;IA transforme notre métier</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-20 text-gray-500 font-medium">11h00</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Aligner CS & Produit</h4>
                                        <p className="text-gray-600 text-sm">Les clés d&apos;une collaboration win-win pour faire de la voix du client une réalité produit</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-20 text-gray-500 font-medium">14h00</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Multipliez vos contacts</h4>
                                        <p className="text-gray-600 text-sm">Multipliez votre succès</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-20 text-gray-500 font-medium">16h15</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Grandir sans exploser</h4>
                                        <p className="text-gray-600 text-sm">Le secret d&apos;un Customer Success scalable</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-8">
                            <p className="text-gray-600 text-sm mb-6">Découvrez le programme complet avec tous les intervenants</p>
                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                <Link href="/programme" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                    Voir le programme détaillé
                                </Link>
                                <Link href="/inscription" className="inline-flex items-center justify-center px-5 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                                    Réserver ma place
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Speakers */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">
                            Intervenants d&apos;exception
                        </h2>
                        <p className="text-xl text-gray-600">
                            Découvrez les experts qui partageront leur savoir et leur expérience
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { name: 'Sophie Laurent', title: 'Directrice Customer Success, Salesforce' },
                            { name: 'Thomas Moreau', title: 'VP Customer Experience, HubSpot' },
                            { name: 'Marie Durand', title: 'Head of Customer Success, Qonto' },
                            { name: 'Pierre Martin', title: 'Directeur Relation Client, Doctolib' }
                        ].map((speaker, index) => (
                            <div key={index} className="text-center">
                                <div className="mx-auto w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mb-4">
                                    <span className="text-gray-500 font-medium">{speaker.name.split(' ').map(n => n[0]).join('')}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{speaker.name}</h3>
                                <p className="text-sm text-blue-600">{speaker.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/speakers" className="inline-flex items-center justify-center px-5 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                            Découvrir tous les intervenants
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16">
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
                        {[...Array(8)].map((_, i) => (
                            <div key={i} className="flex items-center justify-center h-24 bg-white p-4 rounded-lg shadow-sm">
                                <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded">
                                    <span className="text-gray-400 font-medium">Logo</span>
                                </div>
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