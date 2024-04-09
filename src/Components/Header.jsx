import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='magenta'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://content.presentermedia.com/content/animsp/00005000/5757/caduceus_blue_medical_health_symbol_md_nwm_v2.gif'
              height='45'
              width={'30'}
              alt=''
              loading='lazy'
            />
            <h3>Medzo</h3>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
    


