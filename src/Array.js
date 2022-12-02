import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
const Array3 = () => {
    const college=[{name:"mohan",id:1,dept:"cse"},
    {name:"kiran",id:2,dept:"eee"},{name:"ram",id:3,dept:"ece"},{name:"ravi",id:4,dept:"it"}]
    console.log(college);
    const [first, setfirst] = useState(college)
    const obj=[{name:"kumar",id:5,dept:"eee"}]
    const add=()=>{
        const new1=college.concat(obj)
        setfirst(new1)
    }
    console.log(college.concat(obj));
  return (
    <div>
      <h1>hello</h1>
      <h2><Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>id</th>
          <th>Dept</th>
        </tr>
      </thead>
      <tbody>
        {college.map((item)=>{
          return(
            <tr>
            <td>{item.name}</td>
            <td>{item.id}</td>
            <td>{item.dept}</td>
          </tr>
          );
        })}
      </tbody>
    </Table></h2>
    <Button onClick={add}>ADD ITEM</Button>
    </div>
  )
}

export default Array3