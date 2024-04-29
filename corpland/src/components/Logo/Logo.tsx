import { COLORS } from "@/utils/constants";

const Logo = () => {
  return (
    <div className={`bg-${COLORS.primary} p-2.5`}>
      <h1 className=" font-extrabold">CORPLAND</h1>
    </div>
  );
};

export default Logo;
