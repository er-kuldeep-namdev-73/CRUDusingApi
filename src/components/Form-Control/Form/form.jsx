import React, { useState } from 'react';

const Form = ({ handleSubmit, formData,setFormData, isAddForm=false  }) => {

const[show,setShow]=useState(true)

  function handleInputs(data, keyName) {
    return Object.keys(data).map(item => {
      if (typeof data[item] === 'object' && Array.isArray(item)) {
        return Object.keys(data[item]).map(elem => {
          if (typeof data[item][elem] === 'object') {
            return Object.keys(data[item][elem]).map(vals => {
              return <div><h5>{elem}</h5><label>{vals}</label><input type='text' className='form-control border' value={formData[keyName][item][elem][vals]} onChange={(e) => setFormData({ ...formData, [keyName]: { ...data, [item]: { ...data[item], [elem]: { ...data[item][elem], [vals]: e.target.value } } } })} /></div>
            })
          }
          else {
            return <div><label>{elem}</label><input type='text' className='form-control' value={formData[keyName][item][elem]} name={item} onChange={(e) => setFormData({ ...formData, [keyName]: { ...data, [item]: { ...data[item], [elem]: e.target.value } } })} /></div>
          }
        })
      }
      else {
        return <div><label>{item}</label><input type='text' className='form-control' value={formData[keyName][item]} name={item} onChange={(e) => setFormData({ ...formData, [keyName]: { ...data, [item]: e.target.value } })} /></div>
      }
    })
  }
  
 
return (
  
  show?<div  className='position-absolute top-0 start-50 bg-dark fs-5 text-light p-2 rounded w-50 text-start'>
    <h1 className='text-center border-bottom border-success'> {isAddForm ? 'Add Form ' : 'Update Form' } </h1> 
	<form onSubmit={handleSubmit}>
    {
      Object.keys(formData).map(element => {
        if (typeof formData[element] === 'object')
          return <><h5>{element}</h5>{handleInputs(formData[element], element)}</>
        else
          return <><label>{element}</label><input type="text" value={formData[element]} onChange={(e)=>setFormData({...formData, [element] : e.target.value})} className='form-control' /></>
      })
    }
    <button type='submit' className='btn btn-outline-warning w-100 mt-2 p-2' >{isAddForm ? 'Add' : 'Update' }</button>
  </form></div>:null
   
    
  )
}

export default Form