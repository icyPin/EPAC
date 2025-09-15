import React from 'react';
import AboutCard from './cards/AboutCard.jsx';


const About = () => {
    return (
            <section id="about" className="py-16 md:py-24 bg-secondary-bg">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-dark-text"><span>About Us</span></h2>
                <div className="grid md:grid-cols-3 gap-8 mt-12 text-center md:text-left">
                    <AboutCard title="What is EPAC?" text="EPAC, the Environment Protection and Awareness Club of BIT Mesra, is a vibrant community dedicated to fostering ecological literacy, sustainable practices, and collaborative action among students passionate about environmental conservation and a greener future." />
                    <AboutCard title="Our Vision" text="Environment Club is to cultivate a community deeply connected to the natural world, fostering environmental awareness and actively promoting sustainability. We aim to empower individuals to understand ecological challenges and take impactful steps, integrating eco-friendly practices into daily life while inspiring future generations to champion a healthier planet. Through education, advocacy, and hands-on initiatives, we strive to be a catalyst for responsible environmental stewardship, ensuring a harmonious future for all." />
                    <AboutCard title="Our Mission" text="Environment Club is to educate, engage, and empower our community to foster a sustainable future. We achieve this by organizing hands-on conservation projects, hosting educational workshops on environmental issues, advocating for eco-friendly practices, and building strong partnerships to inspire collective action for a healthier planet." />        
                </div>
            </div>
        </section>
    );
};

export default About;