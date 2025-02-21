'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Input from '@/components/ui/Input'
import TableWrapper, { TableHead, TableRow } from '@/components/ui/Table'
import { useRouter } from 'next/navigation'
export default function Home () {

  const card = [
    {
      id: 1,
      cardName: 'Verve-1',
      currency: 'NGN',
      expiration: '40 months',
      binPrefix: '847264905',
      date: '11/14/2024  10:27:43'
    },
    {
      id: 2,
      cardName: 'Verve-1',
      currency: 'NGN',
      expiration: '40 months',
      binPrefix: '847264905',
      date: '11/14/2024  10:27:43'
    },
    {
      id: 3,
      cardName: 'Verve-1',
      currency: 'NGN',
      expiration: '40 months',
      binPrefix: '847264905',
      date: '11/14/2024  10:27:43'
    }
  ]

  const router = useRouter()
  return (
    <div className='bg-[#c0defd2b] min-h-screen px-5 py-3 flex flex-col space-y-3'>
      <h1 className='font-bold text-lg'>Card Profile</h1>
      <div className='flex space-x-1 items-center'>
        <p className='font-normal text-sm text-[#475467]'>
          Create, view and edit card profiles here.
        </p>
      </div>
      <hr />
      <div className='flex justify-between'>
        <div className='w-[320px]'>
          <Input
            leftElement={<Icon icon='mynaui:search' width='24' height='24' />}
            placeholder='Search by card name'
            className=''
          />
        </div>
        <button className='bg-[#014DAF] text-white flex space-x-2 items-center py-2 px-4 rounded-lg' onClick={() => router.push('/cardprofile/createprofile')}>
          <Icon icon='material-symbols:add-rounded' width='24' height='24' />
          <p>Add Profile</p>
        </button>
      </div>

      <hr />

      <div className='mt-3'>
        <TableWrapper bordered={true}>
          <TableHead
            titles={[
              'Card Name',
              'Currency',
              'Expiration',
              'Bin Prefix',
              'Date Created',
              'Actions'
            ]}
            bordered={true}
          />
          <tbody className='text-[#475467] font-normal text-sm '>
            {card.map((service, index) => {
              return (
                <TableRow
                  key={`table_row_content_${index}`}
                  data={[
                    <span>{service.cardName}</span>,
                    <span>{service.currency}</span>,
                    <span>{service.expiration}</span>,
                    <span>{service.binPrefix}</span>,
                    <span>{service.date}</span>,

                    <div className='flex space-x-2 items-center'>
                      <Icon
                        icon='fluent:delete-48-regular'
                        width='24'
                        height='24'
                        className='cursor-pointer'
                      />
                      <Icon icon='lucide:edit-2' width='24' height='24' className='cursor-pointer'/>
                    </div>
                  ]}
                  bordered={true}
                />
              )
            })}
          </tbody>
        </TableWrapper>
      </div>
    </div>
  )
}
