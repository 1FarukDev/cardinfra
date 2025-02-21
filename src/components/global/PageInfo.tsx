import { Icon } from '@iconify/react'
import { JSX } from 'react'
import { usePathname } from 'next/navigation'

export interface PageInfo {
  title: string
  icon: JSX.Element
  url?: string
}

const sideBar = [
  {
    title: 'Dashboard',
    icon: <Icon icon='hugeicons:home-03' width='16' height='16' />,
    url: '/'
  },
  {
    title: 'Branches',
    icon: <Icon icon='octicon:organization-24' width='16' height='16' />,
    url: '/branches'
  },
  {
    title: 'Roles',
    icon: <Icon icon='stash:user-heart-light' width='16' height='16' />,
    url: '/roles'
  },
  {
    title: 'Users',
    icon: <Icon icon='hugeicons:user-group' width='16' height='16' />,
    url: '/users'
  },
  {
    title: 'Card Scheme',
    icon: <Icon icon='circum:credit-card-1' width='16' height='16' />,
    url: '/cardscheme'
  },
  {
    title: 'Card Profile',
    icon: <Icon icon='emojione-monotone:credit-card' width='16' height='16' />,
    url: '/cardprofile'
  },
  {
    title: 'Card Request',
    icon: <Icon icon='mdi:credit-card-check-outline' width='16' height='16' />,
    url: '/cardrequest'
  },
  {
    title: 'Stock',
    icon: <Icon icon='hugeicons:chart-bar-line' width='16' height='16' />,
    url: '/stock'
  },
  {
    title: 'Cards',
    icon: <Icon icon='solar:card-linear' width='16' height='24' />,
    url: '/cards'
  },
  {
    title: 'Authorization List',
    icon: <Icon icon='ic:outline-list' width='16' height='16' />,
    url: '/list'
  },
  {
    title: 'Authorization Queue',
    icon: <Icon icon='ph:stack-light' width='16' height='16' />,
    url: '/queue'
  },
  {
    title: 'Trail',
    icon: (
      <Icon icon='material-symbols-light:map-outline' width='16' height='16' />
    ),
    url: '/trail'
  },
  {
    title: 'Account',
    icon: <Icon icon='mdi-light:account' width='16' height='16' />,
    url: '/account'
  }
]

export const getBreadcrumb = (pathname: string): PageInfo[] => {
  const segments = pathname.split('/').filter(Boolean)
  const breadcrumb: PageInfo[] = []

  let currentPath = ''

  if (pathname === '/') {
    return [
      {
        title: 'Dashboard',
        icon: <Icon icon='hugeicons:home-03' width='16' height='16' />
      }
    ]
  }

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`
    const page = sideBar.find(item => item.url === currentPath)

    if (page) {
      breadcrumb.push(page)
    } else {
      breadcrumb.push({
        title: segment.replace(/-/g, ' '),
        icon: <Icon icon='mdi:dot' width='16' height='16' />
      })
    }
  })

  return breadcrumb
}

const Breadcrumb = () => {
  const pathname = usePathname()
  const breadcrumb = getBreadcrumb(pathname)

  const showBackButton = breadcrumb.length > 1

  return (
    <div className='flex items-center space-x-2 text-gray-500'>
      {showBackButton && (
        <button
          className='flex items-center space-x-1'
          onClick={() => window.history.back()}
        >
          <Icon icon="material-symbols-light:arrow-back-ios-new" width="16" height="16" />
          <span>Back</span>
        </button>
      )}

      {breadcrumb.map((page, index) => (
        <div key={index} className='flex items-center'>
          {index > 0 && <span className='mx-2'>›</span>}
          {index === breadcrumb.length - 1 ? (
            <span className='font-bold text-black flex items-center space-x-3'>
              {page.icon}  <span>{page.title}</span>
            </span>
          ) : (
            <a
              href={page.url}
              className='hover:underline flex items-center space-x-1'
            >
                
              {page.icon} <Icon icon="weui:arrow-outlined" width="14" height="14" /> <span>{page.title}</span>
            </a>
          )}
        </div>
      ))}
    </div>
  )
}

export default Breadcrumb
