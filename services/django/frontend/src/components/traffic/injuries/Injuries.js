import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInjuries, deleteInjuries } from '../../../actions/traffic/injuries';

export class Injuries extends Component {
    static propTypes = {
        injuries: PropTypes.array.isRequired,
        getInjuries: PropTypes.func.isRequired,
        deleteInjuries: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getInjuries();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de Lesiones</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Lesionados en accidentes de transito</th>
                    <th>Lesionados en moto</th>
                    <th>Lesionados en carro</th>
                    <th>Lesionados peatones</th>
                    <th>Lesionados ciclistas ( bici-usuarios)</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.injuries.map(injuries => (
                    <tr key={injuries.id}>
                        <td>{injuries.id}</td>
                        <td>{injuries.transit}</td>
                        <td>{injuries.motorcycle}</td>
                        <td>{injuries.car}</td>
                        <td>{injuries.pedestrians}</td>
                        <td>{injuries.bicyclist}</td>
                        <td>{injuries.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteInjuries.bind(this, injuries.id)}
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
    injuries: state.injuries.injuries
});

export default connect(mapStateToProps, 
    { getInjuries, deleteInjuries }
    )(Injuries);
