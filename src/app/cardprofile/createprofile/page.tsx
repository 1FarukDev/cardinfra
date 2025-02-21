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
import RadioButton from '@/components/ui/RadioButton'

export default function CardRequestDetail () {
  const [selectedValue, setSelectedValue] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRadio, setSelectedRadio] = useState<string>('')

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

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  const handleRadioChange = (value: string) => {
    setSelectedRadio(value)
  }

  const radioOptions = ['Radio 1', 'Radio 2', 'Radio 3']
  return (
    <div className='bg-[#c0defd2b] min-h-screen px-5 py-3 flex flex-col gap-4'>
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
            onClick={() => setIsModalOpen(true)}
          >
            <Icon icon='material-symbols:add-rounded' width='24' height='24' />
            <p>Add Fee</p>
          </button>
        </CardHeader>
        <CardContent>
          <div className='mt-3'>
            <TableWrapper bordered={true}>
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
                bordered={true}
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
                      bordered={true}
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
          onClick={() => setIsModalOpen(true)}
        >
          <Icon icon='material-symbols:add-rounded' width='24' height='24' />
          <p>Create Profile</p>
        </button>
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between items-start px-5'>
            <div className='flex space-x-3 items-center'>
              <div className='p-2 bg-white border border-[#EAECF0] rounded-lg w-max shadow-sm'>
                <Icon icon='basil:add-outline' width='28' height='28' />
              </div>
              <div>
                <p className='font-bold text-lg'>Add Fee</p>
                <p className='font-normal text-base text-[#475467]'>
                  Fill in fee details
                </p>
              </div>
            </div>
            <Icon
              icon='iconoir:cancel'
              width='30'
              height='30'
              color='#667085'
              onClick={() => setIsModalOpen(false)}
              className='cursor-pointer'
            />
          </div>
          <hr />

          <div className='px-5 flex flex-col gap-4'>
            <Input label='Fee Name*' placeholder='Maintenance' />
            <DropDown
              data={dropdownData}
              onChange={handleChange}
              onContentChange={handleContentChange}
              label='Value'
              placeHolder='0'
            />

            <div>
              <p className='font-medium text-base'>Currency</p>
              <div className='flex space-x-4'>
                {['NGN', 'USD'].map(option => (
                  <RadioButton
                    key={option}
                    label={option}
                    name='exampleRadio'
                    value={option}
                    checked={selectedRadio === option}
                    onChange={handleRadioChange}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className='font-medium text-base'>Fee Frequency</p>
              <div className='flex space-x-4'>
                {['One Off', 'Monthly'].map(option => (
                  <RadioButton
                    key={option}
                    label={option}
                    name='exampleRadio'
                    value={option}
                    checked={selectedRadio === option}
                    onChange={handleRadioChange}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className='font-medium text-base'>Fee Impact</p>
              <div className='flex space-x-4'>
                {['Insuarance', 'Pin Reissue'].map(option => (
                  <RadioButton
                    key={option}
                    label={option}
                    name='exampleRadio'
                    value={option}
                    checked={selectedRadio === option}
                    onChange={handleRadioChange}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className='font-medium text-base'>Account Pad</p>
              <div className='flex space-x-4'>
                {['None', 'Branch Code Prefix', 'Branch Code Suffix'].map(
                  option => (
                    <RadioButton
                      key={option}
                      label={option}
                      name='exampleRadio'
                      value={option}
                      checked={selectedRadio === option}
                      onChange={handleRadioChange}
                    />
                  )
                )}
              </div>
            </div>
            <Input label='Account' placeholder='' />
          </div>
          <hr />

          <div className='px-5 w-full'>
            <button
              className='bg-[#014DAF] text-white font-medium text-sm py-4 px-8 rounded-lg w-full'
              onClick={() => setIsModalOpen(false)}
            >
              Add Fee
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
