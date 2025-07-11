"use client";

import { Card, Text } from "@radix-ui/themes";
import { FC } from "react";

type DashboardCardProps = {
  content: string;
  contentType: string;
  niche: string;
  createdAt: string;
  onClick?: () => void;
};

const DashboardCard: FC<DashboardCardProps> = ({
  content,
  contentType,
  niche,
  createdAt,
  onClick,
}) => {
  return (
    <Card
      variant="surface"
      className="p-6 cursor-pointer transition hover:shadow-md"
      onClick={onClick}
    >
      <Text as="div" size="1" color="gray" className="mb-2">
        {contentType.replace("_", " ").toUpperCase()} —{" "}
        {new Date(createdAt).toLocaleString()}
      </Text>
      <Text as="div" size="2" weight="medium" className="mb-2">
        Niche: {niche}
      </Text>
      <Text as="p" size="2" color="gray" className="line-clamp-3">
        {content}
      </Text>
    </Card>
  );
};

export default DashboardCard;
