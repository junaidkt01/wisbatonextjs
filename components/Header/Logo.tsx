"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const svg1 = `<svg width="178" height="21" viewBox="0 0 221 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_670_361)">
<path d="M9.04979 22.6723H31.2393V0H33.4619V24.8949H9.04979C7.80345 24.8949 6.63368 24.6588 5.53835 24.1867C4.44301 23.7145 3.48167 23.0658 2.65645 22.2385C1.8291 21.4132 1.18041 20.4519 0.708245 19.3566C0.236082 18.2612 0 17.0915 0 15.8451V0H2.22257V15.8685C2.22257 16.815 2.3991 17.7019 2.75429 18.5292C3.10947 19.3566 3.59652 20.0776 4.21969 20.6901C4.84286 21.3026 5.566 21.7854 6.39334 22.1406C7.21857 22.4958 8.10547 22.6723 9.04979 22.6723Z" fill="white"/>
<path d="M38.9706 6.08936H36.748V24.8951H38.9706V6.08936Z" fill="white"/>
<path d="M42.2544 9.01789C42.2544 7.77368 42.4905 6.60178 42.9626 5.50857C43.4348 4.41324 44.0835 3.45828 44.9108 2.64156C45.7361 1.82485 46.6974 1.18041 47.7927 0.708245C48.8881 0.236082 50.06 0 51.3042 0H75.7163V2.22257H51.3042C50.3599 2.22257 49.473 2.3991 48.6477 2.75429C47.8204 3.10734 47.0973 3.59227 46.4741 4.20268C45.8509 4.81521 45.3639 5.53409 45.0087 6.36144C44.6535 7.18879 44.477 8.07357 44.477 9.01789V11.3362H75.7163V15.8451C75.7163 17.0893 75.4802 18.2612 75.0081 19.3544C74.5359 20.4498 73.8851 21.4111 73.0599 22.2363C72.2325 23.0637 71.2733 23.7124 70.178 24.1845C69.0826 24.6567 67.9128 24.8928 66.6665 24.8928H42.2544V22.6702H66.6665C67.6108 22.6702 68.4977 22.4916 69.323 22.1364C70.1503 21.7812 70.8734 21.2963 71.4966 20.6816C72.1198 20.0669 72.6068 19.3459 72.962 18.5165C73.3172 17.687 73.4937 16.7979 73.4937 15.8494V13.5587H42.2544V9.01789Z" fill="white"/>
<path d="M109.406 12.4315C110.329 13.0547 111.037 13.7906 111.533 14.6371C112.026 15.4857 112.322 16.3704 112.418 17.2935C112.513 18.2166 112.428 19.1354 112.16 20.0478C111.892 20.9602 111.463 21.7706 110.871 22.4788C110.28 23.187 109.546 23.7677 108.666 24.2186C107.785 24.6695 106.786 24.8949 105.671 24.8949H79.0024V0H105.669C106.786 0 107.783 0.221194 108.664 0.659327C109.544 1.09959 110.278 1.67809 110.869 2.3991C111.46 3.11798 111.888 3.92831 112.158 4.8301C112.426 5.73189 112.513 6.64431 112.415 7.56737C112.318 8.49043 112.022 9.38158 111.531 10.2408C111.037 11.1001 110.329 11.8317 109.406 12.4315ZM105.669 2.22257H81.225V11.3362H105.669C106.656 11.3362 107.487 11.1107 108.164 10.6598C108.84 10.2089 109.34 9.64531 109.661 8.96897C109.982 8.29263 110.148 7.56312 110.161 6.77831C110.172 5.99562 110.006 5.26398 109.661 4.58764C109.317 3.9113 108.819 3.34768 108.164 2.89678C107.511 2.44802 106.677 2.22257 105.669 2.22257ZM105.669 22.6723C106.656 22.6723 107.487 22.4469 108.164 21.9939C108.84 21.5408 109.34 20.9815 109.661 20.3137C109.982 19.6458 110.148 18.912 110.161 18.1166C110.172 17.319 110.006 16.5874 109.661 15.9196C109.317 15.2517 108.819 14.6924 108.164 14.2393C107.509 13.7863 106.677 13.5609 105.669 13.5609H81.225V22.6745H105.669V22.6723Z" fill="white"/>
<path d="M115.75 9.01789C115.75 7.77368 115.986 6.60178 116.458 5.50644C116.931 4.41111 117.579 3.45615 118.407 2.63943C119.234 1.82272 120.193 1.17828 121.289 0.706118C122.384 0.236082 123.554 0 124.8 0H140.162C141.407 0 142.578 0.236082 143.674 0.708245C144.769 1.18041 145.73 1.82485 146.556 2.64156C147.383 3.45828 148.032 4.41324 148.504 5.50857C148.976 6.6039 149.212 7.77368 149.212 9.02002V24.897H146.99V18.0698H117.971V24.897H115.748V9.01789H115.75ZM146.99 15.8451V9.01789C146.99 8.07356 146.813 7.18879 146.458 6.36144C146.105 5.53622 145.616 4.81521 144.992 4.20268C144.369 3.59014 143.644 3.10734 142.819 2.75428C141.991 2.3991 141.107 2.22257 140.162 2.22257H124.8C123.856 2.22257 122.969 2.3991 122.144 2.75428C121.316 3.10734 120.591 3.59227 119.97 4.20268C119.347 4.81521 118.86 5.53409 118.504 6.36144C118.149 7.18879 117.973 8.07356 117.973 9.01789V15.8451H146.99Z" fill="white"/>
<path d="M185.862 2.22257H170.306V24.8949H168.084V2.22257H152.496V0H185.862V2.22257Z" fill="white"/>
<path d="M187.538 9.01789C187.538 7.77368 187.774 6.60178 188.247 5.50644C188.719 4.41111 189.363 3.45615 190.18 2.63943C190.997 1.82272 191.951 1.18041 193.047 0.706118C194.14 0.236082 195.32 0 196.588 0H211.95C213.195 0 214.366 0.236082 215.462 0.708245C216.557 1.18041 217.512 1.82485 218.329 2.64156C219.146 3.45828 219.794 4.41324 220.277 5.50857C220.76 6.6039 221.002 7.77368 221.002 9.02002V15.8472C221.002 17.0936 220.76 18.2634 220.277 19.3587C219.794 20.454 219.143 21.409 218.329 22.2257C217.512 23.0424 216.557 23.6911 215.462 24.1739C214.366 24.6567 213.197 24.8992 211.95 24.8992H196.588C195.32 24.8992 194.14 24.6567 193.045 24.1739C191.949 23.6911 190.994 23.0424 190.178 22.2257C189.361 21.4111 188.717 20.454 188.244 19.3587C187.772 18.2634 187.536 17.0936 187.536 15.8472V9.01789H187.538ZM218.778 9.02852C218.778 8.08207 218.601 7.20155 218.246 6.38271C217.891 5.566 217.404 4.84499 216.78 4.22182C216.157 3.59865 215.432 3.10947 214.607 2.75428C213.779 2.3991 212.895 2.22257 211.95 2.22257H196.588C195.622 2.22257 194.731 2.3991 193.915 2.75428C193.098 3.10947 192.379 3.59865 191.756 4.22182C191.133 4.84499 190.646 5.566 190.29 6.38271C189.935 7.19942 189.759 8.08207 189.759 9.02852V15.8664C189.759 16.8128 189.935 17.6997 190.29 18.5271C190.643 19.3544 191.133 20.0818 191.756 20.705C192.379 21.3282 193.098 21.8131 193.915 22.1576C194.731 22.5022 195.622 22.6745 196.588 22.6745H211.95C212.895 22.6745 213.782 22.5022 214.607 22.1576C215.432 21.8131 216.157 21.3303 216.78 20.705C217.404 20.0818 217.891 19.3566 218.246 18.5271C218.599 17.6997 218.778 16.8128 218.778 15.8664V9.02852Z" fill="white"/>
<path d="M38.9706 0H36.748V6.27849H38.9706V0Z" fill="#F7931E"/>
<path d="M18.9374 0H16.7148V20.4179H18.9374V0Z" fill="#F7931E"/>
<path d="M196.792 14.3541V10.4236C196.792 10.0089 197.128 9.67285 197.543 9.67285H210.98C211.395 9.67285 211.731 10.0089 211.731 10.4236V14.3541C211.731 14.7688 211.395 15.1049 210.98 15.1049H197.543C197.128 15.1049 196.792 14.7688 196.792 14.3541Z" fill="#F7931E"/>
</g>
<defs>
<clipPath id="clip0_670_361">
<rect width="221" height="24.8949" fill="white"/>
</clipPath>
</defs>
</svg>
`
const svg2 = `<svg width="178" height="21" viewBox="0 0 221 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_670_361)">
<path d="M9.04979 22.6723H31.2393V0H33.4619V24.8949H9.04979C7.80345 24.8949 6.63368 24.6588 5.53835 24.1867C4.44301 23.7145 3.48167 23.0658 2.65645 22.2385C1.8291 21.4132 1.18041 20.4519 0.708245 19.3566C0.236082 18.2612 0 17.0915 0 15.8451V0H2.22257V15.8685C2.22257 16.815 2.3991 17.7019 2.75429 18.5292C3.10947 19.3566 3.59652 20.0776 4.21969 20.6901C4.84286 21.3026 5.566 21.7854 6.39334 22.1406C7.21857 22.4958 8.10547 22.6723 9.04979 22.6723Z" fill="black"/>
<path d="M38.9706 6.08936H36.748V24.8951H38.9706V6.08936Z" fill="black"/>
<path d="M42.2544 9.01789C42.2544 7.77368 42.4905 6.60178 42.9626 5.50857C43.4348 4.41324 44.0835 3.45828 44.9108 2.64156C45.7361 1.82485 46.6974 1.18041 47.7927 0.708245C48.8881 0.236082 50.06 0 51.3042 0H75.7163V2.22257H51.3042C50.3599 2.22257 49.473 2.3991 48.6477 2.75429C47.8204 3.10734 47.0973 3.59227 46.4741 4.20268C45.8509 4.81521 45.3639 5.53409 45.0087 6.36144C44.6535 7.18879 44.477 8.07357 44.477 9.01789V11.3362H75.7163V15.8451C75.7163 17.0893 75.4802 18.2612 75.0081 19.3544C74.5359 20.4498 73.8851 21.4111 73.0599 22.2363C72.2325 23.0637 71.2733 23.7124 70.178 24.1845C69.0826 24.6567 67.9128 24.8928 66.6665 24.8928H42.2544V22.6702H66.6665C67.6108 22.6702 68.4977 22.4916 69.323 22.1364C70.1503 21.7812 70.8734 21.2963 71.4966 20.6816C72.1198 20.0669 72.6068 19.3459 72.962 18.5165C73.3172 17.687 73.4937 16.7979 73.4937 15.8494V13.5587H42.2544V9.01789Z" fill="black"/>
<path d="M109.406 12.4315C110.329 13.0547 111.037 13.7906 111.533 14.6371C112.026 15.4857 112.322 16.3704 112.418 17.2935C112.513 18.2166 112.428 19.1354 112.16 20.0478C111.892 20.9602 111.463 21.7706 110.871 22.4788C110.28 23.187 109.546 23.7677 108.666 24.2186C107.785 24.6695 106.786 24.8949 105.671 24.8949H79.0024V0H105.669C106.786 0 107.783 0.221194 108.664 0.659327C109.544 1.09959 110.278 1.67809 110.869 2.3991C111.46 3.11798 111.888 3.92831 112.158 4.8301C112.426 5.73189 112.513 6.64431 112.415 7.56737C112.318 8.49043 112.022 9.38158 111.531 10.2408C111.037 11.1001 110.329 11.8317 109.406 12.4315ZM105.669 2.22257H81.225V11.3362H105.669C106.656 11.3362 107.487 11.1107 108.164 10.6598C108.84 10.2089 109.34 9.64531 109.661 8.96897C109.982 8.29263 110.148 7.56312 110.161 6.77831C110.172 5.99562 110.006 5.26398 109.661 4.58764C109.317 3.9113 108.819 3.34768 108.164 2.89678C107.511 2.44802 106.677 2.22257 105.669 2.22257ZM105.669 22.6723C106.656 22.6723 107.487 22.4469 108.164 21.9939C108.84 21.5408 109.34 20.9815 109.661 20.3137C109.982 19.6458 110.148 18.912 110.161 18.1166C110.172 17.319 110.006 16.5874 109.661 15.9196C109.317 15.2517 108.819 14.6924 108.164 14.2393C107.509 13.7863 106.677 13.5609 105.669 13.5609H81.225V22.6745H105.669V22.6723Z" fill="black"/>
<path d="M115.75 9.01789C115.75 7.77368 115.986 6.60178 116.458 5.50644C116.931 4.41111 117.579 3.45615 118.407 2.63943C119.234 1.82272 120.193 1.17828 121.289 0.706118C122.384 0.236082 123.554 0 124.8 0H140.162C141.407 0 142.578 0.236082 143.674 0.708245C144.769 1.18041 145.73 1.82485 146.556 2.64156C147.383 3.45828 148.032 4.41324 148.504 5.50857C148.976 6.6039 149.212 7.77368 149.212 9.02002V24.897H146.99V18.0698H117.971V24.897H115.748V9.01789H115.75ZM146.99 15.8451V9.01789C146.99 8.07356 146.813 7.18879 146.458 6.36144C146.105 5.53622 145.616 4.81521 144.992 4.20268C144.369 3.59014 143.644 3.10734 142.819 2.75428C141.991 2.3991 141.107 2.22257 140.162 2.22257H124.8C123.856 2.22257 122.969 2.3991 122.144 2.75428C121.316 3.10734 120.591 3.59227 119.97 4.20268C119.347 4.81521 118.86 5.53409 118.504 6.36144C118.149 7.18879 117.973 8.07356 117.973 9.01789V15.8451H146.99Z" fill="black"/>
<path d="M185.862 2.22257H170.306V24.8949H168.084V2.22257H152.496V0H185.862V2.22257Z" fill="black"/>
<path d="M187.538 9.01789C187.538 7.77368 187.774 6.60178 188.247 5.50644C188.719 4.41111 189.363 3.45615 190.18 2.63943C190.997 1.82272 191.951 1.18041 193.047 0.706118C194.14 0.236082 195.32 0 196.588 0H211.95C213.195 0 214.366 0.236082 215.462 0.708245C216.557 1.18041 217.512 1.82485 218.329 2.64156C219.146 3.45828 219.794 4.41324 220.277 5.50857C220.76 6.6039 221.002 7.77368 221.002 9.02002V15.8472C221.002 17.0936 220.76 18.2634 220.277 19.3587C219.794 20.454 219.143 21.409 218.329 22.2257C217.512 23.0424 216.557 23.6911 215.462 24.1739C214.366 24.6567 213.197 24.8992 211.95 24.8992H196.588C195.32 24.8992 194.14 24.6567 193.045 24.1739C191.949 23.6911 190.994 23.0424 190.178 22.2257C189.361 21.4111 188.717 20.454 188.244 19.3587C187.772 18.2634 187.536 17.0936 187.536 15.8472V9.01789H187.538ZM218.778 9.02852C218.778 8.08207 218.601 7.20155 218.246 6.38271C217.891 5.566 217.404 4.84499 216.78 4.22182C216.157 3.59865 215.432 3.10947 214.607 2.75428C213.779 2.3991 212.895 2.22257 211.95 2.22257H196.588C195.622 2.22257 194.731 2.3991 193.915 2.75428C193.098 3.10947 192.379 3.59865 191.756 4.22182C191.133 4.84499 190.646 5.566 190.29 6.38271C189.935 7.19942 189.759 8.08207 189.759 9.02852V15.8664C189.759 16.8128 189.935 17.6997 190.29 18.5271C190.643 19.3544 191.133 20.0818 191.756 20.705C192.379 21.3282 193.098 21.8131 193.915 22.1576C194.731 22.5022 195.622 22.6745 196.588 22.6745H211.95C212.895 22.6745 213.782 22.5022 214.607 22.1576C215.432 21.8131 216.157 21.3303 216.78 20.705C217.404 20.0818 217.891 19.3566 218.246 18.5271C218.599 17.6997 218.778 16.8128 218.778 15.8664V9.02852Z" fill="black"/>
<path d="M38.9706 0H36.748V6.27849H38.9706V0Z" fill="#F7931E"/>
<path d="M18.9374 0H16.7148V20.4179H18.9374V0Z" fill="#F7931E"/>
<path d="M196.792 14.3541V10.4236C196.792 10.0089 197.128 9.67285 197.543 9.67285H210.98C211.395 9.67285 211.731 10.0089 211.731 10.4236V14.3541C211.731 14.7688 211.395 15.1049 210.98 15.1049H197.543C197.128 15.1049 196.792 14.7688 196.792 14.3541Z" fill="#F7931E"/>
</g>
<defs>
<clipPath id="clip0_670_361">
<rect width="221" height="24.8949" fill="black"/>
</clipPath>
</defs>
</svg>
`

const Logo = () => {
    const params = usePathname();

    const [scrollRotation, setScrollRotation] = useState(0);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setScrollRotation(scrollPosition);

            if (scrollPosition >= 77) {
                setShowText(false);
            } else {
                setShowText(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div onClick={() => window.scrollTo({ top: 0, behavior: params === '/' ? "smooth" : "instant" })} className='header-logo'>
            <Link href={"/"} style={{ zIndex: "2" }}>
                <div style={{ backgroundColor: "black" }} className="header-icon">
                    <svg
                        style={{ transform: `rotate(${scrollRotation / 10}deg)` }}
                        width="50"
                        height="35"
                        viewBox="0 0 166 118"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M122.112 117.309C126.62 116.874 130.978 115.787 135.079 114.139C139.407 112.423 143.462 110.066 147.201 107.084C148.017 106.447 148.993 105.59 149.987 104.657C150.399 104.273 150.805 103.882 151.204 103.484C152.789 101.919 154.264 100.311 155.02 99.2676C155.445 98.7012 156.266 97.5966 156.833 96.8036C157.703 95.6344 158.652 94.0605 159.569 92.292C161.468 88.7799 162.937 85.0029 163.898 81.0284C164.604 78.0994 165.013 75.0632 165.131 71.9978C165.378 66.3041 164.604 60.5451 162.81 55.0878C162.479 54.0711 162.115 53.0686 161.717 52.0836C160.725 49.6763 160.328 48.8266 158.657 45.8245C157.835 44.3518 155.682 41.1798 155.031 40.5284C154.833 40.3301 154.436 39.8487 154.181 39.4521C153.69 38.7233 152.332 37.3007 150.787 35.8229C149.551 34.6191 148.23 33.4091 147.258 32.6266L145.246 30.9556L145.018 30.9556C140.993 28.1229 136.948 26.1037 132.198 24.5549C127.637 23.0539 124.152 22.4875 117.863 22.1759C114.747 22.0343 111.517 21.7794 110.724 21.6378C110.663 21.626 110.602 21.6141 110.542 21.602L108.872 21.1846C106.577 20.6465 102.809 19.2588 101.28 18.4091C101.083 18.3055 100.829 18.1678 100.556 18.0195L100.555 18.0194C100.133 17.7899 99.6631 17.5351 99.2861 17.3426C98.4586 16.851 97.654 16.3249 96.8733 15.7648C95.975 15.1001 95.0026 14.3205 94.0843 13.5297C90.9228 10.7077 88.2398 7.24743 86.1062 3.20037C84.7464 0.594772 84.0665 1.47202e-05 82.5934 1.4849e-05L82.5916 1.48491e-05L82.5824 7.22054e-06C81.1093 7.34933e-06 80.4293 0.594764 79.0695 3.20036C76.9358 7.24764 74.2527 10.7081 71.0908 13.5302C70.1729 14.3206 69.2011 15.0999 68.3031 15.7643C67.5221 16.3246 66.7173 16.8509 65.8895 17.3426C65.5128 17.5351 65.0438 17.7896 64.6212 18.0189L64.6202 18.0195C64.3469 18.1677 64.0931 18.3055 63.8961 18.4091C62.3664 19.2588 58.5986 20.6465 56.3039 21.1847L54.6345 21.6019C54.5736 21.614 54.5126 21.626 54.4516 21.6378C53.6583 21.7794 50.4288 22.0343 47.3126 22.1759C41.0236 22.4875 37.5391 23.0539 32.9781 24.5549C28.2274 26.1037 24.1827 28.1229 20.1576 30.9556L19.9294 30.9556L17.918 32.6266C16.9459 33.4091 15.6251 34.6191 14.3891 35.8229C12.8436 37.3006 11.4854 38.7233 10.9947 39.4522C10.7397 39.8487 10.3431 40.3301 10.1448 40.5284C9.49326 41.1798 7.34025 44.3518 6.51872 45.8245C4.8473 48.8266 4.45069 49.6763 3.45916 52.0836C3.06111 53.0677 2.697 54.0693 2.36711 55.0849C0.571849 60.5447 -0.202275 66.3063 0.04475 72.0025C0.163189 75.0664 0.572232 78.1009 1.27783 81.0284C2.23849 85.0024 3.70724 88.7788 5.60563 92.2905C6.52321 94.0597 7.47218 95.6341 8.34276 96.8036C8.90935 97.5966 9.73089 98.7012 10.1558 99.2676C10.9125 100.312 12.3886 101.921 13.9753 103.488C14.3718 103.883 14.7751 104.272 15.1849 104.653C16.1797 105.587 17.158 106.446 17.9747 107.084C21.7146 110.067 25.7709 112.424 30.1003 114.141C34.2002 115.788 38.557 116.875 43.0633 117.309C43.201 117.321 43.4314 117.333 43.7475 117.345C46.1474 117.508 64.3343 117.584 82.5993 117.578C100.855 117.584 119.027 117.508 121.428 117.345C121.744 117.333 121.975 117.321 122.112 117.309ZM43.3575 107.962C41.9227 107.792 40.5176 107.552 39.1443 107.242C35.1325 106.286 31.0168 104.599 27.4548 102.454C25.0231 100.929 22.7546 99.1092 20.6659 97.0019C15.199 91.5364 11.7367 85.1534 10.123 77.6075C9.77647 75.8581 9.55276 74.0647 9.4485 72.2191C9.33184 69.1773 9.4795 65.5169 9.87254 63.3557C10.4417 60.2337 11.5121 56.9196 12.9022 53.8398C13.089 53.4385 13.2841 53.0327 13.4877 52.6217C14.6354 50.288 15.9807 48.122 17.5123 46.1335C19.1265 44.137 21.8359 41.4145 23.7756 39.788C24.7828 38.9916 25.8357 38.2452 26.9327 37.5501C30.356 35.4427 34.6754 33.5604 38.3433 32.655C40.7052 32.0755 42.1406 31.785 48.3286 31.6509L81.1659 31.5787L82.5861 31.5757L84.0098 31.5787L116.848 31.6509C123.035 31.785 124.471 32.0755 126.832 32.6549C130.5 33.5604 134.82 35.4427 138.243 37.5501C139.34 38.2452 140.393 38.9915 141.4 39.7877C143.34 41.4143 146.049 44.1372 147.664 46.1338C149.195 48.1222 150.54 50.2882 151.688 52.6218C151.892 53.0326 152.087 53.4382 152.273 53.8393C153.664 56.9193 154.734 60.2335 155.303 63.3557C155.696 65.5172 155.844 69.1784 155.727 72.2204C155.623 74.0649 155.399 75.857 155.053 77.6054C153.44 85.1521 149.977 91.5359 144.51 97.0019C142.421 99.1095 140.152 100.929 137.72 102.455C134.159 104.599 130.044 106.286 126.033 107.242C124.659 107.552 123.254 107.792 121.818 107.962C121.579 107.991 120.935 108.017 119.947 108.041C108.726 108.305 56.0357 108.304 45.2031 108.04C44.23 108.016 43.5947 107.99 43.3575 107.962ZM102.845 69.4135C102.845 61.5899 109.188 55.2475 117.011 55.2475C124.835 55.2475 131.177 61.5899 131.177 69.4135C131.177 77.2372 124.835 83.5796 117.011 83.5796C109.188 83.5796 102.845 77.2372 102.845 69.4135ZM33.9983 69.4135C33.9983 61.5899 40.3407 55.2475 48.1644 55.2475C55.9881 55.2475 62.3304 61.5898 62.3304 69.4135C62.3304 77.2372 55.9881 83.5796 48.1644 83.5796C40.3407 83.5796 33.9983 77.2372 33.9983 69.4135Z"
                            // fill="#F7931E"
                            fill="white"
                        />
                    </svg>
                </div>
            </Link>
            <Link href={"/"} style={{ zIndex: "1" }} >

                <div className={`logo-text ${showText ? 'logo-slide-in' : 'logo-slide-out'}`} dangerouslySetInnerHTML={{
                    __html: params === "/" || params.includes("/works/") ? svg1 : svg2
                }} />

                {/* <div className={`logo-text ${showText ? 'logo-slide-in' : 'logo-slide-out'}`} >
                    <img
                        // src={params === "/" || params.includes("/works/") ? svgLogoWhite : svgLogoBlack}
                        src={params === "/" || params.includes("/works/") ? "/Logowhite01.png" : "/Logoblack02.png"}
                        alt='wisbato'
                        width={178}
                        height={21}
                    />
                </div> */}
            </Link>
        </div>
    )
}

export default Logo