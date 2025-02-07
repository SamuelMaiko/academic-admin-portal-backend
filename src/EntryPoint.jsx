import React from "react";
import Modals from "./Modals";
import Layout from "./Layout";

const EntryPoint = () => {
  return (
    <div>
      {/* app layout */}
      <Layout />
      {/* all modals */}
      <Modals />
    </div>
  );
};

export default EntryPoint;
