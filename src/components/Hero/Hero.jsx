/**
  @copyright 2025 AnkitGupta
 * @license Apache-2.0
 */

/** Import Components */
import { useEffect, useRef, useState } from "react";
import { ButtonPrimary, ButtonOutline } from "../Button";

import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Hero = () => {
  const content = "/assets/Resume_Yogesh.pdf";
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(800);
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.offsetWidth);
    }
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <section id="home" className="pt-28 lg:pt-16">
      <div className="cointainer py-12 items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg ">
              <img
                src={"/images/Yogesh_avatar1.jpg"}
                width={40}
                height={40}
                alt="Yogesh Portrait"
                className="img-cover"
              />
            </figure>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available For Work
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-4 mb-8 lg:mb-10">
            Building Scalable Modern Webpage For Future
          </h2>
          <div className="flex items-center gap-3">
            <a
              href="https://raw.githubusercontent.com/AnkitGupta/AnkitGupta/main/Yogesh_CV.pdf"
              download="Yogesh_CV.pdf"
            >
              <ButtonPrimary label="Download CV" icon="download" />
            </a>

            <ButtonOutline
              href="#about"
              label="Scroll up"
              icon="arrow_upward"
            />
          </div>
        </div>

        <div
          ref={containerRef}
          className="hidden lg:block max-h-[80vh] overflow-auto border rounded shadow-md"
          style={{
            scrollbarWidth: "thin", // Firefox
          }}
        >
          <style jsx>{`
            /* Chrome, Edge, Safari */
            div::-webkit-scrollbar {
              width: 6px;
            }
            div::-webkit-scrollbar-thumb {
              background: #999;
              border-radius: 4px;
            }
            div::-webkit-scrollbar-track {
              background: transparent;
            }
          `}</style>
          <Document
            file={content}
            onLoadSuccess={({ numPages }) => setNumPages(numPages)}
            loading={"..."}
            error={<p>Failed to load PDF. Please try again later.</p>}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={width}
                renderTextLayer={false}
                renderAnnotationLayer={false}
              />
            ))}
          </Document>
        </div>
      </div>
    </section>
  );
};

export default Hero;
