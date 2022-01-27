import { Dialog, Transition } from '@headlessui/react';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

type SideNavigationItem = {
  name: string;
  to: string;
  icon?: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
};

type SideNavigationProps = {
  setSideBarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideNavigation = ({ setSideBarOpen }: SideNavigationProps) => {
  const navigation: SideNavigationItem[] = [{ name: 'Button', to: '/button' }];

  return (
    <>
      {navigation.map((item, index) => (
        <NavLink
          end={index === 0}
          to={item.to}
          key={index}
          className={({ isActive }) =>
            clsx(
              'text-gray-400 hover:text-gray-900 hover:font-bold',
              'group flex items-center px-2 py-2 text-base font-medium',
              isActive && 'text-gray-900 font-bold'
            )
          }
          onClick={() => setSideBarOpen && setSideBarOpen(false)}
        >
          {item.icon && (
            <item.icon
              className={clsx(
                'text-gray-400 group-hover:text-gray-900',
                'group flex items-center px-2 py-2 text-base font-medium rounded-md'
              )}
            />
          )}
          {item.name}
        </NavLink>
      ))}
    </>
  );
};

const Logo = () => (
  <div className='font-semibold'>
    <span className='text-[#F7542E]'>Dev</span>
    Challenges.io
  </div>
);

type MobileSideBarProps = {
  sideBarOpen: boolean;
  setSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MobileSidebar = ({ sideBarOpen, setSideBarOpen }: MobileSideBarProps) => {
  return (
    <Transition.Root show={sideBarOpen} as={React.Fragment}>
      <Dialog
        as='div'
        static
        className='fixed inset-0 flex z-40 md:hidden'
        open={sideBarOpen}
        onClose={setSideBarOpen}
      >
        <Transition.Child
          as={React.Fragment}
          enter='transition-opacity ease-linear duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity ease-linear duration-300'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='-translate-x-full'
          enterTo='translate-x-0'
          leave='transition ease-in-out duration-300 trasnform'
          leaveFrom='translate-x-0'
          leaveTo='-translate-x-full'
        >
          <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-50'>
            <Transition.Child
              as={React.Fragment}
              enter='ease-in-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in-out duration-300'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='absolute top-0 right-0 -mr-12 pt-2'>
                <button
                  className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                  onClick={() => setSideBarOpen(false)}
                >
                  <span className='sr-only'>Close sidebar</span>
                  <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
                </button>
              </div>
            </Transition.Child>
            <div className='flex-shrink-0 flex items-center justify-center px-4 mb-32'>
              <Logo />
            </div>
            <div className='mt-5 flex-1 h-0 overflow-y-auto'>
              <nav className='px-2 space-y-1'>
                <SideNavigation setSideBarOpen={setSideBarOpen} />
              </nav>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

const Sidebar = () => (
  <div className='hidden md:flex md:flex-shrink-0 bg-gray-50'>
    <div className='flex flex-col w-64'>
      <div className='flex flex-col h-0 flex-1'>
        <div className='flex items-center justify-center h-16 flex-shrink-0 px-4 mb-32'>
          <Logo />
        </div>
        <div className='flex-1 flex flex-col overflow-y-auto'>
          <nav className='flex-1 px-2 py-4 space-y-1'>
            <SideNavigation />
          </nav>
        </div>
      </div>
    </div>
  </div>
);

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  return (
    <div className='h-screen flex overflow-hidden bg-white'>
      <MobileSidebar
        sideBarOpen={sideBarOpen}
        setSideBarOpen={setSideBarOpen}
      />
      <Sidebar />
      <div className='flex flex-col w-0 flex-1 overflow-hidden'>
        <div className='relative z-10 flex-shrink-0 flex h-16 bg-white shadow md:hidden'>
          <button
            className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo md:hidden'
            onClick={() => setSideBarOpen(true)}
          >
            <span className='sr-only'>Open Sidebar</span>
            <MenuAlt2Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <main className='flex-1 relative overflow-y-auto focus:outline-none'>
          {children}
        </main>
      </div>
    </div>
  );
};
