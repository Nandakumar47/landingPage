import { Search } from "@mui/icons-material";
import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <Search className="search-icon" />
      <input type="text" placeholder="Search creators" />
    </div>
  );
};

export default SearchBar;
