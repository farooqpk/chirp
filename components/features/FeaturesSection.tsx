import React from "react";
import { Newspaper, Smile, Sun, TestTube2 } from "lucide-react";

const FeaturesSection = () => {
  const cardData = [
    {
      icon: <TestTube2 size={30} />,
      title: "Analytics",
      description:
        "We constantly monitor your audience as it grows. so you can Tweet when your follwers are most likely to be online and ready to engage with your content.",
    },
    {
      icon: <Smile size={30} />,
      title: "Smart Analyzer",
      description:
        "We constantly monitor your audience as it grows. so you can Tweet when your follwers are most likely to be online and ready to engage with your content.",
    },
    {
      icon: <Newspaper size={30} />,
      title: "Scheduled Your Tweets",
      description:
        "We constantly monitor your audience as it grows. so you can Tweet when your follwers are most likely to be online and ready to engage with your content.",
    },
    {
      icon: <Sun size={30} />,
      title: "Dark Mode",
      description:
        "We constantly monitor your audience as it grows. so you can Tweet when your follwers are most likely to be online and ready to engage with your content.",
    },
  ];
  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <h1 className="text-2xl sm:text-3xl font-bold">
        Features that help you Tweet smarter.
      </h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {cardData.map((item, index) => (
          <div
            key={index}
            className="border flex flex-col gap-3 p-4 rounded-md shadow-md"
          >
            {item.icon}
            <h4 className="text-sm font-semibold sm:text-lg">{item.title}</h4>
            <p className="text-sm text-muted-foreground leading-6">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
