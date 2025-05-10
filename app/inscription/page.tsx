'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Inscription() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        entreprise: '',
        taille: '',
        fonction: '',
        interet: []
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
                        <h1 className="text-3xl font-bold mb-4 text-gray-900">Inscription confirmée !</h1>
                        <p className="text-xl mb-8 text-gray-600">
                            Merci d&apos;avoir complété votre inscription à Engage Paris 2025. Vous recevrez prochainement un email de confirmation avec tous les détails.
                        </p>
                        <Link href="/" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            Retour à l&lsquo;accueil
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold mb-4 text-gray-900">
                            Inscrivez-vous à Engage Paris 2025
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Rejoignez les leaders du Customer Success pour deux jours d&apos;échanges, de formations et de networking
                        </p>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Informations personnelles */}
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
                                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        id="telephone"
                                        name="telephone"
                                        value={formData.telephone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Informations professionnelles */}
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
                                                id={theme}
                                                name="interet"
                                                type="checkbox"
                                                value={theme}
                                                onChange={handleCheckboxChange}
                                                className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                            <label htmlFor={theme} className="ml-2 block text-sm text-gray-700">
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
                                    Confirmer mon inscription
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

                    {/* Alternative options */}
                    <div className="mt-10 text-center">
                        <p className="text-gray-600 mb-4">
                            Vous ne pouvez pas assister à l&apos;événement en personne ?
                        </p>
                        <Link href="/streaming" className="text-blue-600 font-medium hover:underline">
                            Inscrivez-vous pour accéder au streaming →
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
} 