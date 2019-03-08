import axios from 'axios'  
  
const SERVER_URL = 'http://localhost:9000/api/users';  
  
const instance = axios.create({  
  baseURL: SERVER_URL,  
  timeout: 1000  
});  
  
export default {  
    getAllUsers: () => instance.get('/', {  
    transformResponse: [function (data) {  
     
      return data? JSON.parse(data) : data;  
    }]  
  }),
  getAllProjectsForUser: (userid) => instance.get('/'+userid+'/projects/', {  
    transformResponse: [function (data) {  
      return data? JSON.parse(data) : data;  
    }]  
  })
}