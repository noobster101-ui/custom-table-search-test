import "bootstrap/dist/css/bootstrap.min.css";
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

const BothPage = () => {
  const [data, setData] = useState([]); // Data to display in the table
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [pageSize, setPageSize] = useState(5); // Number of records per page
  const [totalRecords, setTotalRecords] = useState(sampleData.length); // Total records count
  const [useStaticData, setUseStaticData] = useState(true); // Toggle between static and API data

  // const customEntriesOptions = [5, 10, 20, 50];
  // const customDefaultPageSize = 10;

  const columns = [
    {
      key: "id",
      label: "ID",
      sortable: true,
      type: "number",
      textAlign: "center",
    },
    {
      key: "name",
      label: "Name",
      sortable: true,
      searchable: true,
      type: "text",
    },
    {
      key: "email",
      label: "Email",
      sortable: true,
      searchable: true,
      type: "email",
    },
    {
      key: "status",
      label: "Status",
      sortable: true,
      searchable: true,
      type: "text",
      textAlign: "center",
    },
    { key: "actions", label: "Actions", textAlign: "center", type: "none" },
  ];

  const handleEdit = (rowData) => console.log("Edit clicked", rowData);
  const handleDelete = (rowData) => console.log("Delete clicked", rowData);
  const handleView = (rowData) => console.log("View clicked", rowData);

  const fetchPage = async (page, size) => {
    setCurrentPage(page);
    setPageSize(size);

    if (useStaticData) {
      const slicedData = sampleData.slice((page - 1) * size, page * size);
      setData(slicedData);
    } else {
      const fetchedData = await mockApiCall(page, size);
      setData(fetchedData.records);
      setTotalRecords(fetchedData.total);
    }
  };

  const mockApiCall = async (page, size) => {
    const records = sampleData.slice((page - 1) * size, page * size);
    return { records, total: sampleData.length };
  };

  useEffect(() => {
    fetchPage(currentPage, pageSize);
  }, [useStaticData, currentPage, pageSize]);

  const dataWithActions = data.map((row) => ({
    ...row,
    actions: (
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary btn-sm me-2"
          onClick={() => handleEdit(row)}
        >
          Edit
        </button>
        <button
          className="btn btn-danger btn-sm me-2"
          onClick={() => handleDelete(row)}
        >
          Delete
        </button>
        <button className="btn btn-info btn-sm" onClick={() => handleView(row)}>
          View
        </button>
      </div>
    ),
  }));

  return (
    <div className="App">
      <div className="container py-4">
        <div className="mb-3 d-flex justify-content-end">
          <button
            onClick={() => setUseStaticData(!useStaticData)}
            className="btn btn-primary"
          >
            Toggle to {useStaticData ? "API Data" : "Static Data"}
          </button>
        </div>

        <TableCustom
          data={dataWithActions}
          columns={columns}
          gridViewEnabled={true}
          entriesEnabled={true}
          paginationEnabled={true}
          searchEnabled={true}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          fetchPage={fetchPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          totalRecords={totalRecords}
          // entriesOptions={customEntriesOptions}
          // defaultPageSize={customDefaultPageSize}
          bgColor="#111"
          txtColor="#fff"
          borderColor="#ddd"
        />
      </div>
    </div>
  );
};
export default BothPage;
