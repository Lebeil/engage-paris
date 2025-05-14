'use client';

import Link from 'next/link';
import { useState } from 'react';

const episodes = [
    {
        id: 1,
        title: "Et si on se donnait RDV à Engage Paris le 7 juin ? Avec les organisateurs de l'évènement",
        description: "Si vous mourrez d'impatience de retrouver vos pairs CSMs en vrai pour partager des bonnes pratiques, trouver des réponses à vos challenges, vous inspirer et progresser dans votre carrière, alors cet épisode est fait pour vous ! Et plus que ce épisode, c'est surtout Engage Paris  qui devrait vous intéresser ! LE rendez-vous du Customer Success en français dans le texte revient pour la 3ème fois, et après une deuxième édition virtuelle, cette nouvelle édition aura lieu le 7 juin au Karé, à Boulogne Billancourt. Et qui de mieux placé pour en parler que les 4 organisateurs de l'évènement ! J'ai donc eu le plaisir de repartager un moment avec Sue , Valentin , Justine  et Gabrièle  pour parler de l'évènement, du programme, de ce à quoi vous devez vous attendre, et de la manière de préparer au mieux ce rendez)vous incontournable !",
        duration: "21 min",
        date: "23 avril 2022",
        slug: "avenir-customer-success-ia-generative"
    },
    {
        id: 2,
        title: "Stratégies d'expansion et upsell au sein des comptes existants",
        description: "Découvrez comment transformer votre équipe Customer Success en moteur de croissance grâce à des stratégies d'expansion de revenus efficaces.",
        duration: "38 min",
        date: "1 avril 2024",
        slug: "strategies-expansion-upsell"
    },
    {
        id: 3,
        title: "La convergence entre Product et Customer Success",
        description: "Comment aligner les équipes produit et Customer Success pour créer une expérience utilisateur cohérente et maximiser l'adoption de vos solutions.",
        duration: "45 min",
        date: "15 mars 2024",
        slug: "convergence-product-customer-success"
    },
    {
        id: 4,
        title: "Mesurer l'impact financier du Customer Success",
        description: "Les métriques essentielles pour démontrer la valeur de votre département CS et obtenir plus de ressources auprès de votre direction.",
        duration: "36 min",
        date: "1 mars 2024",
        slug: "impact-financier-customer-success"
    },
    {
        id: 5,
        title: "Onboarding à l'échelle : automatiser sans déshumaniser",
        description: "Comment créer un processus d'onboarding évolutif qui conserve la personnalisation nécessaire pour engager vos clients dès le départ.",
        duration: "40 min",
        date: "15 février 2024",
        slug: "onboarding-echelle-automatisation"
    },
    {
        id: 6,
        title: "Les défis du Customer Success en B2C",
        description: "Adapter les méthodologies traditionnelles du CSM pour réussir dans un environnement B2C à grande échelle.",
        duration: "43 min",
        date: "1 février 2024",
        slug: "defis-customer-success-b2c"
    }
];

