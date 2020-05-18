import React,{Component} from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Features from './Features';
import Request from './Request';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import './Routing.css'

class Routing extends Component{


   
    render(){
      
        return(
          <BrowserRouter>
            <header>
            <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    
    </div>
    <div className="collapse navbar-collapse" id="#myNavbar">
      <ul className="nav navbar-nav">
          <img src="https://i.ibb.co/RSPCzRJ/crswebtravel-logo.png" alt="backimage" />
       </ul>
       <ul className="nav navbar-nav navbar-right">
        <li><Link to="/Home">HOME</Link></li>
        <li><Link to="/Features">FEATURES</Link></li>
        <li><Link to="/Request">REQUEST DEMO</Link></li>
        <li><Link to="/Blog">BLOG</Link></li>
        <li><Link to="/Contact">CONTACT US</Link></li>
           
      </ul>   
    </div>
  </div>
</nav>
</header>
<Route  path="/Home" component={Home}></Route>
<Route  path="/Features" component={Features}></Route>
<Route   path="/Request" component={Request}></Route>
<Route  path="/Blog" component={Blog}></Route>
<Route  path="/Contact" component={Contact}></Route>


<div id="myCarousel" className="carousel slide " data-ride="carousel">
   
    <ol className="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

   
    <div className="carousel-inner">
      <div class="item active ">
        <img src= "https://i.ibb.co/b2Y9w1b/download.jpg" alt="backimage" />
      </div>

      <div className="item ">
        <img src="https://i.ibb.co/m80ScZ6/images.jpg" alt="backimage"/>
      </div>
   
      <div className="item ">
        <img src="https://i.ibb.co/tmdDkq7/images-1.jpg" alt="backimage" />
      </div>
    </div>

  
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>

 



</BrowserRouter>

 )
 }
}

export default Routing;