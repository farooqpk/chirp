import Image from "next/image";
import React from "react";
import twitterBlue from "../../public/images/Twitter(Blue).svg";
import { Heart } from "lucide-react";

const CustomerCard = ({ data, index }: any) => {
  return (
    <main
      className={`bg-white p-4 flex flex-col gap-3 rounded-md shadow-md ${
        index === 1 ? "sm:row-span-4" : ""
      }`}
    >
      <section className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Image alt={data.name} src={data.profile} />
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold ">{data.name}</h4>
            <span className="text-muted-foreground text-xs">{data.id}</span>
          </div>
        </div>
        <Image alt="twitter" src={twitterBlue} />
      </section>

      <p className="text-muted-foreground text-sm leading-6">
        {data.description}
      </p>

      <section className="flex justify-between items-center text-muted-foreground">
        <div className="flex gap-1 items-center">
          <Heart color="red" />
          <span className="text-sm">{data.likes}</span>
        </div>
        <p className="text-sm">{data.date}</p>
      </section>
    </main>
  );
};

export default CustomerCard;
