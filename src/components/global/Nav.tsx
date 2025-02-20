'use client'
import Logo from './Logo'
import { Avatar } from 'antd'
import Breadcrumb from './BreadCrumbs'
import { useBreadcrumbs } from '@/customHooks/BreadCrumbsContext'
import { Icon } from '@iconify/react/dist/iconify.js'
import Input from '../ui/Input'
import { getPageInfo } from './PageInfo'
import { usePathname } from 'next/navigation'

export default function NavBar () {
  return (
    <div className='w-full py-5 flex justify-between flex-row items-center'>
      <Logo />
      <div>
        <Icon width={30} icon='quill:hamburger' />
      </div>
    </div>
  )
}

export const DashboardNav = () => {
  const { breadcrumbs } = useBreadcrumbs()
  const pathname = usePathname()
  const pageInfo = getPageInfo(pathname)

  return (
    <div className='flex items-center gap-5 justify-between px-5 py-1 h-[85px] border-b border-[#CCCCCC]30 '>
      <div className='flex items-start'>
        {breadcrumbs.length > 0 && <Breadcrumb data={breadcrumbs} />}
        {pageInfo && (
          <div className='flex items-center space-x-2'>
            {pageInfo.icon}
            <span className='text-[12px] font-normal'>{pageInfo.title}</span>
          </div>
        )}
      </div>
      <div className='flex gap-5 items-center justify-between '>
        <Input
          leftElement={<Icon icon='mynaui:search' width='24' height='24' />}
          placeholder='Search'
          className='!rounded-full'
        />
        <div className='space-x-4 flex items-center'>
          <div className='size-[40px] rounded-full flex items-center justify-center'>
            <Icon
              icon='hugeicons:notification-03'
              width='24'
              height='24'
              className='text-[#475467]'
            />
          </div>
          <div className='flex items-center space-x-3'>
            <div>
              <Avatar
                size={40}
                className='cursor-pointer text-white bg-gray-100 !text-sm'
              >
                <Icon
                  icon='iconoir:user'
                  width='24'
                  height='24'
                  className='text-[#475467]'
                />
              </Avatar>
            </div>
            {/* <span className="font-[400] hidden md:block text-[14px] text-dark0b text-nowrap">{user?.first_name} {user?.last_name}</span> */}
          </div>
        </div>
      </div>
    </div>
  )
}
