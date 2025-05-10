'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Streaming() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        entreprise: '',
        taille: '',
        fonction: '',
        interet: [] as string[]
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        setFormData(prev => {
            const interets = [...(prev.interet as string[])];
            if (checked) {
                interets.push(value);
            } else {
                const index = interets.indexOf(value);
                if (index > -1) {
                    interets.splice(index, 1);
                }
            }
            return {
                ...prev,
                interet: interets
            };
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Ici, vous pouvez ajouter la logique pour soumettre les données à votre API
        console.log(formData);
        setSubmitted(true);

        // Redirection après quelques secondes
        setTimeout(() => {
            router.push('/');
        }, 5000);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gray-50 py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
                        <div className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600 mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-3xl font-bold mb-4 text-gray-900">Inscription au streaming confirmée !</h1>
                        <p className="text-xl mb-8 text-gray-600">
                            Merci de vous être inscrit au streaming d&apos;Engage Paris 2025. Vous recevrez un email avec les instructions de connexion avant l&apos;événement.
                        </p>
                        <Link href="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            Retour à l&apos;accueil
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

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
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto text-blue-500 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <p className="mt-4 text-gray-600 font-medium">Aperçu de l&apos;édition 2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-xl font-bold mb-4 text-blue-700">Ce que vous obtiendrez</h2>
                            <ul className="space-y-3">
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
                                    <span className="text-blue-700 font-semibold">Gratuit</span>
                                </div>
                                <p className="text-sm text-gray-500 mb-4">
                                    Sur inscription uniquement - Places limitées
                                </p>
                                <div className="flex justify-center">
                                    <a href="#inscription" className="w-full inline-flex justify-center items-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
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
                                Deux jours dédiés aux meilleures pratiques du Customer Success Management
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-4 bg-blue-50 border-b border-blue-100">
                                <h3 className="text-lg font-semibold text-blue-800">Jour 1 - 25 Mars 2025</h3>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0 w-24 text-gray-500 font-medium">09:00</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Ouverture de l&apos;événement</h4>
                                        <p className="text-gray-600 text-sm">Introduction par Sophie Laurent, Directrice Customer Success chez Salesforce</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-24 text-gray-500 font-medium">10:00</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">IA et automatisation : transformer l&apos;expérience client</h4>
                                        <p className="text-gray-600 text-sm">Conférence avec Thomas Moreau, VP Customer Experience chez HubSpot</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-24 text-gray-500 font-medium">14:00</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Table ronde : Les métriques qui comptent vraiment</h4>
                                        <p className="text-gray-600 text-sm">Discussion avec 4 experts du Customer Success</p>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-4 bg-blue-50 border-b border-blue-100 border-t">
                                <h3 className="text-lg font-semibold text-blue-800">Jour 2 - 26 Mars 2025</h3>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="flex">
                                    <div className="flex-shrink-0 w-24 text-gray-500 font-medium">09:30</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Scaling Customer Success : adapter sa stratégie</h4>
                                        <p className="text-gray-600 text-sm">Workshop animé par Marie Durand, Head of Customer Success chez Qonto</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-24 text-gray-500 font-medium">11:00</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Customer Success et Revenus : le duo gagnant</h4>
                                        <p className="text-gray-600 text-sm">Présentation par Pierre Martin, Directeur Relation Client chez Doctolib</p>
                                    </div>
                                </div>

                                <div className="flex">
                                    <div className="flex-shrink-0 w-24 text-gray-500 font-medium">16:00</div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Clôture et perspectives 2026</h4>
                                        <p className="text-gray-600 text-sm">Session interactive avec tous les participants</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center mt-6 text-sm text-gray-500">
                            <p>Programme complet et détaillé disponible après inscription</p>
                        </div>
                    </div>

                    {/* Formulaire d'inscription */}
                    <div id="inscription" className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
                            Inscrivez-vous au streaming
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                                        Prénom *
                                    </label>
                                    <input
                                        type="text"
                                        id="prenom"
                                        name="prenom"
                                        value={formData.prenom}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                                        Nom *
                                    </label>
                                    <input
                                        type="text"
                                        id="nom"
                                        name="nom"
                                        value={formData.nom}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email professionnel *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-1">
                                        Entreprise *
                                    </label>
                                    <input
                                        type="text"
                                        id="entreprise"
                                        name="entreprise"
                                        value={formData.entreprise}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="taille" className="block text-sm font-medium text-gray-700 mb-1">
                                        Taille de l&apos;entreprise *
                                    </label>
                                    <select
                                        id="taille"
                                        name="taille"
                                        value={formData.taille}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Sélectionnez...</option>
                                        <option value="1-49">1-49 employés</option>
                                        <option value="50-199">50-199 employés</option>
                                        <option value="200-499">200-499 employés</option>
                                        <option value="500-999">500-999 employés</option>
                                        <option value="1000+">1000+ employés</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="fonction" className="block text-sm font-medium text-gray-700 mb-1">
                                        Fonction *
                                    </label>
                                    <input
                                        type="text"
                                        id="fonction"
                                        name="fonction"
                                        value={formData.fonction}
                                        onChange={handleChange}
                                        required
                                        placeholder="Ex: Directeur Customer Success"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            {/* Thématiques d'intérêt */}
                            <div className="mt-8">
                                <h3 className="text-lg font-medium text-gray-900 mb-4">Quelles thématiques vous intéressent particulièrement ?</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {[
                                        'IA et automatisation en CSM',
                                        'Stratégies de rétention client',
                                        'Customer Health Score',
                                        'Voice of Customer',
                                        'Scaling Customer Success',
                                        'CSM et Revenue Growth',
                                        'Onboarding client',
                                        'Success Planning'
                                    ].map((theme) => (
                                        <div key={theme} className="flex items-start">
                                            <input
                                                id={`stream-${theme}`}
                                                name="interet"
                                                type="checkbox"
                                                value={theme}
                                                onChange={handleCheckboxChange}
                                                className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <label htmlFor={`stream-${theme}`} className="ml-2 block text-sm text-gray-700">
                                                {theme}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8 flex justify-center">
                                <button
                                    type="submit"
                                    className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Réserver ma place pour le streaming
                                </button>
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
                        </form>
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