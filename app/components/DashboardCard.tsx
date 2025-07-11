"use client";

import { FC } from "react";

type DashboardCardProps = {
  content: string;
  contentType: string;
  niche: string;
  createdAt: string;
  full?: boolean;
  onClick?: () => void;
};

const DashboardCard: FC<DashboardCardProps> = ({
  content,
  contentType,
  niche,
  createdAt,
  full = false,
  onClick,
}) => {
  const formattedDate = new Date(createdAt).toLocaleDateString();
  const formattedTime = new Date(createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      onClick={onClick}
      className={`bg-zinc-900 rounded-lg animate-scale-in my-4 ${
        full ? "" : "mx-4 md:m-0"
      } transition-colors p-6 cursor-pointer flex flex-col justify-between gap-4 h-full`}
    >
      <div className="flex justify-between items-center text-xs font-semibold border-b border-zinc-700 pb-4 uppercase text-zinc-500">
        <span>{contentType.replace("_", " ")}</span>
        <span>{niche}</span>
      </div>
      <p className={`text-sm text-zinc-600 ${full ? "" : "line-clamp-3"}`}>
        {content}
      </p>

      <div className="flex justify-between items-center text-xs text-zinc-500 pt-4 border-t border-zinc-700">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
