import React from "react";
import NavBar from "../components/NavBar";
import CreatorHome from "../components/CreatorHome";
import { Table } from "@mui/material";
function Admin() {
  return (
    <div>
      <NavBar isAdmin={true} />
      <CreatorHome />
    </div>
  );
}

export default Admin;
