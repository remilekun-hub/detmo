"use client";
import Link from "next/link";
import { Menu, Package,SettingsIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import SearchBox from "@/components/dashboard/searchbox";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/dashboard/sidebar";
import {Toaster} from "react-hot-toast"

export default function Dashboard({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();

	return (
		<section className="relative">
		
			<Sidebar />
		
			<main className="flex flex-1 flex-col lg:ml-[280px]">
        <Toaster />
        
				<header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 sticky top-0 z-[3]">
					<Sheet>
						<SheetTrigger asChild>
							<Button
								variant="outline"
								size="icon"
								className="shrink-0 lg:hidden"
							>
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle navigation menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="flex flex-col">
							<nav className="grid gap-2 text-lg font-medium">
								<Link href="/" className="flex items-center gap-3 mb-4">
									<Image
										src="/logo.svg"
										alt="logo"
										width={100}
										height={100}
									/>
								</Link>
								<Link
									href="/dashboard/spend-analysis"
									className={cn(
										"flex items-center gap-3 rounded-lg  px-1 py-2 text-muted-foreground transition-all hover:text-primary",
										pathname.includes("/spend-analysis") &&
											" text-primary bg-muted"
									)}
								>
									<Package className="h-4 w-4" />
									Spend Analysis
								</Link>
								<Link
									href="/dashboard/projects"
									className={cn(
										"flex items-center gap-3 rounded-lg px-1 py-2 text-muted-foreground transition-all hover:text-primary",
										pathname.includes("/projects") &&
											"bg-muted text-primary"
									)}
								>
									<Package className="h-4 w-4" />
									All Projects
								</Link>
								<Link
									href="/dashboard/settings"
									className={cn(
										"flex items-center gap-3 rounded-lg px-1 py-2 text-muted-foreground transition-all hover:text-primary",
										pathname.includes("/settings") &&
											"bg-muted text-primary"
									)}
								>
									<SettingsIcon className="h-4 w-4" />
									Settings
								</Link>
							</nav>
							<div className="mt-auto">
								<Card>
									<CardHeader>
										<CardTitle>Upgrade to Pro</CardTitle>
										<CardDescription>
											Unlock all features and get unlimited access to
											our support team.
										</CardDescription>
									</CardHeader>
									<CardContent>
										<Button size="sm" className="w-full">
											Upgrade
										</Button>
									</CardContent>
								</Card>
							</div>
						</SheetContent>
					</Sheet>
					<div className="w-full flex-1">
						<SearchBox />
					</div>
					<UserButton />{" "}
				</header>
				{children}
			</main>
		</section>
	);
}

{
	/* <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] relative"> */
}
