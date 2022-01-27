type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <div className='px-4 py-6 sm:px-6 md:px-8'>
        <div className='max-w-7xl mx-auto mb-7'>
          <h1 className='text-2xl text-gray-600'>{title}</h1>
        </div>
        <div className='max-w-7xl mx-auto'>{children}</div>
      </div>
    </>
  );
};
