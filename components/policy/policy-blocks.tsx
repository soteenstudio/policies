import { Info, TriangleAlert } from "lucide-react";
import { renderInline } from "@/lib/format";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import type { PolicyBlock } from "@/types";
interface PolicyBlocksProps {
    blocks: PolicyBlock[];
    locale: Locale;
}
const bodyText = "text-base leading-7 text-muted-foreground sm:text-[1.0625rem] sm:leading-8";
export function PolicyBlocks({ blocks, locale }: PolicyBlocksProps) {
    return (<>
      {blocks.map((block, index) => {
            switch (block.type) {
                case "p":
                    return (<p key={index} className={bodyText}>
                {renderInline(block.text, locale)}
              </p>);
                case "h3":
                    return (<h3 key={index} className="pt-2 font-display text-lg font-semibold tracking-tight">
                {renderInline(block.text, locale)}
              </h3>);
                case "ul":
                    return (<ul key={index} className="space-y-3">
                {block.items.map((item, i) => (<li key={i} className={cn("flex items-start gap-3", bodyText)}>
                    <span aria-hidden className="mt-[0.7rem] size-1.5 shrink-0 rounded-full bg-brand"/>
                    <span>{renderInline(item, locale)}</span>
                  </li>))}
              </ul>);
                case "ol":
                    return (<ol key={index} className="list-decimal space-y-3 pl-6 marker:font-medium marker:text-brand">
                {block.items.map((item, i) => (<li key={i} className={cn("pl-1.5", bodyText)}>
                    {renderInline(item, locale)}
                  </li>))}
              </ol>);
                case "callout": {
                    const warning = block.tone === "warning";
                    const Icon = warning ? TriangleAlert : Info;
                    return (<aside key={index} className={cn("flex gap-4 rounded-2xl border p-5", warning
                            ? "border-amber-200 bg-amber-50 dark:border-amber-500/30 dark:bg-amber-500/10"
                            : "border-brand/30 bg-brand/5")}>
                <Icon aria-hidden className={cn("mt-0.5 size-5 shrink-0", warning ? "text-amber-600 dark:text-amber-300" : "text-brand")}/>
                <div className="space-y-1">
                  {block.title ? <p className="font-semibold">{renderInline(block.title, locale)}</p> : null}
                  <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {renderInline(block.text, locale)}
                  </p>
                </div>
              </aside>);
                }
                case "table":
                    return (<div key={index} tabIndex={0} className="overflow-x-auto rounded-2xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
                  <thead className="bg-secondary/60">
                    <tr>
                      {block.head.map((cell, i) => (<th key={i} scope="col" className="px-4 py-3 font-semibold">
                          {renderInline(cell, locale)}
                        </th>))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (<tr key={r} className="border-t align-top">
                        {row.map((cell, c) => (<td key={c} className={cn("px-4 py-3 leading-relaxed", c === 0 ? "font-medium" : "text-muted-foreground")}>
                            {renderInline(cell, locale)}
                          </td>))}
                      </tr>))}
                  </tbody>
                </table>
              </div>);
                case "dl":
                    return (<dl key={index} className="divide-y overflow-hidden rounded-2xl border">
                {block.items.map((item, i) => (<div key={i} className="grid gap-1 p-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                    <dt className="font-medium">{renderInline(item.term, locale)}</dt>
                    <dd className="leading-relaxed text-muted-foreground">{renderInline(item.description, locale)}</dd>
                  </div>))}
              </dl>);
            }
        })}
    </>);
}
