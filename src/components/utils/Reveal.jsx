import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Reveal = ({ children }) => {
  const el = useRef();

  useGSAP(() => {
    gsap.fromTo(
      el.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: el.current,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        duration: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <div ref={el} className="reveal-up">
      {children}
    </div>
  );
};

export default Reveal;
