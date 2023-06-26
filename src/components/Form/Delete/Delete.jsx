import React from 'react'
import DeleteApi from '../../Api/deleteApi';
const Delete = ({id}) => {

    function deleteItem(){
        DeleteApi("users",id).then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }

   

  return (
    <div>
      <button className='btn btn-outline-danger' onClick={deleteItem}>Delete</button>
    </div>
  )
}

export default Delete;
