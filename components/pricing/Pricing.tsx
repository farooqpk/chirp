"use client";

import React, { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import Checkmark from "../../public/images/Checkmark.svg";
import Image from "next/image";
import { Button } from "../ui/button";
import TwitterIcon from "../../public/images/Twitter.svg";

const Pricing = () => {
  const [isBigScreen, setIsBigScreen] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const screenWidth = window.innerWidth;
      setIsBigScreen(screenWidth >= 500);
    };

    // Initial check on mount
    updateScreenSize();

    // Update on window resize
    window.addEventListener("resize", updateScreenSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-6 sm:gap-7 items-center">
      <section className="flex flex-col items-center flex-wrap gap-2 sm:gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold">
          One simple price plan.
        </h1>
        <p className="text-muted-foreground text-sm leading-6 px-4 sm:px-1 text-center">
          Start growing your Twitter account by anlyzing your followers
          patterns.
        </p>
      </section>
      <section className="flex flex-col border border-yellow-400 rounded-md gap-5 p-6 bg-rose-50 bg-opacity-55">
        <div className="flex flex-col gap-1">
          <h4 className="text-lg text-muted-foreground">Monthly</h4>
          <div className="flex items-end gap-1">
            <h1 className="text-3xl font-bold">$9</h1>
            <span className="text-sm text-muted-foreground">/mo</span>
          </div>
        </div>
        <Separator />
        <div className="flex flex-col gap-5 items-start text-muted-foreground text-sm leading-6">
          <div className="flex gap-3 items-center">
            <Image alt="pricing" src={Checkmark} />
            <p>Unlimited* scheduled tweets and threads.</p>
          </div>
          <div className="flex gap-3 items-center">
            <Image alt="pricing" src={Checkmark} />
            <p>Schedule upto 3 weeks in advance.</p>
          </div>
          <div className="flex gap-3 items-center">
            <Image alt="pricing" src={Checkmark} />
            <p>
              Real-time audience analytics tracking upto 5k
              {isBigScreen && <br />} followers.
            </p>
          </div>
        </div>
        <Separator />

        <Button className="bg-sky-500 text-white flex gap-2 mx-auto w-full">
          <Image src={TwitterIcon} alt="Twitter icon" />
          Start Trial with Twitter
        </Button>
      </section>
    </div>
  );
};

export default Pricing;
