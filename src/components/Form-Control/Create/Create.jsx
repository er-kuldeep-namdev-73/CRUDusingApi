import React,{useState} from 'react'
import Form from '../Form/form';
const Create=({data})=>{
	const [showForm,setShowForm]=useState(false);
	  const [formData, setFormData] = useState({...data[0]	});

	console.log(data[0])

	function handleSubmit(){
		console.log("Create is submit");
	}
	return(
		<>
		{
		showForm && data.length?
		<Form data={data[0]}  handleSubmit={handleSubmit} formData={formData} setFormData={setFormData}/>
		:null
		}
			<button className="btn btn-success mb-2 mt-2" onClick={()=>setShowForm(true)}>ADD DATA</button>
		</>
	)
}

export default Create;