import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FC } from "react";
import Step from "@/components/dashboard/project/singleproject/step";
import Cards from "@/components/dashboard/project/singleproject/cards";
import Comments from "@/components/dashboard/project/singleproject/comments";

interface Props {}

const SingleProject: FC<Props> = ({}) => {
	return (
		<div className="bg-[#F6F6F6] p-4 lg:gap-6 lg:p-6 min-h-screen w-full">
			<Breadcrumb>
				<BreadcrumbList>
					<BreadcrumbItem>
						<BreadcrumbLink href="/" className="text-muted-foreground/70">
							Home
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem>
						<BreadcrumbLink
							href="/dashboard/projects"
							className="text-muted-foreground/70"
						>
							All Projects
						</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbSeparator />

					<BreadcrumbItem>
						<BreadcrumbPage className="text-[16px] font-[400]">
							Heater Pump Sourcing
						</BreadcrumbPage>
					</BreadcrumbItem>
				</BreadcrumbList>
			</Breadcrumb>

			<h1 className="mt-4 mb-4 text-[32px] font-[700]">
				Heater Pump Sourcing
			</h1>

			<main className="bg-transparent w-full h-full grid  grid-cols-1 gap-4 sm:grid-cols-2">
				<div className="rounded-[12px] bg-white p-4 py-6 md:p-5 lg:p-6 xl:px-9 sm:col-span-2">
					<Step />
					<hr />
					<Cards />
				</div>
				<div>
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
					<div className="rounded-[12px] bg-white p-4 md:p-5 lg:p-6 xl:px-9">
						<h1 className="pb-6 text-[20px] font-[700] text-[#121212]">
							Sourcing Comments
						</h1>
						<hr />
						<div className="pt-6">
							<div className="flex justify-between items-center flex-wrap mb-6 gap-7 sm:gap-0">
								<h2 className="text-[15px] font-[500] text-[#8A8A8A] sm:w-[35%]">
									Sourcing PM
								</h2>
								<p className="sm:w-[65%] sm:text-left text-[15px] font-[500] text-[#121212] flex-shrink-0">
									shikh@fjgj.com
								</p>
							</div>
							<div className="flex justify-between items-center flex-wrap mb-6 gap-7 sm:gap-0">
								<h2 className="text-[15px] font-[500] text-[#8A8A8A] sm:w-[35%]">
									Selected supplier PM
								</h2>
								<p className="sm:w-[65%] sm:text-left text-[15px] font-[500] text-[#121212] flex-shrink-0">
									shikh@fjgj.com
								</p>
							</div>
							<div className="flex justify-between items-center flex-wrap mb-6 gap-7 sm:gap-0">
								<h2 className="text-[15px] font-[500] text-[#8A8A8A] sm:w-[35%]">
									Project Sponsor
								</h2>
								<p className="sm:w-[65%] sm:text-left text-[15px] font-[500] text-[#121212] flex-shrink-0">
									shikh@fjgj.com
								</p>
							</div>
							<div className="flex justify-between items-center flex-wrap mb-6 gap-7 sm:gap-0">
								<h2 className="text-[15px] font-[500] text-[#8A8A8A] sm:w-[35%]">
									SCM manager
								</h2>
								<p className="sm:w-[65%] sm:text-left text-[15px] font-[500] text-[#121212] flex-shrink-0">
									shikh@fjgj.com
								</p>
							</div>
							<div className="flex items-center justify-between flex-wrap mb-6 gap-7 sm:gap-0">
								<h2 className="text-[15px] font-[500] text-[#8A8A8A] sm:w-[35%]">
									Buyer
								</h2>
								<p className="sm:w-[65%] sm:text-left text-[15px] font-[500] text-[#121212] flex-shrink-0">
									shikh@fjgj.com
								</p>
							</div>
							<div className="flex  justify-between items-center flex-wrap mb-6 gap-7 sm:gap-0">
								<h2 className="text-[15px] font-[500] text-[#8A8A8A] sm:w-[35%]">
									Finance POC
								</h2>
								<p className="sm:w-[65%] sm:text-left text-[15px] font-[500] text-[#121212] flex-shrink-0">
									shikh@fjgj.com
								</p>
							</div>
						</div>
					</div>
				</div>

				<Comments />
			</main>
		</div>
	);
};

export default SingleProject;
