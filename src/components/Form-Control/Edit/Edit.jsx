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
        <Form data={data} isEdited={setData}/>
        :null}
        {<button className='btn btn-outline-success' onClick={handleEdit} >Edit</button>}
    </>
  )
}

export default Edit;
