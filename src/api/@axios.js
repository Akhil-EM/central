import axios from "axios";
import {appBaseUrl} from '../config';


export default axios.create({
    baseURL:appBaseUrl,
    headers:{
        "Content-type": "application/json",
        'Accept': 'application/json',
        'lang':'1',
        'vendorurlkey':'centrealkochi',
        'token':null
    }
});
