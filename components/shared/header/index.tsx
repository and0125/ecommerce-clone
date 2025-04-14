import React from "react";
import { ShoppingCart, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./mode-toggle";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex justify-between items-center mx-8 my-2">
        {/* left side div */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              height={48}
              width={48}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        {/* right side div */}
        <div className="space-x-2 flex items-center">
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
    </header>
  );
}
