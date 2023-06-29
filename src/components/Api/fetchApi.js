import { base_url } from "../baseUrl/Config"

const editApi =  async (id,data)=>{
    return (await fetch(base_url+"/"+id,{
		method:"PUT",
		headers:{'Content-Type' : 'application/json'},
		body: JSON.stringify(data)
	}
	));
}

export default editApi;