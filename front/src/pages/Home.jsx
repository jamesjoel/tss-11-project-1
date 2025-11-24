import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Home = () => {
     let [allCity, setAllCity] = useState([]);
  useEffect(()=>{
    axios
    .get("https://tss-11-project-1.onrender.com/api/v1/city")
    .then(response=>{
      setAllCity(response.data);
    })
  },[])
  return (
    <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {
            allCity.map((item, index)=><tr key={item._id}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.state}</td>
            </tr>)
          }
        </tbody>
      </table>
  )
}

export default Home