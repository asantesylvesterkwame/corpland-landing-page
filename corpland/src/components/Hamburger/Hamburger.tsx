import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { COLORS } from "@/utils/constants";
import { IoMenu } from "react-icons/io5";

export function HamburgerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="Cprimary"
          className="rounded-none">
          <IoMenu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Explore</SheetTitle>
        </SheetHeader>
        <ul>
          <li>HOME</li>
        </ul>
        <hr className={`bg-${COLORS.tertiary} mb-5 mt-5`} />
        <SheetFooter>
          <Button>DOWNLOAD</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
