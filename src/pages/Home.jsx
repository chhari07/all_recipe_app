import Veggie from "../components/Veggie";
import Popular from "../components/Popular";

import './Home.css';
import { Hero } from "../components/Hero";

const Home = () => {
    return (
        <div className="home-container">
           
            <Popular />
            <Veggie />
        </div>
    )
}

export default Home;