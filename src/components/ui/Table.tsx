import { ReactNode } from "react"

interface TableWrapperProps {
  children: ReactNode;
  bordered?: boolean;
}

export default function TableWrapper({ children, bordered = false }: TableWrapperProps) {
  return (
    <div style={{ scrollbarWidth: 'thin' }} className="overflow-x-auto w-full">
      <table className={`table-auto w-full ${bordered ? 'border-collapse' : ''}`}>
        {children}
      </table>
    </div>
  )
}

export const TableHead = ({ titles }: { titles: string[] }) => {
  return (
    <thead className="bg-[#F1F7FF] rounded-lg text-left w-full border border-[#E2E2E2] ">
      <tr>
        {titles.map((title: string) => {
          return (
            <th key={`table_head_${title}`} className="text-primary text-center whitespace-nowrap font-medium text-base px-5 py-5">{title}</th>
          )
        })}
      </tr>
    </thead>
  )
}

interface TableRowProps {
  data: ReactNode[];
  bordered?: boolean;
}

export const TableRow = ({ data, bordered = false }: TableRowProps) => {
  return (
    <tr className={`border-b-2 bg-white ${bordered ? 'border border-greyFade' : 'border-greyFade'}`}>
      {data.map((data: ReactNode, index) => {
        return (
          <td key={`table_row_${index}`} className={`px-5 text-center ${bordered ? 'border border-[gray]' : ''}`}>
            <div className="min-h-[80px] text-sm text-greyDeep font-medium min-w-[150px] flex items-center justify-center">
              {data}
            </div>
          </td>
        )
      })}
    </tr>
  )
}