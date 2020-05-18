import React,{Component} from 'react';

class Request extends Component{
    
      
   render(){
       return(
          <div>

      <div className="panel panel-info">
        <div className="panel-heading">
            <h1>Please fill the details</h1>
        </div>
        <div className="panel-body">
            <div className="form-group">
                <label>Name</label>
                <input type="input"className="form-control" /> 
               
            </div>
            <div className="form-group">
                <label>Details</label>
                <input type="input"className="form-control" />
            </div>
            <div className="form-group">
                <label>Company Email</label>
                <input type="Email"className="form-control"/>
            </div>
           <button type="button" className="btn btn-success" >
             Submit
           </button>
        </div>
    </div>
  </div>
       
       )
   }
        
    }

    export default Request;