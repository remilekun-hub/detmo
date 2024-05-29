"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { FC } from "react";
import { Button } from "../ui/button";

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"} size={"icon"}>
            <DotsHorizontalIcon />
          </Button>
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <SheetTitle>
              <Image src="/logo.svg" alt="logo" width={100} height={100} />
            </SheetTitle>
            <nav className="flex flex-col gap-6">
              <Button variant={"ghost"} size={"lg"} className="px-4">
                Product
              </Button>
              <Button variant={"ghost"} size={"lg"} className="px-4">
                Solution
              </Button>
              <Button variant={"ghost"} size={"lg"} className="px-4">
                Pricing
              </Button>
            </nav>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Sidebar;
