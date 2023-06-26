import React from 'react';

const Form = ({data}) => {
  console.log(data)

  function dataChange(e){
    console.log(e.target.value)
  }

  return (
    <div>
        <form>
            {
              Object.keys(data).map((item)=>{
                return (
                  <>
                    <label>{item} : </label>
                    <input type="text" value={data[item]} className='form-control my-2' onChange={dataChange}/>
                  </>
                )
              })
            }
        </form>
    </div>
  )
}

export default Form;