import React, { } from 'react';

import Row from '../rowComponent/Row';

//const prods = productos.productos;

class Product extends React.Component {
    render() {

        let rows = [];

			this.props.products.forEach((product) =>{
				if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
					return;
                }
                rows.push(<Row product = {product} key={product.name}/>);
			});	

        return (

            
            <table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
                        {rows}
					</tbody>
				</table>
        );
    }
}

export default Product;