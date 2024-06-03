import React, { useEffect, useState } from "react";
import CreatorTable from "./CreatorTable";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditModal from "./EditModal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
function CreatorHome() {
  const [userDetails, setUserDetails] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isDataFetching, setIsDataFetching] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [creatorDetails, setCreatorDetails] = useState({
    name: "",
    email: "",
    gender: "male",
    status: "active",
  });
  useEffect(() => {
    getUserDetails();
  }, [itemsPerPage]);
  const saveCreator = async () => {
    try {
      const url = `https://gorest.co.in/public/v2/users?email=${creatorDetails.email}&name=${creatorDetails.name}&gender=${creatorDetails.gender}&status=${creatorDetails.status}`;
      debugger;
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb`,
        },
        // body: JSON.stringify(creatorDetails),
      });
      const result = await response.json();
      setCreatorDetails({
        name: "",
        email: "",
        gender: "male",
        status: "active",
      });
      setShowEditModal(false);
      console.log({ result });
    } catch (error) {}
  };
  const getUserDetails = async () => {
    setIsDataFetching(true);
    try {
      const url = `https://gorest.co.in/public/v2/users?per_page=${itemsPerPage}`;
      const result = await fetch(url, {
        method: "GET",
      });
      const response = await result.json();
      setUserDetails(response);
      setIsDataFetching(false);
    } catch (error) {
      console.log({ error });
    }
  };
  const deleteUser = async (userId) => {
    try {
      const url = `https://gorest.co.in/public/v2/users/${userId}`;
      const result = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer e3d497998ca18d76b283777fb9a5643f73199652d94105e666bc35f5e2c59adb`,
        },
      });
      console.log(result);
      getUserDetails();
    } catch (error) {
      console.log({ ERROR: error });
    }
  };
  const openEditModal = () => {
    setShowEditModal(true);
  };
  const handleCreatorDetailsEdit = (name, value) => {
    setCreatorDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onClickOfEdit = (userDetails) => {
    setShowEditModal(true);
    const { name, status, email, gender } = userDetails;
    setCreatorDetails({
      name,
      status,
      email,
      gender,
    });
  };
  return (
    <div className="creatorHome_container">
      <div className="creatorHome_TableSection">
        <div className="creator_table_header">
          <div className="creator_table_heading">Manage creators</div>
          <button
            className="creator_table_addCreator"
            onClick={() => setShowEditModal(true)}
          >
            + Add new creators
          </button>
        </div>
        <div className="creator_table_container">
          <CreatorTable
            userDetails={userDetails}
            deleteUser={deleteUser}
            openEditModal={openEditModal}
            onClickOfEdit={onClickOfEdit}
            isDataFetching={isDataFetching}
          />
        </div>
        <div className="creator_table_loadMore_container">
          <button
            className="creator_table_loadMore"
            onClick={() => {
              setItemsPerPage((prev) => prev + 5);
            }}
          >
            Load More
            <KeyboardArrowDownIcon />
          </button>
        </div>
      </div>
      {showEditModal ? (
        <EditModal
          open={showEditModal}
          handleClose={() => {
            setCreatorDetails({
              name: "",
              email: "",
              gender: "male",
              status: "active",
            });
            setShowEditModal(false);
          }}
          saveCreator={saveCreator}
          creatorDetails={creatorDetails}
          handleCreatorDetailsEdit={handleCreatorDetailsEdit}
        />
      ) : null}
    </div>
  );
}

export default CreatorHome;
