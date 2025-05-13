import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.png';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo et description */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center">
                            <Image src={logo} alt="Engage Paris" width={100} height={100} />
                        </Link>
                        <p className="mt-4 text-gray-300 text-sm">
                            La conférence annuelle de référence pour les professionnels du Customer Success Management en France.
                            Rejoignez les leaders et experts CSM pour partager les meilleures pratiques et les dernières innovations.
                        </p>
                    </div>

                    {/* Navigation rapide */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-300">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/evenement" className="text-gray-300 hover:text-white">
                                    L&apos;événement
                                </Link>
                            </li>
                            <li>
                                <Link href="/streaming" className="text-gray-300 hover:text-white">
                                    Streaming
                                </Link>
                            </li>
                            <li>
                                <Link href="/speakers" className="text-gray-300 hover:text-white">
                                    Devenir intervenant
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="text-gray-300 hover:text-white">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/podcast" className="text-gray-300 hover:text-white">
                                    Podcast
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-blue-300">Contact</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <a href="mailto:contact@engageparis.fr" className="hover:text-white">contact@engageparis.fr</a>
                            </li>
                            <li className="flex items-center text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Paris, France</span>
                            </li>
                            <li className="mt-4">
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        <span className="sr-only">LinkedIn</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.48C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
                                        </svg>
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
                    <div className="flex flex-col md:flex-row justify-between">
                        <p>&copy; {new Date().getFullYear()} Engage Paris. Tous droits réservés.</p>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link>
                            <Link href="/politique-confidentialite" className="hover:text-white">Politique de confidentialité</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
} 