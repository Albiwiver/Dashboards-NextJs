import { FC } from "react";

type Props = {
  customerNote?: string;
  className?: string;
};

export const NoteDetailCard: FC<Props> = ({ customerNote, className }) => {
  return (
    <div
      className={`h-full w-full flex flex-col rounded-md bg-white p-6 font-urbanist space-y-4 py-6 shadow-md ${className}`}
    >
      <div className="flex items-center justify-between w-full">
        <span className="text-xl font-bold">Note</span>
        <span className="text-primary text-sm font-medium">Edit</span>
      </div>
      <span className="text-interface2 text-base font-medium">
        {customerNote}
      </span>
    </div>
  );
};
