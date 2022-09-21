import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import URL from "./url.js";
  
const VisitorTableRow = (props) => {
  const { id, firstname, lastname, created_at } = props.obj;
  
  const deletevisitor = () => {
    axios.delete(
`${URL}/visitors/` + id)
      .then((res) => {
        if (res.status === 200) {
          alert("visitor successfully deleted");
          window.location.reload();
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  };
  
  return (
    <tr>
      <td>{id}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{created_at}</td>
      <td>
        <Link className="edit-link" 
          to={`/update-visitor/${id}`}>
          Edit
        </Link>
        <Button onClick={deletevisitor} 
          size="sm" variant="danger">
          Delete
        </Button> 
      </td>
    </tr>
  );
};
  
export default VisitorTableRow;