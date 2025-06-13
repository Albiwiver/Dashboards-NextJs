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
import { FC, useState } from "react";
import { IntegrationDTO } from "@/types/integrations";
import { useMemo } from "react";
import { updateIntegrations } from "@/services/integrationService";

import Image from "next/image";

type IntegrationCardProps = {
  integration: IntegrationDTO;
};

export const IntegrationCard: FC<IntegrationCardProps> = ({ integration }) => {
  const { title, image, description, id, connected } = integration;
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isConnected, setIsConnected] = useState<boolean>(connected);

  const textButton = useMemo(() => {
    if (isConnected && isLoading) {
      return "Disconnecting...";
    }

    if (!isConnected && isLoading) {
      return "Connecting...";
    }

    if (isConnected) {
      return "Disconnect";
    }
    return "Connect";
  }, [isConnected, isLoading]);

  const updateIntegration = async (id: string, connected: boolean) => {
    setIsLoading(true);
    try {
      const response = await updateIntegrations({ id, connected });
      setIsConnected(response.connected);
    } catch (error) {
      console.error("Error updating integration", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full h-full flex flex-col justify-between p-4 shadow-none">
      <CardHeader className="flex  items-start justify-between">
        <div className="flex items-start gap-4">
          <div className=" h-12 w-12 items-center justify-center flex">
            <Image className="" alt="" src={image} width={48} height={48} />
          </div>
          <div>
            <CardTitle className="text-base font-urbanist font-semibold">
              {title}
            </CardTitle>
            <CardDescription className="flex items-center gap-2 text-green-600 mt-1">
              {isConnected ? (
                <>
                  <span className="h-2 w-2 rounded-full bg-green-600" />
                  <span className="font-urbanist text-sm"> Connected</span>
                </>
              ) : (
                <p>hola</p>
              )}
            </CardDescription>
          </div>
        </div>
        <Switch defaultChecked />
      </CardHeader>

      <CardContent className="text-sm text-muted-foreground">
        {description}
      </CardContent>

      <CardFooter>
        <Button
          className="w-full"
          variant={isConnected ? "primary" : "secondary"}
          onClick={() => updateIntegration(id, !isConnected)}
        >
          {textButton}
        </Button>
      </CardFooter>
    </Card>
  );
};
