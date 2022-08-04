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
            } else if (window.scrollY > 0 && window.scrollY <= windowHeight ) {
                document.getElementById("window-1").style.opacity = 1 - (window.scrollY / 300);
                if (direction) {
                    document.getElementById("window-2").style.position = "absolute";
                    document.getElementById("window-2").style.top = "100vh";
                }
            } else if (window.scrollY >= windowHeight && window.scrollY <= 3 * windowHeight && !direction) {
                document.getElementById("window-2").style.position = "fixed";
                document.getElementById("window-2").style.top = 0;
            } else if (window.scrollY >= 3 * windowHeight && window.scrollY <= 4 * windowHeight && !direction) {
                document.getElementById("window-2").style.top = "300vh";
                document.getElementById("window-2").style.position = "absolute";
            } else if (window.scrollY >= 4 * windowHeight && window.scrollY <= 6 * windowHeight && !direction) {
                document.getElementById("window-3").style.position = "fixed";
                document.getElementById("window-3").style.top = 0;
                // change curiosity box in here
                // factor is from 1 to 500
                console.log(window.scrollY);
                console.log(windowHeight);
                const factor = (window.scrollY - 4 * windowHeight) / 5;

                if (factor < document.getElementById("curiosity-word").offsetWidth) {
                    document.getElementById("curiosity-box").style.width = factor + "px";
                } else {
                    document.getElementById("curiosity-box").style.width = document.getElementById("curiosity-word").offsetWidth + "px";
                }
                
            } else if (window.scrollY >= 6 * windowHeight && window.scrollY <= 7 * windowHeight && !direction) {
                document.getElementById("window-3").style.position = "absolute";
                document.getElementById("window-3").style.top = "600vh";
            } else if (window.scrollY <= 6 * windowHeight && window.scrollY >= 4 * windowHeight && direction) {
                document.getElementById("window-3").style.position = "fixed";
                document.getElementById("window-3").style.top = "0";
                const factor = (window.scrollY - windowHeight * 4) / 5;

                if (factor < document.getElementById("curiosity-word").offsetWidth) {
                    document.getElementById("curiosity-box").style.width = factor + "px";
                } else {
                    document.getElementById("curiosity-box").style.width = document.getElementById("curiosity-word").offsetWidth + "px";
                }
            } else if (window.scrollY <= 4 * windowHeight && window.scrollY >= 3 * windowHeight && direction) {
                document.getElementById("curiosity-box").style.width = 0;
                document.getElementById("window-3").style.position = "absolute";
                document.getElementById("window-3").style.top = "400vh";
            } else if (window.scrollY <= 3 * windowHeight && window.scrollY >= windowHeight && direction) {
                document.getElementById("window-2").style.position = "fixed";
                document.getElementById("window-2").style.top = 0;
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
                    <span>Hi, my name is Guenevere!</span>
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
                <div id="curiosity">
                I'm driven by &#160;
                <div id="curiosity-box-wrapper">
                    <div id='curiosity-box'>curiosity</div>
                    <div id='curiosity-word'>curiosity</div>
                </div>
                </div>
                <div id="curiosity-subtext">a curiosity to learn more about the people, stories, and products around me. </div>
                
            </div>

            <div className="window" id="window-4">
                Thanks for visiting my page! Feel free to look around or contact me via LinkedIn or email. 
            </div>
        </div>
    );
}

export default Home;
