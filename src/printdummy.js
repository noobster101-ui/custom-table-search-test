import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { BsFillPrinterFill } from "react-icons/bs";
import { useTable } from "react-table";

const serverPath = "http://example.com/"; // Replace with your actual server path

// Dummy Data (repeated 30 times for testing)
const generateDummyData = () => {
  const dummy = {
    srno: 1,
    marks: "95.00%",
    applicationId: "DSE2310961",
    name: "John Doe",
    gender: "F",
    category: "OPEN",
    pwd: "-",
    seatType: "LOPEN",
  };

  const data = [];
  for (let i = 0; i < 30; i++) {
    data.push({ ...dummy, srno: i + 1 });
  }
  return data;
};

const PrintPage = () => {
  const [data] = useState(generateDummyData());

  // Table columns for the provided structure
  const columns = React.useMemo(
    () => [
      { Header: "Sr. No.", accessor: "srno" },
      { Header: "Marks", accessor: "marks" },
      { Header: "Application ID", accessor: "applicationId" },
      { Header: "Name of Candidate", accessor: "name" },
      { Header: "Gender", accessor: "gender" },
      { Header: "Category", accessor: "category" },
      { Header: "PWD/DEF", accessor: "pwd" },
      { Header: "Seat Type", accessor: "seatType" },
    ],
    []
  );

  // Using react-table hook
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  const printDiv = (divId) => {
    const printContents = document.getElementById(divId).innerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <div>
      <div
        align="right"
        style={{
          paddingRight: "50px",
          paddingBottom: "30px",
          marginTop: "25px",
        }}
        id="printButton_div"
      >
        <button
          className="btn btn-primary hidden-print"
          onClick={() => printDiv("printableArea")}
        >
          <span>
            <BsFillPrinterFill />
          </span>{" "}
          Print
        </button>
      </div>

      <div
        className="container-fluid"
        style={{ marginTop: "10px" }}
        id="printableArea"
      >
        {/* Static Header Section (on top of every page) */}
        <div
          className="col-sm-12"
          style={{
            textAlign: "center",
            position: "relative",
            pageBreakBefore: "always",
          }}
        >
          <img
            height="150"
            width="150"
            src={serverPath + "assets/images/logo-super.png"}
            alt="Logo"
          />
          <span style={{ fontSize: "30px", marginLeft: "10px" }}>
            Maharashtra State Board of Technical Education
          </span>
          <h3 style={{ marginBottom: "20px" }}>
            Provisional Allotment List of CAP Round - I
          </h3>
          <h4>Course: 600619110 - Civil Engineering</h4>
          <table className="table table-bordered" style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th>Course</th>
                <th>Status</th>
                <th>Total Seats</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>600619110 - Civil Engineering</td>
                <td>University Autonomous</td>
                <td>12 [MS Seats: 9+ EWS: 3]</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Table Section */}
        <div className="col-lg-12 animate__animated animate__fadeInDown animate_slower">
          <div className="card mb-4">
            <div className="card-body table-responsive">
              <table
                {...getTableProps()}
                className="table table-bordered"
                style={{ marginTop: "20px", pageBreakBefore: "always" }}
              >
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                          {column.render("Header")}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <footer
          style={{
            position: "fixed",
            bottom: "0",
            width: "100%",
            textAlign: "center",
            padding: "10px 0",
            backgroundColor: "#f1f1f1",
            borderTop: "1px solid #ddd",
          }}
        >
          Date and Time: {new Date().toLocaleString()}
        </footer>
      </div>

      {/* Add Print-Specific CSS inside style tag */}
      <style jsx>{`
        @media print {
          body {
            margin: 0;
          }

          /* Ensuring page break only after the header and table */
          .container-fluid {
            page-break-before: always;
          }

          /* Fixed Footer */
          footer {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            padding: 10px;
            text-align: center;
            background-color: #f1f1f1;
            border-top: 1px solid #ddd;
          }

          /* Ensure that the table has a page break */
          .table {
            page-break-after: always;
          }

          /* Header (appears once on the first page) */
          .col-sm-12 {
            page-break-before: always;
          }

          .hidden-print {
            display: none !important;
          }

          /* Additional page setup */
          @page {
            size: A4;
            margin: 20mm;
          }
        }
      `}</style>
    </div>
  );
};

export default PrintPage;
