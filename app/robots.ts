import type { MetadataRoute } from "next";
import { createRobots } from "@gaine/nextjs/metadata";

export default function robots(): MetadataRoute.Robots {
    return createRobots({ baseUrl: "https://policies.soteenstudio.my.id" });
}
