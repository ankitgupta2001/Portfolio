import { useState } from "react";
import projectData from "./projectData";

import {
  ChevronUp,
  ChevronDown,
  ExternalLink,
  Github,
  Globe,
  Image as ImageIcon,
} from "lucide-react";

const Project_Works = () => {
  const [selectedProject, setSelectedProject] = useState(projectData[0]);
  const [expanded, setExpanded] = useState(true);
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <div className="lineSeparator" />
      <section id="reviews" className="section">
        <div className="container mb-8">
          <h2 className="headline-2">Projects & Products</h2>
          <div className="flex flex-col lg:flex-row gap-6 max-w-screen-xl mx-auto pt-16">
            {/* Left Section: Video/Iframe & Details */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border shadow-lg mb-6">
              {/* Background Iframe */}
              {selectedProject.iframeView === "LargeScreen" ? (
                <div className="relative w-full h-full overflow-auto rounded-lg backdrop-blur-md">
                  {/* Animated Gradient Background */}
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-900 via-purple-800 to-gray-900 opacity-20 blur-xl z-0" />

                  <div className="overflow-x-hidden">
                    <div
                      style={{
                        width: "1440px",
                        height: "616px",
                        transform: "scaleY(0.7) scaleX(0.63)",
                        marginTop: "-6rem",
                        marginLeft: "-17rem",
                      }}
                      className="relative z-10 mx-auto bg-white shadow-2xl rounded-md overflow-hidden"
                    >
                      <iframe
                        src={selectedProject.iframeUrl}
                        title={selectedProject.title}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ) : selectedProject.iframeView === "MobileScreen_SE" ? (
                <div className="relative w-full h-full overflow-auto rounded-lg backdrop-blur-md">
                  {/* Animated Gradient Background */}
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-900 via-purple-800 to-gray-900 opacity-20 blur-xl z-0" />

                  <div className="overflow-y-hidden">
                    <div
                      style={{
                        width: "375px",
                        height: "667px",
                        transform: "scale(0.7)",
                        marginTop: "-6rem",
                      }}
                      className="relative z-10 mx-auto bg-white shadow-2xl rounded-[2rem] overflow-hidden border-[6px] border-black"
                    >
                      <iframe
                        src={selectedProject.iframeUrl}
                        title={selectedProject.title}
                        className="w-full h-full"
                        style={{ overflowY: "hidden" }} // Prevent scrolling inside iframe
                        scrolling="no"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ) : selectedProject.iframeView === "MediumLargeScreen" ? (
                <div className="relative w-full h-full overflow-auto rounded-lg backdrop-blur-md">
                  {/* Animated Gradient Background */}
                  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-blue-900 via-purple-800 to-gray-900 opacity-20 blur-xl z-0" />

                  <div className="overflow-x-hidden">
                    <div
                      style={{
                        width: "1440px",
                        height: "680px",
                        transform: "scaleY(0.7) scaleX(0.63)",
                        marginTop: "-7rem",
                        marginLeft: "-17rem",
                      }}
                      className="relative z-10 mx-auto bg-white shadow-2xl rounded-md overflow-hidden"
                    >
                      <iframe
                        src={selectedProject.iframeUrl}
                        title={selectedProject.title}
                        className="w-full h-full"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <iframe
                  src={selectedProject.iframeUrl}
                  className="w-full h-full absolute top-0 left-0"
                  allowFullScreen
                />
              )}

              {/* Collapsible Bottom Panel */}
              <div
                className={`absolute bottom-0 left-0 w-full backdrop-blur-md bg-black/60 text-white transition-all duration-300 ease-in-out ${
                  expanded ? "h-[40%]" : "h-[40px]"
                } rounded-t-xl border-t border-white/20`}
              >
                {/* Toggle Handle */}
                <div
                  className="flex items-center justify-center gap-2 cursor-pointer py-2 text-sm hover:text-gray-300"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      Hide details
                    </>
                  ) : (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Show details
                    </>
                  )}
                </div>

                {/* Panel Content */}
                {expanded && (
                  <div className="p-2 overflow-y-auto h-[calc(100%-40px)] text-sm scroll-smooth scrollbar-hide">
                    <h2 className="text-xl font-semibold mb-2 text-center">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-300 mb-3 text-center">
                      {selectedProject.description}
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {selectedProject.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-white/10 text-white px-2 py-1 rounded-full border border-white/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {selectedProject.workedtags?.length > 0 && (
                      <div className="flex flex-wrap justify-center gap-2 mb-4">
                        {selectedProject.workedtags.map((workedtag, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-white/10 text-white px-2 py-1 rounded-full border border-white/20"
                          >
                            {workedtag}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex flex-wrap justify-center gap-3 pb-4 mb-4">
                      {Object.entries(selectedProject.Links || {}).map(
                        ([key, { url, icon }]) => {
                          if (!url) return null;

                          let displayName = key.replace(/_/g, " ");

                          // Choose standard icon if available
                          let IconComponent = null;
                          if (key === "LiveUrl") IconComponent = ExternalLink;
                          else if (key === "GitHub_Repo")
                            IconComponent = Github;
                          else IconComponent = Globe; // fallback icon

                          return (
                            <a
                              key={key}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded transition"
                            >
                              {IconComponent ? (
                                <IconComponent size={16} />
                              ) : icon ? (
                                <img src={icon} alt={key} className="w-4 h-4" />
                              ) : null}
                              {displayName}
                            </a>
                          );
                        }
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Section: Scrollable Project List */}
            <div className="w-full lg:w-80 max-h-[500px] overflow-y-auto space-y-4 scroll-smooth custom-scrollbar">
              {projectData.map((project) => (
                <div
                  key={project.id}
                  className={`flex gap-4 items-center cursor-pointer p-2 rounded transition ${
                    selectedProject.id === project.id
                      ? "bg-gray-100 text-black"
                      : "hover:bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => {
                    setSelectedProject(project);
                    setExpanded(true);
                  }}
                >
                  {project.thumbVideo ? (
                    <video
                      preload="auto"
                      width="100%"
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-20 h-14 object-cover rounded-md border"
                    >
                      <source src={project.thumbVideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={`${project.title} thumbnail`}
                      className="w-20 h-14 object-cover rounded-md border"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-20 h-14 flex items-center justify-center rounded-md border bg-muted">
                      <ImageIcon className="w-6 h-6 text-muted-foreground" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-sm font-semibold">{project.title}</h3>

                    <p
                      className={`text-xs ${
                        selectedProject.id === project.id
                          ? "text-gray-700"
                          : "text-gray-500"
                      }`}
                    >
                      {project.tilteLabel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project_Works;
