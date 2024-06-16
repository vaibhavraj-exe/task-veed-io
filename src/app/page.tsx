"use client"

import Header from "@/components/Header";
import PlanCard from "@/components/PlanCard";
import SponsorsCarousel from "@/components/SponsorsCarousel";
import Image from "next/image";

const planData = {
  name: "Basic",
  description: "Ideal starter plan",
  price: 290.67,
  discount: 36,
  buttonText: "Go Basic",
  features: ["Remove watermark", "Remove watermark", "Remove watermark"],
  isHighlighted: true,
};

export default function Home() {
  const { name, description, price, discount, buttonText, features } = planData;
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
        <div className=" flex -z-50 w-full gap-5 my-5 justify-between flex-wrap lg:flex-nowrap px-24">
          <PlanCard {...planData} />
          <PlanCard {...planData} />
          <PlanCard {...planData} />
          <PlanCard {...planData} />
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
