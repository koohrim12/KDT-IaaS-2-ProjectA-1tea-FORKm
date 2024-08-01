// src/components/AddColumn.tsx
"use client";

import { useState } from 'react';

const AddColumn = () => {
  const [columnName, setColumnName] = useState<string>('');

  const addColumn = async () => {
    if (!columnName) {
      alert('Column name must be provided.');
      return;
    }

    try {
      const res = await fetch('http://localhost:8080/add-column/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ column_name: columnName }),
      });

      if (res.ok) {
        console.log('Column added successfully');
        setColumnName('');
      } else {
        console.error('Failed to add column:', res.statusText);
      }
    } catch (error) {
      console.error('Error adding column:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={columnName}
        onChange={(e) => setColumnName(e.target.value)}
        placeholder="Enter new column name"
      />
      <button onClick={addColumn}>Add Column</button>
    </div>
  );
};

export default AddColumn;
