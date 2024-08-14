'use client';

import React, { useEffect, useState } from 'react';
import DataTable from './ToggleComponents/DataTable';
import Form from './ToggleComponents/Form';
import ToggleButton from './ToggleButton';
import TotalStyles from '../styles/TotalStyles';

interface UserDTO {
  [key: string]: string | number;
}

interface Props {
  setColumns: (columns: string[]) => void;
  setSelectedTableData: (data: UserDTO[]) => void; // 데이터 상태 업데이트 함수
}

export default function ToggleSection({
  setColumns,
  setSelectedTableData,
}: Props) {
  const [name, setName] = useState<string>('');
  const [data, setData] = useState<UserDTO[]>([]);
  const [error, setError] = useState<string>('');
  const [tables, setTables] = useState<string[]>([]);
  const [selectedTable, setSelectedTable] = useState<string>('');
  const [isFormOpen, setIsFormOpen] = useState<boolean>(true);
  const [tableClass, setTableClass] = useState<string>(
    `${TotalStyles.ToggleTableContainer} overflow-x-hidden`, // (수정 800)
  );
  useEffect(() => {
    const fetchTables = async () => {
      try {
        const res = await fetch('http://localhost:8000/tables');
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data: string[] = await res.json();
        setTables(data);
        setSelectedTable(data[0] || '');
      } catch (error) {
        setError('Failed to fetch tables');
      }
    };
    fetchTables();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const requestData = { table: selectedTable, name: name || null };
      const res = await fetch('http://localhost:8000/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const newData: UserDTO[] = await res.json();
      setData(newData);
      setSelectedTableData(newData); // Home 컴포넌트의 상태 업데이트
      if (newData.length > 0) {
        setColumns(Object.keys(newData[0])); // 첫 번째 데이터 항목의 키를 컬럼 이름으로 설정
      }
      setError('');
    } catch (error) {
      setError('Failed to fetch data');
      setData([]);
    }
  };

  useEffect(() => {
    // 열 수에 따라 테이블 클래스 업데이트 (수정 800)
    const columnCount = data.length > 0 ? Object.keys(data[0]).length : 0;
    if (columnCount >= 8) {
      // 열 수가 8개 이상일 때 스크롤 추가
      setTableClass(
        `${TotalStyles.ToggleTableContainer} ${TotalStyles.scrollable}`,
      ); // (수정 800)
    } else {
      setTableClass(
        `${TotalStyles.ToggleTableContainer} ${TotalStyles.noScrollable}`,
      ); // (수정 800)
    }
  }, [data, tableClass]); // tableClass 포함

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className={TotalStyles.ToggleMainContainer}>
      {isFormOpen && (
        <div className={TotalStyles.ToggleContent}>
          <Form
            handleSubmit={handleSubmit}
            name={name}
            setName={setName}
            selectedTable={selectedTable}
            setSelectedTable={setSelectedTable}
            tables={tables}
          />
          {error && <p className={TotalStyles.ToggleError}>{error}</p>}
        </div>
      )}
      <ToggleButton isOpen={isFormOpen} onClick={toggleForm} />

      <div className={`${TotalStyles.ToggleTableWrapper} ${tableClass}`}>
        {/* (수정 800) */}
        <DataTable data={data} />
      </div>
    </div>
  );
}
