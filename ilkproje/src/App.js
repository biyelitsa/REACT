import React from 'react';
import './App.css';

const data = ["ali", "veli","ahmet","bilal","emin"];
function UserList(props) {
  return (
    <ul>
{props.users.map(name=>{
  return <li>{name}</li>
})}
    </ul>
  );
}
function RenderList(){
  return (<UserList users={data}/>)
}
export default RenderList;
