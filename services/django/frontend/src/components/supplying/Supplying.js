import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSupplying, deleteSupplying } from '../../actions/supplying/supplying';

export class Supplying extends Component {
    static propTypes = {
        supplying: PropTypes.array.isRequired,
        getSupplying: PropTypes.func.isRequired,
        deleteSupplying: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getSupplying();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de Volumenes</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Volumen de entrada a la central de abastos [Ton] (Hasta 6am)</th>
                    <th>Volumen de salida de la central de abastos ( 6AM)[Ton]</th>
                    <th>Volumen de salida de la central de abastos ( 1 PM)[Ton]</th>
                    <th>Volumen acopiado en la central de abastos [Ton]</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.supplying.map(supplying => (
                    <tr key={supplying.id}>
                        <td>{supplying.id}</td>
                        <td>{supplying.entry}</td>
                        <td>{supplying.first_out}</td>
                        <td>{supplying.second_out}</td>
                        <td>{supplying.collected}</td>
                        <td>{supplying.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteSupplying.bind(this, supplying.id)}
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
    supplying: state.supplying.supplying
});

export default connect(mapStateToProps, 
    { getSupplying, deleteSupplying }
    )(Supplying);
