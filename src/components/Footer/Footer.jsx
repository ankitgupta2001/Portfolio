/**
 * @copyright 2025 AnkitGupta
 * @license Apache-2.0
 */

import { Github, Linkedin, Twitter, Codepen, Code2 } from "lucide-react";
import { ButtonPrimary } from "../Button";
import FooterCopyright from "./FooterCopyright";
import ScrollReveal from "../ScrollReveal";

const sitemap = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#Skills" },
  { label: "MyApps", href: "#MyApps" },
  { label: "Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact me", href: "#contact" },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/ankitgupta2001",
    icon: <Github size={16} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ankitgupta97481/",
    icon: <Linkedin size={16} />,
  },
  {
    label: "Twitter X",
    href: "https://x.com/ankitgupta97481",
    icon: <Twitter size={16} />,
  },
  {
    label: "CodePen",
    href: "https://codepen.io/AnkitG01",
    icon: <Codepen size={16} />,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/ankitgupta97481/",
    icon: <Code2 size={16} />,
  },
];

const Footer = () => {
  return (
    <>
      <div className="lineSeparator" />
      <footer className="section">
        <div className="container">
          <div className="lg:grid grid-cols-2 items-start">
            {/* Left Section */}
            <div className="mb-10">
              <ScrollReveal>
                <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                  Let&apos;s work together today!
                </h2>
              </ScrollReveal>

              <ScrollReveal>
                <ButtonPrimary
                  href="mailto:ankitgupta97481@gmail.com"
                  label="Start Project"
                  icon="chevron_right"
                />
              </ScrollReveal>
            </div>

            {/* Sitemap & Socials */}
            <div className="lg:pl-20">
              {/* Sitemap */}
              <div className="mb-8">
                <ScrollReveal>
                  <p className="font-semibold text-zinc-300 mb-3">Sitemap</p>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {sitemap.slice(0, 4).map(({ label, href }, key) => (
                      <a
                        key={key}
                        href={href}
                        className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-3">
                    {sitemap.slice(4).map(({ label, href }, key) => (
                      <a
                        key={key}
                        href={href}
                        className="text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        {label}
                      </a>
                    ))}
                  </div>
                </ScrollReveal>
              </div>

              {/* Socials */}
              <div>
                <ScrollReveal>
                  <p className="font-semibold text-zinc-300 mb-3">Socials</p>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="flex flex-wrap gap-4">
                    {socials.map(({ label, href, icon }, key) => (
                      <a
                        key={key}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        {icon}
                        {label}
                      </a>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>

          <FooterCopyright />
        </div>
      </footer>
    </>
  );
};

export default Footer;
