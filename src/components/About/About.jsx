/**
 * @copyright 2025 AnkitGupta
 * @license Apache-2.0
 */

import ScrollReveal from "../ScrollReveal"; // or "../utils/ScrollReveal" if that’s where you placed it

import "../../index.css";
import "../../global.css";

const aboutItems = [
  {
    label: "Jira Tickets",
    number: 250,
  },
  {
    label: "Years of experience",
    number: 2.5,
  },
  {
    label: "LeetCode Problems",
    number: 250,
  },
];

const About = () => {
  
  return (
    <section id="about" className="section">
      <div className="container mb-9 mt-9">
        <ScrollReveal>
          <div className="flex flex-col xl:flex-row items-start gap-8 bg-zinc-800/50 rounded-2xl">
            {/* Text content block */}
            <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
              <div className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
                <h4 className="typewriter">Hi, I’m Yogesh!</h4>
                <h5>
                  I’m a web developer with 2.5+ years of experience in building
                  and optimizing dynamic web applications. Skilled in Angular,
                  TypeScript, and AWS.
                </h5>
                <h5>
                  I’m currently expanding my expertise with React and Tailwind
                  CSS to enhance my frontend development capabilities. My focus
                  is on crafting responsive, high-performance web solutions
                  while collaborating with teams to bring innovative ideas to
                  life.
                </h5>
              </div>

              {/* Stats and logo */}
              <div className="flex flex-wrap items-center gap-4 md:gap-7">
                {aboutItems.map(({ label, number }, key) => (
                  <ScrollReveal key={key}>
                    <div>
                      <div className="flex items-center md:mb-2">
                        <span className="text-2xl font-semibold md:text-4xl">
                          {number}
                        </span>
                        <span className="text-sky-400 font-semibold md:text-3xl">
                          +
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400">{label}</p>
                    </div>
                  </ScrollReveal>
                ))}

                <ScrollReveal>
                  <img
                    src="/images/Logo.svg"
                    alt="Logo"
                    width={60}
                    height={60}
                    className="ml-auto md:w-[100px] md:h-[100px]"
                  />
                </ScrollReveal>
              </div>
            </div>

            {/* Portfolio image block */}
            <div className="hidden xl:block flex-1 max-w-[400px] relative -ml-12">
              {/* <img
                src="/images/ProfileImage/Image1.jpg"
                alt="Yogesh Portfolio Preview"
                className="rounded-2xl w-full object-cover shadow-lg scale-110 brightness-90 transition-transform duration-300 hover:scale-[1.15]"
              /> */}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
