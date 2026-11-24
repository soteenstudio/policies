import type { PolicyContent } from "@/types";
export const cookiesEn: PolicyContent = {
    title: "Cookie Policy",
    summary: "How cookies and local storage are used, and how you can manage them.",
    intro: [
        "Cookies are small text files stored on your device when you visit a site. We use them only as needed, with efficiency and minimal data in mind.",
    ],
    highlights: [
        { title: "Only what's needed", text: "Used for site function, local performance, and local preferences." },
        { title: "Minimal data", text: "We keep data limited and prioritize efficiency." },
        { title: "You can clear them", text: "You can delete cookies and local data through your browser." },
    ],
    sections: [
        {
            id: "what-are-cookies",
            title: "What cookies are",
            blocks: [
                { type: "p", text: "Besides cookies, we also use similar technologies such as browser local storage. In this document we refer to all of them as \"cookies\"." },
            ],
        },
        {
            id: "types",
            title: "How we use cookies",
            blocks: [
                {
                    type: "table",
                    head: ["Purpose", "What it is for"],
                    rows: [
                        ["Website function", "Needed for the service to run, such as login sessions or similar mechanisms"],
                        ["Performance and caching", "Local caching to reduce repeated API requests, so rate limits are not hit as easily"],
                        ["Local preferences", "Settings such as theme and other local-only settings"],
                    ],
                },
            ],
        },
        {
            id: "manage",
            title: "How to manage cookies",
            blocks: [
                { type: "p", text: "You can delete cookies and local data through your browser settings." },
                {
                    type: "callout",
                    tone: "warning",
                    title: "Local-only data is your responsibility",
                    text: "If a setting or state is stored only locally, losing or resetting it is your own risk and responsibility. Data stored or synced on our servers or databases follows the mechanism of the system concerned.",
                },
            ],
        },
        {
            id: "more-info",
            title: "More information",
            blocks: [
                { type: "p", text: "How data is handled is explained in the [Privacy Policy](/privacy#how-we-use). Other questions can be sent to [{{email}}](mailto:{{email}})." },
            ],
        },
    ],
};
