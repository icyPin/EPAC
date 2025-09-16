import React from 'react';
import EventCard from '../components/cards/EventCard.jsx';

const events=()=>{
    return(
    <div className="mt-12 event_page ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 row px-10">
            <EventCard event={{
                title: "Eco Awareness Workshop",
                description: "A workshop to raise awareness about environmental issues and sustainable practices.",
                image: "https://placehold.co/600x400/card-bg/dark-text?text=Eco+Awareness+Workshop",
            }} />
            <EventCard event={{
                title: "Tree Plantation Drive",
                description: "Join us in planting trees to combat deforestation and promote biodiversity.",
                image: "https://placehold.co/600x400/card-bg/dark-text?text=Tree+Plantation+Drive",
            }} /> 
            <EventCard event={{
                title: "Recycling Awareness Campaign",
                description: "Learn about the importance of recycling and how to do it effectively.",
                image: "https://placehold.co/600x400/card-bg/dark-text?text=Recycling+Awareness+Campaign",
            }} />              
        </div>
        <br /><br />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 row px-10">
            <EventCard event={{
                title: "Eco Awareness Workshop",
                description: "A workshop to raise awareness about environmental issues and sustainable practices.",
                image: "https://placehold.co/600x400/card-bg/dark-text?text=Eco+Awareness+Workshop",
            }} />
            <EventCard event={{
                title: "Tree Plantation Drive",
                description: "Join us in planting trees to combat deforestation and promote biodiversity.",
                image: "https://placehold.co/600x400/card-bg/dark-text?text=Tree+Plantation+Drive",
            }} /> 
            <EventCard event={{
                title: "Recycling Awareness Campaign",
                description: "Learn about the importance of recycling and how to do it effectively.",
                image: "https://placehold.co/600x400/card-bg/dark-text?text=Recycling+Awareness+Campaign",
            }} />       
        </div>
    </div>
    );
}
 
export default events;    