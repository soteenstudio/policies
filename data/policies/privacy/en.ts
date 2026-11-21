import type { PolicyContent } from "@/types";

export const privacyEn: PolicyContent = {
  title: "Privacy Policy",
  summary: "What data we collect, why we need it, and how you can control it.",
  intro: [
    "When you use {{siteName}} games, websites, and software, you trust us with some of your information. This policy explains what we collect, what we use it for, and the choices you have.",
    "We've tried to write it as simply as possible. If a term is unclear, see [Key terms](#key-terms) or the [FAQ](/faq).",
  ],
  highlights: [
    { title: "Only what's needed", text: "We collect only the data required to run the service." },
    { title: "Never sold", text: "We do not sell your personal data to anyone." },
    { title: "You're in control", text: "Access, download, or delete your data with a single request." },
  ],
  sections: [
    {
      id: "key-terms",
      title: "Key terms",
      blocks: [
        {
          type: "dl",
          items: [
            { term: "Personal data", description: "Information that can identify you, such as your name, email address, or account ID." },
            { term: "Services", description: "All games, websites, and software operated by {{siteName}}." },
            { term: "Data processor", description: "A third party that helps us process data on our instructions, such as a hosting provider." },
          ],
        },
      ],
    },
    {
      id: "data-we-collect",
      title: "Data we collect",
      blocks: [
        { type: "p", text: "The data we collect depends on which service you use. In general, there are three groups:" },
        {
          type: "table",
          head: ["Group", "Examples", "Source"],
          rows: [
            ["Data you provide", "Username, email address, content of support messages", "You"],
            ["Usage data", "Device type, app version, error logs, game progress", "Collected automatically"],
            ["Data from others", "Profile ID from the platform a game is released on", "Partner platforms"],
          ],
        },
        {
          type: "callout",
          tone: "info",
          title: "We don't ask for sensitive data",
          text: "We do not ask for ID numbers, health data, or precise location to use our services.",
        },
      ],
    },
    {
      id: "how-we-use",
      title: "How we use data",
      blocks: [
        { type: "p", text: "We use your data for the following purposes, and only these:" },
        {
          type: "ul",
          items: [
            "**Running the services**, for example saving game progress and recovering accounts.",
            "**Keeping things safe**, including detecting cheating, abuse, and unauthorized access.",
            "**Improving our products** by analyzing error logs and summarized usage patterns.",
            "**Communicating with you** about important updates and support requests.",
          ],
        },
      ],
    },
    {
      id: "sharing",
      title: "Sharing data with others",
      blocks: [
        { type: "p", text: "We do not sell your personal data. We share it only in limited circumstances:" },
        {
          type: "ul",
          items: [
            "With **data processors** who act on our instructions and are bound by confidentiality agreements.",
            "When **required by law**, for example under a valid court order.",
            "With **your consent**, for purposes described specifically when consent is requested.",
          ],
        },
      ],
    },
    {
      id: "retention",
      title: "How long we keep data",
      blocks: [
        { type: "p", text: "We keep data for as long as needed for the purposes above, then delete or anonymize it." },
        {
          type: "table",
          head: ["Data type", "Retention period"],
          rows: [
            ["Account data", "While the account is active; deleted within 30 days after account deletion"],
            ["Security logs", "90 days"],
            ["Support correspondence", "24 months after the last conversation"],
          ],
        },
      ],
    },
    {
      id: "your-rights",
      title: "Your rights and choices",
      blocks: [
        { type: "p", text: "You can request any of the following at any time by writing to [{{email}}](mailto:{{email}}):" },
        {
          type: "ol",
          items: [
            "Access a copy of the personal data we hold.",
            "Correct inaccurate data.",
            "Delete your personal data, except where the law requires us to keep it.",
            "Restrict or object to certain processing, including withdrawing consent.",
          ],
        },
        { type: "p", text: "We will respond to your request within 30 days. Cookie settings can be changed at any time in the [Cookie Policy](/cookies#manage)." },
      ],
    },
    {
      id: "security",
      title: "Data security",
      blocks: [
        { type: "p", text: "We protect data with encryption in transit and at rest, role-based access limits, and regular security reviews." },
        {
          type: "callout",
          tone: "warning",
          title: "No system is completely immune",
          text: "If an incident affects your data, we will notify you and the relevant authorities as required by applicable rules.",
        },
      ],
    },
    {
      id: "children",
      title: "Children",
      blocks: [
        { type: "p", text: "Some of our services are played by young users. We do not knowingly collect personal data from children below the age set by local law without parental or guardian consent. If you believe your child has provided data without permission, contact us so we can delete it." },
      ],
    },
    {
      id: "changes",
      title: "Changes to this policy",
      blocks: [
        { type: "p", text: "We may update this policy from time to time. Material changes will be announced on this page and, where appropriate, by email. Version history is available at the bottom of the page." },
      ],
    },
    {
      id: "contact",
      title: "Contact us",
      blocks: [
        { type: "p", text: "Data controller: **{{company}}**, {{address}}. Privacy questions can be sent to [{{email}}](mailto:{{email}})." },
      ],
    },
  ],
};
