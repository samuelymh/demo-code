import { Select } from 'antd';
import React, { useState } from 'react';

// Tags
const OPTIONS = ['UI', 'Core', 'Testing'];

const SomeComponent = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));
  return (
    <Select
      mode="multiple"
      placeholder="Inserted are removed"
      value={selectedItems}
      onChange={setSelectedItems}
      style={{
        width: '100%',
      }}
    >
      {filteredOptions.map((item) => (
        <Select.Option key={item} value={item}>
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};

export default SomeComponent;