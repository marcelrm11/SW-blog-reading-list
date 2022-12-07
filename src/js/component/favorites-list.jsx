import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function FavoritesList({ favs }) {
  const { actions } = useContext(Context);
  function handleClick(e, item) {
    actions.deleteFavorite(item);
    e.stopPropagation();
  }
  let relativePath;
  let list;
  if (favs.length > 0) {
    list = favs.map((item) => {
      relativePath = item.url.slice(27);
      console.log(relativePath);
      return (
        <Dropdown.Item
          as="div"
          key={item.url}
          className="d-flex justify-content-between align-items-center"
        >
          <Link to={relativePath}>{item.name}</Link>
          <Button
            variant="outline-danger border-0"
            onClick={(e) => handleClick(e, item)}
          >
            <i className="fa-regular fa-trash-can"></i>
          </Button>
        </Dropdown.Item>
      );
    });
  } else {
    list = (
      <Dropdown.Item as="div" className="py-2 ps-4">
        {"(empty)"}
      </Dropdown.Item>
    );
  }
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Favorites"
      autoClose={false}
    >
      {list}
    </DropdownButton>
  );
}

export default FavoritesList;
