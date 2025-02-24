import React from 'react'
import Child from './Child'
import Grandchild from './Grandchild';

function Parent() {
    const userData = [
        {name:"Devendar",Age:22,Id:1,email:"devendar@gmail.com",phone:78689877654,address:"Kukatpally"},
        {name:"Ajay",Age:21,Id:2,email:"ajay@gmail.com",phone:7667878666,address:"Madenaguda"},
        {name:"Kiran",Age:22,Id:3,email:"kiran@gmail.com",phone:6786676868,address:"Narsapur"},
        {name:"Sanjay",Age:20,Id:4,email:"sanjay@gmail.com",phone:98867887666,address:"Miyapur"},
        {name:"Srikanth",Age:25,Id:5,email:"srikanth@gmail.com",phone:78567567585,address:"Bachupally"},
    ];

    const description = [
        {name:"Devendar",About:"Web Developer",id:1},
        {name:"Ajay",About:"Developer",id:2},
        {name:"Kiran",About:"Content writter",id:3},
        {name:"Sanjay",About:"Digital Marketing executive",id:4},
        {name:"Srikanth",About:"Tester",id:5},
    ]

    const str = "Devendar"
    const stringData = [
        {name:"Devendar", id:1},
        // {name:"Ajay", id:1},
        // {name:"Kiran", id:1}
    ]
    console.log(`Befor ${str} /t After ${str}`);
    

  return (
    <div>
        <p>{str}</p>
        <p>Name is{`${stringData.name}`}</p>

        <Child data = {userData}/>
        <Grandchild info = {description}/>
    </div>
  )
}

export default Parent
