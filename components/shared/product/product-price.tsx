import React from "react";
import { cn } from "@/lib/utils"; // used for dynamic classes so we can style this class

export default function ProductPrice({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const stringValue = value.toFixed(2);

  // convert an integer into a float for display
  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-2xl", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
}
