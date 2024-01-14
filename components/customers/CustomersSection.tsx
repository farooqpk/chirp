import React from "react";
import User1 from "../../public/images/userAvatar01.svg";
import User2 from "../../public/images/userAvatar02.svg";
import User3 from "../../public/images/userAvatar03.svg";
import CustomerCard from "./CustomerCard";

const cardData = [
  {
    profile: User1,
    name: "Sara May",
    id: "@sara_may",
    description:
      "i just tired out @chirp and its amazing, love all the analytics i can see.",
    likes: 2,
    date: "March 2, 2021",
  },
  {
    profile: User2,
    name: "Jack Scott",
    id: "@jackscott",
    description:
      "I initially started using chirp to support the co-founder as i personally knew him, but after having tired it out for a few weeks, also its a great tool, i can genuinly say this changed my Twitter game.",
    likes: 32,
    date: "March 2, 2021",
  },
  {
    profile: User3,
    name: "Jessica May",
    id: "@jmay28",
    description:
      "Absolutly love everything about Chirp, from the design to how everything works smoothly.",
    likes: 221,
    date: "March 2, 2021",
  },
];
const CustomersSection = () => {
  return (
    <div className="flex flex-col gap-4 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold">What Our Customers Say</h1>
      <div className="grid sm:grid-cols-3 gap-4 pt-2">
        {cardData.map((item, index) => (
          <CustomerCard key={index} data={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CustomersSection;
