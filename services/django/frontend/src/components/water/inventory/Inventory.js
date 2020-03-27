import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInventory, deleteInventory } from '../../../actions/water/inventory';

export class Inventory extends Component {
    static propTypes = {
        inventory: PropTypes.array.isRequired,
        getInventory: PropTypes.func.isRequired,
        deleteInventory: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getInventory();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de Inventario de insumos</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Localización</th>
                    <th>Coagultante disponible [ton] ( Sulfato)</th>
                    <th>Coagulante duración estimada inventario  [días] ( Sulfato )</th>
                    <th>Desinfectante disponible [ton] ( Cloro liquido)</th>
                    <th>Desinfectante  duración estimada inventario  [días] ( Sulfato)</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.inventory.map(inventory => (
                    <tr key={inventory.id}>
                        <td>{inventory.id}</td>
                        <td>{inventory.location}</td>
                        <td>{inventory.coagultant_available}</td>
                        <td>{inventory.coagulant_estimated_duration}</td>
                        <td>{inventory.disinfectant_available}</td>
                        <td>{inventory.disinfectan_estimated_duration}</td>
                        <td>{inventory.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteInventory.bind(this, inventory.id)}
                                className="btn btn-danger btn-sm">
                                    { " " }
                                    Eliminar
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    inventory: state.inventory.inventory
});

export default connect(mapStateToProps, 
    { getInventory, deleteInventory }
    )(Inventory);
