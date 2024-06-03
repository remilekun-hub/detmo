"use client";
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
import Cards from "@/components/dashboard/project/evaluate/cards";
import { DataTable } from "@/components/datatable";
import { ColumnDef } from "@tanstack/react-table";
import { supplierEvaluationType, suplierEvaluation } from "@/data/projects";
import Addsupplier from "@/components/dashboard/project/evaluate/addsupplier";
import { Button } from "@/components/ui/button";

interface Props {}

const Evaluate: FC<Props> = ({}) => {
	const supplierColumn: ColumnDef<supplierEvaluationType>[] = [
		{
			accessorKey: "name",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						Supplier Name
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;
				return (
					<div className="font-[600] text-[14px] text-[#3B3C41]">
						{data.name}
					</div>
				);
			},
		},
		{
			accessorKey: "location",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						Location
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;
				return (
					<div className="font-[400] text-[14px] text-[#3B3C41]">
						{data.location}
					</div>
				);
			},
		},
		{
			accessorKey: "company_size",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						Company size
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;
				return (
					<div className="font-[400] text-[14px] text-[#3B3C41]">
						{data.company_size}
					</div>
				);
			},
		},
		{
			accessorKey: "critical_parts",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						Critical parts
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;
				return (
					<div className="font-[400] text-[14px] text-[#3B3C41]">
						{data.critical_parts}
					</div>
				);
			},
		},
		{
			accessorKey: "non_critical_parts",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						Non critical parts
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;
				return (
					<div className="font-[400] text-[14px] text-[#3B3C41]">
						{data.non_critical_parts}
					</div>
				);
			},
		},
		{
			accessorKey: "revenue",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						Revenue
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;
				return (
					<div className="font-[400] text-[14px] text-[#3B3C41]">
						{data.revenue}
					</div>
				);
			},
		},
		{
			accessorKey: "revenue",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						On-time delivery
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;
				return (
					<div className="font-[400] text-[14px] text-[#3B3C41]">
						{data.on_time_delivery}
					</div>
				);
			},
		},
		{
			accessorKey: "supplier_health",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						Supplier Health
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;
				return (
					<div className="font-[400] text-[14px] text-[#3B3C41]">
						{data.supplier_health}
					</div>
				);
			},
		},
		{
			accessorKey: "order_fulfillment_rate",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						Order fufillment rate
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;
				return (
					<div className="font-[400] text-[14px] text-[#3B3C41]">
						{data.order_fulfillment_rate}
					</div>
				);
			},
		},
		{
			accessorKey: "average_annual_rd",
			header: () => {
				return (
					<div className="font-[700] text-[14px] text-[#8A8A8A]">
						Average annual R&D spent by supplier
					</div>
				);
			},
			cell: ({ row }) => {
				const data = row.original;
				return (
					<div className="font-[400] text-[14px] text-[#3B3C41]">
						{data.average_annual_rd}
					</div>
				);
			},
		},
	];

	return (
		<div>
			<div className="bg-[#F6F6F6] p-4 lg:gap-6 lg:p-6 min-h-screen w-full">
				<Breadcrumb>
					<BreadcrumbList>
						<BreadcrumbItem>
							<BreadcrumbLink
								href="/"
								className="text-muted-foreground/70"
							>
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

				{/* <main className="bg-transparent w-full h-full grid  grid-cols-1 gap-4">
					<div className="rounded-[12px] bg-white p-4 py-6 md:p-5 lg:p-6 xl:px-9 ">
						<Step />
						<hr />
						<Cards />
					</div>
					<div>
						<div className="rounded-[12px] bg-white p-4 md:p-5 lg:p-6 xl:px-9 sm">
							<h1 className="pb-2 text-[20px] font-[700] text-[#121212]">
								New Supplier Evaluation
							</h1>
							<p className="text-[14px] font-[400] text-[#8A8A8A]">
								This is the description for the table description
							</p>

							<div className="pt-6">
								<DataTable
									columns={supplierColumn}
									data={suplierEvaluation}
								/>
							</div>
							<Addsupplier />
						</div>
					</div>
				</main> */}
			</div>

			<div className="bg-white pb-7 flex items-center flex-wrap justify-center sm:justify-end gap-5 px-4 md:pr-6 mt-6">
				<Button
					variant={"secondary"}
					className="h-[38px] text-[14px] font-[500] px-10"
				>
					Cancel
				</Button>
				<Button
					variant={"outline"}
					className="h-[38px] border-primary text-[14px] text-primary font-[500]"
				>
					Edit project information
				</Button>
				<Button
					variant={"outline"}
					className="h-[38px] border-primary text-[14px] text-primary font-[500]"
				>
					Update supplier rating information
				</Button>
				<Button
					variant={"default"}
					className="h-[38px] text-[14px] font-[500] px-10"
				>
					Save
				</Button>
			</div>
		</div>
	);
};

export default Evaluate;
