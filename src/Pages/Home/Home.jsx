import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Phones from "../../components/Phones/Phones";


const Home = () => {
    const phones = useLoaderData()
    console.log(phones)
    return (
        <div>
            <Banner></Banner>
            <Phones></Phones>
        </div>
    );
};

export default Home;