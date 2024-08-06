import React from "react";
// import Image from "next/image";
import { Button, Empty } from "keep-react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Empty>
      <Empty.Image>
        <img
          src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
          height={234}
          width={350}
          alt="404"
        />
      </Empty.Image>
      <Empty.Title>404 Not Found</Empty.Title>
      <Empty.Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry.
      </Empty.Description>
      <NavLink to="/home">
        <Button variant="outline">Go to home</Button>
      </NavLink>
    </Empty>
  );
};

export default NotFound;
