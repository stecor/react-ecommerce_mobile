import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

class Details extends Component {

  render() {
    return (
      <ProductConsumer>
        {(value)=>{
        const {id,company,img, info, price, title, inCart} = value.detailProduct;
        return (
          <div className="container py-5">
              {/* title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* Product Info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="product" className="img-fluid"/>
                </div>
                {/* Product text */}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h4>Model : {title}</h4>
                  <h6 className="text-title text-uppercase text-muted mt-3 mb2">Made by : <span className="text-uppercase">{company}</span></h6>
                  <h6 className="text-blue">
                     <strong>
                       Price : <span>$</span>{price}
                     </strong>
                   </h6>
                   <p className="text-capitalize font-weight-bold mt-3 mb-0">
                      Some info about the product :
                   </p>
                   <p className="text-muted ">
                      {info}
                   </p>
                   {/* buttons */}
                   <div>
                      <Link to="/">
                        <ButtonContainer>
                          Back to Products
                        </ButtonContainer>
                      </Link>

                      <ButtonContainer
                        cart
                        disabled = {inCart? true: false}
                        onClick = {()=>{
                          value.addToCart(id)
                        }}
                        >
                          {inCart? "inCart": "add to cart"}
                      </ButtonContainer>
                   </div>
                </div>
              </div>
          </div>
        )
        }}
      </ProductConsumer>
    );
  }

}

export default Details;
