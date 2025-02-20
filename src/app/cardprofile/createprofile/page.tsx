'use client'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import TableWrapper, { TableHead, TableRow } from '@/components/ui/Table'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Input from '@/components/ui/Input'
import { Icon } from '@iconify/react/dist/iconify.js'
import Modal from '@/components/ui/Modal'
import DropDown from '@/components/ui/Dropdown'
import { useState } from 'react'

export default function CardRequestDetail () {
  const [selectedValue, setSelectedValue] = useState(null)
  const [selectedContent, setSelectedContent] = useState([])

  const handleChange = (value: any) => {
    setSelectedValue(value)
    console.log('Selected value:', value)
  }

  const handleContentChange = (value: any[]) => {
    // setSelectedContent(value);
    console.log('Selected content:', value)
  }

  const dropdownData = ['Option 1', 'Option 2', 'Option 3', 'Option 4']
  const router = useRouter()
  const card = [
    {
      id: 1,
      cardName: 'Verve-1',
      currency: 'NGN',
      expiration: '40 months',
      binPrefix: '847264905',
      date: '11/14/2024  10:27:43'
    }
  ]

  return (
    <div className='bg-[#c0defd2b] min-h-screen px-5 py-3 flex flex-col space-y-4'>
      <div>
        <h1 className='font-bold text-lg'>Create Profile</h1>
        <div className='flex space-x-1 items-center'>
          <p className='font-normal text-sm'>
            Fill in profile details and add card fee.
          </p>
        </div>
      </div>

      <Card className='flex flex-col mt-6 shadow-sm'>
        <CardHeader className=' pb-0'>
          <CardTitle>Card Request Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='mt-6 flex space-x-[106px]'>
            <div className='w-full space-y-[20px]'>
              <Input label='Card Name*' placeholder='Enter card name' />
              <DropDown
                data={dropdownData}
                onChange={handleChange}
                onContentChange={handleContentChange}
                label='Card Scheme*'
                placeHolder='Verve'
              />
              <Input label='Description' />
              <DropDown
                data={dropdownData}
                onChange={handleChange}
                onContentChange={handleContentChange}
                label='Branch Blacklist*'
                placeHolder='Head office'
              />
            </div>
            <div className='w-full space-y-[20px]'>
              <Input label='Bin Prefix*' placeholder='0000000' />
              <Input label='Expiration*' />
              <DropDown
                data={dropdownData}
                onChange={handleChange}
                onContentChange={handleContentChange}
                label='Currency'
                placeHolder='NGN'
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className='flex flex-col mt-6 shadow-sm'>
        <CardHeader className=' pb-0'>
          <CardTitle>Fees</CardTitle>
          <button
            className='bg-[#014DAF] text-white flex space-x-2 items-center py-2 px-4 rounded-lg w-max mt-2'
            onClick={() => router.push('/cardprofile/createprofile')}
          >
            <Icon icon='material-symbols:add-rounded' width='24' height='24' />
            <p>Add Fee</p>
          </button>
        </CardHeader>
        <CardContent>
          <div className='mt-3'>
            <TableWrapper bordered>
              <TableHead
                titles={[
                  'Name',
                  'Value',
                  'Frequency',
                  'Currency',
                  'Time',
                  'Amount Paid',
                  'Account'
                ]}
              />
              <tbody className='text-[#475467] font-normal text-sm '>
                {card.map((service, index) => {
                  return (
                    <TableRow
                      key={`table_row_content_${index}`}
                      data={[
                        <span></span>,
                        <span></span>,
                        <span></span>,
                        <span></span>,
                        <span></span>
                      ]}
                    />
                  )
                })}
              </tbody>
            </TableWrapper>
          </div>
        </CardContent>
      </Card>

      <div className='pt-9'>
        <button
          className='bg-[#014DAF] text-white flex space-x-2 items-center py-2 px-[95px] rounded-md w-max'
          onClick={() => router.push('/cardprofile/createprofile')}
        >
          <Icon icon='material-symbols:add-rounded' width='24' height='24' />
          <p>Create Profile</p>
        </button>
      </div>
    </div>
  )
}
