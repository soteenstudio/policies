import type { PolicyContent } from "@/types";

export const termsEn: PolicyContent = {
  title: "Terms & Conditions",
  summary: "The ground rules for using SoTeen Studio games, websites, and software.",
  intro: [
    "These terms govern your use of {{siteName}} services. By creating an account or using our services, you agree to these terms. If you do not agree, please do not use the services.",
    "How we handle your data is described separately in the [Privacy Policy](/privacy).",
  ],
  highlights: [
    { title: "Be good to each other", text: "Cheating, harassment, and abuse are not allowed." },
    { title: "Your work stays yours", text: "We only ask for a limited permission to run the service." },
    { title: "Changes are announced", text: "We notify you before material changes take effect." },
  ],
  sections: [
    {
      id: "acceptance",
      title: "Acceptance and eligibility",
      blocks: [
        { type: "p", text: "You must be at least 13 years old, or the age required by local law, to use the services. Users below the age of majority need permission from a parent or guardian." },
        { type: "p", text: "If you use the services on behalf of an organization, you represent that you are authorized to bind that organization to these terms." },
      ],
    },
    {
      id: "accounts",
      title: "Your account",
      blocks: [
        { type: "p", text: "You are responsible for activity on your account. To keep it safe:" },
        {
          type: "ul",
          items: [
            "Use a strong password and do not share it.",
            "Tell us right away if you suspect someone else has accessed your account.",
            "Provide accurate account information and update it when it changes.",
          ],
        },
      ],
    },
    {
      id: "acceptable-use",
      title: "Acceptable use",
      blocks: [
        { type: "p", text: "When using the services, you agree not to:" },
        {
          type: "ul",
          items: [
            "Cheat, exploit bugs for advantage, or use third-party software that interferes with gameplay.",
            "Harass, threaten, or discriminate against other users.",
            "Interfere with or attempt to breach the security of our services.",
            "Use the services for any unlawful purpose.",
          ],
        },
        {
          type: "callout",
          tone: "warning",
          title: "Violations may lead to account restrictions",
          text: "Depending on severity, we may issue a warning, restrict features, or suspend the account.",
        },
      ],
    },
    {
      id: "content",
      title: "Your content",
      blocks: [
        { type: "p", text: "You keep ownership of the content you create. To let the services work, you grant {{siteName}} a non-exclusive, royalty-free, limited license to store, display, and process that content solely to operate the services." },
      ],
    },
    {
      id: "ip",
      title: "Intellectual property and open source",
      blocks: [
        { type: "p", text: "{{siteName}} trademarks, logos, and visual assets are protected by law. Some of our software is released as open source and is governed by its own license, listed in the relevant project repository." },
        {
          type: "table",
          head: ["Type of work", "Terms"],
          rows: [
            ["Games and visual assets", "Copyright held by {{siteName}}; use is limited as set out in these terms"],
            ["Open-source software", "Follows the license in each repository"],
          ],
        },
      ],
    },
    {
      id: "termination",
      title: "Termination",
      blocks: [
        { type: "p", text: "You may stop using the services and delete your account at any time. We may suspend or terminate access if you breach these terms, with reasonable notice unless law or security requires immediate action." },
      ],
    },
    {
      id: "disclaimer",
      title: "Warranties and limitation of liability",
      blocks: [
        { type: "p", text: "The services are provided **as is**. We work to keep them reliable, but cannot guarantee they will be free of interruptions or errors." },
        { type: "p", text: "To the extent permitted by law, {{siteName}}'s liability for indirect or consequential losses is limited. These terms do not limit rights that cannot be excluded under applicable law." },
      ],
    },
    {
      id: "law",
      title: "Governing law",
      blocks: [
        { type: "p", text: "These terms are governed by the laws of the Republic of Indonesia. We will first try to resolve disputes amicably before turning to the courts in Denpasar." },
      ],
    },
    {
      id: "changes",
      title: "Changes to these terms",
      blocks: [
        { type: "p", text: "We may update these terms. For material changes, we will notify you at least 14 days before they take effect. By continuing to use the services afterwards, you accept the changes." },
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      blocks: [
        { type: "p", text: "Questions about these terms can be sent to [{{email}}](mailto:{{email}}) or to {{company}}, {{address}}." },
      ],
    },
  ],
};
