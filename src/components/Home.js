import '../stylesheets/Home.css';
import React, { useEffect, useState } from "react";

function Home() {
    let direction = false;
    const windowHeight = window.innerHeight;
    const typeTextCompleteString = "I'm currently a student at Washington University in St. Louis pursuing a Joint Degree in Business and Computer Science";

    const [typeLength, setTypeLength] = useState(0);



    const handleScroll = event => {
        window.onscroll = function(e) {
            direction = this.oldScroll > this.scrollY;
            this.oldScroll = this.scrollY;
        }

        const factor = (window.scrollY - 4 * windowHeight) / 4;

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
            setTypeLength((window.scrollY - windowHeight) / 12);

            // grow bars in bar graph
            // if (window.scrollY >= windowHeight * 2) {
            //     document.getElementById("bar1").style.height = (window.scrollY - 2 * windowHeight) / 5 + "px";
            //     document.getElementById("bar2").style.height = (window.scrollY - 2 * windowHeight) / 3 + "px";
            //     document.getElementById("bar3").style.height = (window.scrollY - 2 * windowHeight) / 3.6 + "px";
            //     document.getElementById("bar4").style.height = (window.scrollY - 2 * windowHeight) / 4.3 + "px";
            // }
            
        } else if (window.scrollY >= 3 * windowHeight && window.scrollY <= 4 * windowHeight && !direction) {
            document.getElementById("window-2").style.top = "300vh";
            document.getElementById("window-2").style.position = "absolute";
        } else if (window.scrollY >= 4 * windowHeight && window.scrollY <= 6 * windowHeight && !direction) {
            document.getElementById("window-3").style.position = "fixed";
            document.getElementById("window-3").style.top = 0;
            
            // grow the curiosity box
            if (factor < document.getElementById("curiosity-word").offsetWidth) {
                document.getElementById("curiosity-box").style.width = factor + "px";
            } else {
                document.getElementById("curiosity-box").style.width = document.getElementById("curiosity-word").offsetWidth + "px";
            }

            // show curiosity subtext
            if (window.scrollY >= 5.5 * windowHeight) {
                document.getElementById("curiosity-subtext").style.opacity = 1 - ( 6 * windowHeight -  window.scrollY) / 400 + .25;
            }
            
            
        } else if (window.scrollY >= 6 * windowHeight && window.scrollY <= 7 * windowHeight && !direction) {
            document.getElementById("window-3").style.position = "absolute";
            document.getElementById("window-3").style.top = "600vh";
        } else if (window.scrollY <= 6 * windowHeight && window.scrollY >= 4 * windowHeight && direction) {
            document.getElementById("window-3").style.position = "fixed";
            document.getElementById("window-3").style.top = "0";

            // shrink the curiosity box
            if (factor < document.getElementById("curiosity-word").offsetWidth) {
                document.getElementById("curiosity-box").style.width = factor + "px";
            } else {
                document.getElementById("curiosity-box").style.width = document.getElementById("curiosity-word").offsetWidth + "px";
            }

            // hide curiosity subtext
            if (window.scrollY <= 6 * windowHeight) {
                document.getElementById("curiosity-subtext").style.opacity = 1 - ( 6 * windowHeight -  window.scrollY) / 400 + .25 ;
            }

            
        } else if (window.scrollY <= 4 * windowHeight && window.scrollY >= 3 * windowHeight && direction) {
            document.getElementById("curiosity-box").style.width = 0;
            document.getElementById("window-3").style.position = "absolute";
            document.getElementById("window-3").style.top = "400vh";
        } else if (window.scrollY <= 3 * windowHeight && window.scrollY >= windowHeight && direction) {
            document.getElementById("window-2").style.position = "fixed";
            document.getElementById("window-2").style.top = 0;

            // shrink bars in bar graph
            // if (window.scrollY >= windowHeight * 2) {
            //     document.getElementById("bar1").style.height = (window.scrollY - 2 * windowHeight) / 5 + "px";
            //     document.getElementById("bar2").style.height = (window.scrollY - 2 * windowHeight) / 3 + "px";
            //     document.getElementById("bar3").style.height = (window.scrollY - 2 * windowHeight) / 3.6 + "px";
            //     document.getElementById("bar4").style.height = (window.scrollY - 2 * windowHeight) / 4.3 + "px";
            // } else {
            //     for (let i = 0; i < 4; i++) {
            //         document.getElementsByClassName("bar-graph-bars")[i].style.height = 0;
            //     }
            // }
        } 
    };

    useEffect(() => {
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
                <div id="text2" className="text-block">
                    <span id="text2block">
                        {typeTextCompleteString.substring(0, typeLength)}
                    </span>
                    <div className='cursor'>|</div>
                    
                </div>

                


                {/* <div id="graph-img">
                    <div className="axes" id="x-axis"></div>
                    <div className="axes" id="y-axis"></div>

                    <div id="bars">
                        <div className='bar-graph-bars' id='bar1'></div>
                        <div className='bar-graph-bars' id='bar2'></div>
                        <div className='bar-graph-bars' id='bar3'></div>
                        <div className='bar-graph-bars' id='bar4'></div>
                    </div>
                    
                </div> */}
                
                
            </div>

            <div className="window" id="window-3">
                <div id="curiosity">
                I'm driven by &#160;
                <div id="curiosity-box-wrapper">
                    <div id='curiosity-box'>curiosity</div>
                    <div id='curiosity-word'>curiosity</div>
                </div>
                </div>
                <div id="curiosity-subtext" className="text-block">a curiosity to learn more about the people, stories, and products around me. </div>
                
            </div>

            <div className="window" id="window-4">
                <div id="text-4" className="text-block">Thanks for visiting my page! Feel free to look around or contact me via <a className="linkedin-link" href="https://www.linkedin.com/in/gueneverechang/">LinkedIn</a>. </div>
            </div>
        </div>
    );
}

export default Home;
