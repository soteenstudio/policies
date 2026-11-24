import type { PolicyContent } from "@/types";
export const privacyEn: PolicyContent = {
    title: "Privacy Policy",
    summary: "What data may be used, for what purposes, and how you can ask about it.",
    intro: [
        "{{siteName}} is an independent studio that has not yet been established as a legal entity. This document is operational transparency for our projects, not formal legal advice.",
        "We aim to use as little data as possible. If a term is unclear, see [Key terms](#key-terms) or the [FAQ](/faq).",
    ],
    highlights: [
        { title: "Minimal data", text: "Data is used only for reasonable purposes and kept to what is needed." },
        { title: "Never sold", text: "We do not sell your data to third parties." },
        { title: "Ask us anytime", text: "Contact us to ask about, correct, or delete your data." },
    ],
    sections: [
        {
            id: "key-terms",
            title: "Key terms",
            blocks: [
                {
                    type: "dl",
                    items: [
                        { term: "Data", description: "Information tied to you or your use of our services, when we collect or use any." },
                        { term: "Services", description: "The games, websites, software, and platforms operated by {{siteName}}." },
                        { term: "Studio ecosystem", description: "The services and products {{siteName}} runs itself, which may share data internally." },
                    ],
                },
            ],
        },
        {
            id: "data-we-collect",
            title: "Data we collect",
            blocks: [
                { type: "p", text: "What we collect depends on the service you use. Where a service collects or uses data, we keep it to the minimum needed for that service to work." },
                {
                    type: "callout",
                    tone: "info",
                    title: "Data is used only if it is needed",
                    text: "Many of our projects, especially open-source ones, may not require any data from you at all.",
                },
            ],
        },
        {
            id: "how-we-use",
            title: "How we use data",
            blocks: [
                { type: "p", text: "If data is used, it is used only for the following purposes:" },
                {
                    type: "ul",
                    items: [
                        "**Operations**, so our services run as intended.",
                        "**Security and anti-abuse**, to detect and prevent misuse of our services.",
                        "**Feature improvement**, within reasonable limits and with minimal data.",
                        "**Internal synchronization** across the {{siteName}} studio ecosystem.",
                    ],
                },
            ],
        },
        {
            id: "sharing",
            title: "Sharing data with others",
            blocks: [
                { type: "p", text: "We do not sell your data to third parties." },
                { type: "p", text: "If we ever want to use data outside the studio on a voluntary basis, we will state it clearly and honestly in a consent popup **before** the data is used." },
            ],
        },
        {
            id: "retention",
            title: "How long we keep data",
            blocks: [
                { type: "p", text: "We keep data only as long as it is needed for the purposes above. If data is no longer needed, we aim to delete it." },
            ],
        },
        {
            id: "your-rights",
            title: "Your rights and choices",
            blocks: [
                { type: "p", text: "You can contact the studio's official contact at [{{email}}](mailto:{{email}}) to ask about your data or make a request, such as:" },
                {
                    type: "ol",
                    items: [
                        "Access data related to you.",
                        "Correct data that is inaccurate.",
                        "Delete relevant data.",
                    ],
                },
                { type: "p", text: "Requests are handled in line with the rules that apply in your jurisdiction. Cookie settings are explained in the [Cookie Policy](/cookies#manage)." },
            ],
        },
        {
            id: "children",
            title: "Age and children",
            blocks: [
                { type: "p", text: "Services with a login system are for users aged 16 and above. Users must also meet the age requirements and parental or guardian consent rules under child protection laws in their country or region. See [Eligibility](/terms#acceptance)." },
            ],
        },
        {
            id: "changes",
            title: "Changes to this policy",
            blocks: [
                { type: "p", text: "We may update this policy as our services, products, or the studio itself change. When needed, we will update the effective date shown on this page. Version history is available at the bottom of the page." },
            ],
        },
        {
            id: "contact",
            title: "Contact us",
            blocks: [
                { type: "p", text: "Privacy questions and data requests can be sent to [{{email}}](mailto:{{email}})." },
            ],
        },
    ],
};
