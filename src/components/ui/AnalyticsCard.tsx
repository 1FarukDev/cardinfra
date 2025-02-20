import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

type AnalyticsCardProps = {
  icon: string
  title: string
  value: string | number
  percentageChange?: string
  period?: string
  iconColor?: string
  trendIcon?: string
  trendBgColor?: string
  trendTextColor?: string
  hideTrend?: boolean
  alternativeContent?: React.ReactNode
}

const AnalyticsCard: React.FC<AnalyticsCardProps> = ({
  icon,
  title,
  value,
  percentageChange,
  period,
  iconColor = '#00984C',
  trendIcon = 'mynaui:arrow-up-right',
  trendBgColor = '#EFFAF6',
  trendTextColor = '#29A174',
  hideTrend = false,
  alternativeContent
}) => {
  return (
    <div className='bg-white border border-[#E2E2E2] rounded-lg shadow-sm p-3 py-4 flex flex-col space-y-2 w-full'>
      <Icon icon={icon} width='24' height='24' color={iconColor} />
      <p className='font-medium text-base text-[#0000008F]'>{title}</p>
      <div className='flex justify-between items-center'>
        <p className='font-bold text-2xl'>{value}</p>
        
        {hideTrend ? (
          alternativeContent ? (
            alternativeContent
          ) : (
            <p className='text-sm text-gray-500'>No trend data</p>
          )
        ) : (
          <div className='flex items-center space-x-2'>
            <div
              className='flex space-x-1 p-1 rounded-md items-center'
              style={{ backgroundColor: trendBgColor }}
            >
              <Icon
                icon={trendIcon}
                width='16'
                height='16'
                color={trendTextColor}
              />
              <p className='text-sm' style={{ color: trendTextColor }}>
                {percentageChange}
              </p>
            </div>
            <p className='text-[#0000008F] font-normal'>{period}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AnalyticsCard
