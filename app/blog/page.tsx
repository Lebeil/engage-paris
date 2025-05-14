import Link from 'next/link';

const articles = [
    {
        id: 1,
        title: "Les 5 métriques essentielles pour mesurer l'efficacité de votre équipe Customer Success",
        excerpt: "Découvrez comment mesurer efficacement la performance de votre équipe CS pour optimiser la rétention et maximiser la satisfaction client.",
        category: "Métriques & KPIs",
        author: "Sophie Laurent",
        date: "22 avril 2024",
        readTime: "8 min de lecture",
        slug: "metriques-essentielles-customer-success"
    },
    {
        id: 2,
        title: "Comment l'IA révolutionne le Customer Success en 2024",
        excerpt: "L'intelligence artificielle transforme la façon dont les équipes CS anticipent et résolvent les problèmes clients. Voici les applications concrètes à mettre en place dès maintenant.",
        category: "Innovation",
        author: "Thomas Moreau",
        date: "15 mars 2024",
        readTime: "12 min de lecture",
        slug: "ia-revolution-customer-success"
    },
    {
        id: 3,
        title: "Scaling Customer Success : comment faire évoluer votre stratégie avec la croissance de votre entreprise",
        excerpt: "Adapter votre approche Customer Success quand votre base client s'agrandit représente un défi majeur. Voici une méthodologie éprouvée pour réussir ce changement d'échelle.",
        category: "Stratégie",
        author: "Marie Durand",
        date: "28 février 2024",
        readTime: "10 min de lecture",
        slug: "scaling-customer-success-strategie"
    },
    {
        id: 4,
        title: "Voice of Customer : transformer le feedback en actions concrètes",
        excerpt: "Collecter l'avis de vos clients ne suffit pas. Découvrez comment implémenter un programme VoC efficace et actionnable pour votre équipe Customer Success.",
        category: "Voice of Customer",
        author: "Pierre Martin",
        date: "10 février 2024",
        readTime: "9 min de lecture",
        slug: "voice-of-customer-feedback-actions"
    },
    {
        id: 5,
        title: "Onboarding client : les 7 erreurs à éviter pour maximiser l'adoption",
        excerpt: "L'onboarding est une phase critique qui détermine souvent le succès à long terme. Analysez les pièges les plus courants et découvrez comment les éviter.",
        category: "Onboarding",
        author: "Clara Dubois",
        date: "25 janvier 2024",
        readTime: "7 min de lecture",
        slug: "onboarding-client-erreurs-eviter"
    },
    {
        id: 6,
        title: "Customer Health Score : guide complet pour sa mise en place",
        excerpt: "Un score de santé client pertinent est essentiel pour prioriser les actions de votre équipe CS. Voici la méthodologie complète pour créer le vôtre.",
        category: "Customer Health",
        author: "Lucas Roche",
        date: "12 janvier 2024",
        readTime: "11 min de lecture",
        slug: "customer-health-score-guide-complet"
    }
];

export default function Blog() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-6 text-gray-900">
                            Blog Customer Success
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Explorez nos articles, guides et études de cas pour maîtriser les dernières tendances et meilleures pratiques en Customer Success Management
                        </p>
                    </div>

                    {/* Featured Article */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 md:w-1/2">
                                <div className="h-64 md:h-full bg-blue-100 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-blue-300 font-medium">Image de l&apos;article</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 md:w-1/2">
                                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
                                    Article à la une
                                </div>
                                <h2 className="text-2xl font-bold mb-2 hover:text-blue-600">
                                    <Link href={`/blog/${articles[0].slug}`}>{articles[0].title}</Link>
                                </h2>
                                <p className="text-gray-500 text-sm mb-4">
                                    {articles[0].author} • {articles[0].date} • {articles[0].readTime}
                                </p>
                                <p className="text-gray-600 mb-6">
                                    {articles[0].excerpt}
                                </p>
                                <Link href={`/blog/${articles[0].slug}`} className="text-blue-600 hover:text-blue-800 font-medium">
                                    Lire l&apos;article complet →
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="mb-12">
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <span className="text-gray-700 font-medium">Catégories :</span>
                            {['Toutes', 'Métriques & KPIs', 'Innovation', 'Stratégie', 'Voice of Customer', 'Onboarding', 'Customer Health'].map((category) => (
                                <Link
                                    key={category}
                                    href="#"
                                    className={`px-4 py-2 rounded-full text-sm ${category === 'Toutes'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                                        }`}
                                >
                                    {category}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {articles.slice(1).map((article) => (
                            <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                                <div className="h-48 bg-blue-50 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-blue-200 font-medium">Image de l&apos;article</span>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow">
                                    <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-2">
                                        {article.category}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600">
                                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                                    </h3>
                                    <p className="text-gray-500 text-sm mb-3">
                                        {article.author} • {article.date} • {article.readTime}
                                    </p>
                                    <p className="text-gray-600 text-sm mb-4">
                                        {article.excerpt}
                                    </p>
                                </div>
                                <div className="px-6 pb-6">
                                    <Link href={`/blog/${article.slug}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                                        Lire l&apos;article complet →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="bg-blue-700 text-white rounded-lg shadow-md p-8 mb-16">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl font-bold mb-4">Restez informé des dernières tendances Customer Success</h2>
                            <p className="text-blue-100 mb-6">
                                Inscrivez-vous à notre newsletter pour recevoir nos nouveaux articles, études de cas et invitations à nos événements
                            </p>
                            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                                <input
                                    type="email"
                                    placeholder="Votre email professionnel"
                                    className="flex-grow px-4 py-3 rounded-md text-gray-900 focus:outline-none"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-white text-blue-700 font-medium rounded-md hover:bg-blue-50"
                                >
                                    S&apos;inscrire
                                </button>
                            </form>
                            <p className="text-xs mt-4 text-blue-200">
                                En vous inscrivant, vous acceptez de recevoir nos communications. Vous pourrez vous désinscrire à tout moment.
                            </p>
                        </div>
                    </div>

                    {/* Popular Topics */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
                            Sujets populaires
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 hover:text-blue-600">
                                    <Link href="#">Mesurer l&apos;impact du Customer Success</Link>
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Explorez les métriques clés et méthodologies pour démontrer la valeur de votre équipe CS auprès de la direction.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 hover:text-blue-600">
                                    <Link href="#">Segmentation client efficace</Link>
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Apprenez à catégoriser vos clients pour proposer un accompagnement personnalisé et maximiser leur valeur.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-700 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 hover:text-blue-600">
                                    <Link href="#">Structure idéale d&apos;une équipe CS</Link>
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Découvrez les différents modèles d&apos;organisation pour construire une équipe Customer Success performante.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mb-16">
                        <Link href="/evenement" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            Participer à notre conférence Engage Paris 2025
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 