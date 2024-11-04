import React from "react";

type GhostLineProps = {
  styles?: string;
};

const GhostLine = ({ styles }: GhostLineProps) => {
  return (
    <div
      className={`h-px bg-gradient-to-r from-transparent via-secondary to-transparent w-full ${styles}`}
    />
  );
};

export default GhostLine;
