import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import axios from 'axios'
const App = () => {

  let [allCity, setAllCity] = useState([]);
  useEffect(()=>{
    axios
    .get("http://localhost:3000/api/v1/city")
    .then(response=>{
      setAllCity(response.data);
    })
  },[])

  return (
    <>
    <Header />
    <div className="container my-4">
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
    </div>
    </>
  )
}

export default App