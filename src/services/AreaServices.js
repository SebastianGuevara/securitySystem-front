import axios from "axios";

export const getAreaById = (id) => {
    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'http://192.168.1.30:8080/api/area/'+id,
        headers: { 
          'Content-Type': 'application/json'
        }
      };
      
    return axios.request(config)
}
export const getAreas = (id) => {
  let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://192.168.1.30:8080/api/area',
      headers: { 
        'Content-Type': 'application/json'
      }
    };
    
  return axios.request(config)
}