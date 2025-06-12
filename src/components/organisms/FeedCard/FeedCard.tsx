import { Switch } from "@/components/ui/switch";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/atoms/Button/Button";
import { FC } from "react";

import Image from "next/image";

type IntegrationCardProps = {
  title: string;
  icon: string;
  description: string;
};

export const IntegrationCard: FC<IntegrationCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <Card className="w-full h-full flex flex-col justify-between">
      <CardHeader className="flex  items-start justify-between">
        <div className="flex items-start gap-4">
          <div className="bg-indigo-100 text-indigo-600 rounded-full h-12 w-12 flex items-center justify-center font-semibold text-lg">
            <Image className="" alt="" src={icon} width={48} height={48} />
          </div>
          <div>
            <CardTitle className="text-base">{title}</CardTitle>
            <CardDescription className="flex items-center gap-2 text-green-600 mt-1">
              <span className="h-2 w-2 rounded-full bg-green-600" />
              Connected
            </CardDescription>
          </div>
        </div>
        <Switch defaultChecked />
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground">
        {description}
      </CardContent>

      <CardFooter>
        <Button className="w-full" variant="secondary">
          Disconnect
        </Button>
      </CardFooter>
    </Card>
  );
};
