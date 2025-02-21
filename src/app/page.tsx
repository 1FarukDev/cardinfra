'use client'
import AccessCard from '@/components/ui/AccessCard'
import AnalyticsCard from '@/components/ui/AnalyticsCard'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import { InsuaranceChart } from '@/components/ui/Insurance'
import CardRequests from '@/components/ui/CardRequests'
import { WeeklyIncome } from '@/components/ui/WeekIncome'
import { CardDistribution } from '@/components/ui/CardDistribution'
import DatePickerComponent from '@/components/ui/DatePicker'

export default function Home () {
  const accessCardsData = [
    {
      icon: (
        <Icon
          icon='iconoir:card-security'
          width='24'
          height='24'
          color='white'
        />
      ),
      text: 'Manage a card',
      onClick: () => console.log('Manage a card clicked')
    },
    {
      icon: (
        <Icon icon='solar:card-linear' width='24' height='24' color='white' />
      ),
      text: 'Issue Instant Card',
      onClick: () => console.log('Issue Instant Card clicked')
    },
    {
      icon: (
        <Icon
          icon='mdi:credit-card-edit-outline'
          width='24'
          height='24'
          color='white'
        />
      ),
      text: 'Issue Personalized Card',
      onClick: () => console.log('Issue Personalized Card clicked')
    },
    {
      icon: (
        <Icon
          icon='material-symbols:add-card-outline'
          width='24'
          height='24'
          color='white'
        />
      ),
      text: 'Review Card Request',
      onClick: () => console.log('Review Card Request clicked')
    }
  ]

  const analyticsData = [
    {
      icon: 'mdi:credit-card-check-outline',
      title: 'Total Active Cards',
      value: '26,478',
      percentageChange: '+9%',
      period: 'this month'
    },
    {
      icon: 'mdi:credit-card-edit-outline',
      title: 'Total Personalized Cards',
      value: '15,703',
      percentageChange: '+9%',
      period: 'this month',
      iconColor: '#8020E7'
    },
    {
      icon: 'ph:money-wavy-thin',
      title: 'Total Personalized Cards',
      value: '₦9.3M',
      percentageChange: '+9%',
      period: 'this month',
      iconColor: '#2087E7'
    },
    {
      icon: 'mingcute:sandglass-line',
      title: 'Pending Requests',
      value: '38',
      iconColor: '#E78020',
      hideTrend: true,
      alternativeContent: (
        <div className='flex space-x-2 items-center'>
          <Icon
            icon='weui:info-outlined'
            width='16'
            height='16'
            color='#E78020'
          />
          <p className='text-[#E78020]'>Requires Attention</p>
        </div>
      )
    }
  ]

  return (
    <div className='bg-[#c0defd2b] min-h-screen px-5 py-3 flex flex-col space-y-2'>
      <div className='flex items-start justify-between mb-3'>
        <div>
          <h1 className='font-bold text-lg'>
            Hi Nazeer, what would you like to do today?
          </h1>
          <div className='flex space-x-1 items-center'>
            <p className='font-medium text-sm'>Last Login:</p>
            <p className='font-normal text-sm'>26/11/2024 14:39:58</p>
          </div>
        </div>
        <DatePickerComponent />
      </div>

      <div className='bg-white p-3 flex flex-col gap-4 py-5 border border-[#E2E2E2] rounded-lg shadow-sm'>
        <h1 className='font-semibold text-base'>Your Quick Access</h1>

        <div className='flex space-x-4 items-center justify-between'>
          {accessCardsData.map((card, index) => (
            <AccessCard
              key={index}
              icon={card.icon}
              text={card.text}
              onClick={card.onClick}
            />
          ))}
        </div>
      </div>

      <div className='flex items-center space-x-3'>
        <h1 className='font-bold text-lg'>Analytics</h1>
        <hr className='w-full ' />
      </div>

      <div className='flex space-x-4 items-center justify-between'>
        {analyticsData.map((data, index) => (
          <AnalyticsCard
            key={index}
            icon={data.icon}
            title={data.title}
            value={data.value}
            percentageChange={data.percentageChange}
            period={data.period}
            iconColor={data.iconColor}
            alternativeContent={data.alternativeContent}
            hideTrend={data.hideTrend}
          />
        ))}
      </div>
      <div className='flex space-x-2'>
        <div className='w-1/2'>
          <InsuaranceChart />
        </div>
        <div className='w-1/2'>
          <CardRequests />
        </div>
      </div>
      <div className='flex space-x-2'>
        <div className='w-1/2'>
          <WeeklyIncome />
        </div>
        <div className='w-1/2'>
          <CardDistribution />
        </div>
      </div>
    </div>
  )
}
