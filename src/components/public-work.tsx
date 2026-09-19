import { publicRecords, publications, type PublicRecord } from "@/content/site";

const sectionLabels: Record<PublicRecord["section"], string> = {
  activity: "Activity & responsibility",
  achievement: "Achievements",
};

export function PublicWork() {
  const sections: PublicRecord["section"][] = ["activity", "achievement"];

  return (
    <section className="publicWorkSection" id="writing" aria-labelledby="public-work-heading">
      <div className="publicWorkHeader">
        <div className="sectionEyebrow">Index 05 / public work</div>
        <h2 id="public-work-heading">Research that travels beyond the classroom.</h2>
        <p>Selected publications, legal-awareness work, positions of responsibility, and competition records from the supplied résumé.</p>
      </div>

      <div className="publicationShelf">
        <div className="shelfLabel">Publications</div>
        <div className="publicationGrid">
          {publications.map((publication) => (
            <article className="publicationCard" key={publication.id}>
              <span className="sourceLabel">{publication.source}</span>
              <h3>{publication.title}</h3>
              <p className="publicationVenue">{publication.venue}</p>
              <p>{publication.details}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="publicRecordGroups">
        {sections.map((section) => {
          const records = publicRecords.filter((record) => record.published && record.section === section);
          return (
            <section className="publicRecordGroup" key={section}>
              <div className="shelfLabel">{sectionLabels[section]}</div>
              <div className="publicRecordGrid">
                {records.map((record) => (
                  <article className="publicRecordCard" key={record.id}>
                    <span className="sourceLabel">{record.source}</span>
                    <h3>{record.title}</h3>
                    {record.organisation ? <p className="organisation">{record.organisation}</p> : null}
                    {record.period ? <p className="period">{record.period}</p> : null}
                    <p className="recordSummary">{record.summary}</p>
                  </article>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
