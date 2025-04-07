"use client";
import React, { useContext, Suspense } from "react";
// import Home from "@/components/Home";
import HomeClient from "@/components/HomeClient";
export default function page() {
  return (
    <>
      <div className="bg-black text-white">
        <Suspense fallback={<div>Loading...</div>}>
          <HomeClient />
        </Suspense>
      </div>
    </>
  );
}
