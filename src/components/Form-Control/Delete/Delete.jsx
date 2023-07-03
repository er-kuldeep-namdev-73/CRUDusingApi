import React, { useState } from 'react'
import DeleteApi from '../../Api/deleteApi';
import getApi from '../../Api/getApi';
const Delete = ({id,data,setProducts}) => {

      const [del,setDel]=useState(false)

    function deleteItem(){
        DeleteApi(id).then((res)=>{
            console.log(res)
            getApi().then((res)=>{
              setProducts(res)
            })
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





  

   


