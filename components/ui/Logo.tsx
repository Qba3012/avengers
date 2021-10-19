import { FC } from "react";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <Image
      src="/logo.png"
      alt="Avengers logo"
      width={249}
      height={100}
      layout={"responsive"}
    />
  );
};

export default Logo;
