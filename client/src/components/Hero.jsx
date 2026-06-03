
import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="hero-bg min-h-screen flex items-center justify-center pt-20 md:pt-0" 
        style={{ backgroundImage: "url('/img/hero.jpg')" }}>
            <div className="text-center p-6">
                <h1 className="text-5xl md:text-7xl font-extrabold text-hero-text mb-6 animate-fade-in-down">
                    Environment Protection and Awareness Club
                </h1>
               
                <a href="#about" className="btn-primary text-lg animate-fade-in-up animation-delay-600">
                    Discover More
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 inline-block ml-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </a>
            </div>
        </section>
    );
};

export default Hero;
