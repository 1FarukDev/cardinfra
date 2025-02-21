import { ReactNode } from "react";

interface TableWrapperProps {
  children: ReactNode;
  bordered?: boolean;
}

export default function TableWrapper({ children, bordered = false }: TableWrapperProps) {
  return (
    <div style={{ scrollbarWidth: "thin" }} className="overflow-x-auto w-full">
      <table
        className={`table-auto w-full ${bordered ? "border border-gray-300 border-collapse" : ""}`}
      >
        {children}
      </table>
    </div>
  );
}

interface TableHeadProps {
  titles: string[];
  bordered?: boolean;
}

export const TableHead = ({ titles, bordered = false }: TableHeadProps) => {
  return (
    <thead className={`bg-[#F1F7FF] text-left w-full`}>
      <tr className={`${bordered ? "border border-gray-300" : ""}`}>
        {titles.map((title: string, index) => (
          <th
            key={`table_head_${title}`}
            className={`text-primary text-center whitespace-nowrap font-medium text-base px-5 py-5 
            ${bordered ? "border border-gray-300" : ""} 
            ${index === 0 ? "border-l" : ""} 
            ${index === titles.length - 1 ? "border-r" : ""}`}
          >
            {title}
          </th>
        ))}
      </tr>
    </thead>
  );
};

interface TableRowProps {
  data: ReactNode[];
  bordered?: boolean;
}

export const TableRow = ({ data, bordered = false }: TableRowProps) => {
  return (
    <tr className={`bg-white ${bordered ? "border border-gray-300" : "border-b-2 border-greyFade"}`}>
      {data.map((item: ReactNode, index) => (
        <td
          key={`table_row_${index}`}
          className={`px-5 text-center ${bordered ? "border border-gray-300" : ""} 
          ${index === 0 ? "border-l" : ""} 
          ${index === data.length - 1 ? "border-r" : ""}`}
        >
          <div className="min-h-[80px] text-sm text-greyDeep font-medium min-w-[150px] flex items-center justify-center">
            {item}
          </div>
        </td>
      ))}
    </tr>
  );
};
