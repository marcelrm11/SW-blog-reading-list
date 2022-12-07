import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";

function FavoritesList({ favs }) {
  const { actions } = useContext(Context);
  function handleClick(_, item) {
    actions.deleteFavorite(item);
  }
  let list;
  if (favs.length > 0) {
    list = favs.map((item) => {
      return (
        <Dropdown.Item
          href="#/action-1"
          key={item.url}
          className="d-flex justify-content-between align-items-center gap-3"
        >
          {item.name}
          <Button
            variant="outline-danger"
            onClick={(_) => handleClick(_, item)}
          >
            <i className="fa-regular fa-trash-can"></i>
          </Button>
        </Dropdown.Item>
      );
    });
  } else {
    list = <Dropdown.Item href="#/action-1">{"(empty)"}</Dropdown.Item>;
  }
  return (
    <DropdownButton id="dropdown-basic-button" title="Favorites">
      {list}
    </DropdownButton>
  );
}

export default FavoritesList;
