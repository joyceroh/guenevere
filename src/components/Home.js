import '../stylesheets/Home.css';
import React, { useEffect } from "react";

function Home() {
    useEffect(() => {
        var direction = false;
        const windowHeight = window.innerHeight;
        const handleScroll = event => {

            window.onscroll = function(e) {
                direction = this.oldScroll > this.scrollY;
                this.oldScroll = this.scrollY;
            }

            if (window.scrollY === 0) {
                document.getElementById("window-1").style.opacity = 1;
            } else if (window.scrollY > 0 && window.scrollY < 250) {
                document.getElementById("window-1").style.opacity = 1 - (window.scrollY / 300);
            } else if (window.scrollY >= windowHeight && window.scrollY <= 1.5 * windowHeight &&  !direction) {
                document.getElementById("window-2").style.position = "fixed";
                document.getElementById("window-2").style.top = 0;
            } else if (window.scrollY >= 2 * windowHeight && !direction) {
                document.getElementById("window-2").style.top = "200vh";
                document.getElementById("window-2").style.position = "absolute";
                
            }
            else if (window.scrollY <= 2 * windowHeight && window.scrollY >= windowHeight && direction) {
                document.getElementById("window-2").style.position = "fixed";
                document.getElementById("window-2").style.top = 0;
            }
            else if (window.scrollY <= windowHeight && direction) {
                document.getElementById("window-2").style.position = "absolute";
                document.getElementById("window-2").style.top = "100vh";
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
                <div id="inner-window-1">
                    <span>hi, my name is guenevere!</span>
                    <div className="scroll-down-icon">
                        <span className="material-symbols-rounded scroll-down-icon">
                        expand_more
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="window" id="window-2">
                I'm currently a student at Washington University in St. Louis
                pursuing a Joint Degree in Business and Computer Science with a minor in Korean Language & Culture.
            </div>

            <div className="window" id="window-3">
                I'm driven by curiosity - a curiosity to learn more about the people, stories, and products around me. 
            </div>
        </div>
    );
}

export default Home;
