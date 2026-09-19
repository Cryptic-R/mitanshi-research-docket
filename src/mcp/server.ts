import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { docketNodes, siteConfig } from "@/content/site";

/**
 * Portfolio Guide MCP scaffold.
 * This server intentionally exposes public portfolio information only.
 * It does not provide legal advice, process confidential material, or access private data.
 */
export const portfolioGuideServer = new McpServer({
  name: "mitanshi-portfolio-guide",
  version: "0.1.0",
});

portfolioGuideServer.registerTool(
  "get_public_profile_summary",
  {
    title: "Get public portfolio summary",
    description:
      "Return the approved public education and professional-interest summary for Mitanshi Khandelwal. Never use this tool for legal advice.",
    inputSchema: {},
  },
  async () => ({
    content: [
      {
        type: "text",
        text: JSON.stringify({
          name: siteConfig.person.name,
          school: siteConfig.person.school,
          studyStage: siteConfig.person.studyStage,
          focusAreas: siteConfig.positioning.focusAreas,
          disclaimer: siteConfig.notices.legal,
        }),
      },
    ],
  }),
);

portfolioGuideServer.registerTool(
  "search_public_portfolio",
  {
    title: "Search approved public portfolio topics",
    description:
      "Search the public portfolio index for approved professional focus topics. It does not search private records, provide legal advice, or assess legal matters.",
    inputSchema: {
      query: z.string().trim().min(2).max(100),
    },
  },
  async ({ query }) => {
    const needle = query.toLowerCase();
    const matches = docketNodes.filter((node) =>
      `${node.label} ${node.detail}`.toLowerCase().includes(needle),
    );

    return {
      content: [
        {
          type: "text",
          text: JSON.stringify({
            query,
            matches: matches.map(({ label, detail }) => ({ label, detail })),
            disclaimer: siteConfig.notices.legal,
          }),
        },
      ],
    };
  },
);
