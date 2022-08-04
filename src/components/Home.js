import '../stylesheets/Home.css';
import React, { useEffect } from "react";

function Home() {
    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY > 0) {
                document.getElementById("window-1").style.opacity = 1 - (window.scrollY / 100);
            } else {
                document.getElementById("window-1").style.opacity = 1;
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='homeContainer'>
            <div className="window" id="window-1">
                <div className="test">
                    <span>hi, my name is guenevere!</span>

                    <span className="material-symbols-rounded scroll-down-icon">
                    expand_more
                    </span>
                </div>
            </div>
            
            <div className="window" id="window-2">
                I’m currently a student at Washington University in St. Louis
                pursuing a Joint Degree in Business and Computer Science with a minor in Korean Language & Culture.
            </div>
        </div>
    );
}

export default Home;
