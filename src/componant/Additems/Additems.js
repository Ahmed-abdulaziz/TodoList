import React , {Component} from "react";

class Additems extends Component{

    state = {
        "name": '',
        "action":'',
    }
    handlesumbit = (e)=>{
        e.preventDefault();
        if(e.target.name.value == '' || e.target.action.value == ''){
            return false
        }else{
            this.props.Additems(this.state);
            this.setState({
                "name" :  '',
                "action": ''
            });
        }
           
    }

    handlechange = (e)=>{
        this.setState({
            [e.target.name] :  [e.target.value]
        });
    }
    render(){

        return(
            <div className="container">
               <form onSubmit={this.handlesumbit}>
                   <div className="row">
                        <div className="col-4">
                              <input type="text" placeholder="Enter Name" className="form-control" name="name" onChange={this.handlechange} value={this.state.name} />
                        </div>
                        <div className="col-4">
                               <input type="text" placeholder="Enter Task" className="form-control" name="action" onChange={this.handlechange} value={this.state.action}/>
                        </div>
                        <div className="col-4">
                             <input type="submit" className="btn btn-success w-100" value="Add" />
                        </div>
                   </div>
                  
               </form>
            </div>
        )
    }

}
export default Additems


