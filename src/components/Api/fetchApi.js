import { base_url } from "../baseUrl/Config"

const editApi =  async (id)=>{
    return (await fetch(base_url+"/"+id,{
		method:"PUT",
		headers:{'Content-Type' : 'application/json'},
		body: JSON.stringify()
	}
	));
}

export default editApi;