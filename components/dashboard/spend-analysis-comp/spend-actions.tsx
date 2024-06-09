"use client";
import { Button } from "@/components/ui/button";
import DatePickerComponent from "@/components/ui/date-picker";
import { DownloadIcon, UploadIcon } from "lucide-react";
import { FC } from "react";

interface SpendActionsProps {}

const SpendActions: FC<SpendActionsProps> = ({}) => {
	return (
		<div className=" flex md:flex-row flex-col justify-between items-center gap-4 py-4 mb-2.5">
			<h1 className=" md:text-3xl sm:text-2xl text-xl font-medium">
				Spend Analysis{" "}
			</h1>
			<div className="flex gap-6 md:flex-row flex-col flex-wrap">
				<div className=" flex gap-x-4 justify-center items-center">
					<Button
						variant={"secondary"}
						size={"sm"}
						className="bg-[#EBEBEB] px-7 h-[35px]"
					>
						{" "}
						<UploadIcon className="w-5 h-5 mr-2" /> Upload POs
					</Button>
					<Button
						variant={"secondary"}
						size={"sm"}
						className="bg-[#EBEBEB] px-7 h-[35px]"
					>
						{" "}
						<DownloadIcon className="w-5 h-5 mr-2" /> Download POs
					</Button>
				</div>
				<div className=" flex gap-x-4 justify-center items-center">
					<DatePickerComponent
						dateValue={new Date()}
						onDateChange={() => {}}
						icon
						style="bg-[#FFFFFF]"
						placeholder="01-06-2023"
					/>
					<DatePickerComponent
						dateValue={new Date()}
						onDateChange={() => {}}
						icon
						style="bg-[#FFFFFF]"
						placeholder="01-06-2023"
					/>
				</div>
			</div>
		</div>
	);
};

export default SpendActions;
