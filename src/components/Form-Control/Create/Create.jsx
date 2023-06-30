import React,{useState} from 'react'
import Form from '../Form/form';
import postApi from '../../Api/PostApi';
const Create=({data})=>{
	const [showForm,setShowForm]=useState(false);
	  const [formData, setFormData] = useState({});

	function handleShowAddForm()
	{
		setShowForm(true);
		setFormData(emptyData(data[0]))
	}

	function emptyData(obj)
	{
		let resultObj= {}    
		function emptyNestedData(obj)
		{
			
			Object.keys(obj).map(element=>
			{
				if(typeof obj[element] === 'object'){
					emptyNestedData(obj[element])
				}
				else{
					obj[element]=''; 

				}
			})
			resultObj = obj;
		}
		emptyNestedData(obj)
		return resultObj;
	}

	function handleSubmit(e){
		e.preventDefault()
		postApi(formData)
		.then(console.log)
		setShowForm(false)
	}

	return(
		<>
		{
		showForm && data.length!==0 && Object.keys(formData).length!==0 ?
		<Form handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} isAbsenceValue={true} isAddForm={true}/>
		:null
		}
			<button className="btn btn-success mb-2 mt-2" onClick={handleShowAddForm}>ADD DATA</button>
		</>
	)
}

export default Create;