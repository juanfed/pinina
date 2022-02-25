import { useRouter } from 'next/router';
import { useEffect } from 'react';
import MainAppBar from '../layouts/MainAppBar';

export default function Home() {
    const router = useRouter();
    useEffect(() => {
        router.push('/authentication')
    }, [])
    return (
        <>
        </>
    )
}