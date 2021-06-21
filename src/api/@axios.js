import axios from "axios";
import {appBaseUrl} from '../config';
const url='http://wpr.intertoons.net/centrealapi/api/v2/';
//user defined axios with base url
export default axios.create({
    baseURL:appBaseUrl,
    headers:{
        "Content-type": "application/json",
    }
});