"use server"

import Head from 'next/head'
import CareersPage from './_components/CareersPage'
import { MetaTags } from '@/Hooks/useFetchMetaTags'

const Careers = ({ meta }: { meta: MetaTags }) => {
    return (
        <>
            <Head>
                <title>{meta?.title || "Careers | Default Title"}</title>
                <meta name="description" content={meta?.description || "Explore our portfolio and past projects."} />
                <meta property="og:title" content={meta?.title || "Works | Default Title"} />
                <meta property="og:description" content={meta?.description || "Explore our portfolio and past projects."} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://wisbato.com/careers" />
            </Head>
            <CareersPage />
        </>
    )
}

export default Careers;

export async function getServerSideProps() {
    try {
        const res = await fetch("https://backend.wisbato.com/api/metatags?name=careers");
        const data = await res.json();

        return {
            props: { meta: data.data[0] },
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return {
            props: { meta: null },
        };
    }
}