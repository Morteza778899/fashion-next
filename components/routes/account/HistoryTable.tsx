import * as React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridActionsCellItem,
  GridColumns,
  GridValueGetterParams,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid";
import { Box, Button, Chip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function getId(params: GridValueGetterParams) {
  return `${params.row.id}`;
}

const rows: GridRowsProp = [
  {
    id: 1,
    orderNumber: "684259",
    status: "ارسال شده",
    date: "2022-07-05",
    storeStatus: false,
  },
  {
    id: 2,
    orderNumber: "157293",
    status: "ناموفق",
    date: "2020-11-29",
    storeStatus: true,
  },
  {
    id: 3,
    orderNumber: "867539",
    status: "ارسال شده",
    date: "2021-04-25",
    storeStatus: false,
  },
  {
    id: 4,
    orderNumber: "951486",
    status: "در انتظار پرداخت",
    date: "2021-04-25",
    storeStatus: false,
  },
];

const columns: GridColumns = [
  { field: "id", headerName: "#", width: 1, valueGetter: getId },
  { field: "orderNumber", headerName: "شماره پیگیری", width: 120 },
  {
    field: "status",
    headerName: "وضعیت",
    width: 150,
    type: "string",
    renderCell: (params: GridRenderCellParams<string>) => (
      <Box
        sx={{
          "& svg": {
            mx: "5px !important",
          },
          "& span": {
            pr: 0,
          },
        }}
      >
        <Chip
          label={params.value}
          icon={
            params.value == "ارسال شده" ? (
              <DoneIcon />
            ) : params.value == "در انتظار پرداخت" ? (
              <AccessTimeIcon />
            ) : (
              <HighlightOffIcon />
            )
          }
          color={
            params.value == "ارسال شده"
              ? "success"
              : params.value == "در انتظار پرداخت"
                ? "info"
                : "error"
          }
        />
      </Box>
    ),
  },
  { field: "date", headerName: "تاریخ سفارش", width: 120 },
  {
    field: "storeStatus",
    headerName: "موجودی در انبار",
    width: 120,
    type: "boolean",
  },
  {
    field: "order",
    headerName: "سفارش دوباره",
    width: 110,
    type: "actions",
    renderCell: (params: GridRenderCellParams<Date>) => (
      <Box>
        <Button variant="contained" size="small">
          خرید
        </Button>
      </Box>
    ),
  },
  {
    field: "actions",
    type: "actions",
    headerName: "حذف",
    getActions: (params) => [
      <GridActionsCellItem
        key={params.id}
        icon={<DeleteIcon />}
        label="Delete"
      //   onClick={deleteUser(params.id)}
      />,
    ],
  },
];

export default function HistoryTable() {
  return (
    <Box
      sx={{
        height: 600,
        width: "100%",
        "& .MuiIconButton-root": {
          color: "primary.main",
        },
        "& .MuiButton-root": {
          bgcolor: "#efefef",
          color: "black",
          ":hover": {
            color: "white",
          },
          direction: "ltr",
          m: 1,
        },
        "& .MuiToolbar-root": {
          direction: "ltr",
          "& p": {
            direction: "ltr",
          },
        },
        "& .MuiDataGrid-columnHeaderTitleContainer": {
          justifyContent: "center",
        },
        "& .MuiDataGrid-cell": {
          justifyContent: "center !important",
        },
        // for scrollable -> Start
        "& .MuiDataGrid-main ": {
          width: 1,
          overflow:'auto'
        },
        "& .MuiDataGrid-virtualScroller":{
          overflow:'unset'
        },
        "& .MuiDataGrid-columnHeaders":{
          overflow: 'unset'
        },
        // for scrollable -> End
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Box>
  );
}
