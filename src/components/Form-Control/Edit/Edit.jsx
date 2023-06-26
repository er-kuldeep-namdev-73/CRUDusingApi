import React,{useState} from 'react';
import editApi from '../../Api/fetchApi';
import Form from '../Form/form';

const Edit = ({id}) => {

  const [showData, setShowData] = useState(false)

  const[data,setData]=useState({})

  function handleEdit() {
    editApi(id).then((res) => {
        res.json().then((result)=>{
          console.log(result)
        setShowData(true)
        setData(result)
        })
    }).catch((err) => {
        console.log(err)
    })
}

  return (
    <>
        {showData?
        <div  className='position-absolute top-50 start-50 translate-middle bg-dark fs-5 text-light p-2 rounded w-50 text-start'>
           <h1 className='text-center border-bottom border-success'>Update Form</h1>
        <Form data={data}/>
        <button className='btn btn-outline-warning form-control w-100'>Update</button>
        </div>
        :null}
        {<button className='btn btn-outline-success' onClick={handleEdit} >Edit</button>}
    </>
  )
}

export default Edit;
