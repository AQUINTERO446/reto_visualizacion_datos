import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDeaths, deleteDeaths } from '../../../actions/traffic/deaths';

export class Deaths extends Component {
    static propTypes = {
        deaths: PropTypes.array.isRequired,
        getDeaths: PropTypes.func.isRequired,
        deleteDeaths: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getDeaths();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de Muertes</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Número de muertes en accidentes de transito</th>
                    <th>Número de muertes en moto</th>
                    <th>Número de muertes en carro</th>
                    <th>Muertes de peatones</th>
                    <th>Muertes de ciclistas ( bici-usuarios)</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.deaths.map(deaths => (
                    <tr key={deaths.id}>
                        <td>{deaths.id}</td>
                        <td>{deaths.transit}</td>
                        <td>{deaths.motorcycle}</td>
                        <td>{deaths.car}</td>
                        <td>{deaths.pedestrians}</td>
                        <td>{deaths.bicyclist}</td>
                        <td>{deaths.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteDeaths.bind(this, deaths.id)}
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
    deaths: state.deaths.deaths
});

export default connect(mapStateToProps, 
    { getDeaths, deleteDeaths }
    )(Deaths);
