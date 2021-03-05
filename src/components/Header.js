import React, { useState } from 'react'

function Header() {

  const [state, setState] = useState({
    background: 'white'
  })
  return (
    <>
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand">
        <img width='50%' src= 'https://uploads-ssl.webflow.com/6006f58a9bc1bb84abf7f9b6/6006fbca47ec77fa015be5c6_logo-melonn.png'/>
      </a>
    <form class="form-inline">
      {/*<Button class="btn btn-outline-success my-2 my-sm-0" >
        <Link to="./sellOrderList">
           Return Sell Order List
        </Link>
      </Button> */}

    </form>
    </nav>
    </>
  )
}
export default Header;