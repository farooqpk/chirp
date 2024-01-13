import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <main className="p-4 sm:mx-20">{children}</main>;
};

export default Container;
