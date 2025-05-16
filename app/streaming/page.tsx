'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';

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
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                            Accédez à toutes les conférences et tables rondes en streaming HD et interagissez avec les intervenants
                        </p>
                        <div className="bg-blue-50 p-6 rounded-lg text-left max-w-3xl mx-auto mb-8 border border-blue-100">
                            <p className="text-gray-700 mb-4">
                                Ce streaming durera de <span className="font-medium">9h15 à 18h</span>, pour que tu participes à toutes les conférences qui se déroulent dans l&apos;auditorium.
                            </p>
                            <p className="text-gray-700">
                                Pour que tu ne sois pas simple spectateur derrière ton écran, <span className="font-medium">Elisabeth Courland</span>, CS Ops chez Agorapulse, sera notre modératrice en ligne. Elle animera les échanges, relayera les questions aux intervenants, et créera un vrai pont entre la salle et toi.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                        <div className="lg:col-span-2">
                            <div className="aspect-video bg-gray-200 rounded-lg relative overflow-hidden">
                                {/* Suppression de la div d'arrière-plan car nous utilisons poster */}

                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover"
                                    controls={isVideoPlaying}
                                    poster="/videos/preview.jpg"
                                    onPlay={() => setIsVideoPlaying(true)}
                                    onPause={() => setIsVideoPlaying(false)}
                                >
                                    <source src="/videos/resume2024.mp4" type="video/mp4" />
                                    Votre navigateur ne prend pas en charge la lecture vidéo.
                                </video>

                                {/* Overlay avec bouton centré qui disparaît lorsque la vidéo est en lecture */}
                                {!isVideoPlaying && (
                                    <div
                                        className="absolute inset-0 flex items-center justify-center bg-black/50"
                                        onClick={handleVideoPlay}
                                    >
                                        <div className="text-center p-4 cursor-pointer">
                                            <div className="w-20 h-20 bg-blue-600/80 hover:bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 transform transition-transform hover:scale-110">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                                </svg>
                                            </div>
                                            <p className="text-white font-medium text-lg">Aperçu de l&apos;édition 2024</p>
                                        </div>
                                    </div>
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
                                    <a
                                        href="https://www.engage.paris/registration/676ab85f9b2a8f025d9f48ed"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex justify-center items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                    >
                                        Réserver ma place pour le streaming
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Programme */}
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold mb-2 text-gray-900">
                                Le programme du streaming en un coup d&apos;œil
                            </h2>
                            <p className="text-gray-600 mb-4">
                                Rejoignez-nous le 24 juin 2025 pour une journée dédiée au Customer Success
                            </p>
                            <p className="text-gray-600 italic">
                                Voici le programme complet de la journée.
                            </p>
                        </div>

                        {/* Version bureau du programme */}
                        <div className="hidden md:block">
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead>
                                        <tr className="bg-gray-50">
                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                                                Horaire
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                                                Type
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-r">
                                                Titre
                                            </th>
                                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Intervenant
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 text-black">
                                        <tr>
                                            <td className="px-4 py-3 border-r text-sm">9h15/9h30</td>
                                            <td className="px-4 py-3 border-r text-sm"></td>
                                            <td className="px-4 py-3 border-r text-sm font-medium">🎙️ Ouverture</td>
                                            <td className="px-4 py-3 text-sm"></td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-3 border-r text-sm">9h30/9h45</td>
                                            <td className="px-4 py-3 border-r text-sm">Keynote inspirante</td>
                                            <td className="px-4 py-3 border-r text-sm"></td>
                                            <td className="px-4 py-3 text-sm font-medium">Surprise</td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 border-r text-sm">9h45/10h10</td>
                                            <td className="px-4 py-3 border-r text-sm">Keynote inspirante</td>
                                            <td className="px-4 py-3 border-r text-sm">
                                                Le Customer Success augmenté :<br />
                                                comment l&apos;IA transforme notre métier
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="font-medium">Aurelien Mars</span><br />
                                                Hubspot
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-3 border-r text-sm">10h10/10h30</td>
                                            <td className="px-4 py-3 border-r text-sm">Keynote sponsors</td>
                                            <td className="px-4 py-3 border-r text-sm">Real World CS Strategies to Crush NRR!</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="font-medium">Helena Näverbrant</span><br />
                                                Planhat
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 border-r text-sm">10h30/11h</td>
                                            <td className="px-4 py-3 border-r text-sm"></td>
                                            <td className="px-4 py-3 border-r text-sm">☕ Pause</td>
                                            <td className="px-4 py-3 text-sm"></td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-3 border-r text-sm" rowSpan={2}>11h/12h30</td>
                                            <td className="px-4 py-3 border-r text-sm" rowSpan={2}>Keynotes mixte</td>
                                            <td className="px-4 py-3 border-r text-sm">Aligner CS & Produit : les clés d&apos;une collaboration win-win pour faire de la voix du client une réalité produit</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="font-medium">Bérénice Carrega</span><br />
                                                Cleafy
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-3 border-r text-sm">Customer Success payant : quand vos clients demandent l&apos;addition et reviennent !</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="font-medium">Sebastien Brun</span><br />
                                                SAP
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 border-r text-sm">12h30/14h</td>
                                            <td className="px-4 py-3 border-r text-sm"></td>
                                            <td className="px-4 py-3 border-r text-sm">🍽️ Pause déjeuner</td>
                                            <td className="px-4 py-3 text-sm"></td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-3 border-r text-sm" rowSpan={2}>14h/15h15</td>
                                            <td className="px-4 py-3 border-r text-sm" rowSpan={2}>Keynotes CS</td>
                                            <td className="px-4 py-3 border-r text-sm">Multipliez vos contacts, multipliez votre succès</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="font-medium">Julie Cotavio</span><br />
                                                LinkedIn
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-3 border-r text-sm">
                                                Devenir un CSM Stratégique : Vision, Transformation et Impact Client<br />
                                                Le Cas Orange et leur Transition vers la Fibre
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="font-medium">Jérôme Couzy</span><br />
                                                Alteryx
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 border-r text-sm">15h15/15h45</td>
                                            <td className="px-4 py-3 border-r text-sm"></td>
                                            <td className="px-4 py-3 border-r text-sm">☕ Pause</td>
                                            <td className="px-4 py-3 text-sm"></td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-3 border-r text-sm">15h45/16h05</td>
                                            <td className="px-4 py-3 border-r text-sm">Keynote sponsors</td>
                                            <td className="px-4 py-3 border-r text-sm">The AI-Enhanced, Human-Led Future of Customer Success</td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="font-medium">Keith Pearce</span><br />
                                                Gainsight
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 border-r text-sm" rowSpan={3}>16h15/17h30</td>
                                            <td className="px-4 py-3 border-r text-sm" rowSpan={3}>Keynotes Leaders</td>
                                            <td className="px-4 py-3 border-r text-sm">
                                                Grandir sans exploser :<br />
                                                le secret d&apos;un Customer Success scalable
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="font-medium">Jonathan Piloquet</span><br />
                                                Intercom
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 border-r text-sm" rowSpan={2}>
                                                Faire du Customer Success un pilier stratégique :<br />
                                                quelles clés pour embarquer le Comex ?
                                            </td>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="font-medium">Francesco Bonavita</span><br />
                                                Edflex
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 text-sm">
                                                <span className="font-medium">Souphophone Ortega</span><br />
                                                LexisNexis
                                            </td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="px-4 py-3 border-r text-sm">17h30/18h</td>
                                            <td className="px-4 py-3 border-r text-sm"></td>
                                            <td className="px-4 py-3 border-r text-sm">🎬 Clôture</td>
                                            <td className="px-4 py-3 text-sm"></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Version mobile du programme - Cartes séquentielles */}
                        <div className="md:hidden space-y-4">
                            {/* Ouverture */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>9h15/9h30</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-1">🎙️ Ouverture</h4>
                                </div>
                            </div>

                            {/* Keynote Surprise */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>9h30/9h45</span>
                                    <span className="text-xs px-2 py-1 bg-blue-400 rounded text-white">Keynote inspirante</span>
                                </div>
                                <div className="p-4">
                                    <div className="mb-2 flex justify-end">
                                        <span className="font-bold">Surprise</span>
                                    </div>
                                </div>
                            </div>

                            {/* Keynote IA */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>9h45/10h10</span>
                                    <span className="text-xs px-2 py-1 bg-blue-400 rounded text-white">Keynote inspirante</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-2">Le Customer Success augmenté : comment l&apos;IA transforme notre métier</h4>
                                    <div className="flex items-center mt-3">
                                        <div className="ml-2">
                                            <p className="font-bold">Aurelien Mars</p>
                                            <p className="text-gray-600 text-sm">Hubspot</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Keynote NRR */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>10h10/10h30</span>
                                    <span className="text-xs px-2 py-1 bg-green-400 rounded text-white">Keynote sponsors</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-2">Real World CS Strategies to Crush NRR!</h4>
                                    <div className="flex items-center mt-3">
                                        <div className="ml-2">
                                            <p className="font-bold">Helena Näverbrant</p>
                                            <p className="text-gray-600 text-sm">Planhat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pause */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>10h30/11h</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-1">☕ Pause</h4>
                                </div>
                            </div>

                            {/* Keynote CS & Produit */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>11h/12h30</span>
                                    <span className="text-xs px-2 py-1 bg-purple-400 rounded text-white">Keynotes mixte</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-2">Aligner CS & Produit : les clés d&apos;une collaboration win-win pour faire de la voix du client une réalité produit</h4>
                                    <div className="flex items-center mt-3">
                                        <div className="ml-2">
                                            <p className="font-bold">Bérénice Carrega</p>
                                            <p className="text-gray-600 text-sm">Cleafy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Keynote CS Payant */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>11h/12h30</span>
                                    <span className="text-xs px-2 py-1 bg-purple-400 rounded text-white">Keynotes mixte</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-2">Customer Success payant : quand vos clients demandent l&apos;addition et reviennent !</h4>
                                    <div className="flex items-center mt-3">
                                        <div className="ml-2">
                                            <p className="font-bold">Sebastien Brun</p>
                                            <p className="text-gray-600 text-sm">SAP</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pause déjeuner */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>12h30/14h</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-1">🍽️ Pause déjeuner</h4>
                                </div>
                            </div>

                            {/* Keynote Multipliez */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>14h/15h15</span>
                                    <span className="text-xs px-2 py-1 bg-orange-400 rounded text-white">Keynotes CS</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-2">Multipliez vos contacts, multipliez votre succès</h4>
                                    <div className="flex items-center mt-3">
                                        <div className="ml-2">
                                            <p className="font-bold">Julie Cotavio</p>
                                            <p className="text-gray-600 text-sm">LinkedIn</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Keynote CSM Stratégique */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>14h/15h15</span>
                                    <span className="text-xs px-2 py-1 bg-orange-400 rounded text-white">Keynotes CS</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-2">Devenir un CSM Stratégique : Vision, Transformation et Impact Client - Le Cas Orange et leur Transition vers la Fibre</h4>
                                    <div className="flex items-center mt-3">
                                        <div className="ml-2">
                                            <p className="font-bold">Jérôme Couzy</p>
                                            <p className="text-gray-600 text-sm">Alteryx</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pause */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>15h15/15h45</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-1">☕ Pause</h4>
                                </div>
                            </div>

                            {/* Keynote AI-Enhanced */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>15h45/16h05</span>
                                    <span className="text-xs px-2 py-1 bg-green-400 rounded text-white">Keynote sponsors</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-2">The AI-Enhanced, Human-Led Future of Customer Success</h4>
                                    <div className="flex items-center mt-3">
                                        <div className="ml-2">
                                            <p className="font-bold">Keith Pearce</p>
                                            <p className="text-gray-600 text-sm">Gainsight</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Keynote Grandir sans exploser */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>16h15/17h30</span>
                                    <span className="text-xs px-2 py-1 bg-red-400 rounded text-white">Keynotes Leaders</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-2">Grandir sans exploser : le secret d&apos;un Customer Success scalable</h4>
                                    <div className="flex items-center mt-3">
                                        <div className="ml-2">
                                            <p className="font-bold">Jonathan Piloquet</p>
                                            <p className="text-gray-600 text-sm">Intercom</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Keynote Pilier stratégique - Francesco */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>16h15/17h30</span>
                                    <span className="text-xs px-2 py-1 bg-red-400 rounded text-white">Keynotes Leaders</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-2">Faire du Customer Success un pilier stratégique : quelles clés pour embarquer le Comex ?</h4>
                                    <div className="flex items-center mt-3">
                                        <div className="ml-2">
                                            <p className="font-bold">Francesco Bonavita</p>
                                            <p className="text-gray-600 text-sm">Edflex</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Keynote Pilier stratégique - Souphophone */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>16h15/17h30</span>
                                    <span className="text-xs px-2 py-1 bg-red-400 rounded text-white">Keynotes Leaders</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-2">Faire du Customer Success un pilier stratégique : quelles clés pour embarquer le Comex ?</h4>
                                    <div className="flex items-center mt-3">
                                        <div className="ml-2">
                                            <p className="font-bold">Souphophone Ortega</p>
                                            <p className="text-gray-600 text-sm">LexisNexis</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Clôture */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="bg-primary text-white px-4 py-2 font-medium flex justify-between items-center">
                                    <span>17h30/18h</span>
                                </div>
                                <div className="p-4">
                                    <h4 className="font-bold text-base mb-1">🎬 Clôture</h4>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-6 text-sm text-gray-500">
                            <p>Programme susceptible de modifications - Détails complets disponibles après inscription</p>
                        </div>
                    </div>

                    {/* Formulaire d'inscription */}
                    <div id="inscription" className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
                            Inscrivez-vous au streaming Customer Success 2025
                        </h2>

                        <div className="mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
                            <div className="space-y-4 text-gray-700">
                                <p>
                                    Ton inscription te donnera également accès à <span className="font-medium">l&apos;ensemble des supports</span> partagés sur l&apos;événement (toutes les sessions, keynotes...) ainsi que les CR des ateliers.
                                </p>
                                <p>
                                    L&apos;app du networking te sera ouverte, pour prendre contact avec tous les participants inscrits et les retrouver facilement sur Linkedin.
                                </p>
                                <div className="pt-4 mt-4 border-t border-gray-200">
                                    <p className="font-medium">A bientôt !</p>
                                    <p>Justine, Sue, Valentin & Gabrièle</p>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="mt-8 flex justify-center">
                            <a
                                href="https://www.engage.paris/registration/676ab85f9b2a8f025d9f48ed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Réserver ma place pour le streaming
                            </a>
                        </div>

                        {/* Privacy notice */}
                        <div className="mt-4 text-center text-sm text-gray-500">
                            <p>
                                En vous inscrivant, vous acceptez notre{' '}
                                <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">
                                    politique de confidentialité
                                </Link>
                                {' '}et de recevoir des communications liées à l&apos;événement.
                            </p>
                        </div>

                    </div>

                    {/* Alternative */}
                    <div className="mt-10 text-center">
                        <p className="text-gray-600 mb-4">
                            Vous préférez assister à l&apos;événement en personne ?
                        </p>
                        <Link href="/inscription" className="text-blue-600 font-medium hover:underline">
                            Inscrivez-vous à l&apos;événement physique →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 