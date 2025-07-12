/**
 * @copyright 2025 AnkitGupta
 * @license Apache-2.0
 */

/** Node Modules */
import PropTypes from "prop-types";
import { Github, Linkedin, ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { ButtonPrimary } from "../Button";
import ScrollReveal from "../ScrollReveal";

const ratings = Array(5).fill({
  icon: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});

const ReferalCard = ({
  content,
  imgSrc,
  name,
  company,
  position,
  companyLink,
  socials = {},
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ScrollReveal>
      <div className="bg-zinc-800 p-5 rounded-xl flex flex-col justify-between">
        {/* Footer Section: Avatar, Name, Company, Socials */}
        <div className="grid grid-cols-[280px_auto_auto] items-center w-full gap-x-16">
          {/* Column 1: Profile Info */}
          <div className="flex items-center gap-3">
            <figure className="w-18 h-14 rounded-full overflow-hidden">
              <img
                src={imgSrc}
                alt={name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </figure>
            <div className="flex flex-col flex-grow">
              <p className="font-medium text-white">{name}</p>
              {companyLink ? (
                <p className="text-xs text-zinc-400 tracking-wide">
                  {position} at{" "}
                  <a
                    href={companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {company}
                  </a>
                </p>
              ) : (
                <p className="text-xs text-zinc-400 tracking-wide">{company}</p>
              )}
            </div>
          </div>

          {/* Column 2: Social Links */}
          <div className="flex gap-2 items-center">
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-blue-400 hover:opacity-80" />
              </a>
            )}
            {socials.github && (
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github size={18} className="text-zinc-100 hover:opacity-80" />
              </a>
            )}
          </div>

          {/* Column 3: Toggle Button */}
          <div className="flex justify-end items-center gap-1">
            <ButtonPrimary
              label={isExpanded ? "Read Less" : "Read More"}
              icon={isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
              onClick={() => setIsExpanded((prev) => !prev)}
            />
          </div>
        </div>

        {/* Review Content */}
        {isExpanded && <span className="text-zinc-400 mt-3">{content}</span>}
      </div>
    </ScrollReveal>
  );
};

ReferalCard.propTypes = {
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  companyLink: PropTypes.string.isRequired,
  socials: PropTypes.shape({
    github: PropTypes.string,
    linkedin: PropTypes.string,
  }),
};

export default ReferalCard;
