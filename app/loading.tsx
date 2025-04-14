import React from "react";
import loader from "@/public/assets/loader.gif";
import Image from "next/image";

export default function LoadingPage() {
  return (
    <div className="flex justify-center items-center h-[100vh] w-[100vw]">
      <Image src={loader} height={150} width={150} alt="loading..." />
    </div>
  );
}
