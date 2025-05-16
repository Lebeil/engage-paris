'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AnimationContextType {
    isHeroLoaded: boolean;
    isFeaturedLoaded: boolean;
    isCtaLoaded: boolean;
    setHeroLoaded: (loaded: boolean) => void;
    setFeaturedLoaded: (loaded: boolean) => void;
    setCtaLoaded: (loaded: boolean) => void;
}

const defaultContext: AnimationContextType = {
    isHeroLoaded: false,
    isFeaturedLoaded: false,
    isCtaLoaded: false,
    setHeroLoaded: () => { },
    setFeaturedLoaded: () => { },
    setCtaLoaded: () => { },
};

const AnimationContext = createContext<AnimationContextType>(defaultContext);

export const useAnimationContext = () => useContext(AnimationContext);

// Fonction sécurisée pour accéder à sessionStorage uniquement côté client
const safeSessionStorage = {
    getItem: (key: string): string | null => {
        if (typeof window !== 'undefined') {
            return sessionStorage.getItem(key);
        }
        return null;
    },
    setItem: (key: string, value: string): void => {
        if (typeof window !== 'undefined') {
            sessionStorage.setItem(key, value);
        }
    }
};

export default function AnimationProvider({ children }: { children: ReactNode }) {
    // Utiliser une approche avec sessionStorage pour conserver l'état entre les navigations
    const [isHeroLoaded, setHeroLoaded] = useState(false);
    const [isFeaturedLoaded, setFeaturedLoaded] = useState(false);
    const [isCtaLoaded, setCtaLoaded] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    // Effet pour marquer le montage côté client
    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        // S'exécuter uniquement côté client après le montage
        if (!isMounted) return;

        // Utiliser sessionStorage pour se souvenir de l'état précédent
        const heroLoaded = safeSessionStorage.getItem('heroLoaded') === 'true';
        const featuredLoaded = safeSessionStorage.getItem('featuredLoaded') === 'true';
        const ctaLoaded = safeSessionStorage.getItem('ctaLoaded') === 'true';

        setHeroLoaded(heroLoaded);
        setFeaturedLoaded(featuredLoaded);
        setCtaLoaded(ctaLoaded);

        // Au premier chargement, définir tous les états à true après un bref délai
        if (!heroLoaded && !featuredLoaded && !ctaLoaded) {
            const timer = setTimeout(() => {
                setHeroLoaded(true);
                setFeaturedLoaded(true);
                setCtaLoaded(true);
                safeSessionStorage.setItem('heroLoaded', 'true');
                safeSessionStorage.setItem('featuredLoaded', 'true');
                safeSessionStorage.setItem('ctaLoaded', 'true');
            }, 300);

            return () => clearTimeout(timer);
        }
    }, [isMounted]);

    // Mettre à jour le sessionStorage lorsque les états changent
    useEffect(() => {
        if (isMounted) {
            safeSessionStorage.setItem('heroLoaded', isHeroLoaded.toString());
        }
    }, [isHeroLoaded, isMounted]);

    useEffect(() => {
        if (isMounted) {
            safeSessionStorage.setItem('featuredLoaded', isFeaturedLoaded.toString());
        }
    }, [isFeaturedLoaded, isMounted]);

    useEffect(() => {
        if (isMounted) {
            safeSessionStorage.setItem('ctaLoaded', isCtaLoaded.toString());
        }
    }, [isCtaLoaded, isMounted]);

    return (
        <AnimationContext.Provider
            value={{
                isHeroLoaded,
                isFeaturedLoaded,
                isCtaLoaded,
                setHeroLoaded,
                setFeaturedLoaded,
                setCtaLoaded
            }}
        >
            {children}
        </AnimationContext.Provider>
    );
} 