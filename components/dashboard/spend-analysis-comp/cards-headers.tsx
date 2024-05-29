import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

export default function CardHeaders({
  Icon,
  title,
  description,
  count,
  countSymbol,
}: {
  Icon: LucideIcon;
  title: string;
  description: string;
  count: number;
  countSymbol: string;
}) {
  return (
    <Card className="w-full ">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {countSymbol} {count}
        </div>
        <p className="text-xs text-muted-foreground">+180.1% from last month</p>
      </CardContent>
    </Card>
  );
}
