import { useState, useEffect } from "react";
import Axios from "axios";
import "./MemberList.css";

export default function MemberList() {
  const [listOfMembers, setListOfMembers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [position, setPosition] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:3001/getMembers").then((response) => {
      setListOfMembers(response.data);
    });
  }, []);

  const deleteMember = () => {
    Axios.delete("http://localhost:3001/getMember/:id");
  };

  const createMember = () => {
    Axios.post("http://localhost:3001/createMember", {
      firstName: firstName,
      lastName: lastName,
      age: age,
      height: height,
      weight: weight,
      position: position,
    }).then((response) => {
      setListOfMembers([
        ...listOfMembers,
        {
          firstName: firstName,
          lastName: lastName,
          age: age,
          height: height,
          weight: weight,
          position: position,
        },
      ]);
      /* alert("MEMBER CREATED "); */
    });
  };

  return (
    <div className="member-container">
      <table className="table-member">
        <tr style={{ background: "#eee" }}>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>AGE</th>
          <th>HEIGHT (cm)</th>
          <th>WEIGHT (kg)</th>
          <th>POSITION</th>
          <th></th>
        </tr>
      </table>
      <div>
        {listOfMembers.map((member) => {
          return (
            <div>
              <table className="table-member">
                <tr>
                  <td>{member.firstName}</td>
                  <td>{member.lastName}</td>
                  <td>{member.age}</td>
                  <td>{member.height}</td>
                  <td>{member.weight}</td>
                  <td>{member.position}</td>
                  <td>
                    <button className="btn-del" onClick={deleteMember}>
                      X
                    </button>
                  </td>
                </tr>
              </table>
            </div>
          );
        })}

        <div className="input-group">
          <div>
            <input
              className="input-member"
              type="text"
              placeholder="First Name... "
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </div>

          <div>
            <input
              className="input-member"
              type="text"
              placeholder="Last Name... "
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </div>

          <div>
            <input
              className="input-member"
              type="number"
              placeholder="Age... "
              onChange={(event) => {
                setAge(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="input-member"
              type="number"
              placeholder="Height... "
              onChange={(event) => {
                setHeight(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="input-member"
              type="number"
              placeholder="Weight... "
              onChange={(event) => {
                setWeight(event.target.value);
              }}
            />
          </div>
          <div>
            <input
              className="input-member"
              type="text"
              placeholder="Position... "
              onChange={(event) => {
                setPosition(event.target.value);
              }}
            />
          </div>
          <div className="btn-member">
            <button className="btn-member" onClick={createMember}>
              Create Member
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
