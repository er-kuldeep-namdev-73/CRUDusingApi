import React,{useState} from 'react'

const SubForm = ({data,keyName})=>{
	const[formData,setFormData]=useState({})
	
	function changeData(e,element){
		// console.log(element);
		console.log(element);
		console.log(keyName)
		console.log(e.target.name)
		console.log(e.target.value);
		
	}
	
	
	return (
		<>
			{
				Object.keys(data).map((element)=>{
				if(typeof data[element]==="object"){
					return (<div className="border border-light m-2 p-1">
					<span>{element} : </span><br/>
						<SubForm data={data[element]} keyName={element}/>
						</div>
					)
				}
				else{
					return (<>
						<label>{element} : </label><br/>
						<input type="text" name={element} value={data[element]} className="form-control" onChange={(e)=>{changeData(e,element)}}/><br/>
						</>
					)
				}
			})
			}
		</>
	)
}

export default SubForm;