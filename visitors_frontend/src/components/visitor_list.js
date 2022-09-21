import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import VisitorTableRow from "./visitor_row";
import URL from "./url.js";
  
const VisitorList = () => {
  const [visitors, setvisitors] = useState([]);
  
  useEffect(() => {
    axios.get(`${URL}/visitors/`).then(( {data} ) => {
        
        setvisitors(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return visitors.map((res, i) => {
      return <VisitorTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div className="table-wrapper m-4">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>CreatedAt</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>
    </div>
  );
};
  
export default VisitorList;