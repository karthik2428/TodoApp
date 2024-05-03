import React, { Component } from 'react'

export default class Todo extends Component {
  state={
    input:"",
    items:[]
  }
  handleChange=(event)=>{
    this.setState({
      input:event.target.value
    })
    }

    storeItems=(event)=>{
      event.preventDefault();
      const { input } = this.state;
      

      this.setState({
        items:[...this.state.items,input],
        input:""
      }) 


    }
    
    deleteItem=(key)=>{
      /*const allItems= this.state.items;
      allItems.splice(key,1);
      this.setState({
        items:allItems
      })*/
      this.setState({
        items:this.state.items.filter((data,index)=>index !==key)
      })
    }

  
  render() {
    
    const { input,items } =this.state;
    console.log(items)
  return (
     
      <div className='todo-container'>
        
        <form className='inputBox' onSubmit={this.storeItems}>
        
        <h1>Todo App</h1>
          <input type="text" value={input} placeholder='Enter Items' onChange={this.handleChange}  className='inputSection' />
          

        </form>
        <ul>
        {items.map((data,index)=>{
          return(
      <li key={index}>{data}
      
      
       <i onClick={()=>this.deleteItem(index)} className="fa-solid fa-trash"></i></li>

        )}
        )}
          
          
        </ul>

      </div>
    )
  }
}
