"use client"

import Header from "@/components/Header";
import PlanCard from "@/components/PlanCard";
import SponsorsCarousel from "@/components/SponsorsCarousel";
import { basicPlanData, businessPlanData, customPlanData, proPlanData } from "@/constants";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header />
      <section>
        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="oswald text-7xl font-black text-center m-5">
            GREAT VIDEOS START WITH A PLAN
          </h1>
          <p className="text-2xl text-slate-700">
            <span>Try VEED with our </span>{" "}
            <a className="text-accent underline cursor-pointer">Free Plan</a>
          </p>
        </div>
        <div className=" flex -z-50 w-full gap-5 my-5 justify-between flex-wrap lg:flex-nowrap px-4 md:px-24">
          <PlanCard {...basicPlanData} />
          <PlanCard {...proPlanData} />
          <PlanCard {...businessPlanData} />
          <PlanCard {...customPlanData} />
        </div>
      </section>
      <section>
        <h2 className="oswald text-4xl font-semibold text-center mt-20">
          Trusted by teams at
        </h2>
        <SponsorsCarousel />
      </section>
    </>
  );
}
