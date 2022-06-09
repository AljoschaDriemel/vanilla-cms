import { useState, useEffect } from "react";
import axios from "axios";


export default function AttendanceList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
           "/memberList/" /* `https://jsonplaceholder.typicode.com/posts?_limit=10` */
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="AttendanceList">
      <div className="container">
        <div className="row align-items-center ">
          <div className="col-lg-7">
          </div>
          <div className="col-lg-5"></div>
    <div className="App">
      <h1 >Attendance List</h1>
      {loading && <div>This will only take a moment...</div>}
      {error && (
        <div>{`There is a problem fetching the attendance list - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({AttendanceList, name}) => (
              
              <h2>{AttendanceList}</h2>
             
          ))}
      </ul>
    </div>
    </div>
    </div>
    </div>
  );
}