import React, { Component } from 'react';
import App from './App.css';

class Demo extends Component{
  constructor (props){
    super(props);

    this.state = { 
    	test : [] 
    }
  }
  componentWillMount(){
    console.log("Greeting componentWillMount");
    //debugger;
  }
  componentDidMount(){
    console.log("Greeting componentDidMount");  
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(json =>  {
      	this.setState({test : json})
      });
  }
  componentWillUnmount(){
    console.log("Greeting componentWillUnmount");
  }

  componentWillReceiveProps(){
    console.log("Greeting componentWillReceiveProps");
  }
  shouldComponentUpdate(){
    console.log("Greeting shouldComponentUpdate");
    return true;
  }
  componentWillUpdate(){
    console.log("Greeting componentWillUpdate");
  };
  componentDidUpdate(){
    console.log("Greeting componentDidUpdate");
  };
  render() {
    console.log ('printing '+ JSON.stringify(this.state.test));
    return (
      <div >
<table className="table">
<thead>
  <tr className="th">
    <th>AlbumId</th>
    <th>ID</th>
    <th>Title</th>
     <th>More View</th>  
     <th>Image</th> 
  </tr>   
 </thead>
   	<tbody >
      {
  	 this.state.test.map((test, index) =>
   	
   	<tr >
      <td >{test.albumId} </td> 
       <td >{test.id}</td> 
       <td >{test.title}</td> 
       <td ><a href={test.url}>More view</a></td> 
      <td ><img alt="profile_image" src = {test.thumbnailUrl}/></td> 
      </tr>
      )}
      </tbody>
      </table>  
      </div>
      );
   }
  
}
export default Demo;