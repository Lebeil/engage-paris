'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Speakers() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        entreprise: '',
        fonction: '',
        sujet: '',
        experience: '',
        linkedin: '',
        bio: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
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
                        <h1 className="text-3xl font-bold mb-4 text-gray-900">Candidature reçue !</h1>
                        <p className="text-xl mb-8 text-gray-600">
                            Merci pour votre candidature en tant qu&apos;intervenant à Engage Paris 2025. Notre équipe examinera votre proposition et vous contactera dans les prochaines semaines.
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
                <div className="max-w-7xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                            Appel à intervenants
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
                            Partagez votre expertise<br />au plus grand événement CSM en France
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Rejoignez les leaders du Customer Success et devenez intervenant à Engage Paris 2025
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                            <a href="#pourquoi-intervenir" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                                Pourquoi intervenir ?
                            </a>
                            <a href="#postuler" className="inline-flex items-center justify-center px-5 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                                Proposer ma candidature
                            </a>
                        </div>
                    </div>

                    {/* Why Speak Section */}
                    <div id="pourquoi-intervenir" className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Pourquoi devenir intervenant ?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Une opportunité unique de partager votre vision et de renforcer votre positionnement d&apos;expert
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Visibilité & Influence</h3>
                                <p className="text-gray-600">
                                    Positionnez-vous comme leader d&apos;opinion auprès de plus de 500 professionnels du Customer Success et renforcez votre personal branding.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Networking Premium</h3>
                                <p className="text-gray-600">
                                    Rencontrez les décideurs et experts du secteur dans un cadre privilégié et développez votre réseau professionnel.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-700 rounded-full mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-3">Promotion de votre entreprise</h3>
                                <p className="text-gray-600">
                                    Augmentez la notoriété de votre marque et positionnez votre entreprise comme référence dans le domaine du Customer Success.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Témoignages d&apos;anciens intervenants
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500 font-medium">SM</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-4 italic">
                                            &quot;Intervenir à Engage Paris a été une opportunité incroyable pour partager mon expertise et rencontrer des professionnels passionnés. J&apos;ai reçu plusieurs propositions de collaboration suite à ma présentation.&quot;
                                        </p>
                                        <div>
                                            <h4 className="font-semibold">Sarah Martin</h4>
                                            <p className="text-sm text-gray-500">Directrice CS, Datadog</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mr-4">
                                        <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500 font-medium">JD</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-gray-600 mb-4 italic">
                                            &quot;L&apos;équipe d&apos;organisation est exceptionnelle et l&apos;audience est vraiment de qualité. Mon intervention a été vue par des milliers de professionnels en streaming et a considérablement augmenté ma visibilité.&quot;
                                        </p>
                                        <div>
                                            <h4 className="font-semibold">Jean Dupont</h4>
                                            <p className="text-sm text-gray-500">VP Customer Success, Intercom</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Topics */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Thématiques recherchées pour 2025
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Nous recherchons particulièrement des interventions sur ces sujets
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                            {[
                                'IA et automatisation en CSM',
                                'Stratégies de rétention client',
                                'Customer Health Score',
                                'Voice of Customer',
                                'Scaling Customer Success',
                                'CSM et Revenue Growth',
                                'Onboarding client',
                                'Success Planning',
                                'Product-Led Growth & CS',
                                'Customer Experience',
                                'Mesure de la valeur client',
                                'Customer Success Leadership'
                            ].map((topic) => (
                                <div key={topic} className="bg-blue-50 px-4 py-3 rounded-md text-blue-800 font-medium text-center">
                                    {topic}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Application Form */}
                    <div id="postuler" className="bg-white rounded-lg shadow-md p-8 mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold mb-4 text-gray-900">
                                Proposez votre candidature
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Remplissez le formulaire ci-dessous pour nous proposer votre intervention. Notre comité de sélection examinera votre candidature et vous contactera dans les prochaines semaines.
                            </p>
                        </div>

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
                                        Téléphone *
                                    </label>
                                    <input
                                        type="tel"
                                        id="telephone"
                                        name="telephone"
                                        value={formData.telephone}
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

                                <div>
                                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">
                                        URL LinkedIn
                                    </label>
                                    <input
                                        type="url"
                                        id="linkedin"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        placeholder="https://linkedin.com/in/votre-profil"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                                        Expérience en tant qu&apos;intervenant *
                                    </label>
                                    <select
                                        id="experience"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    >
                                        <option value="">Sélectionnez...</option>
                                        <option value="Aucune">Aucune</option>
                                        <option value="1-2 événements">1-2 événements</option>
                                        <option value="3-5 événements">3-5 événements</option>
                                        <option value="5+ événements">5+ événements</option>
                                        <option value="Intervenant régulier">Intervenant régulier</option>
                                    </select>
                                </div>
                            </div>

                            {/* Proposition d'intervention */}
                            <div className="mt-8">
                                <div>
                                    <label htmlFor="sujet" className="block text-sm font-medium text-gray-700 mb-1">
                                        Sujet de votre intervention *
                                    </label>
                                    <input
                                        type="text"
                                        id="sujet"
                                        name="sujet"
                                        value={formData.sujet}
                                        onChange={handleChange}
                                        required
                                        placeholder="Titre de votre intervention"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                <div className="mt-4">
                                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                                        Courte biographie et résumé de votre intervention *
                                    </label>
                                    <textarea
                                        id="bio"
                                        name="bio"
                                        value={formData.bio}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        placeholder="Présentez-vous brièvement et décrivez ce que vous souhaitez partager lors de l'événement (500 caractères max)"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        maxLength={500}
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="mt-8 flex justify-center">
                                <button
                                    type="submit"
                                    className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Soumettre ma candidature
                                </button>
                            </div>

                            {/* Privacy notice */}
                            <div className="mt-4 text-center text-sm text-gray-500">
                                <p>
                                    En soumettant ce formulaire, vous acceptez notre{' '}
                                    <Link href="/politique-confidentialite" className="text-blue-600 hover:underline">
                                        politique de confidentialité
                                    </Link>
                                    {' '}et de recevoir des communications liées à l&apos;événement.
                                </p>
                            </div>
                        </form>
                    </div>

                    {/* FAQ */}
                    <div className="mb-16">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold mb-4 text-gray-900">
                                Questions fréquentes
                            </h2>
                        </div>

                        <div className="space-y-4">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Quels types d&apos;interventions sont possibles ?</h3>
                                <p className="text-gray-600">
                                    Nous proposons plusieurs formats : conférences (30 min), ateliers pratiques (60 min), tables rondes (45 min) et keynotes (20 min). Précisez votre préférence dans votre candidature.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Quand serai-je informé si ma candidature est retenue ?</h3>
                                <p className="text-gray-600">
                                    Notre comité examinera toutes les candidatures et vous contactera au plus tard 3 mois avant l&apos;événement. Les intervenants sélectionnés bénéficieront d&apos;un accompagnement personnalisé.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Les intervenants sont-ils rémunérés ?</h3>
                                <p className="text-gray-600">
                                    Les intervenants ne sont pas rémunérés, mais bénéficient d&apos;un accès VIP à l&apos;événement, d&apos;une visibilité importante et de la captation vidéo de leur intervention qu&apos;ils pourront réutiliser.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">Puis-je proposer une intervention commerciale ?</h3>
                                <p className="text-gray-600">
                                    Les interventions à caractère purement commercial ne sont pas acceptées. Nous privilégions les retours d&apos;expérience, les études de cas et les présentations apportant une réelle valeur ajoutée aux participants.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center bg-blue-700 text-white rounded-lg shadow-md p-12">
                        <h2 className="text-3xl font-bold mb-4">Prêt à partager votre expertise ?</h2>
                        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                            Ne manquez pas cette opportunité unique de briller parmi les leaders du Customer Success en France
                        </p>
                        <a href="#postuler" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50">
                            Postuler maintenant
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
} 