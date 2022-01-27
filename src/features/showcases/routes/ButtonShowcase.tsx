import { ShoppingCartIcon } from '@heroicons/react/solid';
import clsx from 'clsx';

import { Button } from '@/components/Elements';
import { ContentLayout } from '@/components/Layout/ContentLayout';

import { ShowcaseItem } from '../components/ShocaseItem';
import { ShowcaseGroup } from '../components/ShowcaseGroup';

export const ButtonShowcase = () => {
  return (
    <ContentLayout title='Button'>
      <div className='space-y-[45px]'>
        <ShowcaseGroup>
          <ShowcaseItem label='<Button />' className='w-64'>
            <Button>Button</Button>
          </ShowcaseItem>
          <ShowcaseItem label='&:hover &:focus' className='w-64'>
            <Button className={clsx('bg-[#AEAEAE]')}>Button</Button>
          </ShowcaseItem>
        </ShowcaseGroup>
        <ShowcaseGroup>
          <ShowcaseItem label='<Button variant="outline" />' className='w-64'>
            <Button color='primary' variant='outline'>
              Button
            </Button>
          </ShowcaseItem>
          <ShowcaseItem label='&:hover &:focus' className='w-64'>
            <Button
              color='primary'
              variant='outline'
              className={clsx('bg-[#2962FF]/10')}
            >
              Button
            </Button>
          </ShowcaseItem>
        </ShowcaseGroup>
        <ShowcaseGroup>
          <ShowcaseItem label='<Button variant="text" />' className='w-64'>
            <Button color='primary' variant='text'>
              Button
            </Button>
          </ShowcaseItem>
          <ShowcaseItem label='&:hover &:focus' className='w-64'>
            <Button
              color='primary'
              variant='text'
              className={clsx('bg-[#2962FF]/10')}
            >
              Button
            </Button>
          </ShowcaseItem>
        </ShowcaseGroup>
        <ShowcaseGroup>
          <ShowcaseItem label='<Button disableShadow />'>
            <Button color='primary' disableShadow>
              Button
            </Button>
          </ShowcaseItem>
        </ShowcaseGroup>
        <ShowcaseGroup>
          <ShowcaseItem label='<Button disabled />' className='w-64'>
            <Button disabled>Button</Button>
          </ShowcaseItem>
          <ShowcaseItem
            label='<Button variant="text" disabled />'
            className='w-64'
          >
            <Button variant='text' disabled>
              Button
            </Button>
          </ShowcaseItem>
        </ShowcaseGroup>
        <ShowcaseGroup>
          <ShowcaseItem
            label='<Button startIcon={ShoppingCartIcon} />'
            className='w-64'
          >
            <Button startIcon={ShoppingCartIcon}>Button</Button>
          </ShowcaseItem>
          <ShowcaseItem
            label='<Button endIcon={ShoppingCardIcon} />'
            className='w-64'
          >
            <Button endIcon={ShoppingCartIcon}>Button</Button>
          </ShowcaseItem>
        </ShowcaseGroup>
        <ShowcaseGroup>
          <ShowcaseItem label='<Button size="sm" />' className='w-48'>
            <Button color='primary' size='sm'>
              Button
            </Button>
          </ShowcaseItem>
          <ShowcaseItem label='<Button size="md" />' className='w-48'>
            <Button color='primary' size='md'>
              Button
            </Button>
          </ShowcaseItem>
          <ShowcaseItem label='<Button size="lg" />' className='w-48'>
            <Button color='primary' size='lg'>
              Button
            </Button>
          </ShowcaseItem>
        </ShowcaseGroup>
        <ShowcaseGroup>
          <ShowcaseItem label='<Button color="default" />' className='w-48'>
            <Button color='default'>Button</Button>
          </ShowcaseItem>
          <ShowcaseItem label='<Button color="primary" />' className='w-48'>
            <Button color='primary'>Button</Button>
          </ShowcaseItem>
          <ShowcaseItem label='<Button color="secondary" />' className='w-48'>
            <Button color='secondary'>Button</Button>
          </ShowcaseItem>
          <ShowcaseItem label='<Button color="danger" />' className='w-48'>
            <Button color='danger'>Button</Button>
          </ShowcaseItem>
        </ShowcaseGroup>
        <ShowcaseGroup>
          <ShowcaseItem label='&:hover &:focus' className='w-48'>
            <Button color='default' className='bg-[#AEAEAE]'>
              Button
            </Button>
          </ShowcaseItem>
          <ShowcaseItem label='&:hover &:focus' className='w-48'>
            <Button color='primary' className='bg-[#0039CB]'>
              Button
            </Button>
          </ShowcaseItem>
          <ShowcaseItem label='&:hover &:focus' className='w-48'>
            <Button color='secondary' className='bg-[#1C313A]'>
              Button
            </Button>
          </ShowcaseItem>
          <ShowcaseItem label='&:hover &:focus' className='w-48'>
            <Button color='danger' className='bg-[#9A0007]'>
              Button
            </Button>
          </ShowcaseItem>
        </ShowcaseGroup>
      </div>
    </ContentLayout>
  );
};