export default function Podcast() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showFullDescription, setShowFullDescription] = useState(false);

    const togglePlay = () => {
        const audioElement = document.getElementById('featured-episode-audio') as HTMLAudioElement;

        if (isPlaying) {
            audioElement?.pause();
        } else {
            audioElement?.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-blue-100 text-blue-700 rounded-full px-4 py-1 text-sm font-semibold mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                            Podcast
                        </div>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                            Engage Success Talks
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Le podcast qui décrypte les meilleures pratiques du Customer Success Manager avec les leaders du secteur
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link href="#episodes" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                Écouter les épisodes
                            </Link>
                            <Link href="#subscribe" className="inline-flex items-center justify-center px-5 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                                S&apos;abonner au podcast
                            </Link>
                        </div>
                    </div>

                    {/* Featured Episode */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
                        <div className="md:flex">
                            <div className="md:flex-shrink-0 md:w-2/5">
                                <div className="h-64 md:h-full bg-blue-600 relative">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center px-6">
                                            {/* Lecteur audio caché */}
                                            <audio
                                                id="featured-episode-audio"
                                                className="hidden"
                                                preload="metadata"
                                            >
                                                <source src="/podcast/podcast.mp3" type="audio/mpeg" />
                                                Votre navigateur ne supporte pas la lecture audio.
                                            </audio>

                                            {/* Bouton de lecture personnalisé */}
                                            <button
                                                onClick={togglePlay}
                                                className="inline-flex flex-col items-center justify-center"
                                                aria-label={isPlaying ? "Pause" : "Lecture"}
                                            >
                                                <div className="w-20 h-20 bg-white bg-opacity-20 text-white rounded-full backdrop-blur-sm flex items-center justify-center mb-4 hover:bg-opacity-30 transition-all transform hover:scale-105">
                                                    {isPlaying ? (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    ) : (
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <span className="text-white font-medium">
                                                    {isPlaying ? "En cours de lecture" : "Écouter l'épisode"}
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 md:w-3/5">
                                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold mb-1">
                                    Épisode {episodes[0].id} • {episodes[0].date}
                                </div>
                                <h2 className="text-2xl font-bold mb-2 text-black hover:text-blue-600">
                                    <Link href={`/podcast/${episodes[0].slug}`}>{episodes[0].title}</Link>
                                </h2>
                                <p className="text-gray-600 mb-6">
                                    {showFullDescription
                                        ? episodes[0].description
                                        : episodes[0].description.substring(0, 180) + '...'}
                                    <button
                                        onClick={() => setShowFullDescription(!showFullDescription)}
                                        className="ml-2 text-blue-600 hover:text-blue-800 font-medium"
                                    >
                                        {showFullDescription ? 'Voir moins' : 'En savoir plus'}
                                    </button>
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center text-gray-500 text-sm">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {episodes[0].duration}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* All Episodes */}
                    <div id="episodes" className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Tous les épisodes
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Des conversations enrichissantes avec les meilleurs experts du Customer Success
                            </p>
                        </div>

                        <div className="space-y-6">
                            {episodes.slice(1).map((episode) => (
                                <div key={episode.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                    <div className="p-6">
                                        <div className="sm:flex sm:justify-between sm:items-center mb-4">
                                            <div>
                                                <div className="text-sm text-gray-500 mb-1">
                                                    Épisode {episode.id} • {episode.date}
                                                </div>
                                                <h3 className="text-xl font-bold hover:text-blue-600">
                                                    <Link href={`/podcast/${episode.slug}`}>{episode.title}</Link>
                                                </h3>
                                            </div>
                                            <div className="mt-2 sm:mt-0 flex items-center text-gray-500 text-sm flex-shrink-0">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                {episode.duration}
                                            </div>
                                        </div>

                                        <div className="sm:flex sm:justify-between sm:items-start">
                                            <div className="sm:flex sm:items-start sm:flex-grow">
                                                <div>
                                                    <p className="text-gray-600 text-sm">
                                                        {episode.description}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-4 sm:mt-0 sm:ml-6 flex-shrink-0">
                                                <Link href={`/podcast/${episode.slug}`} className="inline-flex items-center justify-center px-4 py-2 border border-blue-600 rounded-md text-sm font-medium text-blue-700 bg-white hover:bg-blue-50">
                                                    Écouter
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Subscribe Section */}
                    <div id="subscribe" className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Abonnez-vous au podcast
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Ne manquez aucun épisode et recevez les nouveaux contenus dès leur sortie
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                            {[
                                { name: 'Apple Podcasts', color: 'bg-purple-600' },
                                { name: 'Spotify', color: 'bg-green-600' },
                                { name: 'Google Podcasts', color: 'bg-blue-600' },
                                { name: 'Deezer', color: 'bg-red-600' }
                            ].map((platform) => (
                                <a
                                    key={platform.name}
                                    href="#"
                                    className={`flex flex-col items-center justify-center p-6 rounded-lg shadow-md text-white ${platform.color} hover:opacity-90 transition-opacity`}
                                >
                                    <div className="w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center mb-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                        </svg>
                                    </div>
                                    <span className="text-center font-medium text-sm">{platform.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="bg-blue-700 text-white rounded-lg shadow-md p-8 mb-16">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl font-bold mb-4">Recevez les nouveaux épisodes par email</h2>
                            <p className="text-blue-100 mb-6">
                                Inscrivez-vous à notre newsletter pour être informé des nouvelles sorties et recevoir des contenus exclusifs
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

                    {/* Suggest a Guest */}
                    <div className="bg-white rounded-lg shadow-md p-8 mb-16">
                        <div className="max-w-3xl mx-auto text-center">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                Suggérez un invité ou un sujet
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Vous connaissez un expert du Customer Success qui devrait être interviewé dans notre podcast ? Partagez-nous vos suggestions !
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                        Votre nom
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                        Votre email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 max-w-xl mx-auto">
                                <label htmlFor="suggestion" className="block text-sm font-medium text-gray-700 mb-1 text-left">
                                    Votre suggestion
                                </label>
                                <textarea
                                    id="suggestion"
                                    name="suggestion"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Nom de l'invité, sujet proposé, pourquoi ce serait intéressant..."
                                />
                            </div>

                            <div className="mt-8">
                                <button
                                    type="submit"
                                    className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Envoyer ma suggestion
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* CTA Event */}
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