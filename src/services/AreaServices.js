import axios from "axios";

export const getAreaById = (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://localhost:8080/api/area/'+id,
        headers: { 
          'Content-Type': 'application/json'
        }
      };
      
    return axios.request(config)
}