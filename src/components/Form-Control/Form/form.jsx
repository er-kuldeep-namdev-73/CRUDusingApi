import React from 'react';
import SubForm from "./SubForm.jsx"
const Form = ({data}) => {
  //console.log(data)

  function dataChange(e){
    console.log(e.target.value)
  }

  return (
    <div>
        <form>
            {
              Object.keys(data).map((item)=>{
				 if(typeof data[item]==="object"){
					 return (
					 <div className="border border-light m-2 p-1">
					 <span>{item} : </span><br/>
					 <SubForm data={data[item]} className='form-control my-2' keyName={item}/>
					 </div>
					 )
				 }
                return (
                  <>
                    <label>{item} : </label><br/>
                    <input type="text" value={data[item]} className='form-control my-2' onChange={dataChange} name={item}/>
                  </>
                )
              })
            }
        </form>
    </div>
  )
}

export default Form;