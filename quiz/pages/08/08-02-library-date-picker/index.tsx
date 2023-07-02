import { DatePicker, Space } from 'antd';
import { useState } from 'react';

export default function LibraryDatePickerPage(){
    const [value, setValue] = useState()
    const [month, setMonth] = useState()


    const  onChange = (date, dateString) => {
        const newDate = new Date(date).getMonth()+1;
        setValue(dateString);
        setMonth(newDate);
    }


    return (
        <Space direction="vertical">
            <DatePicker onChange={onChange} />
            {value ? <span>{[value]}</span> : ''}
            {value ? <span>{[month]}</span> : ''}
        </Space>
         

    )
}