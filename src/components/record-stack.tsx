"use client";

import { useState } from "react";

const cards = [
  {
    code: "01",
    title: "Professional focus",
    body: "Corporate law and cyber law are the verified areas currently shaping this portfolio.",
    tag: "Current index",
  },
  {
    code: "02",
    title: "Evidence, not decoration",
    body: "Future entries will carry only approved experience, research, writing, and achievements.",
    tag: "Content protocol",
  },
  {
    code: "03",
    title: "Clear correspondence",
    body: "The contact route is designed for professional opportunities and collaboration—not confidential legal matters.",
    tag: "Contact protocol",
  },
];

export function RecordStack() {
  const [open, setOpen] = useState("01");

  return (
    <section className="recordSection" aria-labelledby="record-heading">
      <div>
        <div className="sectionEyebrow">Index 02 / selected record</div>
        <h2 id="record-heading">A portfolio that treats facts with care.</h2>
      </div>
      <div className="recordStack">
        {cards.map((card) => {
          const expanded = open === card.code;
          return (
            <article className={`recordCard ${expanded ? "recordCardOpen" : ""}`} key={card.code}>
              <button
                type="button"
                onClick={() => setOpen(expanded ? "" : card.code)}
                aria-expanded={expanded}
                className="recordTrigger"
              >
                <span className="recordCode">{card.code}</span>
                <span className="recordTitle">{card.title}</span>
                <span className="recordToggle" aria-hidden="true">{expanded ? "−" : "+"}</span>
              </button>
              <div className="recordBody" hidden={!expanded}>
                <p>{card.body}</p>
                <span>{card.tag}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
