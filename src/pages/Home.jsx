import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Home() {
  const [users, setUsers] = useState([]);

  // Auto reload this page everytime
  /* 
    useEffect(()=>{
        console.log("auto reload - useEffect Code with dev");
      
    });
 */

  useEffect(() => {
    loadUsers();
  }, []);

  /* 
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/users");
    // console.log(result)
   // console.log(result.data);
    
   setUsers(result.data);
  };
 */

  const loadUsers = async () => {

    console.log("Loading users");

    try {
      const result = await axios.get("http://localhost:8080/users");
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="py-4">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email id</th>
              </tr>
            </thead>
            <tbody>
              {
                                //map create new array
                users.map((user, index) => (
                  <tr>
                    <th scope="row" key={index}>{index+1}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              }

              {/*  
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
