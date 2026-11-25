"use client";
import { Printer } from "lucide-react";
import { Button } from "@gaine/core";
export function PrintButton({ label }: {
    label: string;
}) {
    return (<Button type="button" variant="outline" size="sm" data-print-hide onClick={() => window.print()}>
      <Printer />
      {label}
    </Button>);
}
