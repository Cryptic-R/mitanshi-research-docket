import Link from "next/link";
import { EducationProfile } from "@/components/education-profile";
import { ExperienceRecords } from "@/components/experience-records";
import { PublicWork } from "@/components/public-work";
import { RecordStack } from "@/components/record-stack";
import { ResearchMap } from "@/components/research-map";
import { siteConfig } from "@/content/site";

const navigation = [
  ["Docket", "#docket"],
  ["Education", "#profile"],
  ["Experience", "#experience"],
  ["Writing", "#writing"],
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <main>
      <a className="skipLink" href="#main-content">Skip to content</a>
      <header className="siteHeader">
        <Link className="wordmark" href="/" aria-label="Mitanshi Khandelwal home">
          <span>MK</span>
          <span>{siteConfig.person.name}</span>
        </Link>
        <nav aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={href}>{label}</a>
          ))}
        </nav>
        <a className="headerCta" href="#contact">Open correspondence</a>
      </header>

      <div id="main-content">
        <section className="hero" id="docket" aria-labelledby="hero-heading">
          <div className="heroGrain" aria-hidden="true" />
          <div className="caseTab tabOne" aria-hidden="true">FILE / 2026</div>
          <div className="caseTab tabTwo" aria-hidden="true">PUBLIC RECORD</div>
          <p className="kicker">Research Docket / Public Portfolio</p>
          <h1 id="hero-heading">{siteConfig.positioning.headline}</h1>
          <div className="heroLower">
            <p>{siteConfig.positioning.introduction}</p>
            <div className="heroActions">
              <a className="primaryButton" href="#profile">Explore the index <span aria-hidden="true">↘</span></a>
              <a className="textButton" href={siteConfig.person.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="heroLedger" aria-label="Profile summary">
            <span>Subject / {siteConfig.person.name}</span>
            <span>Institution / {siteConfig.person.school}</span>
            <span>Direction / Corporate law + cyber law</span>
            <span>Correspondence / {siteConfig.person.email}</span>
          </div>
        </section>

        <section className="introStrip" aria-label="Portfolio notice">
          <span className="signal" aria-hidden="true" />
          <p>{siteConfig.notices.content}</p>
          <span className="stripCode">VERIFIED / V1</span>
        </section>

        <EducationProfile />
        <ResearchMap />
        <RecordStack />
        <ExperienceRecords />
        <PublicWork />

        <section className="protocolSection" id="protocol" aria-labelledby="protocol-heading">
          <div className="protocolMark" aria-hidden="true"><span>MK</span></div>
          <div>
            <div className="sectionEyebrow">Index 06 / correspondence protocol</div>
            <h2 id="protocol-heading">A considered next step starts with a clear note.</h2>
            <p>
              For professional opportunities, research conversations, or collaboration,
              use LinkedIn to connect. Contact details will be added once approved for public use.
            </p>
            <div className="protocolActions" id="contact">
              <a className="primaryButton" href={`mailto:${siteConfig.person.email}?subject=Professional%20correspondence%20for%20Mitanshi%20Khandelwal`}>Email Mitanshi <span aria-hidden="true">↗</span></a>
              <a className="textButton" href={siteConfig.person.linkedinUrl} target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
              <span className="contactNotice">No confidential or time-sensitive legal information, please.</span>
            </div>
          </div>
        </section>
      </div>

      <footer className="siteFooter">
        <span>© {new Date().getFullYear()} {siteConfig.person.name}</span>
        <span>{siteConfig.notices.legal}</span>
      </footer>
    </main>
  );
}
