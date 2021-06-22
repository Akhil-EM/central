import http from './@axios';
import axios from "axios";
import { appBaseUrl,Headers } from '../config';
class HeaderApi{
    
    constructor(){
        this._lang=1;
        this._venderUrlKey='centrealkochi';
        this._token=null;
    }
     _lang
     _venderUrlKey;
     _token;
    searchAutoCompleteGET(_term){
        return http.get('Product/SearchAutoComplete',{
            params:{
                term:_term
            }
        })
    }

    loginPOST(_logCred){
        
        // return http.post('Account/Login',_logCred);

        return new Promise(function(resolve, reject){
             
            axios.post(`${appBaseUrl}Account/Login`,_logCred,Headers).then(function(response){
                if(response.status=='200'){
                //  commit('setIsCustomerLoggined',true); 
                //  commit('setCustomerInfo',response.data.Data); 
                //  localStorage.setItem('custId',response.data.Data.custId);
                //  localStorage.setItem('customer_token',response.data.Data.token);
                //  dispatch('mergeCustomerCart');
                               
               }
               resolve(response);
             }).catch(function(error){
                 reject(error);
             });
        });
    }

   
}



export default new HeaderApi();