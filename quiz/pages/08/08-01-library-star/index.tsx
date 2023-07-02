import { Rate } from 'antd';
import { useState } from 'react';




export default function LibraryStarPage(){
    const [value, useValue] = useState(5)

    const desc = ['1점', '2점', '3점', '4점', '5점'];

    const handleChange = (value) => {
        useValue( value );
        alert(`${value}점`)
    };    


    return (
        <span>
            <Rate tooltips={desc} onChange={handleChange} value={value} /><br />
            {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
        </span>
        );
}