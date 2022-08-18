import axios from "axios";

export class UserService {
    //Function to get all
    static  getAllUsers(){
        let dataUrl = `https://jsonplaceholder.typicode.com/users`;
        return axios.get(dataUrl);
    }

    static  getUser(userId){
        let dataUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
        return axios.get(dataUrl);
    }
}