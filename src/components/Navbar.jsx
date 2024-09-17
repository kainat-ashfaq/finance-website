
// import Link from "antd/es/typography/Link";
import { Link } from "react-router-dom";
import React from "react";

function NavBar() {
    
  return (
    <>
    {/* <div className="bg-img"> */}
    <div className="nav-div">
        <div className="logo">
<img src="https://preview.colorlib.com/theme/cryptocurrency/img/logo.png" alt="" />
        </div>
        <div className="ul-div">
            <ul>
<Link to="/"><li>Home</li></Link>
<Link  to="/components/features.jsx"><li>features</li></Link>

<Link  to="/components/team.jsx"><li>team</li></Link>
<li>Contact</li>
<li>About</li>
</ul>
        </div>
    </div>
    {/* <div className="section1">
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
    </div> */}
    {/* </div> */}
    </>
  );
}




export default NavBar;