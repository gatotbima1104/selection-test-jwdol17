import React from "react";

export default function Box({
  label,
  contents,
}: {
  label: string;
  contents: string | number;
}) {
  return (
    <div className="border p-3 gap-2 flex flex-col rounded-lg bg-gray-50 min-w-[500]">
      <p className="font-bold">{label}</p>
      <p>{contents}</p>
    </div>
  );
}
