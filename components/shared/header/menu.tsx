import { Button } from "@/components/ui/button";
import React from "react";
import ModeToggle from "./mode-toggle";
import { Link, ShoppingCart, UserIcon } from "lucide-react";

export default function Menu() {
  return (
    <div className="flex justify-end gap-2">
      <div className="hidden md:flex w-full max-w-xs gap-2">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href={"/cart"}>
            <ShoppingCart className="mr-2" /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href={"/sign-in"}>
            <UserIcon className="mr-2" /> Sign In
          </Link>
        </Button>
      </div>
    </div>
  );
}
