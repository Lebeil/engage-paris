import Image from 'next/image';
import { Mulish } from 'next/font/google';

// Définition des types pour les événements du programme
type Speaker = {
    name: string;
    role: string;
    company: string;
    imageUrl: string;
};

type EventSession = {
    id: string;
    startTime: string;
    endTime: string;
    title: string;
    location: string;
    description: string;
    tags: string[];
    speakers: Speaker[];
    language?: string; // fr ou en pour français ou anglais
    isFull?: boolean;
};

const mulish = Mulish({
    subsets: ['latin'],
    display: 'swap',
});

export default function Programme() {
    // Données du programme pour le 24 juin 2025
    const sessions: EventSession[] = [
        {
            id: "accueil",
            startTime: "08:30",
            endTime: "09:15",
            title: "Accueil des participants ☕",
            location: "Forum",
            description: "",
            tags: ["Networking"],
            speakers: [],
            isFull: false
        },
        {
            id: "session-ouverture",
            startTime: "09:15",
            endTime: "09:55",
            title: "Session d'ouverture",
            location: "Auditorium",
            description: "Bienvenue à Engage Paris 2025",
            tags: ["Conférence"],
            speakers: [
                {
                    name: "Sue Nabeih Moore",
                    role: "Customer Experience Manager",
                    company: "Acme",
                    imageUrl: "/images/speaker1.jpg"
                },
                {
                    name: "Justine Audibert",
                    role: "Co-fondatrice",
                    company: "Engage Paris",
                    imageUrl: "/images/speaker3.jpg"
                },
                {
                    name: "Valentin Lage",
                    role: "Co-fondateur",
                    company: "Engage Paris",
                    imageUrl: "/images/speaker2.jpg"
                },
                {
                    name: "Gabrielle de Lamarre",
                    role: "CSM Leader",
                    company: "Tech.io",
                    imageUrl: "/images/speaker4.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "event-surprise",
            startTime: "09:55",
            endTime: "10:10",
            title: "Événement surprise !",
            location: "Le Jardin",
            description: "",
            tags: ["Activité"],
            speakers: [],
            isFull: false
        },
        {
            id: "au-coeur-cs",
            startTime: "10:10",
            endTime: "10:50",
            title: "Au cœur du CS",
            location: "Auditorium",
            description: "L'Intelligence Artificielle, présent ou futur incontournable du Customer Success ? Dans cette session, découvrez le sujet, ses promesses et ses limites.",
            tags: ["IA", "CS"],
            speakers: [
                {
                    name: "Sébastien Brun",
                    role: "Director CX",
                    company: "TechProgress",
                    imageUrl: "/images/speaker2.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "real-world-cs",
            startTime: "10:10",
            endTime: "10:50",
            title: "Real world CS strategies to crush NRR (en anglais)",
            location: "Auditorium 2",
            description: "Apprenez les stratégies les plus performantes utilisées par les entreprises pionnières en matière de NRR grâce à cette session pratique.",
            tags: ["Conférence"],
            language: "en",
            speakers: [
                {
                    name: "Stephanie Martinez",
                    role: "VP Customer Success",
                    company: "GlobalTech",
                    imageUrl: "/images/speaker3.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "pause-matin",
            startTime: "10:50",
            endTime: "11:05",
            title: "Pause du matin ☕",
            location: "Atrium",
            description: "",
            tags: ["Networking"],
            speakers: [],
            isFull: false
        },
        {
            id: "collaboration-win-win",
            startTime: "11:05",
            endTime: "11:50",
            title: "CS & Product : modèle d'une collaboration win-win pour faire de vos clients des champions",
            location: "Auditorium",
            description: "Forte de 8 années, c'est bien plus qu'une expérience réussie qui se dégage de cette relation. Trop souvent, la question est posée comment CS et Product doivent collaborer.",
            tags: ["Conférence"],
            speakers: [
                {
                    name: "Antoine Leveque",
                    role: "Head of CS",
                    company: "Planhat",
                    imageUrl: "/images/speaker4.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "plan-compensation",
            startTime: "11:05",
            endTime: "11:50",
            title: "Comment élaborer un plan de compensation juste et motivant pour votre équipe de Customer Success",
            location: "Salle Claire",
            description: "Définissez un cadre incitatif qui valorise et récompense efficacement votre équipe Customer Success afin de paramétrer vos KPIs",
            tags: ["Workshop"],
            speakers: [
                {
                    name: "David Kadeck",
                    role: "Senior CS Advisor",
                    company: "SuccessGraph",
                    imageUrl: "/images/speaker1.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "scaling-up",
            startTime: "11:05",
            endTime: "11:50",
            title: "De la startup à la scale-up : comment garder toutes les équipes alignées",
            location: "Mezzanine",
            description: "Cette session dynamique vous présentera une approche pratique et concrète pour maintenir l'alignement de toutes vos équipes en période de croissance rapide.",
            tags: ["Conférence", "Scale"],
            speakers: [
                {
                    name: "Claire Duclercq",
                    role: "Directrice CS",
                    company: "Growth SaaS",
                    imageUrl: "/images/speaker2.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "dejeuner",
            startTime: "11:50",
            endTime: "13:30",
            title: "Déjeuner 🍽️",
            location: "Atrium",
            description: "",
            tags: ["Pause"],
            speakers: [],
            isFull: false
        },
        {
            id: "frameworks-cs",
            startTime: "13:30",
            endTime: "14:15",
            title: "Frameworks & Customer Success : lesquels pour quel cas d'usage ?",
            location: "Auditorium",
            description: "Les frameworks sont parfois mal compris et rarement exploités pleinement. Cette session pratique vous aidera à identifier lesquels utiliser en fonction de vos besoins spécifiques.",
            tags: ["Workshop"],
            speakers: [
                {
                    name: "Matthieu Lemonnier",
                    role: "CS Consultant",
                    company: "CS Metrix",
                    imageUrl: "/images/speaker3.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "outils-performance",
            startTime: "13:30",
            endTime: "14:15",
            title: "Quels outils choisir pour optimiser vos performances opérationnelles et gérer efficacement votre portefeuille ?",
            location: "Opéra",
            description: "Dans cette session pratique, abordez tous les outils et techniques en technicien confirmé pour optimiser efficacement vos conversations.",
            tags: ["Tech", "Outils"],
            speakers: [
                {
                    name: "Eloise Griveseau",
                    role: "Head of RevOps",
                    company: "SucessHub",
                    imageUrl: "/images/speaker4.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "demandes-clients",
            startTime: "13:45",
            endTime: "14:30",
            title: "Comment interpréter ce que vos clients demandent vraiment et maintenant ?",
            location: "Auditorium 2",
            description: "Dans les repaires des experts de la relation client et de la product discovery, Sébastien vous emmènera au-delà d'une offre de Customer Success classique.",
            tags: ["Expertise"],
            speakers: [
                {
                    name: "Sebastien Brun",
                    role: "Director CX",
                    company: "TechProgress",
                    imageUrl: "/images/speaker2.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "cafe-reseautage",
            startTime: "14:30",
            endTime: "15:00",
            title: "Pause café ☕",
            location: "Atrium",
            description: "",
            tags: ["Networking"],
            speakers: [],
            isFull: false
        },
        {
            id: "version-saas-onprem",
            startTime: "15:00",
            endTime: "15:45",
            title: "Pivoter l'expérience SaaS version On-Premise : comment booster l'adoption par CS et Partner",
            location: "Salle Symphonie",
            description: "Découvrez les meilleures pratiques pour une transition réussie du modèle SaaS vers une préservation des acquis on-premise.",
            tags: ["Conférence"],
            speakers: [
                {
                    name: "Vincent Withollen",
                    role: "Partner Success Lead",
                    company: "CloudFlex",
                    imageUrl: "/images/speaker4.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "risque-process",
            startTime: "15:00",
            endTime: "15:45",
            title: "Prévention et gestion du risque : la clé d'un Customer Success proactif",
            location: "Mezzanine",
            description: "Le Risk Management, bien plus qu'une case à cocher ! Découvrez comment la gestion du risque commence quand un client...",
            tags: ["Workshop"],
            speakers: [
                {
                    name: "Laurianne Zuddio-Gonzalez",
                    role: "Risk Management Officer",
                    company: "SuccessLabs",
                    imageUrl: "/images/speaker1.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "detection-symptomes",
            startTime: "15:00",
            endTime: "15:45",
            title: "Au service des clients et des équipes CS avec les trois symptômes",
            location: "Salle Corail",
            description: "Nous vous raconterons la transformation digitale du Service en 2018. Nous expliquerons ensuite LA détection des symptômes.",
            tags: ["Méthode"],
            speakers: [
                {
                    name: "Judith Burton",
                    role: "VP Service Delivery",
                    company: "MeltingSpot",
                    imageUrl: "/images/speaker3.jpg"
                },
                {
                    name: "Radhima Abaliwea",
                    role: "Senior CS Director",
                    company: "StratégiX",
                    imageUrl: "/images/speaker2.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "csm-strategique",
            startTime: "15:45",
            endTime: "16:15",
            title: "Devenir un CSM stratégique : vision, transformation et impact pour votre entreprise",
            location: "Auditorium",
            description: "Participez JE-ME-Craig (Principal Value Engagement) pour une session expérientielle qui vous transformera en CSM Stratégique qui...",
            tags: ["Transformation"],
            speakers: [
                {
                    name: "Jennifer Emery",
                    role: "Principal CSM",
                    company: "TechForce",
                    imageUrl: "/images/speaker4.jpg"
                }
            ],
            isFull: true
        },
        {
            id: "cafe-afternoon",
            startTime: "16:15",
            endTime: "16:45",
            title: "Pause café finale ☕",
            location: "Atrium",
            description: "",
            tags: ["Networking"],
            speakers: [],
            isFull: false
        },
        {
            id: "ai-enhanced-playbooks",
            startTime: "16:45",
            endTime: "17:30",
            title: "The AI-enhanced Playbooks (en anglais)",
            location: "Salle Ouest",
            description: "Join this hands-on session with Customer Success AI specialists to discover how machine learning transforms your Customer Success playbooks.",
            tags: ["IA", "Tech"],
            language: "en",
            speakers: [
                {
                    name: "James Cooper",
                    role: "AI CS Specialist",
                    company: "CustomerAI",
                    imageUrl: "/images/speaker1.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "worldcafe",
            startTime: "16:45",
            endTime: "17:30",
            title: "Mixer, itérer et développer des playbooks clients (format World Café)",
            location: "Grand Salon",
            description: "Ce format innovant de Customer Success Workshop vous permettra de co-créer des playbooks avec vos pairs puis d'itérer en petits groupes.",
            tags: ["Workshop", "Collaboratif"],
            speakers: [
                {
                    name: "Marine Dupont",
                    role: "Head of CS Operations",
                    company: "ColabTech",
                    imageUrl: "/images/speaker3.jpg"
                }
            ],
            isFull: false
        },
        {
            id: "cocktail-fin",
            startTime: "17:30",
            endTime: "19:00",
            title: "Cocktail de clôture 🍸",
            location: "Terrasse",
            description: "Rejoignez-nous pour célébrer cette journée exceptionnelle autour d'un cocktail et prolongez les échanges dans un cadre convivial.",
            tags: ["Networking"],
            speakers: [],
            isFull: false
        }
    ];

    // Filtrer les sessions pour n'afficher que celles du jour sélectionné
    const sessionsOfDay = sessions;

    return (
        <div className={`min-h-screen bg-gray-50 py-10 ${mulish.className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-8">
                    Programme - Visiteurs
                </h1>

                {/* Barre de recherche */}
                <div className="max-w-md mx-auto mb-8">
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="Rechercher une session, un speaker..."
                        />
                    </div>
                </div>

                {/* Date */}
                <div className="text-xl font-semibold text-center mb-8 text-primary">
                    Mardi, 24 juin 2025
                </div>

                {/* Filtres */}
                <div className="mb-8 flex flex-wrap justify-center gap-2">
                    <span className="text-xs bg-secondary text-white px-3 py-1 rounded-full cursor-pointer hover:bg-secondary-dark transition-colors">
                        Tous
                    </span>
                    <span className="text-xs bg-white text-gray-700 border border-gray-300 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
                        Conférences
                    </span>
                    <span className="text-xs bg-white text-gray-700 border border-gray-300 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
                        Workshops
                    </span>
                    <span className="text-xs bg-white text-gray-700 border border-gray-300 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
                        Networking
                    </span>
                    <span className="text-xs bg-white text-gray-700 border border-gray-300 px-3 py-1 rounded-full cursor-pointer hover:bg-gray-50 transition-colors">
                        En anglais
                    </span>
                </div>

                {/* Grille des sessions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {sessionsOfDay.map((session) => (
                        <div key={session.id} className="bg-white rounded-lg shadow overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
                            {/* En-tête avec horaire */}
                            <div className="px-4 py-2 bg-primary text-white flex items-center text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="font-medium text-xs">Mar., 24 juin</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="font-medium text-xs">{session.startTime} - {session.endTime}</span>
                            </div>

                            {/* Contenu de la session */}
                            <div className="p-4">
                                <h3 className="text-base font-bold text-primary mb-2">
                                    {session.title}
                                    {session.language === 'en' && <span className="ml-2 text-xs text-secondary font-normal">(en anglais)</span>}
                                </h3>

                                {/* Lieu */}
                                <div className="flex items-center text-gray-600 mb-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="text-xs">{session.location}</span>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {session.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${tag === 'Conférence' ? 'bg-secondary text-white' :
                                                tag === 'Networking' ? 'bg-primary/10 text-primary' :
                                                    tag === 'Activité' ? 'bg-green-600 text-white' :
                                                        tag === 'Workshop' ? 'bg-orange-500 text-white' :
                                                            tag === 'Pause' ? 'bg-gray-200 text-gray-800' :
                                                                'bg-blue-600 text-white'
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                    {session.isFull && (
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-red-100 text-red-800">
                                            Complet
                                        </span>
                                    )}
                                </div>

                                {/* Description */}
                                {session.description && (
                                    <p className="text-xs text-gray-600 mb-3 line-clamp-3">
                                        {session.description}
                                    </p>
                                )}

                                {/* Bouton "Afficher plus" pour les descriptions longues */}
                                {session.description && session.description.length > 100 && (
                                    <button className="text-[10px] text-secondary hover:text-secondary-dark mb-3">
                                        Afficher plus
                                    </button>
                                )}

                                {/* Conférenciers */}
                                {session.speakers.length > 0 && (
                                    <div>
                                        <h4 className="text-xs font-semibold text-gray-700 mb-2">
                                            Conférenciers
                                        </h4>
                                        <div className="space-y-2">
                                            {session.speakers.map((speaker, index) => (
                                                <div key={index} className="flex items-center">
                                                    <div className="flex-shrink-0 h-8 w-8">
                                                        <Image
                                                            className="h-8 w-8 rounded-full object-cover"
                                                            src={speaker.imageUrl}
                                                            alt={speaker.name}
                                                            width={32}
                                                            height={32}
                                                        />
                                                    </div>
                                                    <div className="ml-2">
                                                        <p className="text-xs font-medium text-gray-900">{speaker.name}</p>
                                                        <p className="text-[10px] text-gray-500">{speaker.role} | {speaker.company}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Bouton d'inscription */}
                                {!session.tags.includes('Pause') && !session.tags.includes('Networking') && (
                                    <div className="mt-4 flex justify-end">
                                        <button
                                            disabled={session.isFull}
                                            className={`text-xs px-3 py-1 rounded ${session.isFull
                                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                : 'bg-secondary text-white hover:bg-secondary-dark'
                                                }`}
                                        >
                                            {session.isFull ? 'Complet' : 'S\'inscrire'}
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
} 