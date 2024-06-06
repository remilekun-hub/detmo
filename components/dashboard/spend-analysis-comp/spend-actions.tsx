"use client";
import { Button } from "@/components/ui/button";
import DatePickerComponent from "@/components/ui/date-picker";
import { DownloadIcon, UploadIcon } from "lucide-react";
import { FC } from "react";

interface SpendActionsProps {}

const SpendActions: FC<SpendActionsProps> = ({}) => {
  return (
    <div className=" flex md:flex-row flex-col justify-between items-center gap-4 py-4">
      <h1 className=" md:text-3xl sm:text-2xl text-xl font-medium">
        Spend Analysis{" "}
      </h1>
      <div className="flex gap-6 md:flex-row flex-col">
        <div className=" flex gap-x-4 justify-center items-center">
          <Button variant={"secondary"} size={"sm"}>
            {" "}
            <UploadIcon className="w-5 h-5 mr-2" /> Upload POs
          </Button>
          <Button variant={"secondary"} size={"sm"}>
            {" "}
            <DownloadIcon className="w-5 h-5 mr-2" /> Download POs
          </Button>
        </div>
        <div className=" flex gap-x-4 justify-center items-center">
          <DatePickerComponent dateValue={new Date()} onDateChange={() => {}} icon/>
          <DatePickerComponent dateValue={new Date()} onDateChange={() => {}} icon/>
        </div>
      </div>
    </div>
  );
};

export default SpendActions;
