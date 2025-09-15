import React from 'react';

const AboutCard=(events)=>{
    return(
        <div className="p-6 bg-card-bg rounded-lg shadow-xl transition-all duration-300 hover:shadow-primary-accent/30">
            <h3 className="text-2xl font-semibold mb-3 accent-color">{events.title}</h3>
            <p className="text-dark-text-on-light leading-relaxed">
            {events.text}
            </p>
        </div>
    )
}
export default AboutCard;