import React from 'react';
import TeamCard from './cards/TeamCard.jsx';

const Team = () => {
    return (
            <section id="team" className="py-16 md:py-24 bg-main-bg">
                <div className="container mx-auto px-6">
                    <h2 className="section-title text-dark-text"><span>Our Team</span></h2>
                    <div className="mt-12">
                        <h3 className="text-2xl font-semibold mb-8 text-primary-accent text-center">Faculty Coordinator</h3>
                        <div className="flex justify-center mb-12">
                            <div className="card text-center p-6 w-full max-w-sm">
                                <img src="/img/advisor.jpg" alt="Faculty Coordinator" className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-primary-accent" />
                                <h4 className="text-xl font-semibold text-dark-text">Dr. Placeholder Name</h4>
                                <p className="text-primary-accent">Professor, Dept. of ECE</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-semibold mb-8 text-primary-accent text-center">Core Team</h3>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            <TeamCard member={{ name: "D.MD Abdul Hameed", role: "President" , image: "https://placehold.co/200x200/card-bg/dark-text?text=President" }} />
                            <TeamCard member={{ name: "Tarun Pratap Singh", role: "Vice President", image: "https://placehold.co/200x200/card-bg/dark-text?text=Vice%20President" }} />
                            <TeamCard member={{ name: "Affan Raza", role: "Vice President", image: "https://placehold.co/200x200/card-bg/dark-text?text=Secretary" }} />
                            <TeamCard member={{ name: "Tanish Kurakula", role: "Joint President", image: "https://placehold.co/200x200/card-bg/dark-text?text=Treasurer" }} />
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Team;