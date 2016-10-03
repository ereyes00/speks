
import React from 'react';
import products from './data.js';


var ProductPage = React.createClass({
	getInitialState(){
		return{
			products: products,
			heading:products[0][0].productName,
			picture: products[0][0].imgSrc[0],
			details: products[0][0].description,
			price: products[0][0].price
		}
	},

	render(){
		console.log(products)
		return(
			<div className="text-center">
				<div className='row'><h3 className='col-xs-12'>{this.state.heading}</h3></div>
				<div className='row'><img className='col-xs-12' src={this.state.picture} alt="#"/></div>
				<div className='row'>
					<div className='col-sm-7'><p><h5>Description</h5> {this.state.details}</p></div>						
					<div className='col-sm-5'><p><h5>Price </h5>
											{this.state.price}<br /><br /> 
											<button type="button" class="btn btn-default btn-lg">Add to cart</button>
											</p>
					</div>				
				</div>
			</div>
		)
	}
});

export default ProductPage;