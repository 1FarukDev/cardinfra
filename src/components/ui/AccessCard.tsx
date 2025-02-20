'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

interface AccessCardProps {
  icon: any;
  text: string;
  onClick?: () => void;
}

function AccessCard({ icon, text, onClick }: AccessCardProps) {
  return (
    <div
      className='flex items-center space-x-4 bg-[#c0defd2b] p-3 rounded-lg cursor-pointer w-full'
      onClick={onClick}
    >
      <div className='bg-blue-800 p-2 rounded-full w-max'>
        {icon}
      </div>
      <p className='font-semibold text-base'>{text}</p>
      <Icon icon='solar:alt-arrow-right-outline' width='24' height='24' color='#808080' />

    </div>
  )
}

export default AccessCard