import http from './@axios';

class HomePageApi{
    
    constructor(lang,vendorurlkey,token){
        this._lang=1;
        this._venderUrlKey='centrealkochi';
        this._token=null;
    }
     _lang
     _venderUrlKey;
     _token;
    homeProductsGET(){
        return http.get('Products/HomeProducts',{
            headers:{
                lang:this._lang,
                vendorurlkey:this._venderUrlKey,
                token:this._token
            }
        })
    }

    topCategoryGET(){
         return http.get('category/TopCategory',{
             headers:{
                lang:this._lang,
                vendorurlkey:this._venderUrlKey,
                token:this._token
             }
         });
    }

    dealOfTheDayGET(){
        return http.get('DealOfDay',{
            headers:{
                lang:this._lang,
                vendorurlkey:this._venderUrlKey,
                token:this._token
            },
            params:{
                custId:'',
                guestId:'ai6y3xy'
            }
        })
    }
    
    popularProductGET(){
        return http.get('PopularProduct',{
            headers:{
                lang:this._lang,
                vendorurlkey:this._venderUrlKey,
                token:this._token
            },
            params:{
                custId:'',
                guestId:'ai6y3xy'
            }
        })
    }
    
    BrandListGET(){
        return http.get('BrandList',{
            headers:{
                lang:this._lang,
                vendorurlkey:this._venderUrlKey,
                token:this._token
            },
            params:{
                custId:'',
                guestId:'ai6y3xy'
            }
        })
    }
}



export default new HomePageApi;