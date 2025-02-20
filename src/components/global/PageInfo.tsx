import { Icon } from "@iconify/react";
import { JSX } from "react";

interface PageInfo {
  title: string;
  icon: JSX.Element;
}

const sideBar = [
  {
    title: 'Dashboard',
    icon: (
        <Icon icon="hugeicons:home-03" width="16" height="16" />
    ),
    url: '/'
  },
  {
    title: 'Branches',
    icon: (
      <Icon
        icon='octicon:organization-24'
        width='16'
        height='16'
        className='text-[#00000080]'
      />
    ),
    url: '/dashboard/providers'
  },
  {
    title: 'Roles',
    icon: (
      <Icon
        icon='stash:user-heart-light'
        width='16'
        height='16'
        className='text-[#00000080]'
      />
    ),
    url: '/dashboard/services'
  },
  {
    title: 'Users',
    icon: (
      <Icon
        icon='hugeicons:user-group'
        width='16'
        height='16'
        className='text-[#00000080]'
      />
    ),
    url: '/dashboard/marketplace'
  },
  {
    title: 'Card Scheme',
    icon: (
      <Icon
        icon='circum:credit-card-1'
        width='16'
        height='16'
        className='text-[#00000080]'
      />
    ),
    url: '/dashboard/user-management'
  },
  {
    title: 'Card Profile',
    icon: (
      <Icon
        icon='emojione-monotone:credit-card'
        width='16'
        height='16'
        className='text-[#00000080]'
      />
    ),
    url: '/cardprofile'
  },
  {
    title: 'Card Request',
    icon: (
      <Icon
        icon='mdi:credit-card-check-outline'
        width='16'
        height='16'
        className='text-[#00000080]'
      />
    ),
    url: '/cardrequest'
  },
  {
    title: 'Stock',
    icon: (
      <Icon
        icon='hugeicons:chart-bar-line'
        width='16'
        height='16'
        className='text-[#00000080]'
      />
    ),
    url: '/dashboard/support'
  },
  {
    title: 'Cards',
    icon: (
      <Icon
        icon='solar:card-linear'
        width='16'
        height='24'
        className='text-[#00000080]'
      />
    ),
    url: '/dashboard/support'
  },
  {
    title: 'Authorization List',
    icon: (
      <Icon
        icon='ic:outline-list'
        width='16'
        height='16'
        className='text-[#00000080]'
      />
    ),
    url: '/dashboard/support'
  },
  {
    title: 'Authorization Queue',
    icon: (
      <Icon
        icon='ph:stack-light'
        width='16'
        height='16'
        className='text-[#00000080]'
      />
    ),
    url: '/dashboard/support'
  },
  {
    title: 'Trail',
    icon: (
      <Icon
        icon='material-symbols-light:map-outline'
        width='16'
        height='16'
        className='text-[#00000080]'
      />
    ),
    url: '/dashboard/support'
  },
  {
    title: 'Account',
    icon: (
      <Icon
        icon='mdi-light:account'
        width='16'
        height='16'
        className='text-[#00000080]'
      />
    ),
    url: '/dashboard/support'
  }
];

export const getPageInfo = (url: string): PageInfo | undefined => {
  return sideBar.find(item => item.url === url);
};