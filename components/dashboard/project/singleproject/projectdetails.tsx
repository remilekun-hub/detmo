import { FC } from "react";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Props {}
const ProjectDets: FC<Props> = ({}) => {
	return (
    <div className="rounded-[12px] bg-white p-4 md:p-5 lg:p-6 mb-4 xl:px-9">
    <h1 className="pb-6 text-[20px] font-[700] text-[#121212]">
      Project Details
    </h1>
    <hr />
    <div className="pt-6">
      <div className="flex items-center justify-between flex-wrap mb-6 gap-7 sm:gap-0">
        <h2 className="text-[15px] font-[500] text-[#8A8A8A] sm:w-[35%]">
          Commodity name
        </h2>
        <p className="sm:w-[65%] sm:text-left text-[15px] font-[500] text-[#121212] flex-shrink-0">
          Assy-Internal design
        </p>
      </div>
      <div className="flex items-center justify-between flex-wrap mb-6 gap-7 sm:gap-0">
        <h2 className="text-[15px] font-[500] text-[#8A8A8A] sm:w-[35%]">
          Part no.
        </h2>
        <p className="sm:w-[65%] sm:text-left text-[15px] font-[500] text-[#121212] flex-shrink-0">
          08-2682N622-28
        </p>
      </div>
      <div className="flex items-center justify-between flex-wrap mb-6 gap-7 sm:gap-0">
        <h2 className="text-[15px] font-[500] text-[#8A8A8A] sm:w-[35%]">
          Part description
        </h2>
        <p className="sm:w-[65%] sm:text-left text-[15px] font-[500] text-[#121212] flex-shrink-0">
          Heater
        </p>
      </div>
    </div>
  </div>
	);
};

export default ProjectDets;
