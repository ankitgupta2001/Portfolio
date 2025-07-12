import skillCategories from "./SkillSetData";

const badgeColors = {
  high: "bg-emerald-900 text-emerald-300 border-emerald-300",
  medium: "bg-sky-900 text-sky-300 border-sky-300",
  low: "bg-yellow-900 text-yellow-300 border-yellow-300",
};

const SkillSet = () => {
  return (
    <>
    <div className="lineSeparator" />
      <section className="section">
        <div className="container mt-[-3rem] mb-12">
          <h2 className="headline-2 mb-4 ml-8">SkillSet</h2>

          <div className="border border-white/10 rounded-[2rem] p-6 md:p-10">
            {/* Legend */}
            <h4 className="text-xl font-semibold mb-4">Legend</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className={`px-3 py-1 border rounded ${badgeColors.high}`}>
                High Proficiency
              </span>
              <span
                className={`px-3 py-1 border rounded ${badgeColors.medium}`}
              >
                Some Experience
              </span>
              <span className={`px-3 py-1 border rounded ${badgeColors.low}`}>
                Some Exposure
              </span>
            </div>

            {/* Categories and Skills */}
            {skillCategories.map(({ category, skills }) => (
              <div key={category} className="mb-6">
                <h3 className="text-lg font-semibold mb-3">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map(({ name, proficiency }) => (
                    <span
                      key={name}
                      className={`px-3 py-1 border rounded text-sm ${badgeColors[proficiency]}`}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillSet;
