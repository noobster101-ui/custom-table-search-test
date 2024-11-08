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

const ApiDataPage = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [totalRecords, setTotalRecords] = useState(sampleData.length);
  // const customEntriesOptions = [5, 10, 20, 50];
  // const customDefaultPageSize = 10;

  const columns = [
    { key: "id", label: "ID", sortable: true },
    { key: "name", label: "Name", sortable: true, searchable: true },
    { key: "email", label: "Email", sortable: true, searchable: true },
    { key: "status", label: "Status", sortable: true, searchable: true },
  ];

  // Function to fetch page data (simulating an API call)
  const fetchPage = async (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
    const startIdx = (page - 1) * size;
    const pagedData = sampleData.slice(startIdx, startIdx + size); // Simulate API data slice
    setData(pagedData);
    setTotalRecords(sampleData.length); // Set the total record count based on data length
  };

  useEffect(() => {
    fetchPage(currentPage, pageSize);
  }, [currentPage, pageSize]);

  return (
    <div className="container mt-5">
      <h2>API Data Table</h2>
      <TableCustom
        data={data}
        columns={columns}
        paginationEnabled={true}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        fetchPage={fetchPage} // Pass fetchPage to handle pagination
        pageSize={pageSize} // Current page size
        setPageSize={setPageSize} // Function to change page size
        totalRecords={totalRecords}
        // entriesOptions={customEntriesOptions}
        // defaultPageSize={customDefaultPageSize}
      />
    </div>
  );
};

export default ApiDataPage;
