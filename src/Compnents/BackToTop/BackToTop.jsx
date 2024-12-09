import React, { useState, useEffect } from 'react';
import './BackToTop.css';

function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show the button when the user scrolls down
    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div>
            {isVisible && (
                <button className="backToTop" onClick={scrollToTop}>
                    Back to Top
                </button>
            )}
        </div>
    );
}

export default BackToTop;
