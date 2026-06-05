import React, { useState } from 'react';
import { Message } from '../services/Message.js';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const HandleMessage = async (e) => {
        e.preventDefault(); 
        setIsSubmitting(true);
        
        try {
            await Message(name, email, message);
        
            setName('');
            setEmail('');
            setMessage('');
        } catch (error) {
            console.error("Failed to send message", error);
            alert("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 md:py-24 bg-secondary-bg">
            <div className="container mx-auto px-6">
                <h2 className="section-title text-dark-text"><span>Contact Us</span></h2>
                <div className="grid md:grid-cols-2 gap-12 mt-12 items-start">
                    
                    
                    <div className="bg-card-bg p-8 rounded-lg shadow-xl">
                        <h3 className="text-2xl font-semibold mb-6 text-dark-text">Get in Touch</h3>
                        
                       
                        <form onSubmit={HandleMessage}>
                            <div className="mb-5">
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-dark-text-on-light">Full Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    className="bg-input-bg border border-input-border text-dark-text text-sm rounded-lg focus:ring-primary-accent focus:border-primary-accent block w-full p-2.5" 
                                    placeholder="Name" 
                                    required 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-dark-text-on-light">Email Address</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    className="bg-input-bg border border-input-border text-dark-text text-sm rounded-lg focus:ring-primary-accent focus:border-primary-accent block w-full p-2.5" 
                                    placeholder="email" 
                                    required 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                />
                            </div>
                            <div className="mb-5">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-dark-text-on-light">Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows="4" 
                                    className="bg-input-bg border border-input-border text-dark-text text-sm rounded-lg focus:ring-primary-accent focus:border-primary-accent block w-full p-2.5" 
                                    placeholder="Your message..." 
                                    required 
                                    value={message} 
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>
                            </div>
                            
                            <button 
                                type="submit" 
                                className="btn-primary w-full"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                    
                
                    <div className="space-y-6 text-dark-text-on-light">
                        <h3 className="text-2xl font-semibold text-dark-text">Club Information</h3>
                        
                        <div className="flex items-start space-x-3 p-4 bg-card-bg rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-primary-accent flex-shrink-0 mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            <div>
                                <h4 className="font-semibold text-dark-text">Location</h4>
                                <p>Birla Institute of Technology, Mesra</p>
                                <p>Ranchi, Jharkhand 835215, India</p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-3 p-4 bg-card-bg rounded-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 text-primary-accent flex-shrink-0 mt-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <div>
                                <h4 className="font-semibold text-dark-text">Email Us</h4>
                                <a href="mailto:epac@bitmesra.ac.in" className="hover:text-primary-accent">epac@bitmesra.ac.in</a>
                            </div>
                        </div>
                        
                        <div className="p-4 bg-card-bg rounded-lg">
                            <h4 className="font-semibold text-dark-text mb-2">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="https://www.instagram.com/epac.bitmesra/" className="text-dark-text-on-light hover:text-primary-accent transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                                </a>
                                <a href="#" className="text-dark-text-on-light hover:text-primary-accent transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="text-dark-text-on-light hover:text-primary-accent transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.455 0 1.613.823 3.043 2.074 3.873-.766-.024-1.483-.233-2.11-.583v.06c0 2.254 1.603 4.134 3.732 4.562-.389.106-.8 .163-1.228.163-.3 0-.592-.028-.875-.082.592 1.848 2.308 3.193 4.341 3.231-1.591 1.247-3.599 1.988-5.786 1.988-.376 0-.747-.022-1.112-.065 2.052 1.317 4.496 2.082 7.13 2.082 8.554 0 13.229-7.096 13.229-13.23 0-.202-.005-.403-.014-.603.909-.655 1.7-1.473 2.323-2.41z" /></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;