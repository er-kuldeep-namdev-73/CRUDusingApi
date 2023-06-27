return Object.keys(data[item]).map((elem)=>{
          if(typeof data[item][elem]==="object"){
            return Object.keys(data[item][elem]).map((val)=>{
              if(typeof data[item][elem][val]==="object"){
                  return null;
              }
              else{
                return (
                  <div className='border border-light m-2 p-1'>
                    <span>{elem}</span><br/><label>{val}</label>
                    <input type="text" className='form-control' value={formData[item][elem][val]} onChange={(e)=>{setFormData({...formData,[keyName]:{...data,[item]:{...data[item],[elem]:{...data[item][elem],[val]:e.target.value}}}})}}/>
                  </div>
                )
              }
            })
          }
          else{
            return (
            <div className='border border-light m-2 p-1'>
              <label>{elem}</label>
              <input type='text' className='form-control' value={formData[keyName][item][elem]} name={item} onChange={(e)=>setFormData({...formData,[keyName]:{...data,[item]:{...data[item],[elem]:e.target.value}}})}/>
            </div>
            )
          }
        })