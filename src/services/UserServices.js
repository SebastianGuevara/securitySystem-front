import axios from "axios";

export const login = (email, password) => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://192.168.1.30:8080/api/user/login?email=${email}&password=${password}`,
        headers: { }
      };
      
    return axios.request(config)
}