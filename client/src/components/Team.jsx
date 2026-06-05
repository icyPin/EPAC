import React from 'react';
import TeamCard from './cards/TeamCard.jsx';

const Team = () => {
    return (
        <section id="team" className="py-16 md:py-24 bg-main-bg">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-dark-text"><span>Our Team</span></h2>
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-8 text-primary-accent text-center">Faculty Coordinator</h3>
                    
                    <div className="flex flex-col md:flex-row gap-8 mb-12 items-stretch">
                        <div className="card text-center p-6 w-full md:w-1/3 lg:w-1/4 mx-auto md:mx-0 flex-shrink-0 flex flex-col justify-center items-center">
                            <img src="/img/advisor.jpg" alt="Faculty Coordinator" className="w-32 h-32 rounded-full mb-4 border-4 border-primary-accent object-cover" />
                            <h4 className="text-xl font-semibold text-dark-text">Dr.Neeta Kumari</h4>
                            <p className="text-primary-accent mt-1 text-sm">Faculty Advisor - EPAC BIT Mesra</p>
                        </div>
                        
                        <div className="card p-8 flex-1 flex flex-col justify-center">
                            <h4 className="text-2xl text-primary-accent font-bold mb-4 text-dark-text">Message from our advisor</h4>
                            <p className="text-dark-text-on-light leading-relaxed text-justify">It is a matter of honor and immense pleasure that destiny has given me a chance to welcome you to the institute. As the part of such a great heritage called Birla Institute of Technology, Mesra, I take honour and I am privileged to work in this prodigious organization that has been remarkable since centuries. BIT Mesra is intended to improve the education to best of its quality through latest learning technologies with concurrent academia progress monitoring mechanism. Co-currilcular programs are the inseparable part of learning curricula in today's progressive generation. BIT Mesra sturdily chose to equip the nation’s largest working-age population with knowledge and life skills. Hereby I welcome you all for joining this esteemed University and wishing you all the best for your future endeavours.</p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-semibold mb-8 text-primary-accent text-center">Core Team</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        <TeamCard member={{ name: "D.MD Hameed", role: "President" , image: "/img/pres.jpg" }} />
                        <TeamCard member={{ name: "Tarun Pratap Singh", role: "Vice President", image: "/img/vice1.jpg" }} />
                        <TeamCard member={{ name: "Affan Raza", role: "Vice President", image: "/img/2.jpg" }} />
                        <TeamCard member={{ name: "Tanish Kurakula", role: "Joint President", image: "/img/3.jpg" }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;