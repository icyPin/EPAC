import React, { useState, useEffect } from 'react';


const Footer = () => {
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
            <footer className="bg-card-bg border-t border-footer-border py-8 text-center">
                <div className="container mx-auto px-6">
                    <p className="text-dark-text-on-light text-sm">&copy; {currentYear} EPAC BIT Mesra. All Rights Reserved. Designed with <span className="text-primary-accent">&hearts;</span>.</p>
                </div>
            </footer>
    );
};

export default Footer;