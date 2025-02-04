import { MDBFooter, MDBIcon,MDBCol, MDBRow, MDBInput, MDBBtn, MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'

function Footer() {
  return (
    <div style={{'margin':'2rem 3rem','marginTop':'6rem', 'padding':'20px 20px','fontFamily':'Inter','backgroundColor':'#FF9900','borderRadius':'40px'}}>
        <MDBFooter bgColor='#FF9900' className='text-center text-lg-start text-muted'>
        <div className='d-flex justify-content-center justify-content-lg-between p-2' style={{color:'black'}}>
                <div className='me-5 d-none d-lg-block'>
                </div>
                <div>
                    <a href='' className='me-4 text-reset'>
                        <b>About Us</b>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <b>Contact Us</b>
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <b>Privacy Policy</b>
                    </a>
                </div>
        </div>
        <div style={{'margin':'35px 10px'}}>
            <MDBContainer className='p-4 pb-0'>
            <form action=''>
            <MDBRow className='d-flex justify-content-center'>
                <MDBCol size='auto' className='mb-4 mb-md-0'>
                <p className='pt-2' style={{color:'black'}}>
                    <strong>Subscribe to our weekly email digests </strong>
                </p>
                </MDBCol>

                <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
                <MDBInput type='text' id='form5Example2' label='Email address' contrast/>
                </MDBCol>

                <MDBCol size='auto' className='mb-4 mb-md-0'>
                <MDBBtn outline color='dark' style={{'fontWeight':'bold'}}>
                    Subscribe
                </MDBBtn>
                </MDBCol>
            </MDBRow>
            </form>
        </MDBContainer>
        </div>
        
        <div className='d-flex justify-content-center justify-content-lg-between p-4' style={{color:'black'}}>
            <div className='me-5 d-none d-lg-block'>
            &copy; {new Date().getFullYear()} Copyright:{' '}
                <a className='text-black' href=''>
                    PoojaArchana
                </a>
            </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
            </div>
        </MDBFooter>
      
    </div>
  )
}

export default Footer
