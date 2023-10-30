import axios from "axios";

export const login = (email, password) => {
    const config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `http://localhost:8080/api/user/login?email=${email}&password=${password}`,
        headers: { }
      };
      
    return axios.request(config)
}