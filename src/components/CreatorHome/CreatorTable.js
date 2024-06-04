import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Skeleton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteDialog from "./DeleteDialog";
function capitalizeFirstLetter(string) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function CreatorTable(props) {
  const { userDetails, deleteUser, onClickOfEdit, isDataFetching } = props;
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [userDetailsToDelete, setUserDetailsToDelete] = useState({});
  const handleDeleteDialogClose = () => {
    setShowDeleteDialog(false);
    setUserDetailsToDelete({});
  };
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        aria-label="Table for showing the creator list"
      >
        <TableHead>
          <TableRow>
            <TableCell className="customTableCell">Name</TableCell>
            <TableCell className="customTableCell" align="left">
              E-mail
            </TableCell>
            <TableCell className="customTableCell" align="left">
              Gender
            </TableCell>
            <TableCell className="customTableCell" align="left">
              Available for chat
            </TableCell>
            <TableCell className="customTableCell" align="right">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {userDetails?.length && !isDataFetching ? (
            userDetails.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.email}</TableCell>
                <TableCell align="left">{row.gender}</TableCell>
                <TableCell align="left">
                  <p
                    style={{
                      color: row.status === "active" ? "green" : "red",
                    }}
                  >
                    {capitalizeFirstLetter(row.status)}
                  </p>
                </TableCell>
                <TableCell align="right">
                  <div className="action_tableCell">
                    <button
                      aria-label="Button to edit creator"
                      className="action_edit_button"
                      onClick={() => {
                        onClickOfEdit(row);
                      }}
                    >
                      Edit
                    </button>
                    <IconButton
                      aria-label="delete"
                      onClick={() => {
                        setUserDetailsToDelete({
                          id: row?.id,
                          name: row.name,
                        });
                        setShowDeleteDialog(true);
                      }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5}>
                <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width="100%"
                  height={400}
                />
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {showDeleteDialog ? (
        <DeleteDialog
          open={showDeleteDialog}
          userName={userDetailsToDelete.name}
          handleClose={handleDeleteDialogClose}
          handleProceed={() => {
            handleDeleteDialogClose();

            deleteUser(userDetailsToDelete.id);
          }}
        />
      ) : null}
    </TableContainer>
  );
}
