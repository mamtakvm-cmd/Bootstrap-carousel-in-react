import React from 'react';
import './Home.css';



export default class Home extends React.Component {
    render(){
        return(
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
            <ol  className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
          
          
            <div className="carousel-inner">
              <div  className="item active">
                <img src="https://i.ibb.co/80THRDB/award.jpg"  alt="No Image"/>
              </div>
          
              <div  className="item">
                <img src="https://i.ibb.co/475Fv0K/award2107.jpg"  alt="No Image"/>
              </div>
          
              <div  className="item">
                <img src="https://i.ibb.co/5G544gr/Hack-certificate.jpg "alt="No Image"/>
              </div>
              <div  className="item">
                <img src="https://i.ibb.co/Z2ZnSZH/hopitality.jpg" alt="No Image"/>
              </div>
            </div>
            
          
            
            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
              <span  className="glyphicon glyphicon-chevron-left"></span>
              <span  className="sr-only">Previous</span>
            </a>
            <a  className="right carousel-control" href="#myCarousel" data-slide="next">
              <span  className="glyphicon glyphicon-chevron-right"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        );
    }
         }         /* <div id="myCarousel" className="carousel slide" data-ride="carousel">
 
  <ol  className="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
    <li data-target="#myCarousel" data-slide-to="3"></li>
  </ol>


  <div className="carousel-inner">
    <div  className="item active">
      <img src="https://i.ibb.co/80THRDB/award.jpg"  alt="No Image"/>
    </div>

    <div  className="item">
      <img src="https://i.ibb.co/475Fv0K/award2107.jpg"  alt="No Image"/>
    </div>

    <div  className="item">
      <img src="https://i.ibb.co/5G544gr/Hack-certificate.jpg "alt="No Image"/>
    </div>
    <div  className="item">
      <img src="https://i.ibb.co/Z2ZnSZH/hopitality.jpg" alt="No Image"/>
    </div>
  </div>
  

  
  <a className="left carousel-control" href="#myCarousel" data-slide="prev">
    <span  className="glyphicon glyphicon-chevron-left"></span>
    <span  className="sr-only">Previous</span>
  </a>
  <a  className="right carousel-control" href="#myCarousel" data-slide="next">
    <span  className="glyphicon glyphicon-chevron-right"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
*/

/*
<div id="myModal" className="modal fade" role="dialog" data-backdrop="static">
  <div className="modal-dialog">
    <div className="modal-content">
      
      <div><button type="button"className="close" data-dismiss="modal">&times;</button></div>

      
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://i.ibb.co/80THRDB/award.jpg" alt="First slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://i.ibb.co/475Fv0K/award2107.jpg"  alt="Second slide"/>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</div> */
