import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollRevealHandler = () => {
  const location = useLocation();

  useEffect(() => {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  }, [location.pathname]); // Triggers on every route change

  return null;
};

export default ScrollRevealHandler;
