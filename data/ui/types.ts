export interface SectionCopy {
    eyebrow: string;
    title: string;
    description: string;
}
export interface Dictionary {
    meta: {
        title: string;
        description: string;
    };
    header: {
        product: string;
        ariaMain: string;
        ariaMobile: string;
        ariaFooter: string;
        openMenu: string;
        closeMenu: string;
        language: string;
        theme: string;
        overview: string;
        faq: string;
        skipToContent: string;
    };
    home: {
        eyebrow: string;
        title: string;
        highlight: string;
        description: string;
        primaryCta: string;
        secondaryCta: string;
        cards: SectionCopy & {
            readMore: string;
            updated: string;
        };
    };
    policy: {
        breadcrumbHome: string;
        effective: string;
        onThisPage: string;
        print: string;
        highlights: string;
        history: string;
        historyDescription: string;
        latest: string;
        previous: string;
        next: string;
        dummyNotice: {
            title: string;
            text: string;
        };
    };
    faq: SectionCopy;
    footer: {
        rights: string;
        legalNotice: string;
    };
    notFound: {
        title: string;
        description: string;
        cta: string;
    };
}
