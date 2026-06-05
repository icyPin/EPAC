import React from 'react';

// Added onClick to the props
const EventCard = ({ event, onClick }) => {
    return (

        <div className="card cursor-pointer hover:opacity-90 transition-opacity" onClick={onClick}>
            <img 
                src={event.image || "https://placehold.co/600x400/card-bg/dark-text?text=Event+Image"} 
                alt={event.title} 
                className="w-full h-full object-cover rounded-lg shadow-md" 
            />
        
            {/* <div className="p-6">
                <h4 className="text-xl font-semibold mb-2 text-dark-text">{event.title}</h4>
                <p className="text-dark-text-on-light text-sm mb-3">{event.description}</p>
            </div> */}
        </div>
    );
};

export default EventCard;