import React, { FC } from "react";

interface IconInt {
  id: string;
  width: number;
  height?: number;
  className?: string;
}

const Icon: FC<IconInt> = ({ id, width, height, className }) => {
  const realHeight = height ? height : width;

  return (
    <svg className={className} width={width} height={realHeight}>
      <use xlinkHref={`#${id}`} />
    </svg>
  );
};

export default Icon;
