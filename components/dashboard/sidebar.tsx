'use client'
import React from 'react'
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Package, SettingsIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';


export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="border-r bg-muted/40 hidden lg:block h-screen w-[280px] fixed left-0 z-[2]">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Image src="/logo.svg" alt="logo" width={100} height={100} />
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href="/dashboard/spend-analysis"
                className={cn(
                  "flex items-center gap-3 rounded-lg  px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  pathname.includes("/spend-analysis") &&
                    " text-primary bg-muted",
                )}
              >
                <Package className="h-4 w-4" />
                Spend Analysis
              </Link>
              <Link
                href="/dashboard/projects"
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  pathname.includes("/projects") && "bg-muted text-primary",
                )}
              >
                <Package className="h-4 w-4" />
                All Projects
              </Link>
              <Link
                href="/dashboard/settings"
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                  pathname.includes("/settings") && "bg-muted text-primary",
                )}
              >
                <SettingsIcon className="h-4 w-4" />
                Settings
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card x-chunk="dashboard-02-chunk-0">
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Button size="sm" className="w-full">
                  Upgrade
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
  )
}
