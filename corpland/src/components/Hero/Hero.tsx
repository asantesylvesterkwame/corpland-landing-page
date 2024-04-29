import { COLORS } from "@/utils/constants";
import banner from "../../assets/banner1.jpg";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <>
      <div className="mt-5 mb-5">
        <img
          src={banner}
          alt=""
          className="w-full md:h-96 object-cover"
        />
      </div>
      <div
        className={`bg-${COLORS.primary} flex flex-col justify-center items-center md:h-[250px] text-8xl md:text-9xl font-extrabold  `}>
        <h1>CORPLAND</h1>
        <p className={` text-sm md:text-xl  text-${COLORS.primary}`}>
          -just ask
        </p>
      </div>
      <div className="mt-5">
        <Button
          variant={"Cprimary"}
          className="w-full text-2xl">
          MAKE A REQUEST
        </Button>
      </div>
    </>
  );
};

export default Hero;
