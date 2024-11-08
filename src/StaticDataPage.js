import TableCustom from "custom-table-search";
import React, { useEffect, useState } from "react";

const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", status: "Active" },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  {
    id: 4,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  {
    id: 5,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  {
    id: 6,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  {
    id: 7,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  {
    id: 8,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  {
    id: 9,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  {
    id: 10,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  { id: 11, name: "John Doe", email: "john@example.com", status: "Active" },
  {
    id: 12,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Inactive",
  },
  {
    id: 13,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
  {
    id: 14,
    name: "Alice Johnson",
    email: "alice@example.com",
    status: "Active",
  },
];

const StaticDataPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5); // Define setPageSize here
  const [totalRecords, setTotalRecords] = useState(sampleData.length);
  const customEntriesOptions = [5, 10, 20, 50];
  const customDefaultPageSize = 10;

  const columns = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "Name", sortable: true, searchable: true },
    { key: "email", label: "Email", sortable: true, searchable: true },
    { key: "status", label: "Status", sortable: true, searchable: true },
  ];

  // Pagination function
  const fetchPage = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
    const startIdx = (page - 1) * size;
    setData(sampleData.slice(startIdx, startIdx + size));
  };

  useEffect(() => {
    fetchPage(currentPage, pageSize);
  }, [currentPage, pageSize]);

  return (
    <div className="container mt-5">
      <h2>Static Data Table</h2>
      <TableCustom
        data={data}
        columns={columns}
        gridViewEnabled={true}
        entriesEnabled={true}
        paginationEnabled={true}
        searchEnabled={true}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        fetchPage={fetchPage}
        pageSize={pageSize}
        setPageSize={setPageSize} // Pass setPageSize here
        totalRecords={totalRecords}
        entriesOptions={customEntriesOptions}
        defaultPageSize={customDefaultPageSize}
        bgColor="#111"
        txtColor="#fff"
        borderColor="#ddd"
      />
    </div>
  );
};

export default StaticDataPage;
