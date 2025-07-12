/**
 * @copyright 2025 AnkitGupta
 * @license Apache-2.0
 */

/** Components */
import ScrollReveal from "../ScrollReveal";
import ReferalCard from "./ReferalCard";

const referals = [
  {
    "referalContent": "Yogesh excelled at VDB for 2.5 years, growing from intern to frontend developer. As his mentor, I saw him tackle complex features and squash bugs efficiently, ensuring robust solutions with minimal UI focus.",
    "name": "Navdeep Kumar",
    "position": "Sr. Tech Lead",
    "imgSrc": "/images/navdeep.jpeg",
    "company": "VDB",
    "companyLink": "https://vdbapp.com/",
    "socials": {
      "linkedin": "https://www.linkedin.com/in/navdeep-dhull/",
      "github": ""
    }
  },
  {
    "referalContent": "Yogesh was a rockstar at VDB for 2.5 years! He crushed feature development and bug fixes, always finding smart solutions. Less UI, more code—great teammate and friend!",
    "name": "Nishant Babber",
    "position": "Sr. Frontend Developer",
    "imgSrc": "/images/nishant.jpeg",
    "company": "VDB",
    "companyLink": "https://vdbapp.com/",
    "socials": {
      "linkedin": "https://www.linkedin.com/in/nishantbabber/",
      "github": ""
    }
  },
  {
    "referalContent": "Yogesh killed it at VDB for 2.5 years, building features and wiping out bugs like a pro. His problem-solving was on point, with UI taking a backseat. Awesome friend!",
    "name": "Sambhav Jain",
    "position": "Full Stack Developer",
    "imgSrc": "/images/sambhav.jpeg",
    "company": "VDB",
    "companyLink": "https://vdbapp.com/",
    "socials": {
      "linkedin": "https://www.linkedin.com/in/bewithsambhav/",
      "github": ""
    }
  },
  {
    "referalContent": "Yogesh was a blast to work with at VDB for 2.5 years. He nailed feature builds and bug fixes, syncing perfectly with backend. Less UI, all logic—total friend vibes!",
    "name": "Soumya Jain",
    "position": "Backend / ROR Developer",
    "imgSrc": "/images/soumya.jpeg",
    "company": "VDB",
    "companyLink": "https://vdbapp.com/",
    "socials": {
      "linkedin": "https://www.linkedin.com/in/soumya-jain-1a427915b/",
      "github": ""
    }
  },
  {
    "referalContent": "Yogesh’s 2.5 years at VDB, from intern to frontend developer, drove impactful feature development and issue resolution. His problem-solving strengthened system reliability, with minimal UI involvement.",
    "name": "Amit Matta",
    "position": "Senior Vice President",
    "imgSrc": "/images/amit.jpeg",
    "company": "VDB",
    "companyLink": "https://vdbapp.com/",
    "socials": {
      "linkedin": "https://www.linkedin.com/in/amitmatta/",
      "github": ""
    }
  },
  {
    referalContent:
      "Aditya consistently delivered outstanding UI components and innovative solutions.",
    name: "Aditya Pratap Singh",
    position: "Sr. Frontend Developer",
    imgSrc: "/images/aditya.jpeg",
    company: "Tech Binary",
    companyLink: "https://www.blueberry-travel.com/",
    socials: {
      linkedin: "https://www.linkedin.com/in/aditya-mern-full-stack-developer/",
    },
  },
  {
    referalContent:
      "Sahadev brought robust development skills and agility to our tech projects.",
    name: "Sahadev Roy",
    position: "Web Developer / .Net Developer",
    imgSrc: "/images/sahadev.jpeg",
    company: "Tech Binary",
    companyLink: "https://www.blueberry-travel.com/",
    socials: {
      linkedin: "https://www.linkedin.com/in/sahadev-roy-8761a1232/",
    },
  },
  {
    referalContent:
      "Nitesh ensured quality and performance through effective testing methodologies.",
    name: "Nitesh Jha",
    position: "QA",
    imgSrc: "/images/nitesh.jpeg",
    company: "Tech Binary",
    companyLink: "https://www.blueberry-travel.com/",
    socials: {
      linkedin: "https://www.linkedin.com/in/nitesh-jha-9b082a1a9/",
    },
  },
]


const Referals = () => {
  return (
    <>
      <div className="lineSeparator" />
      <section id="reviews" className="section">
        <div className="container">
          <ScrollReveal>
            <h2 className="headline-2 mb-8">Referrals</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 mb-16">
              {referals.map(
                (
                  {
                    referalContent,
                    name,
                    imgSrc,
                    company,
                    position,
                    companyLink,
                    socials,
                  },
                  key
                ) => (
                  <ReferalCard
                    name={name}
                    imgSrc={imgSrc}
                    company={company}
                    position={position}
                    companyLink={companyLink}
                    content={referalContent}
                    socials={socials}
                  />
                )
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Referals;
