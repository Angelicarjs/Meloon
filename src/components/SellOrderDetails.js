import React from 'react'
// Third-party imports
import { Divider } from 'antd'
// Components
import Header from './Header'
import {
    BackgroundDiv,
    DocumentDiv,
    RowDiv,
    ProductsDiv,
    ProductItem,
    PRIMARY_COLOR
  } from './styledComponents'
  

function SellOrderDetails() {

    return (
        <>
        <Header/>
        <BackgroundDiv>
            <DocumentDiv>
              <RowDiv>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <div>
                    <img src='https://uploads-ssl.webflow.com/6006f58a9bc1bb84abf7f9b6/6006fbca47ec77fa015be5c6_logo-melonn.png' height='20em' alt='logo' />
                  </div>
                </div>
    
                <div style={{ textAlign: 'center', width: '50%' }}>
                  <h5> MELONN </h5>
                  <h6 style={{ color: 'grey' }}> 1018600241 </h6>
                  <h6 style={{ color: 'grey' }}> Medellín Antioquia </h6>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <h5>
                    <span style={{ color: PRIMARY_COLOR }}> No. </span> 1
                  </h5>
                </div>
              </RowDiv>
              <Divider />
    
              <RowDiv>
                <div style={{ textAlign: 'center', width: '40%' }}>
                  <div className='row'>
                    <div className='col-11 my-auto'>
                      <h6> Order Information</h6>
                    </div>
                  </div>
    
                    <div className='row'>
                      <div className='col-9 text-center'>
                        <div className='row'>
                          <div className='col-6 text-left' style={{ padding: 0 }}>
                            <p style={{ fontWeight: '500' }}>Buyer full name</p>
                            <p style={{ fontWeight: '500' }}>Buyer phone number</p>
                            <p style={{ fontWeight: '500' }}>Buyer email</p>
                          </div>
                          <div className='col-6 text-left' style={{ padding: 0 }}>
                            <p>Angelica Moreno</p>
                            <p>3213223925</p>
                            <p>angelica_uno@hotmail.es</p>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <h6> Shipping address</h6>
                  <p> Cra. 5 N 5 - 20</p>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <h6> Shipping city </h6>
                  <p> Medellin </p>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <h6> Shipping region</h6>
                  <p> Antioquia </p>
                </div>
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <h6> Shipping country </h6>
                  <p> Colombia </p>
                </div>
              </RowDiv>
    
              <br />
    
              <ProductsDiv>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <p>Product Name</p>
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <p>Product Quantity</p>
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <p>Product weigth</p>
                </div>

                <div style={{ textAlign: 'right', width: '3%' }} />
              </ProductsDiv>
    
              <ProductsDiv>
                <div style={{ textAlign: 'center', width: '30%' }}>
                      <ProductItem>
                        Camiseta
                      </ProductItem>
                    </div>
    
                <div style={{ textAlign: 'center', width: '30%' }}>
                      <ProductItem>
                        10
                      </ProductItem>
                    </div>

                <div style={{ textAlign: 'center', width: '30%' }}>
                      <ProductItem>
                        5 kg
                      </ProductItem>
                    </div>

              </ProductsDiv>
                
  
            </DocumentDiv>
    
        </BackgroundDiv>
      </>
    )

}

export default SellOrderDetails;