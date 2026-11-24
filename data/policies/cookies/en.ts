import type { PolicyContent } from "@/types";
export const cookiesEn: PolicyContent = {
    title: "Cookie Policy",
    summary: "Which cookies and similar technologies we use, and how you can manage them.",
    intro: [
        "Cookies are small text files stored on your device when you visit a site. We use them only as needed, and you can manage them at any time.",
    ],
    highlights: [
        { title: "Essential cookies only", text: "This site only uses cookies required for it to work." },
        { title: "No ads", text: "We do not set advertising or cross-site tracking cookies." },
        { title: "Easy to manage", text: "You can delete or block cookies in your browser settings." },
    ],
    sections: [
        {
            id: "what-are-cookies",
            title: "What cookies are",
            blocks: [
                { type: "p", text: "Besides cookies, we may also use similar technologies such as browser local storage. In this document we refer to all of them as \"cookies\"." },
            ],
        },
        {
            id: "types",
            title: "Cookies we use",
            blocks: [
                {
                    type: "table",
                    head: ["Name", "Purpose", "Type", "Lifetime"],
                    rows: [
                        ["theme", "Remembers your light or dark theme choice", "Essential", "Indefinite, until you clear it"],
                        ["NEXT_LOCALE", "Remembers your chosen language", "Essential", "12 months"],
                        ["analytics_session", "Aggregate visit statistics without personal identity", "Analytics (optional)", "30 minutes"],
                    ],
                },
                { type: "callout", tone: "info", text: "The table above is dummy content. Adjust it to the cookies your site actually uses." },
            ],
        },
        {
            id: "manage",
            title: "How to manage cookies",
            blocks: [
                { type: "p", text: "You can control cookies through your browser settings:" },
                {
                    type: "ul",
                    items: [
                        "Delete cookies that are already stored.",
                        "Block all cookies, or only those from specific sites.",
                        "Use private browsing so cookies are cleared when the session ends.",
                    ],
                },
                { type: "p", text: "Note that blocking essential cookies may stop some features, such as saving your theme, from working." },
            ],
        },
        {
            id: "third-party",
            title: "Third-party cookies",
            blocks: [
                { type: "p", text: "This policy site currently loads no third-party cookies. If we add any in the future, the list above will be updated and we will ask for your consent where required." },
            ],
        },
        {
            id: "more-info",
            title: "More information",
            blocks: [
                { type: "p", text: "How we handle personal data is explained in the [Privacy Policy](/privacy#how-we-use). Other questions can be sent to [{{email}}](mailto:{{email}})." },
            ],
        },
    ],
};
