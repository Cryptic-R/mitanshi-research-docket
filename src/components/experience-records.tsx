"use client";

import { useState } from "react";
import { experienceRecords } from "@/content/site";

export function ExperienceRecords() {
  const [open, setOpen] = useState(experienceRecords[0]?.id ?? "");

  return (
    <section className="experienceSection" id="experience" aria-labelledby="experience-heading">
      <div className="experienceIntro">
        <div className="sectionEyebrow">Index 04 / working record</div>
        <h2 id="experience-heading">Mixed exposure. One consistent habit: learn the record thoroughly.</h2>
        <p>
          The experience record moves across litigation, corporate drafting, arbitration,
          judicial research, regulation, and technology-linked questions—an open foundation
          for a future in corporate law and cyber law.
        </p>
      </div>
      <div className="experienceList">
        {experienceRecords.map((record, index) => {
          const expanded = open === record.id;
          return (
            <article className={`experienceCard ${expanded ? "experienceCardOpen" : ""}`} key={record.id}>
              <button
                className="experienceTrigger"
                type="button"
                aria-expanded={expanded}
                onClick={() => setOpen(expanded ? "" : record.id)}
              >
                <span className="experienceIndex">{String(index + 1).padStart(2, "0")}</span>
                <span className="experienceTitle"><strong>{record.organisation}</strong><small>{record.role} · {record.period}</small></span>
                <span className="experienceChevron" aria-hidden="true">{expanded ? "−" : "+"}</span>
              </button>
              <div className="experienceBody" hidden={!expanded}>
                <p className="experienceSummary">{record.summary}</p>
                <ul>
                  {record.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                </ul>
                <div className="experienceTags">
                  {record.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <small className="recordSource">Source: {record.source}</small>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
