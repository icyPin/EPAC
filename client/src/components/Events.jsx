import React from 'react';
import EventCard from './cards/EventCard.jsx';

const Events = () => {
    return (
            <section id="events" className="py-16 md:py-24 bg-secondary-bg">
                <div className="container mx-auto px-6">
                    <h2 className="section-title text-dark-text"><span>Our Events</span></h2>
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold mb-6 text-primary-accent text-center">Past Events</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <EventCard event={{
                                title: "Eco Awareness Workshop",
                                description: "A workshop to raise awareness about environmental issues and sustainable practices.",
                                image: "https://placehold.co/600x400/card-bg/dark-text?text=Eco+Awareness+Workshop",
                                link: "#"
                            }} />
                            <EventCard event={{
                                title: "Tree Plantation Drive",
                                description: "Join us in planting trees to combat deforestation and promote biodiversity.",
                                image: "https://placehold.co/600x400/card-bg/dark-text?text=Tree+Plantation+Drive",
                                link: "#"
                            }} />
                            <EventCard event={{
                                title: "Recycling Awareness Campaign",
                                description: "Learn about the importance of recycling and how to do it effectively.",
                                image: "https://placehold.co/600x400/card-bg/dark-text?text=Recycling+Awareness+Campaign",
                                link: "#"
                            }} />
                        </div>
                        <div className="more text text-center pt-10">
                            <a href="" className="text-primary-accent hover:text-secondary-accent font-medium text-sm text-center">View more..</a>
                        </div>
                        <h3 className="text-2xl font-semibold mt-16 mb-6 text-primary-accent text-center">Upcoming Events</h3>
                        <div className="text-center text-dark-text-on-light">
                            <p>Stay tuned for exciting new events! Follow us on social media for updates.</p>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Events;