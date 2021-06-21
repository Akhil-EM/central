import axios from "axios";
import {appBaseUrl} from '../config';
//user defined axios with base url
export default axios.create({
    baseURL:appBaseUrl,
    headers:{
        "Content-type": "application/json",
    }
});