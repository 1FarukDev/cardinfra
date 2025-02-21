'use client'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { useState, useEffect } from 'react'
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

const cardData = [
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

function isButtonDisabled (status: string, buttonType: string) {
  switch (status) {
    case 'Pending':
      return buttonType !== 'Download for Production'
    case 'In Progress':
      return buttonType !== 'Mark as Ready'
    case 'Ready':
      return buttonType !== 'Send to Dispatch'
    case 'Acknowledged':
      return true
    default:
      return false
  }
}

export default function CardRequestDetail () {
  const router = useRouter()
  const { id } = useParams()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDispatchModalOpen, setIsDispatchModalOpen] = useState(false)
  const [card, setCard] = useState<any>(null)

  useEffect(() => {
    const cardDetail = cardData.find(card => card.id === Number(id))
    setCard(cardDetail)
  }, [id])

  const handleDownloadClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  if (!card) return <div>Loading...</div>

  return (
    <div className='bg-[#c0defd2b] min-h-screen px-5 py-3 flex flex-col space-y-2'>
      <h1 className='font-bold text-lg'>Request Details</h1>
      <div className='flex space-x-1 items-center'>
        <p className='font-normal text-sm'>
          Perform predetermined actions on card requests here.
        </p>
      </div>

      <Card className='flex flex-col'>
        <CardHeader className=' pb-0'>
          <CardTitle>Card Request Details</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='mt-6 flex space-x-[106px]'>
            <div className='w-full space-y-[20px]'>
              <Input readOnly={true} label='Branch Name' value={card.branch} />
              <Input
                readOnly={true}
                label='Card Type'
                value={'Classic Debit'}
              />
              <Input readOnly={true} label='Quantity' value={card.quantity} />
              <Input readOnly={true} label='Branch Name' value={card.branch} />
              <div>
                <p className='text-[#344054] text-sm font-medium'>
                  Date Requested
                </p>
                <p className='text-[#101828] text-sm font-normal mt-2'>
                  {card.date}
                </p>
              </div>
            </div>
            <div className='w-full space-y-[20px]'>
              <Input readOnly={true} label='Initiator' value={card.initiator} />
              <Input readOnly={true} label='Card Charges' value={'₦1,500'} />
              <Input readOnly={true} label='Quantity' value={card.quantity} />
              <Input readOnly={true} label='Batch' value={card.batch} />
              <div>
                <p className='text-[#344054] text-sm font-medium'>Status</p>
                <p
                  className={`text-[#344054] text-sm font-medium  px-6 py-1 rounded-full w-max mt-2 border ${getStatusStyles(
                    card.status
                  )}`}
                >
                  {card.status}
                </p>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <p className='text-[#344054] text-base font-bold mb-2'>Actions</p>
            <div className='flex gap-[44px] flex-wrap'>
              <button
                className={`bg-[#344054] py-2 px-4 rounded-lg text-white flex gap-2 items-center ${
                  isButtonDisabled(card.status, 'Download for Production')
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                onClick={handleDownloadClick}
                disabled={isButtonDisabled(
                  card.status,
                  'Download for Production'
                )}
              >
                <Icon icon='uil:file-download-alt' width='24' height='24' />
                Download for Production
              </button>
              <button
                className={`bg-[#B54708] text-[white] py-2 px-4 rounded-lg flex gap-2 items-center border border-[#FEDF89] ${
                  isButtonDisabled(card.status, 'Mark In Progress')
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                disabled={isButtonDisabled(card.status, 'Mark In Progress')}
              >
                <Icon icon='ep:loading' width='24' height='24' />
                Mark In Progress
              </button>
              <button
                className={`bg-[#067647] text-[white] py-2 px-4 rounded-lg flex gap-2 items-center border border-[#ABEFC6] ${
                  isButtonDisabled(card.status, 'Mark as Ready')
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                disabled={isButtonDisabled(card.status, 'Mark as Ready')}
              >
                <Icon icon='mage:box-3d-check' width='24' height='24' />
                Mark as Ready
              </button>
              <button
                className={`bg-[#8020E7] text-[white] py-2 px-4 rounded-lg flex gap-2 items-center border border-[#B2DDFF] ${
                  isButtonDisabled(card.status, 'Send to Dispatch')
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                disabled={isButtonDisabled(card.status, 'Send to Dispatch')}
                onClick={() => setIsDispatchModalOpen(true)}
              >
                <Icon
                  icon='fluent:box-arrow-up-20-regular'
                  width='24'
                  height='24'
                />
                Send to Dispatch
              </button>
              <button
                className={`bg-[#014DAF] text-[white] py-2 px-4 rounded-lg flex gap-2 items-center border border-[#EAECF0] ${
                  isButtonDisabled(card.status, 'Mark as Acknowledged')
                    ? 'opacity-50 cursor-not-allowed'
                    : ''
                }`}
                disabled={isButtonDisabled(card.status, 'Mark as Acknowledged')}
              >
                <Icon
                  icon='mdi:checkbox-marked-circle-outline'
                  width='24'
                  height='24'
                />
                Mark as Acknowledged
              </button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className='flex flex-col gap-4 px-5'>
          <div className='p-2 bg-white border border-[rgba(234, 236, 240, 1)] rounded-lg w-max shadow-sm'>
            <Icon
              icon='material-symbols-light:check-circle'
              width='30'
              height='30'
              color='rgba(0, 113, 41, 1)'
            />
          </div>

          <div className='pb-6'>
            <p className='font-medium text-lg text-[#101828]'>Successfull</p>
            <p className='font-medium text-lg text-[#475467]'>
              Production file has been downloaded.
            </p>
          </div>
          <div>
            <button
              className='bg-[#014DAF] text-white font-medium text-sm py-4 px-8 rounded-lg '
              onClick={handleCloseModal}
            >
              Continue
            </button>
          </div>
        </div>
      </Modal>
      <Modal isOpen={isDispatchModalOpen} onClose={handleCloseModal}>
        <div className='flex flex-col gap-4 px-5'>
          <div className='p-2 bg-white border border-[rgba(234, 236, 240, 1)] rounded-lg w-max shadow-sm'>
            <Icon
              icon='material-symbols-light:check-circle'
              width='30'
              height='30'
              color='rgba(0, 113, 41, 1)'
            />
          </div>

          <div className='pb-6'>
            <p className='font-medium text-lg text-[#101828]'>Successfull</p>
            <p className='font-medium text-lg text-[#475467]'>
              Card batch successfully sent to dispatch.
            </p>
          </div>
          <div>
            <button
              className='bg-[#014DAF] text-white font-medium text-sm py-4 px-8 rounded-lg '
              onClick={() => setIsDispatchModalOpen(false)}
            >
              Continue
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
