import clsx from 'clsx';
import React from 'react';

type ShowcaseItemProps = {
  label: string;
  children: React.ReactNode;
  className?: string;
};

export const ShowcaseItem = ({
  children,
  className,
  label,
}: ShowcaseItemProps) => {
  return (
    <div
      className={clsx('flex flex-col items-start justify-center', className)}
    >
      <span className='text-[#515151] text-xs mb-3'>{label}</span>
      <div>{children}</div>
    </div>
  );
};
