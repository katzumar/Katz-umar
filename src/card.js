import './App.css';
import React, { Component } from 'react';
import logo from "../src/carrr.png" 




class Cards extends Component{
  render() {
    return(
         <div className="Q">
           <div>
           <div className="C">
                <div className="card">
                    <img src={logo} alt="KATZ UMAR" width="100%" className="L"></img>
                    <h1>Henseyii</h1>
                    <p className="price">$1983.38</p>
                    <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. </p>
                    <p><button>Add to Cart</button></p>
                    </div>
       <div className="nav">
              <p className="T">Some text about the jeans. Super slim and comfy lorem ipsum lorem j the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsunSome text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun</p>
       </div>
            </div>
           </div>
         </div>


    
    );
  }
}

export default Cards;
