
import { useState, useEffect } from "react";
import Axios from "axios";

export default function MemberList() {
  const [listOfMembers, setListOfMembers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/getMembers").then((response) => {
      setListOfMembers(response.data);
    });
  }, []);

  const createMember = () => {
    Axios.post("http://localhost:3001/createMember", {
      name: name,
      age: age,
    }).then((response) => {
      setListOfMembers([...listOfMembers, { name: name, age:age }]);
      /* alert("MEMBER CREATED "); */
    });
  };

  return (
    <div className="App">
      <h2>Member List</h2>
      <div className="memberDisplay">
        {listOfMembers.map((member) => {
          return (
            <div>
              <p>Name: {member.name}</p>
              <p>Age: {member.age}</p>
              <br />
            </div>
          );
        })}

        <div>
          <input
            type="text"
            placeholder="Name... "
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Age... "
            onChange={(event) => {
              setAge(event.target.value);
            }}
          />
          <button onClick={createMember}>Create Member</button>
        </div>
      </div>
    </div>
  );
}
