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
  sellerStoreName: null,
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
  
  const methods = []
  async function postData(url) {
    await fetch(url, {
    method: 'GET',
    headers: {
      "X-Api-Key": "oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT"
    }
   }).then(response => response.json())
   .then( data => {
    if(url === "https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods"){
      data.forEach(eachMethod => methods.push(
        `<option>${eachMethod.name}</option>`
        )) }
   })
    
  }

  console.log(typeof(methods))

  //Retrieve the list of available shipping methods:

  postData("https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods")

  //Retrieve shipping method details:

  //postData("https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/1")

  //Retrieve the list of off days:

  //postData("https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/off-days")


  const [state, setState] = useState({ ...initialState })

  const addInfo = (target) => {
    setState({
      ...state,
      [target.name]: target.value
    })
  }

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
         <div style={{ textAlign: 'center', width: '40%' }}>
            <div>
              <img src='https://uploads-ssl.webflow.com/6006f58a9bc1bb84abf7f9b6/6006fbca47ec77fa015be5c6_logo-melonn.png' height='20em' alt='logo' />
            </div>
          </div>

          <div style={{ textAlign: 'center', width: '50%' }}>
                  <div className='row'>
                    <p style={{ fontSize:'13px', margin: '1em' }}>Seller store name</p>
                    <Input width='80%' type="text" name ="sellerStoreName" onChange={event => addInfo(event.target)}/>
                  </div>
                  
          </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <h5>
                    <span style={{ color: PRIMARY_COLOR }}> No. </span> <Input width='50%' type="number" name ="externalOrderNumber" onChange={event => addInfo(event.target)}/>
                  </h5>
                </div>

        </RowDiv>
        <Divider />

        <RowDiv>
          <h6> Order Information</h6>
        </RowDiv>

        <RowDiv>
        
                <div style={{ textAlign: 'center', width: '30%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}>Buyer full name</p>
                  <Input type="text" class="text-field w-input"  name="buyerFullName" onChange={event => addInfo(event.target)}/>
                </div>
    
                <div style={{ textAlign: 'center', width: '30%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}>Buyer phone number</p>
                  <Input type="text" class="text-field w-input"  name="buyerPhoneNumber" onChange={event => addInfo(event.target)}/>
                </div>
    
                <div style={{ textAlign: 'center', width: '30%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}> Buyer email</p>
                  <Input type="text" class="text-field w-input"  name="buyerEmail" onChange={event => addInfo(event.target)} />
                </div>
              </RowDiv>
        
              <br />
        
        <RowDiv style={{borderTop: `1px dashed ${PRIMARY_COLOR}`, paddingTop:'2%'}}>
          <h6> Shipping Information</h6>
        </RowDiv>

              <RowDiv>
              <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>Address</p>
                  <Input type="text" class="text-field w-input"  name="shippingAddress" onChange={event => addInfo(event.target)}/>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>City</p>
                  <Input type="text" class="text-field w-input"  name="shippingCity" onChange={event => addInfo(event.target)}/>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>Region</p>
                  <Input type="text" class="text-field w-input"  name="shippingRegion" onChange={event => addInfo(event.target)}/>
                </div>

                <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>Country</p>
                   <Input type="text" class="text-field w-input"  name="shippingCountry" onChange={event => addInfo(event.target)}/>
                </div>

                {/* <div style={{ textAlign: 'center', width: '100%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>Method</p>
                  <select>{methods[0]}</select>
                </div> */}

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
                  <Input type="text" class="text-field w-input"/>
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <Input type="text" class="text-field w-input"/>
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <Input type="text" class="text-field w-input"/>
                </div>
                <div style={{ textAlign: 'right', width: '3%' }} />
        </ProductsDiv>

        <div style={{ marginTop:'2em', display:'flex', width: '100%', justifyContent: 'center' }}>
        <Button> Add product </Button>
        </div>

      </DocumentDiv>
    </BackgroundDiv>
  
      </>
  )
}

export default SellOrderCreation;