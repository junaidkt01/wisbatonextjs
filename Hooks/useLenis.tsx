"use client"

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
};

// useEffect(() => {
//     const lenis = new Lenis({
//         duration: 1.2,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//         smoothWheel: true,
//     });

//     function raf(time: any) {
//         lenis.raf(time);
//         requestAnimationFrame(raf);
//     }

//     requestAnimationFrame(raf);

//     return () => {
//         lenis.destroy();
//     };
// }, []);