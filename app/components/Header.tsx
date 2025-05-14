'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/images/logo.png';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0">
                        <Link href="/" className="flex items-center">
                            <Image src={logo} alt="Engage Paris" width={100} height={100} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link href="https://engage-paris-lp.vercel.app/" className="text-gray-700 hover:text-blue-600 font-medium">
                            L&apos;événement
                        </Link>
                        <Link href="/programme" className="text-gray-700 hover:text-blue-600 font-medium">
                            Programme
                        </Link>
                        <Link href="/streaming" className="text-gray-700 hover:text-blue-600 font-medium">
                            Streaming
                        </Link>
                        <Link href="/speakers" className="text-gray-700 hover:text-blue-600 font-medium">
                            Intervenir
                        </Link>
                        <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium">
                            Blog
                        </Link>
                        <Link href="/podcast" className="text-gray-700 hover:text-blue-600 font-medium">
                            Podcast
                        </Link>
                    </nav>

                    <div className="hidden md:flex">
                        <Link href="/inscription" className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            S&apos;inscrire
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            <span className="sr-only">Ouvrir le menu</span>
                            {!isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link href="/evenement" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            L&apos;événement
                        </Link>
                        <Link href="/programme" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            Programme
                        </Link>
                        <Link href="/streaming" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            Streaming
                        </Link>
                        <Link href="/speakers" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            Intervenir
                        </Link>
                        <Link href="/blog" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            Blog
                        </Link>
                        <Link href="/podcast" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">
                            Podcast
                        </Link>
                        <Link href="/inscription" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
                            S&apos;inscrire
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
} 