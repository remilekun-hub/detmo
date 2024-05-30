'use client'
import { FC } from "react";
import { usersTabData } from "@/data/setting";
import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/datatable";
import { Trash2 } from "lucide-react";

interface Props {}

export type usersTabData = {
	name: string;
	email: string;
	permission: string;
};

export const usersColumn: ColumnDef<usersTabData>[] = [
	{
		accessorKey: "name",
		header: () => {
			return (
				<div className="font-[700] text-[14px] text-[#8A8A8A]">Name</div>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div className="font-[700] text-[14px] text-[#3B3C41]">
					{data.name}
				</div>
			);
		},
	},
	{
		accessorKey: "email",
		header: () => {
			return (
				<div className="font-[700] text-[14px] text-[#8A8A8A]">Email</div>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div className="font-[700] text-[14px] text-[#3B3C41]/50">
					{data.email}
				</div>
			);
		},
	},
	{
		accessorKey: "permission",
		header: () => {
			return (
				<div className="font-[700] text-[14px] text-[#8A8A8A]">
					Permission
				</div>
			);
		},
		cell: ({ row }) => {
			const data = row.original;
			return (
				<div className="font-[700] text-[14px] text-[#3B3C41]/50">
					{data.permission}
				</div>
			);
		},
	},

	{
		id: "actions",
		enableHiding: false,
		cell: ({ row }) => {
			const data = row.original;

			return (
				<div>
					<button className="outline-0">
						<Trash2 strokeWidth={1} className="text-primary" size={16} />
					</button>
				</div>
			);
		},
	},
];

const UsersContent: FC<Props> = ({}) => {
	return (
		<div className="p-4 lg:p-7 lg:lg:px-10 xl:px-20  max-w-[1400px] lg:pt-[40px]">
			<DataTable columns={usersColumn} data={usersTabData} />
		</div>
	);
};

export default UsersContent;
