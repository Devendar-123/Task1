import React from 'react'

function Grandchild(props) {
  return (
    <table>
        <thead>
            <tr>
               <th>Name</th>
               <th>Description</th>
            </tr>
        </thead>
        <tbody>
        {props.info.map((data,id)=>(
            <tr key={id}>
                <td>{data.name}</td>
                <td>{data.About}</td>
            </tr>
      ))}
        </tbody>
    </table>
  )
}

export default Grandchild
