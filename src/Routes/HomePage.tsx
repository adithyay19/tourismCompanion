import { Divider } from "@mui/material";
import About from "../Components/HomePage/About";
import Destinations from "../Components/HomePage/Destinations";
import WelcomeCard from "../Components/HomePage/WelcomeCard";


function HomePage() {
    return(
        <div id="home-page">
            <WelcomeCard />
            <Divider/>
            <Destinations />
            <Divider/>
            <About />
        </div>
    );
}

export default HomePage;

