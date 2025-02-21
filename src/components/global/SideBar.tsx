'use client'

import { Icon } from '@iconify/react'
import CardiLogo from '@/assets/cardinfra.svg'
import { JSX, useEffect, useState } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import styled from 'styled-components'
import LapoLogo from '@/assets/LAPO_Logo.svg'
import Image from 'next/image'
interface sideBar {
  title: string
  icon: JSX.Element
  url: string
}

export default function SideBar ({
  className,
  children
}: {
  className?: string
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [sideBarData, setSideBarData] = useState<sideBar[]>([])
  const [search, setSearch] = useState<string>('')

  function filterSideBar (query: string) {
    setSearch(query)
    const updatedSideBar = sideBar.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    )
    setSideBarData(updatedSideBar)
  }

  const sideBar = [
    {
      title: 'Dashboard',
      icon: <Icon icon='hugeicons:home-03' width='16' height='16' />,
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
      url: '/branches'
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
      url: '/roles'
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
      url: '/users'
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
      url: '/cardscheme'
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
      url: '/stock'
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
      url: '/cards'
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
      url: '/list'
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
      url: '/queue'
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
      url: '/trail'
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
      url: '/account'
    }
  ]

  useEffect(() => {
    setSideBarData(sideBar)
  }, [])

  const isActive = (url: string) => {
    if (url === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(url);
  };
  

  return (
    <div className={`flex min-h-screen ${className}`}>
      <div className='bg-[#FFFFFF] w-[350px] hidden xl:flex flex-col justify-between border border-[#DEDEDF]'>
        <div>
          <div className='mt-7 ml-2'>
            <Image src={LapoLogo} alt='Lapo Logo' />
          </div>
          <div className='mt-10 flex justify-center'>
            <ul className='w-full px-2 overflow-y-auto max-h-[calc(100vh-300px)] no-scrollbar'>
              {sideBarData.map((sidebar: sideBar, index: number) => (
                <li key={`sidebar-item-${index}`}>
                  <Button
                    title={sidebar?.title}
                    onClick={() => router.push(sidebar?.url)}
                    className={`flex ${
                      isActive(sidebar?.url)
                        ? 'active text-blue-500'
                        : 'text-white'
                    } mb-4 h-[40px] px-5 w-full justify-start items-center gap-2`}
                  >
                    {sidebar.icon && sidebar.icon}
                    <p className='text-[12px] text-left whitespace-nowrap text-[#00000080]'>
                      {sidebar?.title}
                    </p>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mb-10 flex justify-center absolute bottom-0 w-[290px] '>
          <ul className='w-full px-2'>
            <li>
              <Button
                title='Logout'
                onClick={() => router.push('/logout')}
                className={`flex ${
                  isActive('/logout') ? 'active text-blue-500' : 'text-white'
                } mb-4 h-[40px] px-5 w-full justify-start items-center gap-2`}
              >
                <Icon
                  icon='hugeicons:logout-02'
                  width='16'
                  height='16'
                  className='text-[#121212]'
                />
                <p className='text-[12px] text-left whitespace-nowrap text-[#121212]'>
                  Logout
                </p>
              </Button>
            </li>

            <li className='px-4'>
              <p className='text-[#00000080] text-[12px] font-medium'>
                Powered By:
              </p>
              <div className='mt-2 '>
                <Image src={CardiLogo} alt='Lapo Logo' />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='w-full overflow-y-auto h-screen'>{children}</div>
    </div>
  )
}

const Button = styled.button`
  position: relative;
  z-index: 1;
  color: #00000080;
  display: flex;
  align-items: center;
  gap: 8px;

  p {
    width: auto;
    white-space: normal;
    overflow: visible;
    text-overflow: clip;
  }

  &:before {
    content: '';
    display: block;
    z-index: -1;
    position: absolute;
    left: -120%;
    top: 0;
    width: 100%;
    height: 100%;
    border-left: solid 7px #fff;
    background: #f6f6f6;
    transition: 0.35s ease left;
    border-radius: 10px;
  }

  &.active,
  &:hover {
    opacity: 1;

    p {
      color: #014daf;
    }

    svg {
      color: #014daf;
    }

    &:before {
      left: 0;
    }
  }
`
