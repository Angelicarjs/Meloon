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
  ProductsDivHeader,
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
  products: [
   {number: 1,
    name: undefined,
    quantity: undefined,
    weight: undefined}
  ]
}


function SellOrderCreation() {
  const methods = []
  async function postData(dataType, url) {
    await fetch(url, {
    method: 'GET',
    headers: {
      "X-Api-Key": "oNhW2TBOlI1t4kWb3PEad1K1S1KxKuuI3GX6rGvT"
    }
   }).then(response => response.json())
   .then( data => {
    if(dataType === "shippingMethods"){
      data.forEach(eachMethod => methods.push(
        `<option>${eachMethod.name}</option>`
        )) }
   })
    
  }

  //Retrieve the list of available shipping methods:

  postData('shippingMethods',"https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods")

  //Retrieve shipping method details:

  //postData("https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods/1")

  //Retrieve the list of off days:

  //postData("https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/off-days")


  const [state, setState] = useState({ ...initialState })

  const { products } = state

  const addInfo = (target) => {
    setState({
      ...state,
      [target.name]: target.value
    })
  }

  const addLine = () =>
    setState({
      ...state,
      products: products.concat([
        {
          number:products.length + 1,
          name: undefined,
          quantity: undefined,
          weight: undefined
        }
      ])
    })

    const addProduct = (target, i) => {
      const newProduct = products.map((product, index) => {
        if (i !== index) return product
        //const { number, name, quantity, weight } = products[i]
        return {
          ...product,
          [target.name]: target.value
        }
      })
      setState({ ...state, products: newProduct })
    }


  return(
      <>

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
                  <Input type="text" className="text-field w-input"  name="buyerFullName" onChange={event => addInfo(event.target)}/>
                </div>
    
                <div style={{ textAlign: 'center', width: '30%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}>Buyer phone number</p>
                  <Input type="text" className="text-field w-input"  name="buyerPhoneNumber" onChange={event => addInfo(event.target)}/>
                </div>
    
                <div style={{ textAlign: 'center', width: '30%' }}>
                <p style={{ fontSize:'13px', margin: '1em' }}> Buyer email</p>
                  <Input type="text" className="text-field w-input"  name="buyerEmail" onChange={event => addInfo(event.target)} />
                </div>
              </RowDiv>
        
              <br />
        
        <RowDiv style={{borderTop: `1px dashed ${PRIMARY_COLOR}`, paddingTop:'2%'}}>
          <h6> Shipping Information</h6>
        </RowDiv>

              <RowDiv>
              <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>Address</p>
                  <Input type="text" className="text-field w-input"  name="shippingAddress" onChange={event => addInfo(event.target)}/>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>City</p>
                  <Input type="text" className="text-field w-input"  name="shippingCity" onChange={event => addInfo(event.target)}/>
                </div>
    
                <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>Region</p>
                  <Input type="text" className="text-field w-input"  name="shippingRegion" onChange={event => addInfo(event.target)}/>
                </div>

                <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>Country</p>
                   <Input type="text" className="text-field w-input"  name="shippingCountry" onChange={event => addInfo(event.target)}/>
                </div>

                {/* <div style={{ textAlign: 'center', width: '20%' }}>
                  <p style={{ fontSize:'13px', margin: '1em' }}>Method</p>
                  <select>{methods[0]}</select> 
                </div> */}

              </RowDiv>

        <br />

        <ProductsDivHeader>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <p>Product Name</p>
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <p>Product Quantity</p>
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <p>Product Weight</p>
                </div>
                <div style={{ textAlign: 'right', width: '3%' }} />
        </ProductsDivHeader>

        {products.map((product, i) => (
        <div key={`${i}as`}>
        <ProductsDiv>
                <div style={{ textAlign: 'center', width: '3%' }}>
                  {product.number}.
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <Input type="text" className="text-field w-input" name="name" onChange={event => addProduct(event.target, i)}/>
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <Input type="text" className="text-field w-input" name="quantity" onChange={event => addProduct(event.target, i)}/>
                </div>
                <div style={{ textAlign: 'center', width: '30%' }}>
                  <Input type="text" className="text-field w-input" name="weight" onChange={event => addProduct(event.target, i)}/>
                </div>
        </ProductsDiv>
        </div>))}

        <div style={{ marginTop:'2em', display:'flex', width: '100%', justifyContent: 'center' }}>
        <Button onClick={() => addLine()}> Add product </Button>
        </div>

      </DocumentDiv>
    </BackgroundDiv>
  
      </>
  )
}

export default SellOrderCreation;