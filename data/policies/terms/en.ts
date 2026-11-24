import type { PolicyContent } from "@/types";
export const termsEn: PolicyContent = {
    title: "Terms & Conditions",
    summary: "The ground rules for using SoTeen Studio games, websites, and software.",
    intro: [
        "These terms govern your use of {{siteName}} services. By using our services, you agree to them. If you do not agree, please do not use the services.",
        "{{siteName}} is an independent studio that has not yet been established as a legal entity. This document is operational transparency, not formal legal advice. How we handle data is described in the [Privacy Policy](/privacy).",
    ],
    highlights: [
        { title: "16+ for login", text: "Services with a login system require users to be at least 16 years old." },
        { title: "No abuse", text: "Spam, exploitation, and anything that disrupts availability are prohibited." },
        { title: "Experiments are as-is", text: "Experimental projects come with no guarantee and are used at your own risk." },
    ],
    sections: [
        {
            id: "acceptance",
            title: "Eligibility",
            blocks: [
                { type: "p", text: "Users of services or platforms with a login system must be at least 16 years old, as the studio's service limit." },
                { type: "p", text: "You must also meet the age requirements and parental or guardian consent or supervision rules under child protection laws in your country or region." },
            ],
        },
        {
            id: "acceptable-use",
            title: "Acceptable use and abuse prevention",
            blocks: [
                { type: "p", text: "For open-source services or platforms, or those that provide an API or binary download links (such as cURL access), users and developers must not:" },
                {
                    type: "ul",
                    items: [
                        "Spam or abuse the service.",
                        "Exploit the service.",
                        "Take actions that lead to DDoS or otherwise disrupt service availability.",
                    ],
                },
            ],
        },
        {
            id: "ip",
            title: "Open source and attribution",
            blocks: [
                { type: "p", text: "Projects in the soteenstudio GitHub organization licensed under MIT or Apache-2.0 are open source and may be used according to the terms of their respective licenses." },
                { type: "p", text: "If you fork or create a derivative work, you must include credit or attribution to {{siteName}}." },
            ],
        },
        {
            id: "experimental",
            title: "Experimental projects",
            blocks: [
                { type: "p", text: "Experimental projects are provided for testing and **as is**. They are not meant for general public use or stable production." },
                {
                    type: "callout",
                    tone: "warning",
                    title: "No reliability guarantee",
                    text: "Experimental projects may change or be discontinued at any time. Any risk of using them is yours.",
                },
            ],
        },
        {
            id: "termination",
            title: "Access restrictions",
            blocks: [
                { type: "p", text: "Use that violates these terms, including the abuse described above, may lead to restricted access to the affected service." },
            ],
        },
        {
            id: "changes",
            title: "Changes to these terms",
            blocks: [
                { type: "p", text: "These terms may be updated as our services, products, or the studio's managing party or entity change. When needed, we will update the effective date shown on this page." },
            ],
        },
        {
            id: "contact",
            title: "Contact us",
            blocks: [
                { type: "p", text: "Questions about these terms can be sent to [{{email}}](mailto:{{email}})." },
            ],
        },
    ],
};
