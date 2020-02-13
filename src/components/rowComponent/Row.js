import React, { Component } from 'react';

export default class Row extends Component {
	render() {
		var name = this.props.product.stocked ? this.props.product.name : <span style={{color:'red'}}>{this.props.product.name}</span>;
        return(
				<tr>
					<td>{name}</td>
					<td>{this.props.product.price}</td>
				</tr>
			);
	}
}