import React,{useState} from 'react';
import getApi from '../../Api/getApi.js';
import Form from '../Form/form';

const Edit = ({id}) => {

  const [showData, setShowData] = useState(false)

  const[data,setData]=useState({})

  function handleEdit() {
    getApi(id).then((result)=>{
          console.log(result)
        setShowData(true)
        setData(result)
    }).catch((err) => {
        console.log(err)
    })
}



  return (
    <>
        {showData?
        <div  className='position-absolute top-0 start-50 bg-dark fs-5 text-light p-2 rounded w-50 text-start'>
           <h1 className='text-center border-bottom border-success'>Update Form</h1>
        <Form data={data} isEdited={setData}/>
        </div>
        :null}
        {<button className='btn btn-outline-success' onClick={handleEdit} >Edit</button>}
    </>
  )
}

export default Edit;
