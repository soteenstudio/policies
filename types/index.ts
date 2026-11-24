import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/config";
export type PolicyBlock = {
    type: "p";
    text: string;
} | {
    type: "h3";
    text: string;
} | {
    type: "ul";
    items: string[];
} | {
    type: "ol";
    items: string[];
} | {
    type: "callout";
    tone?: "info" | "warning";
    title?: string;
    text: string;
} | {
    type: "table";
    head: string[];
    rows: string[][];
} | {
    type: "dl";
    items: {
        term: string;
        description: string;
    }[];
};
export interface PolicySection {
    id: string;
    title: string;
    blocks: PolicyBlock[];
}
export interface PolicyContent {
    title: string;
    summary: string;
    intro: string[];
    highlights: {
        title: string;
        text: string;
    }[];
    sections: PolicySection[];
}
export interface PolicyVersion {
    date: string;
    changes: Record<Locale, string>;
}
export interface PolicyDef {
    slug: string;
    icon: LucideIcon;
    effectiveDate: string;
    versions: PolicyVersion[];
    content: Record<Locale, PolicyContent>;
}
export interface FaqItem {
    question: string;
    answer: string[];
}
export interface FaqGroup {
    id: string;
    title: string;
    items: FaqItem[];
}
export type PrincipleId = "transparent" | "control" | "secure" | "minimal";
export interface PrincipleDef {
    id: PrincipleId;
    icon: LucideIcon;
}
