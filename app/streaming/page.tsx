'use client';

import { useState, useRef } from 'react';

export default function Streaming() {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleVideoPlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                            Engage Paris 2025 - Streaming Live
                        </span>
                        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                            Suivez l&apos;événement en direct depuis chez vous
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Accédez à toutes les conférences et tables rondes en streaming HD et interagissez avec les intervenants
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="lg:col-span-2">
                            <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    controls={isVideoPlaying}
                                    poster="/videos/preview.jpg"
                                    onPlay={() => setIsVideoPlaying(true)}
                                    onPause={() => setIsVideoPlaying(false)}
                                >
                                    <source src="/videos/resume2024.mp4" type="video/mp4" />
                                    <track
                                        kind="captions"
                                        src="/videos/captions-fr.vtt"
                                        srcLang="fr"
                                        label="Français"
                                        default
                                    />
                                    Votre navigateur ne prend pas en charge la lecture vidéo.
                                </video>

                                {/* Overlay avec bouton centré qui disparaît lorsque la vidéo est en lecture */}
                                {!isVideoPlaying && (
                                    <button
                                        className="absolute inset-0 flex items-center justify-center bg-black/50 w-full"
                                        onClick={handleVideoPlay}
                                        aria-label="Lire la vidéo"
                                    >
                                        <div className="text-center p-4 cursor-pointer">
                                            <div className="w-20 h-20 bg-blue-600/80 hover:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 transform transition-transform hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                </svg>
                                            </div>
                                            <p className="text-white font-medium text-lg">Aperçu de l&apos;édition 2024</p>
                                        </div>
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4 text-blue-700">Ce que vous obtiendrez</h2>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Accès au streaming HD de toutes les conférences</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Replay disponible pendant 30 jours</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Possibilité de poser des questions aux intervenants</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Supports de présentation téléchargeables</span>
                                </li>
                                <li className="flex items-start">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    <span>Accès au networking virtuel entre participants</span>
                                </li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-gray-600">Tarif streaming</span>
                                    <span className="text-blue-700 font-semibold">50,00 €</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">
                                    Sur inscription uniquement - Places limitées
                                </p>
                                <div className="flex justify-center">
                                    <a href="https://www.engage.paris/registration/676ab85f9b2a8f025d9f48ed" className="w-full inline-flex justify-center items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                        Réserver ma place
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Programme */}
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold mb-2 text-gray-900">
                                Programme des conférences en streaming
                            </h2>
                            <p className="text-gray-600">
                                Une journée dédiée aux meilleures pratiques du Customer Success Manager
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-blue-50">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                                Créneau Horaire
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                                Type de session
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                                Titre
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                                                Intervenant
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                9h15/9h30
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" colSpan={3}>
                                                <div className="flex items-center justify-center">
                                                    <span>🎤 Ouverture</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                9h30/9h45
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Keynote inspirante
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">

                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Surprise
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                9h45/10h10
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Keynote inspirante
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                Le Customer Success augmenté: comment l&apos;IA transforme notre métier
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Aurelien Mars
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                10h10/10h30
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Keynote sponsors
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                Real World CS Strategies to Crush NRR!
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Helena Naverbrant
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                10h30/11h
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" colSpan={3}>
                                                <div className="flex items-center justify-center">
                                                    <span>☕ Pause</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" rowSpan={2}>
                                                11h/12h30
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" rowSpan={2}>
                                                Keynotes mixte
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                Aligner CS & Produit : les clés d&apos;une collaboration win-win pour faire de la voix du client une réalité produit
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Bérénice Carrega
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                Customer Success payant : quand vos clients demandent l&apos;addition et reviennent !
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Sebastien Brun
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                12h30/14h
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" colSpan={3}>
                                                <div className="flex items-center justify-center">
                                                    <span>🍽️ Pause déjeuner</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" rowSpan={2}>
                                                14h/15h15
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" rowSpan={2}>
                                                Keynotes CS
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                Multipliez vos contacts, multipliez votre succès
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Julie Cotovio
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                Devenir un CSM Stratégique : Vision, Transformation et Impact Client – Le Cas Orange et leur Transition vers la Fibre
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Jérôme Couzy
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                15h15/15h45
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" colSpan={3}>
                                                <div className="flex items-center justify-center">
                                                    <span>☕ Pause</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                15h45/16h05
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Keynote sponsors
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                The AI-Enhanced, Human-Led Future of Customer Success
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Keith Pearce
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900" rowSpan={2}>
                                                16h15/17h30
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" rowSpan={2}>
                                                keynotes Leaders
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                Grandir sans exploser : le secret d&apos;un Customer Success scalable
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Jonathan Piloquet
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                Faire du Customer Success un pilier stratégique : quelles clés pour embarquer le Comex
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                                Francesca Bonavita + Souphaphone Ortega
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                17h30/18h
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700" colSpan={3}>
                                                <div className="flex items-center justify-center">
                                                    <span>🎤 Clôture</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="text-center mt-6 text-sm text-gray-500">
                            <p>Programme complet et détaillé disponible après inscription</p>
                        </div>
                    </div>

                    {/* CTA Final */}
                    <div className="bg-blue-700 text-white rounded-lg shadow-md p-8 mb-16 text-center">
                        <h2 className="text-2xl font-bold mb-4">Prêt à rejoindre notre communauté CS ?</h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            Réservez votre place maintenant pour accéder au streaming de l&apos;événement et ne manquez aucune session de cette journée exceptionnelle dédiée au Customer Success.
                        </p>
                        <a
                            href="https://www.engage.paris/registration/676ab85f9b2a8f025d9f48ed"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50"
                        >
                            S&apos;inscrire maintenant
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 