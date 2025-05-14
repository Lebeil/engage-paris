'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Programme() {
    // Définition des badges pour les types de sessions
    const badges = {
        keynote: "bg-blue-100 text-blue-800 border border-blue-200",
        workshop: "bg-green-100 text-green-800 border border-green-200",
        panel: "bg-purple-100 text-purple-800 border border-purple-200",
        sponsor: "bg-yellow-100 text-yellow-800 border border-yellow-200",
        networking: "bg-gray-100 text-gray-800 border border-gray-200",
        fireside: "bg-red-100 text-red-800 border border-red-200",
        deepdive: "bg-indigo-100 text-indigo-800 border border-indigo-200"
    };

    // Données des intervenants
    const speakers = {
        "SM": {
            name: "Sue Nabeih Moore",
            role: "Co-fondatrice - Success Chain & Engage Paris",
            image: "/images/speaker1.jpg"
        },
        "AM": {
            name: "Aurelien Mars",
            role: "CEO & Co-fondateur - Dust",
            image: "/images/speaker2.jpg"
        },
        "BC": {
            name: "Bérénice Carrega",
            role: "Head of Customer Success - Nexus",
            image: "/images/speaker3.jpg"
        },
        "SB": {
            name: "Sebastien Brun",
            role: "Director CS - TechProgress",
            image: "/images/speaker4.jpg"
        },
        "JC": {
            name: "Julie Cotovio",
            role: "Customer Success Manager - Gainsight",
            image: "/images/speaker1.jpg"
        },
        "HN": {
            name: "Helena Naverbrant",
            role: "VP Customer Success - Planhat",
            image: "/images/speaker3.jpg"
        },
        "KP": {
            name: "Keith Pearce",
            role: "CMO - MeltingSpot",
            image: "/images/speaker2.jpg"
        },
        "JP": {
            name: "Jonathan Piloquet",
            role: "CSO - SuccessChain",
            image: "/images/speaker4.jpg"
        },
        "FB": {
            name: "Francesca Bonavita",
            role: "Head of CS - KareSchool",
            image: "/images/speaker3.jpg"
        },
        "SO": {
            name: "Souphaphone Ortega",
            role: "CXO - RocketSchool",
            image: "/images/speaker1.jpg"
        },
        "JCO": {
            name: "Jérôme Couzy",
            role: "VP Customer Success - Orange",
            image: "/images/speaker4.jpg"
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-700 to-blue-800 text-white py-16">
                <div className="absolute inset-0 z-0 opacity-30">
                    <div className="absolute inset-0 bg-pattern"></div>
                </div>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <span className="inline-block px-4 py-1.5 bg-blue-800 bg-opacity-50 text-blue-100 rounded-full text-sm font-semibold mb-4">
                            24 Juin 2025 • Maison.A - VERSO Paris
                        </span>
                        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                            Programme - Ateliers
                        </h1>
                        <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
                            Une journée complète dédiée aux meilleures pratiques du Customer Success Manager avec plus de 20 experts internationaux
                        </p>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
            </section>

            {/* Programme détaillé */}
            <section className="py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Première colonne */}
                        <div className="space-y-6">
                            {/* Session 1 */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 font-medium">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs mr-2">Piste 1</span>
                                            9:15 - 9:30
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badges.keynote}`}>
                                            Keynote
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-blue-700 mb-2">Ouverture de l&apos;événement</h3>
                                    <p className="text-gray-600 mb-4">
                                        Bienvenue à la 5ème édition d&apos;Engage Paris ! Découvrez le déroulement de cette journée exceptionnelle dédiée au Customer Success Manager et les moments forts qui vous attendent. Nous partagerons également les dernières tendances 2025 du secteur qui façonnent notre métier.
                                    </p>
                                    <div className="mt-5 flex items-center border-t border-gray-100 pt-4">
                                        <div className="flex-shrink-0 h-10 w-10 relative">
                                            {speakers["SM"].image ? (
                                                <Image
                                                    src={speakers["SM"].image}
                                                    alt={speakers["SM"].name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <span className="text-blue-600 font-medium text-sm">SM</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-800">{speakers["SM"].name}</p>
                                            <p className="text-xs text-gray-500">{speakers["SM"].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Session 2 */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 font-medium">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs mr-2">Piste 1</span>
                                            9:45 - 10:10
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badges.keynote}`}>
                                            Keynote inspirante
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-blue-700 mb-2">Le Customer Success augmenté: comment l&apos;IA transforme notre métier</h3>
                                    <div className="bg-blue-50 rounded-lg p-3 mb-4 border-l-4 border-blue-300">
                                        <p className="text-blue-800 text-sm italic">&quot;L&apos;IA n&apos;est pas juste une nouvelle technologie, c&apos;est un nouveau collègue pour les CSMs.&quot;</p>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Comment les outils d&apos;IA comme ChatGPT, Claude et Gemini deviennent des alliés incontournables pour les CSM.
                                        Découvrez comment automatiser intelligemment les tâches répétitives, analyser efficacement de grands volumes de données
                                        client et anticiper les besoins futurs pour une expérience client proactive et personnalisée.
                                    </p>
                                    <div className="grid grid-cols-2 gap-2 mb-4">
                                        <div className="bg-gray-50 rounded p-2 text-xs text-gray-600">
                                            <span className="font-semibold block">Cas d&apos;usage</span>
                                            Analyse prédictive de churn
                                        </div>
                                        <div className="bg-gray-50 rounded p-2 text-xs text-gray-600">
                                            <span className="font-semibold block">Applications</span>
                                            Dust, Sinitic, Planhat AI
                                        </div>
                                    </div>
                                    <div className="mt-5 flex items-center border-t border-gray-100 pt-4">
                                        <div className="flex-shrink-0 h-10 w-10 relative">
                                            {speakers["AM"].image ? (
                                                <Image
                                                    src={speakers["AM"].image}
                                                    alt={speakers["AM"].name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <span className="text-blue-600 font-medium text-sm">AM</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-800">{speakers["AM"].name}</p>
                                            <p className="text-xs text-gray-500">{speakers["AM"].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Session 3 */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 font-medium">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs mr-2">Piste 1</span>
                                            11:00 - 11:45
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badges.panel}`}>
                                            Keynote mixte
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center mb-3">
                                        <h3 className="font-bold text-lg text-blue-700">Aligner CS & Produit : les clés d&apos;une collaboration win-win</h3>
                                        <span className="ml-2 px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full">Populaire</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Aligner CS & Produit, c&apos;est bien plus qu&apos;une question de process : c&apos;est un état d&apos;esprit et une dynamique à cultiver.
                                        Cette session vous propose un modèle complet pour faire de la voix du client une réalité produit à travers :
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 ml-2">
                                        <li>Un framework de remontée d&apos;insights clients structuré et actionnable</li>
                                        <li>Des rituels de collaboration et communication entre les équipes</li>
                                        <li>Des métriques partagées pour mesurer l&apos;impact</li>
                                        <li>Des exemples de réussite chez des entreprises comme Notion et Figma</li>
                                    </ul>
                                    <div className="mt-5 flex items-center border-t border-gray-100 pt-4">
                                        <div className="flex-shrink-0 h-10 w-10 relative">
                                            {speakers["BC"].image ? (
                                                <Image
                                                    src={speakers["BC"].image}
                                                    alt={speakers["BC"].name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <span className="text-blue-600 font-medium text-sm">BC</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-800">{speakers["BC"].name}</p>
                                            <p className="text-xs text-gray-500">{speakers["BC"].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pause déjeuner */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-gradient-to-r from-amber-50 to-amber-100">
                                <div className="p-6 text-center">
                                    <div className="text-3xl mb-2">🍽️</div>
                                    <h3 className="font-bold text-lg text-amber-700 mb-1">Pause déjeuner</h3>
                                    <p className="text-amber-700">12:30 - 14:00</p>
                                    <p className="text-amber-600 text-sm mt-3">
                                        Profitez d&apos;un moment convivial pour échanger avec les autres participants et les intervenants.
                                        <br />Buffet gastronomique et boissons inclus.
                                    </p>
                                </div>
                            </div>

                            {/* Session 4 */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 font-medium">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs mr-2">Piste 1</span>
                                            14:00 - 14:45
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badges.keynote}`}>
                                            Keynote CS
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-blue-700 mb-2">Multipliez vos contacts, multipliez votre succès</h3>
                                    <p className="text-gray-600 mb-4">
                                        Comment élargir vos points de contact chez le client pour renforcer votre position et garantir l&apos;adoption à tous les niveaux de l&apos;organisation.
                                        Découvrez la méthode MAPS (Multi-Avatar Penetration Strategy) pour cartographier et engager les différentes parties prenantes chez vos clients :
                                    </p>
                                    <div className="bg-gray-50 rounded-lg p-3 mb-4 text-sm space-y-2">
                                        <div className="flex items-start">
                                            <span className="font-bold text-gray-700 mr-2">M</span>
                                            <p className="text-gray-600">Mapping des influenceurs et décideurs clés</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="font-bold text-gray-700 mr-2">A</span>
                                            <p className="text-gray-600">Alignement sur leurs objectifs individuels</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="font-bold text-gray-700 mr-2">P</span>
                                            <p className="text-gray-600">Personnalisation des communications</p>
                                        </div>
                                        <div className="flex items-start">
                                            <span className="font-bold text-gray-700 mr-2">S</span>
                                            <p className="text-gray-600">Stratégie d&apos;escalade et de soutien mutuel</p>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex items-center border-t border-gray-100 pt-4">
                                        <div className="flex-shrink-0 h-10 w-10 relative">
                                            {speakers["JC"].image ? (
                                                <Image
                                                    src={speakers["JC"].image}
                                                    alt={speakers["JC"].name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <span className="text-blue-600 font-medium text-sm">JC</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-800">{speakers["JC"].name}</p>
                                            <p className="text-xs text-gray-500">{speakers["JC"].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Deuxième colonne */}
                        <div className="space-y-6">
                            {/* Session 5 */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 font-medium">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs mr-2">Piste 2</span>
                                            9:30 - 9:45
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badges.keynote}`}>
                                            Keynote inspirante
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center mb-3">
                                        <h3 className="font-bold text-lg text-blue-700">Surprise keynote</h3>
                                        <span className="ml-2 px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full">Exclusif</span>
                                    </div>
                                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-4">
                                        <p className="text-gray-700 text-center italic">
                                            &quot;Un invité surprise de renommée internationale partagera sa vision du Customer Success de demain.&ldquo;
                                        </p>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Cette session exceptionnelle mettra en lumière les tendances émergentes et les pratiques innovantes
                                        qui transformeront notre métier dans les prochaines années. Préparez-vous à être inspiré et à
                                        remettre en question vos certitudes !
                                    </p>
                                    <div className="bg-gray-50 rounded p-3 text-sm text-gray-600 mt-4 text-center">
                                        <span className="font-semibold">Intervenant révélé le jour J</span>
                                    </div>
                                </div>
                            </div>

                            {/* Session 6 */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 font-medium">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs mr-2">Piste 2</span>
                                            10:10 - 10:30
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badges.sponsor}`}>
                                            Keynote sponsors
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-blue-700 mb-2">Real World CS Strategies to Crush NRR!</h3>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-yellow-50 rounded-lg px-2 py-1 text-xs text-yellow-700 font-medium border border-yellow-200">
                                            En anglais
                                        </div>
                                        <div className="ml-2 text-xs text-gray-500">
                                            Traduction simultanée disponible
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Découvrez des stratégies concrètes et éprouvées pour maximiser votre Net Revenue Retention
                                        et transformer vos clients en véritables moteurs de croissance. Cette présentation inclut :
                                    </p>
                                    <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 ml-2">
                                        <li>Les 3 leviers d&apos;expansion les plus efficaces</li>
                                        <li>Comment structurer vos équipes CS pour maximiser le NRR</li>
                                        <li>Des exemples de playbooks d&apos;upsell et cross-sell qui fonctionnent</li>
                                        <li>Comment mesurer précisément votre impact sur le NRR</li>
                                    </ul>
                                    <div className="mt-5 flex items-center border-t border-gray-100 pt-4">
                                        <div className="flex-shrink-0 h-10 w-10 relative">
                                            {speakers["HN"].image ? (
                                                <Image
                                                    src={speakers["HN"].image}
                                                    alt={speakers["HN"].name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <span className="text-blue-600 font-medium text-sm">HN</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-800">{speakers["HN"].name}</p>
                                            <p className="text-xs text-gray-500">{speakers["HN"].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pause café */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-gradient-to-r from-cyan-50 to-blue-50">
                                <div className="p-6 text-center">
                                    <div className="text-3xl mb-2">☕</div>
                                    <h3 className="font-bold text-lg text-blue-700 mb-1">Pause café networking</h3>
                                    <p className="text-blue-700">10:30 - 11:00</p>
                                    <p className="text-blue-600 text-sm mt-3">
                                        Profitez de cette pause pour échanger avec les autres participants
                                        <br />et visiter les stands de nos partenaires.
                                    </p>
                                </div>
                            </div>

                            {/* Session 7 */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 font-medium">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs mr-2">Piste 2</span>
                                            11:45 - 12:30
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badges.panel}`}>
                                            Keynote mixte
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-blue-700 mb-2">Customer Success payant : quand vos clients demandent l&apos;addition et reviennent !</h3>
                                    <div className="bg-blue-50 rounded-lg p-3 mb-4 border-l-4 border-blue-300">
                                        <p className="text-blue-800 text-sm italic">&quot;Transformer le coût du CS en centre de profit n&apos;est plus une option mais une nécessité stratégique.&quot;</p>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Comment transformer votre service Customer Success en centre de profit ? Cette session vous présentera :
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="bg-gray-50 rounded p-3 text-sm">
                                            <h4 className="font-semibold text-gray-700 mb-1">Modèles de services payants</h4>
                                            <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                                                <li>Services de conseil avancé</li>
                                                <li>Formations certifiantes</li>
                                                <li>Support premium</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gray-50 rounded p-3 text-sm">
                                            <h4 className="font-semibold text-gray-700 mb-1">Éléments clés</h4>
                                            <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                                                <li>Tarification adaptée</li>
                                                <li>Packaging et nivellement</li>
                                                <li>Gestion des objections</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex items-center border-t border-gray-100 pt-4">
                                        <div className="flex-shrink-0 h-10 w-10 relative">
                                            {speakers["SB"].image ? (
                                                <Image
                                                    src={speakers["SB"].image}
                                                    alt={speakers["SB"].name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <span className="text-blue-600 font-medium text-sm">SB</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-800">{speakers["SB"].name}</p>
                                            <p className="text-xs text-gray-500">{speakers["SB"].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Session 8 */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 font-medium">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs mr-2">Piste 2</span>
                                            14:45 - 15:15
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badges.keynote}`}>
                                            Keynote CS
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-blue-700 mb-2">Devenir un CSM Stratégique</h3>
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        <span className="px-2 py-1 bg-orange-50 text-orange-700 text-xs rounded-full border border-orange-200">Étude de cas</span>
                                        <span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-200">Enterprise CS</span>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Vision, Transformation et Impact Client – Le Cas Orange et leur Transition vers la Fibre.
                                        Découvrez comment le Customer Success d&apos;Orange a joué un rôle stratégique dans la transition
                                        de leurs clients grands comptes vers la fibre optique, devenant un véritable partenaire de leur
                                        transformation numérique.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-700 text-sm mb-2">Points clés de la présentation :</h4>
                                        <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                                            <li>Positionnement du CS comme conseiller stratégique</li>
                                            <li>Développement d&apos;un framework de transformation client</li>
                                            <li>Méthodes pour quantifier l&apos;impact business</li>
                                            <li>Gestion du changement et adoption à grande échelle</li>
                                        </ul>
                                    </div>
                                    <div className="mt-5 flex items-center border-t border-gray-100 pt-4">
                                        <div className="flex-shrink-0 h-10 w-10 relative">
                                            {speakers["JCO"].image ? (
                                                <Image
                                                    src={speakers["JCO"].image}
                                                    alt={speakers["JCO"].name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <span className="text-blue-600 font-medium text-sm">JC</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-800">{speakers["JCO"].name}</p>
                                            <p className="text-xs text-gray-500">{speakers["JCO"].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Troisième colonne */}
                        <div className="space-y-6">
                            {/* Pause café après-midi */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-gradient-to-r from-cyan-50 to-blue-50">
                                <div className="p-6 text-center">
                                    <div className="text-3xl mb-2">☕</div>
                                    <h3 className="font-bold text-lg text-blue-700 mb-1">Pause café networking</h3>
                                    <p className="text-blue-700">15:15 - 15:45</p>
                                    <p className="text-blue-600 text-sm mt-3">
                                        Dernière pause de la journée pour échanger et réseauter
                                        <br />Café, thé et encas sont à votre disposition.
                                    </p>
                                </div>
                            </div>

                            {/* Session 9 */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 font-medium">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs mr-2">Piste 3</span>
                                            15:45 - 16:05
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badges.sponsor}`}>
                                            Keynote sponsors
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-blue-700 mb-2">The AI-Enhanced, Human-Led Future of Customer Success</h3>
                                    <div className="flex items-center mb-4">
                                        <div className="bg-yellow-50 rounded-lg px-2 py-1 text-xs text-yellow-700 font-medium border border-yellow-200">
                                            En anglais
                                        </div>
                                        <div className="ml-2 text-xs text-gray-500">
                                            Traduction simultanée disponible
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Comment l&apos;IA va transformer le métier de CSM sans le remplacer, mais en le rendant plus stratégique et impactant.
                                        Cette présentation explore :
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 mb-4">
                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded p-3 text-sm">
                                            <h4 className="font-semibold text-gray-700 mb-1">Pour les CSMs</h4>
                                            <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                                                <li>Compétences à développer</li>
                                                <li>Tâches à automatiser</li>
                                                <li>Focus sur la valeur ajoutée</li>
                                            </ul>
                                        </div>
                                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded p-3 text-sm">
                                            <h4 className="font-semibold text-gray-700 mb-1">Pour les leaders CS</h4>
                                            <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                                                <li>Réorganisation des équipes</li>
                                                <li>Évolution des rôles</li>
                                                <li>Nouvelles métriques</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex items-center border-t border-gray-100 pt-4">
                                        <div className="flex-shrink-0 h-10 w-10 relative">
                                            {speakers["KP"].image ? (
                                                <Image
                                                    src={speakers["KP"].image}
                                                    alt={speakers["KP"].name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <span className="text-blue-600 font-medium text-sm">KP</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-800">{speakers["KP"].name}</p>
                                            <p className="text-xs text-gray-500">{speakers["KP"].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Session 10 */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 font-medium">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs mr-2">Piste 3</span>
                                            16:15 - 16:45
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badges.fireside}`}>
                                            Keynote Leaders
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center mb-3">
                                        <h3 className="font-bold text-lg text-blue-700">Grandir sans exploser : le secret d&apos;un Customer Success scalable</h3>
                                        <span className="ml-2 px-2 py-1 bg-red-50 text-red-700 text-xs rounded-full">Top sessions</span>
                                    </div>
                                    <div className="bg-blue-50 rounded-lg p-3 mb-4 border-l-4 border-blue-300">
                                        <p className="text-blue-800 text-sm italic">&quot;La scalabilité n&apos;est pas un défi technique, c&apos;est avant tout un défi organisationnel et humain.&quot;</p>
                                    </div>
                                    <p className="text-gray-600 mb-4">
                                        Comment faire évoluer votre organisation CS à mesure que votre entreprise se développe.
                                        Basé sur l&apos;expérience réelle de scale-ups qui ont réussi à multiplier leur base client
                                        par 10 sans multiplier leurs équipes CS par 10.
                                    </p>
                                    <div className="bg-gray-50 p-3 rounded-lg mb-4">
                                        <h4 className="font-semibold text-gray-700 text-sm mb-2">Vous découvrirez :</h4>
                                        <ul className="list-disc list-inside text-gray-600 text-xs space-y-1">
                                            <li>Le modèle de segmentation client dynamique</li>
                                            <li>Les 4 niveaux d&apos;automatisation efficace</li>
                                            <li>L&apos;approche &quot;CS par les produits&quot;</li>
                                            <li>Les équipes CS spécialisées vs généralisées</li>
                                        </ul>
                                    </div>
                                    <div className="mt-5 flex items-center border-t border-gray-100 pt-4">
                                        <div className="flex-shrink-0 h-10 w-10 relative">
                                            {speakers["JP"].image ? (
                                                <Image
                                                    src={speakers["JP"].image}
                                                    alt={speakers["JP"].name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full object-cover"
                                                />
                                            ) : (
                                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                    <span className="text-blue-600 font-medium text-sm">JP</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-gray-800">{speakers["JP"].name}</p>
                                            <p className="text-xs text-gray-500">{speakers["JP"].role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Session 11 */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                                <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                                    <div className="flex justify-between items-center">
                                        <div className="text-sm text-gray-500 font-medium">
                                            <span className="inline-block px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs mr-2">Piste 3</span>
                                            16:45 - 17:15
                                        </div>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${badges.fireside}`}>
                                            Keynote Leaders
                                        </span>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-bold text-lg text-blue-700 mb-2">Faire du Customer Success un pilier stratégique</h3>
                                    <p className="text-gray-600 mb-4">
                                        Quelles clés pour embarquer le Comex et positionner le CS comme une fonction centrale de l&apos;entreprise ?
                                        Cette présentation en duo vous donnera des stratégies concrètes pour :
                                    </p>
                                    <div className="grid grid-cols-1 gap-3 mb-4">
                                        <div className="bg-gray-50 rounded p-3 text-sm">
                                            <h4 className="font-semibold text-gray-700 mb-1">Objectifs et KPIs stratégiques</h4>
                                            <p className="text-gray-600 text-xs">
                                                Définir et communiquer des métriques qui résonnent avec la direction,
                                                montrer l&apos;impact financier direct et indirect du CS.
                                            </p>
                                        </div>
                                        <div className="bg-gray-50 rounded p-3 text-sm">
                                            <h4 className="font-semibold text-gray-700 mb-1">Communication et storytelling</h4>
                                            <p className="text-gray-600 text-xs">
                                                Techniques pour présenter des données et cas clients de façon impactante,
                                                et construire un narratif convaincant pour la direction.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 relative">
                                                {speakers["FB"].image ? (
                                                    <Image
                                                        src={speakers["FB"].image}
                                                        alt={speakers["FB"].name}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                        <span className="text-blue-600 font-medium text-sm">FB</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-800">{speakers["FB"].name}</p>
                                                <p className="text-xs text-gray-500">{speakers["FB"].role}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-10 w-10 relative">
                                                {speakers["SO"].image ? (
                                                    <Image
                                                        src={speakers["SO"].image}
                                                        alt={speakers["SO"].name}
                                                        width={40}
                                                        height={40}
                                                        className="rounded-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                        <span className="text-blue-600 font-medium text-sm">SO</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="ml-3">
                                                <p className="text-sm font-medium text-gray-800">{speakers["SO"].name}</p>
                                                <p className="text-xs text-gray-500">{speakers["SO"].role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Clôture */}
                            <div className="border border-gray-200 rounded-xl shadow-sm overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50">
                                <div className="p-6 text-center">
                                    <div className="text-3xl mb-2">🎤</div>
                                    <h3 className="font-bold text-lg text-blue-700 mb-1">Clôture de la conférence</h3>
                                    <p className="text-blue-700">17:30 - 18:00</p>
                                    <p className="text-blue-600 text-sm mt-3">
                                        Synthèse de la journée et perspectives pour l&apos;avenir du Customer Success
                                        <br />Annonce du lieu et de la date pour Engage Paris 2026
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-16 max-w-3xl mx-auto">
                        <div className="bg-blue-50 rounded-xl shadow-sm p-6 mb-8">
                            <p className="text-blue-600 font-medium mb-2">* Programme susceptible de modifications</p>
                            <p className="text-gray-600 text-sm">
                                Des sessions peuvent être ajoutées ou modifiées jusqu&apos;au jour de l&apos;événement.
                                Consultez régulièrement cette page pour avoir les dernières informations.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800">Prêt à participer à l&apos;événement Customer Success de l&apos;année ?</h3>
                            <p className="text-gray-600">Réservez votre place dès maintenant et rejoignez plus de 500 professionnels du CS</p>
                            <Link href="/inscription" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all">
                                S&apos;inscrire à l&apos;événement
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white mt-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-6">Rejoignez la communauté Customer Success</h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Engage Paris est l&apos;événement de référence pour les professionnels du Customer Success en France.
                            Une journée pour apprendre, échanger et développer votre réseau.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/inscription" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-lg transition-all">
                                S&apos;inscrire à l&apos;événement
                            </Link>
                            <Link href="/streaming" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-800 transition-all">
                                Accéder au streaming
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-blue-200 text-sm">
                        Pour toute question concernant le programme :<br />
                        <a href="mailto:programme@engage-paris.com" className="text-white hover:underline">programme@engage-paris.com</a>
                    </p>
                </div>
            </section>
        </div>
    );
} 