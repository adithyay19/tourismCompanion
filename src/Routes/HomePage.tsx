import { Divider } from "@mui/material";
import About from "../Components/HomePage/About";
import Destinations from "../Components/HomePage/Destinations";
import WelcomeCard from "../Components/HomePage/WelcomeCard";


function HomePage() {
    return(
        <>
            <WelcomeCard />
            <Divider/>
            <Destinations />
            <Divider/>
            <About />
        </>
    );
}

export default HomePage;