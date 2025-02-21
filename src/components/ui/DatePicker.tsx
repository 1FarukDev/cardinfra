import React, { useState } from 'react';
import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { Icon } from '@iconify/react';

const DatePickerComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const onChange: DatePickerProps['onChange'] = (date) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <div className="flex items-center border rounded-lg p-2 space-x-2">
      <Icon icon="uil:calender" width="20" height="20" color='#121212'/>
      <span className="font-medium text-[#121212]">Today</span>
      <span className="text-gray-400">|</span>
      <DatePicker 
        onChange={onChange} 
        defaultValue={dayjs()} 
        format="DD MMM YYYY" 
        removeIcon={true}
        variant='borderless'
      />
    </div>
  );
};

export default DatePickerComponent;
