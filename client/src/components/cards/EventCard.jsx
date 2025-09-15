import React from 'react';

const EventCard = ({ event }) => {
    return (
        <div className="card">
            <img 
                src={event.image || "https://placehold.co/600x400/card-bg/dark-text?text=Event+Image"} 
                alt={event.title} 
                className="w-full h-48 object-cover" 
            />
            <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-dark-text">{event.title}</h4>
                <p className="text-dark-text-on-light text-sm mb-3">{event.description}</p>
                <a href={event.link} className="text-primary-accent hover:text-secondary-accent font-medium text-sm">Learn More &rarr;</a>
            </div>
        </div>
    );
};
export default EventCard;
