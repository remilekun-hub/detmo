import CardHeaders from "@/components/dashboard/spend-analysis-comp/cards-headers";
import SpendActions from "@/components/dashboard/spend-analysis-comp/spend-actions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { DollarSign } from "lucide-react";
import { FC } from "react";

interface SpendAnalysisProps {}

const SpendAnalysis: FC<SpendAnalysisProps> = ({}) => {
  return (
    <>
      <Breadcrumb className=" ">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Spend Analysis</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <SpendActions />

      {/* cards */}
      <div className="grid   gap-4  grid-cols-1 sm:grid-cols-2  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5">
        <CardHeaders
          description="lorem ipsum"
          Icon={DollarSign}
          title="Total Spend"
          countSymbol="$"
          count={12000}
        />
        <CardHeaders
          description="lorem ipsum"
          Icon={DollarSign}
          title="Total Spend"
          countSymbol="$"
          count={12000}
        />
        <CardHeaders
          description="lorem ipsum"
          Icon={DollarSign}
          title="Total Spend"
          countSymbol="$"
          count={12000}
        />
        <CardHeaders
          description="lorem ipsum"
          Icon={DollarSign}
          title="Total Spend"
          countSymbol="$"
          count={12000}
        />
        <CardHeaders
          description="lorem ipsum"
          Icon={DollarSign}
          title="Total Spend"
          countSymbol="$"
          count={12000}
        />
      </div>
    </>
  );
};

export default SpendAnalysis;
