import Features from "./features"
import NavBar from "./Navbar"
import Team from "./team"
import React from "react"
function Home(){

return(

    <>

<div className="bg-img">
  <NavBar/>
<div className="section1">
        <div className="invest-txt">
            <h2>Invest in <span> Bitcoin </span> <br />
            Bitcoin Trading</h2>
            <h4>Use modern progressive technologies of Bitcoin to earn money</h4>
            <input type="email" name="" placeholder="Enter Your Email" id="" />
            <button>Get Started</button>
        </div>
        <div className="pc-img">
            <img src="https://preview.colorlib.com/theme/cryptocurrency/img/laptop.png" alt="" />
        </div>
    </div>

</div>
    
    <div className="section-two">
<div className="main-section">
    <div className="column-1">
        <img src="https://preview.colorlib.com/theme/cryptocurrency/img/about-img.png" alt="" />
    </div>
    <div className="column-2">
        <h2>What is Bitcoin</h2>
        
        <p>Bitcoin is an innovative payment network and a new kind of  money.</p>
        <p>Bitcoin is one of the most important inventions in all of human history. For the first time ever, anyone can send or receive any amount of money with anyone else, anywhere on the planet, conveniently and without restriction. It’s the dawn of a better, more free world.</p>
        <button>Get Started</button> 
    </div>

</div>
</div>

<Features/>
<div className="section-three">
<h2>Get Started With Bitcoin</h2>
<p>Start learning about Bitcoin with interactive tutorials. It’s fun, easy, and takes only a few minutes!</p>
<div className="card-sec">
  <div className="card-bitcoin">
    <img src="https://preview.colorlib.com/theme/cryptocurrency/img/process-icons/1.png" alt="" />
  <h3>Create Your Wallet</h3>
  <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div className="card-bitcoin">
    <img src="https://preview.colorlib.com/theme/cryptocurrency/img/process-icons/2.png" alt="" />
    <h3>Create Your Wallet</h3>
    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
  <div className="card-bitcoin">
    <img src="https://preview.colorlib.com/theme/cryptocurrency/img/process-icons/3.png" alt="" />
    <h3>Create Your Wallet</h3>
    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</div>
</div>



<div className="transaction"> 
    <div className="row-trans">
<div className="item-1">
<h2>60</h2>
<p>SUPPORT COUNTRIES</p>
<i className="bi bi-2-circle"></i>
</div>
<div className="item-1">
<h2>60</h2>
<p>SUPPORT COUNTRIES</p>
<i className="bi bi-2-circle"></i>
</div>
<div className="item-1">
<h2>60</h2>
<p>SUPPORT COUNTRIES</p>
<i className="bi bi-2-circle"></i>
</div>
<div className="item-1">
<h2>60</h2>
<p>SUPPORT COUNTRIES</p>
<i className="bi bi-2-circle"></i>
</div>
    </div>
  </div>
    <Team/>
    </>
)




}

export default Home