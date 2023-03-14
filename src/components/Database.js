import React, { useEffect, useState } from "react";
import axios from "axios";
function Database() {
  const [users, setUsers] = useState([]);
  const [id, setId] = useState(1);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => setUsers(response.data));
  }, [id]);
  return (
    <div>
      <div className="row ">
        <div className="col-8 container content">
          <div>
            <h1>id: {users.id}</h1>
            <p>Name: {users.name}</p>
            <p>Email: {users.email}</p>
          </div>

          <button className="btn btn-primary"
            onClick={() => {
              setId(id + 1);
            }}
            type="button"
          >
            Next id
          </button>
          <br /><br />
          <button className="btn btn-primary"
            onClick={() => {
              setId(id - 1);
            }}
            type="button"
          >
            Previous id
          </button>
        </div>
      </div>
    </div>
  );
}

export default Database;
