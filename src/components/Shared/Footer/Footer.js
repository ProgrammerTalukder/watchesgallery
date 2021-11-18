import React from 'react';

const Footer = () => {
    return (
        <div className='position-relative' style={{bottom: '0px', width: '100%'}}>
  <footer
          className="text-center text-lg-start text-white pb-0"
          style={{'background-color' :  '#45526e'}}
          >

    <div className="container m-0 m-auto p-4 pb-0">

      <section className="">
  
        <div className="row">

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>


          <hr className="w-100 clearfix d-md-none" />


          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            
              <p className="text-white">MDBootstrap</p>
            
            
              <p className="text-white">MDWordPress</p>
            
            
              <p className="text-white">BrandFlow</p>
            
              <p className="text-white">Bootstrap Angular</p>
            
          </div>


          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            
              <p className="text-white">Your Account</p>
            
            
              <p className="text-white">Become an Affiliate</p>
            
            
              <p className="text-white">Shipping Rates</p>
            
            
              <p className="text-white">Help</p>
            
          </div>


          <hr className="w-100 clearfix d-md-none" />


          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
            <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>

        </div>

      </section>


      <hr className="my-3"/>


      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">

          <div className="col-md-7 col-lg-8 text-center text-md-start">

            <div className="p-3">
              © 2021 Copyright:
              <p>Shahriar Alam Talukder</p>
            </div>

          </div>


        </div>
      </section>

    </div>

  </footer>

</div>
    );
};

export default Footer;