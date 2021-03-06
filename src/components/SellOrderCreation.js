import React,{ useState } from 'react'
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
  PRIMARY_COLOR, 
  Button,
  Input
} from './styledComponents'

const initialState = {
  sellerStore: null,
  shippingMethod: null,
  externalOrderNumber: null,
  buyerFullName:null,
  buyerPhoneNumber:null,
  buyerEmail:null,
  shippingAddress: null,
  shippingCity: null,
  shippingRegion: null,
  shippingCountry: null,
  products: []
}


function SellOrderCreation() {

  const [state, setState] = useState({ ...initialState })

  /* const addLine = () =>
    setState({
      ...state,
      products: products.concat([
        {
          item: undefined,
          code: undefined,
          price: undefined,
          tax: undefined,
          quantity: 1,
          total: undefined,
          emptyQuantityError: false
        }
      ])
    }) */

  return(
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
                    <span style={{ color: PRIMARY_COLOR }}> No. </span> <Input width='20%' type="number" name ="externalOrderNumber"/>
                  </h5>
                </div>

        </RowDiv>
        <Divider />

        <RowDiv>
          <h6> Order Information</h6>
        </RowDiv>

        <RowDiv>
        
                <div style={{ textAlign: 'center', width: '20%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}>Buyer full name</p>
                  <Input type="text" class="text-field w-input"  name="buyerFullName" required=""/>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}>Buyer phone number</p>
                  <Input type="text" class="text-field w-input"  name="buyerPhoneNumber"  required=""/>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}> Buyer email</p>
                  <Input type="text" class="text-field w-input"  name="buyerEmail"  required=""/>
                </div>
              </RowDiv>
        
              <br />
        
        <RowDiv style={{borderTop: `1px dashed ${PRIMARY_COLOR}`, paddingTop:'2%'}}>
          <h6> Shipping Information</h6>
        </RowDiv>

              <RowDiv>
              <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>Address</p>
                  <Input type="text" class="text-field w-input"  name="shippingAddress"  required=""/>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>City</p>
                  <Input type="text" class="text-field w-input"  name="shippingCity"  required=""/>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>Region</p>
                  <Input type="text" class="text-field w-input"  name="shippingRegion"  required=""/>
                </div>

                <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>Country</p>
                   <Input type="text" class="text-field w-input"  name="shippingCountry"  required=""/>
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
                <div style={{ textAlign: 'center', width: '1%' }}>
                  1.
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <Input type="text" class="text-field w-input"  name="Nombre"  required=""/>
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <Input type="text" class="text-field w-input"  name="Nombre"  required=""/>
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <Input type="text" class="text-field w-input"  name="Nombre"  required=""/>
                </div>
                <div style={{ textAlign: 'right', width: '3%' }} />
        </ProductsDiv>

        <div style={{ marginTop:'2em', display:'flex', width: '100%', justifyContent: 'center' }}>
        <Button> Add product </Button>
        </div>
        
        {/* <div>
          <h6 style={{ color: 'grey' }}>{textCreateTransaction[idiom].notes}</h6>
          <TextForm
            displayError
            multiline
            type='number'
            property='notes'
            addInfo={addInfo}
            defaultValue={notes}
            placeholder={textCreateTransaction[idiom].addNotes}
          />
        </div> */}
      </DocumentDiv>
    </BackgroundDiv>
  
      </>
  )
}

export default SellOrderCreation;