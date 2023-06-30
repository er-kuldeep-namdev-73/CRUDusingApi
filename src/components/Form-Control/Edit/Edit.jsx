import React,{useState} from 'react';
import getApi from '../../Api/getApi.js';
import Form from '../Form/form';
import editApi from '../../Api/fetchApi';

const Edit = ({id}) => {

  const [showData, setShowData] = useState(false)

  const[data,setData]=useState({})
  const [formData, setFormData] = useState({});

  function handleEdit() {
    getApi(id).then((result)=>{
          console.log(result)
        setShowData(true)
        setData(result)
		setFormData(result)
    }).catch((err) => {
        console.log(err)
    })
}

function handleSubmit(e) {
    e.preventDefault();
    editApi(data.id,formData).then((result) => {
      console.log(result)
    }).catch((err) => {
      console.log(err)
    })
    setShowData(false)
  }



  return (
    <>
        { showData && Object.keys(data).length!=0?
        <Form data={data}  handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} isAddForm={false}/>
        :null}
        {<button className='btn btn-outline-success' onClick={handleEdit} >Edit</button>}
    </>
  )
}

export default Edit;