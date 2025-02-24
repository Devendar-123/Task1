import React from 'react'
import "./child.css"
// import Grandchild from './Grandchild'
const Child = (props) => {
  return (
    <div>
      <h4>Data from parent component</h4>
      <table align='center'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
            </tr>
        </thead>
        <tbody>
        {props.data.map((item,Id)=>(
            <tr>
                <td key={Id}>
                    {item.name}
                </td>
                <td key={Id}>
                    {item.Age}
                </td>
                <td key={Id}>
                    {item.email}
                </td>
                <td key={Id}>
                    {item.phone}
                </td>
                <td key={Id}>
                    {item.address}
                </td>
            </tr>
      ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Child
