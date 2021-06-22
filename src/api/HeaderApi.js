import http from './@axios';

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
            headers:{
                lang:this._lang,
                vendorurlkey:this._venderUrlKey,
                token:this._token
            },
            params:{
                term:_term
            }
        })
    }

   
}



export default new HeaderApi();