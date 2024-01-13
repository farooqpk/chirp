import React from "react";
import { Avatar, AvatarGroup } from "@mui/material";
import avatar1 from "../../public/images/userAvatar01.svg";
import avatar2 from "../../public/images/userAvatar02.svg";
import avatar3 from "../../public/images/userAvatar03.svg";
import avatar4 from "../../public/images/userAvatar04.svg";
import avatar5 from "../../public/images/userAvatar05.svg";
import avatar6 from "../../public/images/userAvatar06.svg";
import avatar7 from "../../public/images/userAvatar07.svg";
import avatar8 from "../../public/images/userAvatar08.svg";
import avatar9 from "../../public/images/userAvatar09.svg";
import Image from "next/image";

export const SvgComponent = ({ svg }: { svg: any }) => {
  return <Image alt="svg" src={svg} />;
};

const MultiAvatar = () => {
  const AvatarImages = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
  ];

  return (
    <div className="flex">
      <AvatarGroup total={AvatarImages.length}>
        {AvatarImages.map((item: any, index: number) => (
          <Avatar alt="CN" key={index} variant="circular">
            <SvgComponent svg={item} />
          </Avatar>
        ))}
      </AvatarGroup>
    </div>
  );
};

export default MultiAvatar;
