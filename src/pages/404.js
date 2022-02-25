import { useEffect } from "react";
import { useRouter } from "next/router";

const Home = () => {

    // Router Instance
    const router = useRouter();

    useEffect(() => {
        router.push('/main/MainPage');
    }, []);

    return (
        <div style={{ margin: 0 }}>

        </div>
    )
}

export default Home
