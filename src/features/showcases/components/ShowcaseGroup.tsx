import React from 'react';

type ShowcaseGroupProps = {
  children: React.ReactNode;
};

export const ShowcaseGroup = ({ children }: ShowcaseGroupProps) => {
  return <div className='flex items-center gap-4'>{children}</div>;
};
