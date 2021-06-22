import React,{Component} from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from './Badge';
import SearchItemLoader from './SearchItemLoader'
import { AiOutlineHeart,AiOutlineClose } from 'react-icons/ai';
import {FiShoppingBag} from 'react-icons/fi'
import {FaRegUser} from 'react-icons/fa';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import LoginWithOtp from './LoginWithOtp';
import HeaderApi from '../api/HeaderApi';

import '../assets/css/header.css';






class Header extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             searchProducts:[],
             searchBoxDisplay:'none',
             searchLoadDisplay:'none',
             searchTerm:'',
             show:false,
             setShow:false,
             
        }

        this.handleChange = this.handleChange.bind(this);
        
    }
    
    handleClose = () => this.setState({show:false});
    handleShow = () => this.setState({show:true});
    handleChange=(event)=>{
        this.setState({searchTerm: event.target.value});
        console.log(this.state.searchTerm);
        this.searchProduct();
    } 
    
   

    
    searchProduct=()=>{
    //   console.log('product searched');
      var _term=this.state.searchTerm;
      this.setState({searchLoadDisplay:''});
      HeaderApi.searchAutoCompleteGET(_term)
                .then((response)=>{
                   this.setState({searchBoxDisplay:'',searchLoadDisplay:'none',searchProducts:response.data.Data});

                }).catch((err)=>{
                    this.setState({searchLoadDisplay:'none'});
                    console.log(err)
                })   

    }
    closeSearch=()=>{
        this.setState({searchBoxDisplay:'none',searchTerm:''})
    }
    
    render() {
        let  logoUrl=process.env.PUBLIC_URL+'/img/Centreal_Bazaar.png';
        return (
             <div className='app-base-bg p-2  d-flex justify-content-between'>
                <div className='d-flex '>
                   <img src={logoUrl} alt='logo' height={50}/>
                    <div className='d-none d-lg-block'>
                        <form className='search-container '>
                          <input  onKeyUp={this.searchProduct} onChange={this.handleChange} className="search-input" value={this.state.searchTerm} type="text" placeholder="Search Inside 15,000 products....."/>
                          <button className="search-icon" onClick={this.closeSearch}><AiOutlineClose style={{fontSize:'1.5em'}}/></button>
                          <button className="search-btn" type="submit">Search</button>
                        </form> 
                        <SearchItemLoader searchBoxDisp={this.state.searchBoxDisplay} searchLoadDisp={this.state.searchLoadDisplay} searchList={this.state.searchProducts}/>
                    </div>
                </div>
                <div className='d-flex align-items-center margin  justify-content-between width-250px'>
                    <Badge count={5} ><AiOutlineHeart className="icon "/></Badge>
                    <Badge count={2}><FiShoppingBag className="icon"/></Badge>
                    <button className="icon-btn text-light"><FaRegUser /></button>
                    <button className="icon-btn text-light"><h5 className="mt-3" onClick={this.handleShow}>Login</h5></button>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}
                        size="lg"
                       aria-labelledby="contained-modal-title-vcenter"
                       centered>
                           <AiOutlineClose onClick={this.handleClose} style={{fontSize:'1.5em',
                                                                            position:'absolute',
                                                                            right:0,
                                                                            margin:'10px'}}/>
                                                                            <br/>
                    <Modal.Body>
                    <div className="container">
                    <div className="row">
                        <div className="col-sm d-none d-lg-block ">
                            <img width={380}  src={process.env.PUBLIC_URL+'/img/sign-up-image.jpg'} />
                        </div>
                        <div className="col-sm">
                            <Login />
                            {/* <ForgotPassword /> */}
                            {/* <LoginWithOtp /> */}
                            
                        </div>
                        
                    </div>
                    </div>
                    
                    </Modal.Body>
                   
                </Modal>
             </div>
        )
    }
}

export default  Header