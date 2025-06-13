import { FeedDropDown } from "@/components/organisms/FeedDropdown/FeedDropDown";
import { Button } from "@/components/atoms/Button/Button";
import { getIntegration } from "@/services/integrationService";
import { useEffect, useState } from "react";
import { IntegrationCard } from "@/components/organisms/FeedCard/FeedCard";
import { IntegrationDTO } from "@/types/integrations";
import IntegrationsGridSkeleton from "../Skeletons/FeedSkeleton";

export const FeedTemplate = () => {
  const [integrations, setIntegrations] = useState<IntegrationDTO[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const getAllIntegrations = async () => {
    setIsFetching(true);
    try {
      const response = await getIntegration();
      console.log(response);
      setIntegrations(response);
    } catch (error) {
      console.error("error getting all integrations", error);
    } finally {
      setIsFetching(false);
    }
  };

  useEffect(() => {
    getAllIntegrations();
  }, []);
  return (
    <section className="bg-gray-100 w-full h-full p-12 flex flex-col space-y-6">
      <div className="flex items-center w-full justify-between">
        <div className="flex justify-start items-center space-x-4 w-full">
          <FeedDropDown title={"All Integrations"} />
          <FeedDropDown title={"All Pricing"} />
          <FeedDropDown title={"Work With"} />
        </div>
        <div className="flex items-center justify-end w-full">
          <Button variant="primary" className="text-base w-48 py-3.5">
            Customize your store
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-3 grid-row-3 gap-4 w-full h-full">
        {integrations.map((integration) => (
          <IntegrationCard key={integration.key} integration={integration} />
        ))}
      </div>

      {isFetching && <IntegrationsGridSkeleton />}
    </section>
  );
};
