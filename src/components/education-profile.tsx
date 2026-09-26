import { education, siteConfig } from "@/content/site";

export function EducationProfile() {
  return (
    <section className="educationSection" id="profile" aria-labelledby="education-heading">
      <div className="educationIntro">
        <div className="sectionEyebrow">Index 01 / foundation</div>
        <h2 id="education-heading">A legal education with a technology-facing edge.</h2>
        <p>{siteConfig.positioning.profileLine}</p>
      </div>
      <div className="educationGrid">
        <div className="educationTable" role="table" aria-label="Academic qualifications">
          {education.map((item) => (
            <div className="educationRow" role="row" key={item.course}>
              <strong role="cell">{item.course}</strong>
              <span role="cell">{item.institute}</span>
              <span role="cell">{item.grade}</span>
              <span role="cell">{item.year}</span>
            </div>
          ))}
        </div>
        <div className="skillBlock">
          <span className="shelfLabel">Working traits</span>
          <div className="skillList">
            {["Strong work ethic", "Leadership", "Time management", "Discipline", "Problem solving", "Open to learning"].map((skill) => <span key={skill}>{skill}</span>)}
          </div>
          <p>Currently oriented toward exploring cyber law while building a corporate-law practice foundation.</p>
        </div>
      </div>
    </section>
  );
}
