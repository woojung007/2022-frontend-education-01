import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(3);

  const handleChange = (value: any) => {
    setValue(value);
  };

  return <Rate onChange={handleChange} value={value} />;
}
