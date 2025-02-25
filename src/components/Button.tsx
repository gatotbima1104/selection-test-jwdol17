import React from "react";

export default function Button({
  label,
  className,
  onClick,
}: {
  label: string;
  className?: string;
  onClick?: React.MouseEventHandler;
}) {
  return (
    <button className={`p-2 bg-blue-500 rounded-lg hover:bg-blue-600 hover:cursor-pointer text-white font-bold ${className}`} onClick={onClick}>{label}</button>
  );
}
