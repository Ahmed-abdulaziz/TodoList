import React , {Component} from "react";
import './Items.css';
class Items extends Component{

    render(){
        const {items} = this.props;         //  =  items = this.props.items
        const {deleteitem} = this.props;         //  =  deleteitem = this.props.deleteitem

        let len = items.length;
        let listitems =len ? (items.map(function(item){
            return(
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.action}</td>
                <td><button className="btn btn-danger" onClick={()=>deleteitem(item.id)}>&times;</button></td>
              </tr>
              );
            })):(
               
               <tr>
                <td></td>
                <td className="text-danger h2">No Item To Show</td>
                <td></td>
             </tr>
               
            )
      
        return(
            <div className="container text-center">
               
                    <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Task</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        {listitems}
                    </tbody>
                  </table>
                
              
            </div>
        )
    }

}
export default Items