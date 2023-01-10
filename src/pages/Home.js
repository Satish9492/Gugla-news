import React,{useRef,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import './style.css';
import './navbar.css';
import $ from 'jquery';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay,Navigation } from "swiper";

const Home = () => {
  const HomeSection=useRef(null);
  const gotoHomesection=()=>window.scrollTo({top:HomeSection.current.offsetTop,behavior:"smooth"});

  const FeatureSection=useRef(null);
  const gotoFeaturesection=()=>window.scrollTo({top:FeatureSection.current.offsetTop,behavior:"smooth"});

  const NewsSection=useRef(null);
  const gotoNewssection=()=>window.scrollTo({top:NewsSection.current.offsetTop,behavior:"smooth"});

  const ContactSection=useRef(null);
  const gotoContactsection=()=>window.scrollTo({top:ContactSection.current.offsetTop,behavior:"smooth"});

  const ReviewSection=useRef(null);
  const gotoReviewsection=()=>window.scrollTo({top:ReviewSection.current.offsetTop,behavior:"smooth"});


  function animation(){
    var tabsNewAnim=$('#navbarSupportedContent');
    var activeItemNewAnim=tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight=activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth=activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop=activeItemNewAnim.position();
    var itemPosNewAnimLeft=activeItemNewAnim.position();
    $(".hori-selector").css({
        "top":itemPosNewAnimTop.top +"px",
        "left":itemPosNewAnimLeft.left+"px",
        "height":activeWidthNewAnimHeight+"px",
        "width":activeWidthNewAnimWidth+"px"
    });
    $("#navbarSupportedContent").on("mouseover","li",function(e){
        $("#navbarSupportedContent ul li").removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight=$(this).innerHeight();
        var activeWidthNewAnimWidth=$(this).innerWidth();
        var itemPosNewAnimTop=$(this).position();
        var itemPosNewAnimLeft=$(this).position();
        $(".hori-selector").css({
            "top":itemPosNewAnimTop.top +"px",
            "left":itemPosNewAnimLeft.left+"px",
            "height":activeWidthNewAnimHeight+"px",
            "width":activeWidthNewAnimWidth+"px"
        });
    })


}
useEffect(()=>{
    animation();
    $(window).on('resize',function(){
        setTimeout(function(){
            animation();
        },500);
    });
},[])
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-mainbg'>
      <a className='navbar-brand navbar-logo'>
        <img src="./images/main1.png" className='img-fluid imag1'></img>
      </a>
      <button className='navbar-toggler' onMouseOver={function(){
        setTimeout(function(){
            animation();
        })
      }} 
      type='button' data-toggle='collapse' data-target='#navbarSupportedContent' aria-controls='navbarSupportedContent'
      aria-expanded='false' aria-label='Toggle navigation'>
        <i className='fas fa-bars text-white'></i>

      </button>
      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto'>
            <div className='hori-selector'>
                <div className='left'></div>
                <div className='right'></div>
            </div>
                <li className='nav-item active'>
                    <a className='nav-link' onClick={gotoHomesection}>
                        <i className='fa fa-home'></i>Home
                    </a>
                </li>
                <li className='nav-item '>
                    <a className='nav-link' onClick={gotoFeaturesection}>
                        <i className='fa fa-th-large'></i>Features
                    </a>
                </li>
                <li className='nav-item '>
                    <a className='nav-link' onClick={gotoNewssection}>
                        <i className='fa fa-mobile'></i>App Tour
                    </a>
                </li>
                <li className='nav-item '>
                    <a className='nav-link'>
                        <i className='fas fa-book'></i>Facts
                    </a>
                </li>
                <li className='nav-item '>
                    <a className='nav-link' onClick={gotoReviewsection}>
                        <i className='fas fa-star'></i>Reviews
                    </a>
                </li>
                <li className='nav-item '>
                    <a className='nav-link' onClick={gotoContactsection}>
                        <i className='far fa-copy'></i>Contact Us
                    </a>
                </li>
            
        </ul>

      </div>
    </nav>
    <div className='container-fluid container0'>
       <div className='row bg-white' ref={HomeSection}>
          <div className='col-lg-6 col-sm-12 col-xs-12 c1'>
          
            <center>
            <img src='./images/g2.png' className='img-fluid img1'></img>
              {/* <p className='h1'>Gugla News</p> */}
              
              <p className='h7 para text-primary'><strong>STAY CONNECTED WITH LATEST NEWS</strong></p>
              <p className='h7'><strong>MADE IN INDIA</strong></p>
              <div className='container'>
                <p className='d-none d-lg-block'>
                  Lorem Ipsum is simply dummy text of the printing and 
                  typesetting industry.Lorem Ipsum has been the Industry's 
                  standard dummy text ever since the 1500s,when an unknownn
                  printer took a gallery of typeand scrambled it to make a type 
                  specimen book.
                </p>
              </div>
              <img src='./images/Group_51.png' className='img-fluid'></img>
              <img src='./images/social.png' className='img-fluid img8'></img>
            </center>
            
          </div>
          <div className='col-lg-6 col-sm-12 col-xs-12'>
            <img src='./images/hero-img.png' className='img-fluid image'></img>
            {/* <img src='./images/phone.png' className='img-fluid img2'></img> */}
          </div>
       </div><br></br><br></br>
       <div className='row' ref={FeatureSection}>
        <div className='container section-title'><h2 className='h2'>Amazing Features</h2></div>
        <img src='./images/Group_50.png' className='img-fluid'></img>
       </div><br></br><br></br>
       <div className='row' ref={NewsSection}>
       <div className='container section-title'><h2 className='h2'>App Tour</h2></div>
        <center><div className='container'><h7 className='h7 text-primary'><strong>STAY CONNECTED WITH LATEST NEWS</strong></h7></div></center>
        <div className='container-fluid'>
        <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        slidesPerView={5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide ><img src="./images/screen1.png" className="img"></img></SwiperSlide>
        <SwiperSlide><img src="./images/screen2.png" className="img"></img></SwiperSlide>
        <SwiperSlide><img src="./images/screen3.png" className="img"></img></SwiperSlide>
        <SwiperSlide><img src="./images/screen4.png" className="img"></img></SwiperSlide>
        <SwiperSlide><img src="./images/screen5.png" className="img"></img></SwiperSlide>
        <SwiperSlide><img src="./images/screen6.png" className="img"></img></SwiperSlide>
        <SwiperSlide><img src="./images/screen3.png" className="img"></img></SwiperSlide>
        <SwiperSlide><img src="./images/screen4.png" className="img"></img></SwiperSlide>
        <SwiperSlide><img src="./images/screen1.png" className="img"></img></SwiperSlide>
      </Swiper>
        </div>
       
       </div><br></br><br></br>
       
       <div className='container-fluid' ref={ReviewSection}>
       <div className='container section-title'><h2 className='h2'>Reviews From users</h2></div>
       <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide >
        <div class="testimonial-item">
                <img src="./images/1.jpg" class="testimonial-img" alt="testmonials1"/>
                <h3>IRONMAN</h3>
                <div class="stars">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="testimonial-item">
                <img src="./images/2.jpg" class="testimonial-img" alt="testmonials1"/>
                <h3>SPIDER MAN</h3>
                <div class="stars">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="testimonial-item">
                <img src="./images/3.jpg" class="testimonial-img" alt="testmonials1"/>
                <h3>THOR</h3>
                <div class="stars">
                  <i class="bi bi-star-fill"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="testimonial-item">
                <img src="./images/4.jpg" class="testimonial-img" alt="testmonials1"/>
                <h3>WANDA</h3>
                <div class="stars">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
        </SwiperSlide>
        <SwiperSlide>
        <div class="testimonial-item">
                <img src="./images/5.jpg" class="testimonial-img" alt="testmonials1"/>
                <h3>Dr.DOOM</h3>
                <div class="stars">
                  <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
                </div>
                <p>
                  <i class="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
        </SwiperSlide>
      </Swiper>
       </div><br></br><br></br><br></br>
       
       <div className='container -fluid' ref={ContactSection}>
        <div className='container section-title'><h2 className='h2'>CONTACT US</h2></div>
        <div className='row'>
          <div className='col-lg-4 col-sm-12 col-xs-12'>
            <center>
              <h1 className='h2 text-primary'>Gugla News</h1>
            
            <div className='container con1'>
              <p className='h6'><strong><small>ADVERTISING AND AGENCY ENQUIRY<br></br><u>ads@guglanews.com</u></small></strong></p>
            </div>
            <div className='container con2'>
              <p className='h6'><strong><small>CAREER RELATION ENQUIRY<br></br><u>careers@guglanews.com</u><br></br><u>hr@guglanews.com</u></small></strong></p>
            </div>
            <div>
              <p className='h6 con3'><strong><small>APP SUPPORT<br></br><u>support@guglanews.coms</u><br></br><u>info@guglanews.com</u></small></strong></p>
            </div>
            </center>
          </div>
          <div className='col-lg-4 col-sm-12 col-xs-12'>
          <center>
            <div className='container con4'>
              <p className='h6'><strong><small>CONTACT<br></br>+9177026 31766</small></strong></p>
            </div>
            <div className='container con2'>
              <p className='h6'><strong><small>WEBSITE<br></br><u>www.guglanews.com</u></small></strong></p>
            </div>
            <div className='container con3'>
              <p className='h6'><strong><small>DOWNLOAD APP<img src='./images/play.png' className='img-fluid img'></img><img src='./images/apple.png' className='img-fluid img2'></img></small></strong></p>
            </div>
            </center>
          </div>
          <div className='col-lg-4 col-sm-12 col-xs-12'>
            <img src='./images/lion.png' className='img-fluid'></img>
            <img src='./images/social.png' className='img-fluid'></img>

          </div>

        </div>
       </div>

       <div className='container-fluid'>
        
       </div>
       <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="fa fa-arrow-up"></i></a>
    </div>


    
    <footer>
      <svg viewBox="0 0 120 28">
        <defs> 
          <mask id="xxx">
            <circle cx="7" cy="12" r="40" fill="#fff" />
          </mask>
   
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
  	</filter>
    
    <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
  </defs> 

   <use id="wave3" class="wave" xlinkHref="#wave" x="0" y="-2" ></use> 
   <use id="wave2" class="wave" xlinkHref="#wave" x="0" y="0" ></use>
  
  <div class="topball">
    <img class="ball" src="https://cdn3.iconfinder.com/data/icons/iconic-1/32/arrow_up_alt1-512.png" width="50"/>
  </div> 
  
  <circle class="drop drop1" cx="20" cy="2" r="1.8"  />
  <circle class="drop drop2" cx="25" cy="2.5" r="1.5"  />
  <circle class="drop drop3" cx="16" cy="2.8" r="1.2"  />
  
  <use id="wave1" class="wave" xlinkHref="#wave" x="0" y="1" />
</svg> 
<div className="continer">
    <div className="row">
      <div className="col-lg-6 col-sm-12 term">
        <h7 className="h7 text-dark">Copyright <i class="far fa-copyright"></i>2022 Gugla News Pvt.Ltd . All Rights Reserved.</h7>
      </div>
      <div className="col-lg-6 col-sm-12 term text-end">
        <div>Terms & Conditions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Privacy-Policy</div>
      </div>
    </div>
</div>
  
</footer>
    
    </>
  )
}

export default Home
