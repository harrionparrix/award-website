"use client";
import * as React from "react";
import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import downloadCsv from "download-csv";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const columns = [
  { field: "id", headerName: "Applicant ID", width: 120 },
  { field: "applicantname", headerName: "Applicant Name", width: 200 },
  { field: "juryname", headerName: "Jury Name", width: 200 },
  { field: "comment", headerName: "Comments", width: 200 },
  {
    field: "review_status",
    headerName: "Result",
    width: 180,
    renderCell: (params) => (
      <Button
        variant="contained"
        color={
          params.row.review_status === ""
            ? "warning"
            : params.row.review_status === "rejected"
            ? "error"
            : "success"
        }
      >
        {params.row.review_status === ""
          ? "Not submitted"
          : params.row.review_status === "rejected"
          ? "Rejected"
          : "Selected"}
      </Button>
    ),
  },
];

const Download = (userID) => {
  fetch("/api/admin/downloadData", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userID: userID,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const excel_col = Object.keys(data.data[0]);
      downloadCsv(data.data, excel_col, "applicants");
    })
    .catch((err) => {
      console.log(err);
    });
};

export default function JuryResult() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const searchParams = new useSearchParams(router.query);

  useEffect(() => {
    fetch("/api/admin/getApplicantResult", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userID: searchParams.get("id"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setRows(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Box sx={{ width: "90%", pl: 3, pt: 3 }}>
      <h3>Result Board</h3>
      <Button
        variant="contained"
        onClick={() => Download(searchParams.get("id"))}
      >
        Download Result
      </Button>
      <DataGrid
        rows={rows}
        disableRowSelectionOnClick
        columns={columns}
        pageSize={5}
        loading={loading}
        sx={{
          mt: 5,
          ml: 5,
          backgroundColor: "white",
        }}
      />
    </Box>
  );
}
