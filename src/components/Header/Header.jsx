/**
 * @copyright 2025 AnkitGupta
 * @license Apache-2.0
 */

/**
 * Components
 */
import Navbar from "./Navbar";

/**
 * Node Modules
 */
import React,{ useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import { useNav } from './NavContext';
import { Link } from "react-router-dom";



const Header = () => {
    const { navOpen, setNavOpen } = useNav();
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
      const previous = scrollY.getPrevious();
      if (latest > previous && latest > 200) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    });


    return (
      <div className="scrollMotion">
        <motion.header 
          variants={
            {
              hidden: {y: -100},
              visible: {y: 0}
            }
          }
          animate={hidden? "hidden" : "visible"}
          transition={{duration: 0.5, ease: 'easeInOut'}}
          className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0"
        >
          <div className="max-w-screen-2xl w-full mx-auto px-4 flex items-center justify-between
          md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
              <h1>
                  <Link to="/" className="logo">
                  {/* import.meta.env.BASE_URL + */}
                      <img src={"/images/Logo.svg"} width={80}  height={80} alt="Ankit Gupta" />
                  </Link>
              </h1>
  
              <div className="relative md:justify-self-center">
                  <button 
                    className="menu-btn md:hidden"  
                    onClick={()=>setNavOpen((prev) => !prev)}
                  >
                      <span className="material-symbols-rounded">
                        {navOpen?'close':'menu'}
                      </span>
                  </button>
                  { !hidden && <Navbar navOpen={navOpen}/>}
              </div>
  
              <Link 
                to="/Contact"  
                className="btn btn-secondary max-md:hidden md:justify-self-end"
              >
                  Contact Me
              </Link>
          </div>
      </motion.header>
      </div>
    )
  }
  
  export default Header