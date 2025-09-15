import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Events from '../components/Events.jsx';
import Team from '../components/Team.jsx';
import Contact from '../components/Contact.jsx'; 
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';

const Home=()=>{
    return(
        <>
        <Header/>
        <Hero/>
        <About/>
        <Events/>
        <Team/>
        <Contact/>
        <Footer/>
        </>
    );
}

export default Home;