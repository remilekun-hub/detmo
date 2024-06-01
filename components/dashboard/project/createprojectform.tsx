"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import DatePickerComponent from "@/components/ui/date-picker";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Createprojectform() {
	const formSchema = z.object({
		name: z.string().min(1, {
			message: "project name must be at least 1 characters.",
		}),
		objective: z.string().min(1, {
			message: "project objective must be at least 1 characters.",
		}),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	};

	return (
		<div>
			
			<div className="bg-white rounded-[20px] px-4 md:px-10 lg:px-[80px] py-[35px] mb-12 max-w-[1400px] mx-auto">
				<div>
					<div className="flex items-center gap-4">
						<span className="bg-[#8CDD58] h-[30px] rounded-t-[8px] rounded-b-[8px]  w-[13px]"></span>
						<h1 className="text-black text-[22px] md:text-[24px] font-[700]">
							Project information
						</h1>
					</div>
					<div className="mt-[27px]">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-8 w-full"
							>
								<FormItem>
									<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
										Project name
									</FormLabel>
									<Input
										placeholder="Enter your project name"
										className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
									/>
								</FormItem>

								<FormItem>
									<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
										Project objective
									</FormLabel>
									<Textarea
										placeholder="Enter your project objective"
										className="bg-[#F6F6F6] rounded-[8px] h-[110px]"
									/>
								</FormItem>

								<FormItem>
									<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
										Projected savings
									</FormLabel>

									<div className="relative h-[55px] w-full bg-white md:w-1/2">
										<Input
											placeholder="Currency"
											className="bg-white rounded-[8px] h-full"
										/>
										<div className="absolute right-1.5 top-1/2 -translate-y-1/2">
											<Select>
												<SelectTrigger className="w-[180px] h-[40px] bg-[#F6F6F6]">
													<SelectValue placeholder="Select an option" />
												</SelectTrigger>
												<SelectContent>
													<SelectGroup>
														<SelectLabel>Fruits</SelectLabel>
														<SelectItem value="Every quater">
															Every quater
														</SelectItem>
														<SelectItem value="banana">
															Banana
														</SelectItem>
														<SelectItem value="blueberry">
															Blueberry
														</SelectItem>
														<SelectItem value="grapes">
															Grapes
														</SelectItem>
														<SelectItem value="pineapple">
															Pineapple
														</SelectItem>
													</SelectGroup>
												</SelectContent>
											</Select>
										</div>
									</div>
								</FormItem>

								<FormItem>
									<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
										Project type
									</FormLabel>
									<FormDescription className="text-[#8A8A8A]/90">
										Only support for Diversify supplier at the moment.
									</FormDescription>
									<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-5">
										<Button
											variant={"outline"}
											className="text-[#6D4EC2] border-[1px] border-[#6D4EC2] bg-[#F3EFFE] py-7"
										>
											Diversify Supplier
										</Button>
										<Button
											variant={"secondary"}
											className="text-[#BFBFBF] py-7 bg-[#F6F6F6]"
											disabled
										>
											Dual Sourcing
										</Button>
										<Button
											variant={"secondary"}
											className="text-[#BFBFBF] py-7 bg-[#F6F6F6]"
											disabled
										>
											Dual Sourcing
										</Button>
									</div>
								</FormItem>

								<div className="flex flex-col sm:flex-row gap-3 md:gap-8">
									<FormItem className="w-full sm:w-1/2">
										<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
											Start date
										</FormLabel>
										<DatePickerComponent
											onDateChange={() => {}}
											placeholder="dd/mm/yyyy"
											style="w-full h-[45px]"
										/>
									</FormItem>
									<FormItem className="w-full sm:w-1/2">
										<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
											End date
										</FormLabel>
										<DatePickerComponent
											onDateChange={() => {}}
											placeholder="dd/mm/yyyy"
											style="w-full h-[45px]"
										/>
									</FormItem>
								</div>

								<div className="flex flex-col sm:flex-row gap-3 md:gap-8">
									<FormItem className="w-full sm:w-1/2">
										<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
											Phase
										</FormLabel>
										<Select>
											<SelectTrigger className="w-full h-[45px] bg-[#F6F6F6]">
												<SelectValue placeholder="Chose a phase" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectItem value="Every quater">
														Execution
													</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</FormItem>
									<FormItem className="w-full sm:w-1/2">
										<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
											Status
										</FormLabel>
										<Select>
											<SelectTrigger className="w-full h-[45px] bg-[#F6F6F6]">
												<SelectValue placeholder="Chose a status" />
											</SelectTrigger>
											<SelectContent>
												<SelectGroup>
													<SelectItem value="Red">Red</SelectItem>
												</SelectGroup>
											</SelectContent>
										</Select>
									</FormItem>
								</div>
								<hr />

								<div className="flex items-center gap-4 mt-10">
									<span className="bg-[#F26184] h-[30px] rounded-t-[8px] rounded-b-[8px]  w-[13px]"></span>
									<h1 className="text-black text-[22px] md:text-[24px] font-[700]">
										Part Details
									</h1>
								</div>

								<FormItem>
									<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
										Commodity name
									</FormLabel>
									<Input
										placeholder="Assy-Internal design"
										className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
									/>
								</FormItem>
								<FormItem>
									<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
										Affected productse
									</FormLabel>
									<Input
										placeholder="Khaitan Cool Lite"
										className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
									/>
								</FormItem>
								<FormItem>
									<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
										Part no.
									</FormLabel>
									<Input
										placeholder="08-2682N622-28"
										className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
									/>
								</FormItem>

								<FormItem>
									<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
										Part description
									</FormLabel>
									<Input
										placeholder="Heater"
										className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
									/>
								</FormItem>
								<hr />

								<div className="flex items-center gap-4 mt-10">
									<span className="bg-[#61CCF2] h-[30px] rounded-t-[8px] rounded-b-[8px]  w-[13px]"></span>
									<h1 className="text-black text-[22px] md:text-[24px] font-[700]">
										Sourcing Team
									</h1>
								</div>

								<div className="flex flex-col sm:flex-row gap-3 md:gap-8">
									<FormItem className="w-full sm:w-1/2">
										<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
											Sourcing PM
										</FormLabel>
										<Input
											placeholder="shikh@fjgj.com"
											className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
										/>
									</FormItem>
									<FormItem className="w-full sm:w-1/2">
										<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
											SCM manager
										</FormLabel>
										<Input
											placeholder="shikh@fjgj.com"
											className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
										/>
									</FormItem>
								</div>
								<div className="flex flex-col sm:flex-row gap-3 md:gap-8">
									<FormItem className="w-full sm:w-1/2">
										<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
											Selected supplier PM
										</FormLabel>
										<Input
											placeholder="shikh@fjgj.com"
											className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
										/>
									</FormItem>
									<FormItem className="w-full sm:w-1/2">
										<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
											Buyer
										</FormLabel>
										<Input
											placeholder="shikh@fjgj.com"
											className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
										/>
									</FormItem>
								</div>
								<div className="flex flex-col sm:flex-row gap-3 md:gap-8">
									<FormItem className="w-full sm:w-1/2">
										<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
											Project Sponsor
										</FormLabel>
										<Input
											placeholder="shikh@fjgj.com"
											className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
										/>
									</FormItem>
									<FormItem className="w-full sm:w-1/2">
										<FormLabel className="text-[15px] sm:text-[16px] md:text-[17px] font-[700]">
											Finance POC
										</FormLabel>
										<Input
											placeholder="shikh@fjgj.com"
											className="bg-[#F6F6F6] rounded-[8px] h-[45px]"
										/>
									</FormItem>
								</div>

								<Button type="submit">Submit</Button>
							</form>
						</Form>
					</div>
				</div>
			</div>

			<div className="bg-red-900 h-[50px] ">rgrj</div>
		</div>
	);
}
