import React, { } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Product extends React.Component {
    render() {

        let rows = [];

			this.props.products.forEach((product) =>{
				if(product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
					return;
                }
				rows.push(product);
			});	

        return (
			<TableContainer component={Paper} style={{ width: '100%'}}>
				<Table>
					<TableHead>
						<TableRow style={{ color: 'red'}}>
						<TableCell><b>Nombre</b></TableCell>
						<TableCell align="right"><b>Precio</b></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map(produ => (
						<TableRow key={rows.name} >
							<TableCell component="th" scope="row">
							{produ.stocked ? produ.name : <span style={{color:'red'}}>{produ.name}</span>}
							</TableCell>
							<TableCell align="right">{produ.price}</TableCell>
						</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
        );
    }
}

export default Product;