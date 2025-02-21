'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import Input from '@/components/ui/Input'
import TableWrapper, { TableHead, TableRow } from '@/components/ui/Table'
import Link from 'next/link'
export default function Home () {
  function getStatusStyles (status: string) {
    switch (status) {
      case 'Ready':
        return 'bg-[#ECFDF3] text-[#067647] border border-[#ABEFC6]'
      case 'In Progress':
        return 'bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89]'
      case 'Acknowledged':
        return 'bg-[#EFF8FF] text-[#175CD3] border border-[#B2DDFF]'
      case 'Pending':
        return 'bg-[#F9FAFB] text-[#344054] border border-[#EAECF0]'
      default:
        return ''
    }
  }

  const card = [
    {
      id: 1,
      branch: 'Corporate',
      initiator: 'RootUser',
      quantity: 10,
      batch: '847264905',
      date: '11/14/2024  10:27:43',
      status: 'Ready'
    },
    {
      id: 2,
      branch: 'Corporate',
      initiator: 'RootUser',
      quantity: 5,
      batch: '847264905',
      date: '11/14/2024  10:27:43',
      status: 'In Progress'
    },
    {
      id: 3,
      branch: 'Corporate',
      initiator: 'RootUser',
      quantity: 20,
      batch: '847264905',
      date: '11/14/2024  10:27:43',
      status: 'Acknowledged'
    },
    {
      id: 4,
      branch: 'Corporate',
      initiator: 'RootUser',
      quantity: 15,
      batch: '847264905',
      date: '11/14/2024  10:27:43',
      status: 'Pending'
    }
  ]

  return (
    <div className='bg-[#c0defd2b] min-h-screen px-5 py-3 flex flex-col space-y-3'>
      <h1 className='font-bold text-lg'>Card Request</h1>
      <div className='flex space-x-1 items-center'>
        <p className='font-normal text-sm text-[#475467]'>
          View and attend to card requests here.
        </p>
      </div>
      <hr />
      <div className='w-[320px]'>
        <Input
          leftElement={<Icon icon='mynaui:search' width='24' height='24' />}
          placeholder='Search by branch'
          className=''
        />
      </div>

      <div>
        <TableWrapper bordered>
          <TableHead
            titles={[
              'Branch',
              'Initiator',
              'Quantity',
              'Batch',
              'Date Requested',
              'Status',
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
                    <span>{service.branch}</span>,
                    <span>{service.initiator}</span>,
                    <span>{service.quantity}</span>,
                    <span>{service.batch}</span>,
                    <span>{service.date}</span>,
                    <span
                      className={`px-4 py-2 rounded-full ${getStatusStyles(
                        service.status
                      )}`}
                    >
                      {service.status}
                    </span>,
                    <Link href={`/cardrequest/${service.id}`} className='text-[#014DAF] font-bold cursor-pointer'>
                      View
                    </Link>
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
