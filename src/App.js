import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './header';
import Items from './componant/Items/Items';
import Additems  from './componant/Additems/Additems';
import { Component } from 'react';

class App extends Component{
  state = {
    items:[]
  }

  deleteitem = (id)=>{

     let items = this.state.items;
     let i = items.findIndex(item=>item.id === id)
     items.splice(i , 1)
     this.setState({items:items});

  }

  Additems = (item) =>{
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({
      items : items
    })
  }
  render(){
    return (
      <div className="container-fluid">
        <header>
          <Header />
          <Items items={this.state.items} deleteitem={this.deleteitem} />
          <Additems Additems={this.Additems} />
        
        </header>
      </div>
    );
  }
}
export default App;
