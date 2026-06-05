import React, { useState } from 'react';
import EventCard from './cards/EventCard.jsx';
import { useNavigate } from "react-router-dom";

const Events = () => {
    const navigate = useNavigate(); 
    const [selectedEvent, setSelectedEvent] = useState(null);

    // const handleClick = (e) => {
    //     e.preventDefault(); 
    //     navigate('/events');
    // }

    const upcomingEvents = [
        {
            title: "JSEF",
            description: "",
            image: "/img/events/jsef/jsef.jpg"
        },
    ];
    const pastEvents = [
        {
            title: "Vrikshit",
            description: "Join us in planting trees to combat deforestation and promote biodiversity across the campus. Aslo engaging school students through exciting activities",
            image: "/img/events/vrikshit/vm.jpg",
            gallery: [
                "/img/events/vrikshit/5.jpeg", 
                "/img/events/vrikshit/4.jpeg", 
                "/img/events/vrikshit/2.jpeg",
                "/img/events/vrikshit/6.jpeg",
                "/img/events/vrikshit/11.jpeg",
                "/img/events/vrikshit/9.jpeg",
                "/img/events/vrikshit/10.jpeg",
                "/img/events/vrikshit/7.jpeg"
            ]
        },
        {
            title: "Jumangi",
            description: "From classrooms to hidden corners of the campus, every location holds a challenge… every clue takes you deeper into the adventure.Balance, battle, think fast, and outplay everyone to reach the final puzzle!",
            image: "/img/events/jumanji/j.jpg",
            gallery: [
                "/img/events/jumanji/15.jpeg"
            ]
        },
        {
            title: "Jungle Joust",
            description: "An informal BGMI gaming battle where only the sharpest reflexes and smartest squads will make it to the end. ",
            image: "/img/events/jungle-joust/jj.jpg",
            gallery: [
                "/img/events/jungle-joust/1.jpg",
                "/img/events/jungle-joust/2.jpg",
                "/img/events/jungle-joust/17.jpeg"

            ]
        }
    ];

    return (
        <section id="events" className="py-16 md:py-24 bg-secondary-bg relative">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-dark-text"><span>Our Events</span></h2>
                
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6 text-primary-accent text-center">Past Events</h3>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
                        {pastEvents.map((evt, index) => (
                            <EventCard 
                                key={index} 
                                event={evt} 
                                onClick={() => setSelectedEvent(evt)}
                            />
                        ))}
                    </div>
                    
                    <div className="more text text-center pt-10">
                        <a href="" className="text-primary-accent hover:text-secondary-accent font-medium text-sm text-center">View more..</a>
                    </div>
                    
                    <h3 className="text-2xl font-semibold mt-16 mb-6 text-primary-accent text-center">Upcoming Events</h3>
                    <div className="text-center text-dark-text-on-light">
                        {upcomingEvents.length > 0 ? (
                            <div className="display flex flex-wrap justify-center gap-8">
                                {upcomingEvents.map((evt, index) => (
                                    <EventCard 
                                        key={index}
                                        event={evt}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-dark-text-on-light">Stay tuned for updates on upcoming events!</p>
                        )}
                    </div>
                </div>
            </div>

            {selectedEvent && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
                    {/* The white dialog box */}
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 relative">
                        
                        {/* Close Button (X icon) */}
                        <button 
                            className="absolute top-4 right-4 text-gray-500 hover:text-red-500 text-3xl font-bold leading-none"
                            onClick={() => setSelectedEvent(null)} // Closes the modal
                        >
                            &times;
                        </button>

                        {/* Modal Content */}
                        <h2 className="text-3xl font-bold mb-4 text-green-800">{selectedEvent.title}</h2>
                        <p className="text-gray-700 mb-8 text-lg">{selectedEvent.description}</p>
                        
                        {/* Image Gallery Grid */}
                        <h3 className="text-xl font-semibold mb-4 border-b pb-2">Event Gallery</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {selectedEvent.gallery.map((imgSrc, index) => (
                                <img 
                                    key={index}
                                    src={imgSrc} 
                                    alt={`${selectedEvent.title} gallery ${index + 1}`} 
                                    className="w-full h-48 object-cover rounded shadow-sm hover:scale-105 transition-transform duration-300"
                                />
                            ))}
                        </div>
                        
                    </div>
                </div>
            )}
        </section> 
    );
};

export default Events;