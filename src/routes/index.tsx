import { Suspense } from 'react';
import { Outlet, useRoutes } from 'react-router-dom';

import { Spinner } from '@/components/Elements';
import { MainLayout } from '@/components/Layout';
import { lazyImport } from '@/utils/lazyImport';
const { ButtonShowcase } = lazyImport(
  () => import('@/features/showcases'),
  'ButtonShowcase'
);

const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className='h-full w-full flex items-center justify-center z-50'>
            <Spinner size='xl' />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};

export const AppRoutes = () => {
  const appRoutes = useRoutes([
    {
      path: '/',
      element: <App />,
      children: [{ path: '/button', element: <ButtonShowcase /> }],
    },
  ]);

  return <>{appRoutes}</>;
};
