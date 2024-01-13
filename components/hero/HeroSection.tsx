import React from "react";
import HeroImg from "../../public/images/Hero.png";
import Image from "next/image";
import { Button } from "../ui/button";
import MultiAvatar from "./multi-avatar";
import TwitterIcon from "../../public/images/Twitter.svg";

const HeroSection = () => {
  return (
    <div className="grid sm:grid-cols-3 gap-8 sm:place-items-center">
      <section className="sm:order-2 sm:h-[90%]">
        <Image
          alt="hero image"
          src={HeroImg}
          className="sm:object-contain sm:h-[100%]"
        />
      </section>
      <section className="flex flex-col gap-7 sm:order-1 sm:col-span-2">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl sm:text-4xl font-bold text-wrap">
            Twitter analytics <br /> taken to a whole new level.{" "}
          </h1>
          <p className="text-sm text-muted-foreground text-wrap break-words leading-6">
            Chrip is a suite of Twitter analytics that will help you better
            understand your audience, which tweets they like, and most
            importantly, when they are the most active on Twitter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
            <Button className="bg-sky-500 text-white flex gap-2 font-bold">
              <Image src={TwitterIcon} alt="Twitter icon" />
              Sign in with Twitter
            </Button>
            <p className="text-sm text-sky-800 font-semibold text-center cursor-pointer">
              {"Learn more ->"}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <MultiAvatar />
          <p className="text-muted-foreground text-sm text-wrap break-words leading-6">
            Join <span className="text-sky-700 font-semibold">195</span> others
            who have analyzed their followers and sceduled{" "}
            <span className="text-sky-700 font-semibold">1324</span> tweets!.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
