import React, { useState } from 'react';
const Form = ({ data }) => {

  const [formData, setFormData] = useState({ ...data })

  function submitData(e) {
    e.preventDefault()
    console.log(formData)
  }

  function changeData(data, keyName) {
    return Object.keys(data).map((item, index) => {
      if (typeof data[item] === "object") {
        return (<div className='border border-primary m-2 p-1 rounded'>
        <span>{item} : </span>
          {changeData(data[item],item)}
        </div>
        )
      }
      else {
        return (
          <div>
            <label>{item} : </label>
            <input type="text" className='form-control' value={Object.values(data)[index]} name={item} onChange={(e) => setFormData({ ...formData, [keyName]: { ...data, [e.target.name]: e.target.value } })} />
          </div>
        )
      }
    })
  }

  //Form Return
  return (
    <div>
      <form onSubmit={submitData}>
        {
          Object.keys(formData).map((item) => {
            if (typeof formData[item] === "object") {
              return (
                <div className="border border-light m-2 p-1 rounded">
                  <span>{item} : </span><br />
                  {changeData(formData[item], item)}
                </div>
              )
            }
            else
              return (
                <>
                  <label>{item} : </label><br />
                  <input type='text' className='form-control' value={formData[item]} onChange={(e) => setFormData({ ...formData, [item]: e.target.value })} />
                </>
              )
          })
        }
        <button type="submit" className='btn btn-outline-danger form-control w-100 my-2'>Update</button>
      </form>
    </div>
  )
}

export default Form;