import React from 'react'
import TableWrapper, { TableHead, TableRow } from '@/components/ui/Table'
import { Card, CardContent, CardHeader, CardTitle } from './card'

function getStatusStyles(status: string) {
  switch (status) {
    case 'Ready':
      return 'bg-[#ECFDF3] text-[#067647] border border-[#ABEFC6]';
    case 'In Progress':
      return 'bg-[#FFFAEB] text-[#B54708] border border-[#FEDF89]';
    case 'Acknowledged':
      return 'bg-[#EFF8FF] text-[#175CD3] border border-[#B2DDFF]';
    case 'Pending':
      return 'bg-[#F9FAFB] text-[#344054] border border-[#EAECF0]';
    default:
      return '';
  }
}

function CardRequests() {
  const services = [
    { id: 1, branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Ready' },
    { id: 2, branch: 'Corporate', cardType: 'Instant', quantity: 5, status: 'In Progress' },
    { id: 3, branch: 'Corporate', cardType: 'Instant', quantity: 20, status: 'Acknowledged' },
    { id: 4, branch: 'Corporate', cardType: 'Instant', quantity: 15, status: 'Pending' },
  ];

  return (
    <div className='w-full'>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle className='text-lg'>Recent Card Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <TableWrapper>
            <TableHead
              titles={['Branch', 'Card Type', 'Quantity', 'Status', 'Actions']}
            />
            <tbody className='text-[#475467] font-normal text-sm '>
              {services.map((service, index) => {
                return (
                  <TableRow
                    key={`table_row_content_${index}`}
                    data={[
                      <span>{service.branch}</span>,
                      <span>{service.cardType}</span>,
                      <span>{service.quantity}</span>,
                      <span className={`px-4 py-2 rounded-full ${getStatusStyles(service.status)}`}>{service.status}</span>,
                      <span className='text-[#014DAF] font-bold'>View</span>,
                    ]}
                  />
                )
              })}
            </tbody>
          </TableWrapper>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardRequests