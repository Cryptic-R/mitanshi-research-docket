"use client";

import { useState } from "react";
import { docketNodes, type DocketNode } from "@/content/site";

const toneClass: Record<DocketNode["tone"], string> = {
  violet: "nodeViolet",
  green: "nodeGreen",
  orange: "nodeOrange",
  red: "nodeRed",
};

export function ResearchMap() {
  const [active, setActive] = useState<DocketNode>(docketNodes[0]);

  return (
    <section className="mapPanel" aria-labelledby="research-map-heading">
      <div className="sectionEyebrow">Index 01 / interactive field map</div>
      <div className="mapHeadingRow">
        <div>
          <h2 id="research-map-heading">The areas that frame the work</h2>
          <p>
            Navigate the current record. Each point is a public focus area or an
            intentionally held place for verified material still under review.
          </p>
        </div>
        <div className="mapStatus" aria-live="polite">
          <span className={`statusDot ${toneClass[active.tone]}`} />
          <span>{active.label}</span>
        </div>
      </div>

      <div className="researchMap">
        <div className="mapGrid" aria-hidden="true" />
        <span className="connection connectionOne" aria-hidden="true" />
        <span className="connection connectionTwo" aria-hidden="true" />
        <span className="connection connectionThree" aria-hidden="true" />

        {docketNodes.map((node) => {
          const selected = node.id === active.id;
          return (
            <button
              className={`mapNode ${toneClass[node.tone]} ${selected ? "mapNodeActive" : ""}`}
              key={node.id}
              onClick={() => setActive(node)}
              onFocus={() => setActive(node)}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              type="button"
              aria-pressed={selected}
              aria-label={`View ${node.label}: ${node.detail}`}
            >
              <span className="nodeCore" />
              <span className="nodeLabel">{node.label}</span>
            </button>
          );
        })}

        <article className="mapDetail" aria-label="Selected research map detail">
          <span className="detailNumber">active record</span>
          <h3>{active.label}</h3>
          <p>{active.detail}</p>
        </article>
      </div>
    </section>
  );
}
