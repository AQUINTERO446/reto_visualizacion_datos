import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCoexistence, deleteCoexistence } from '../../../actions/security/coexistence';

export class Coexistence extends Component {
    static propTypes = {
        coexistence: PropTypes.array.isRequired,
        getCoexistence: PropTypes.func.isRequired,
        deleteCoexistence: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getCoexistence();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de convivencia decretos COVID-19</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Número de Desacatos a decretos de COVID-19</th>
                    <th>Establecimientos que incumplan decretos de COVID-19</th>
                    <th>Menores de edad que incumplan decretos COVID-19</th>
                    <th>Casos de violencia intrafamiliar atendidos</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.coexistence.map(coexistence => (
                    <tr key={coexistence.id}>
                        <td>{coexistence.id}</td>
                        <td>{coexistence.contempts}</td>
                        <td>{coexistence.establishments}</td>
                        <td>{coexistence.underage}</td>
                        <td>{coexistence.domestic_violence}</td>
                        <td>{coexistence.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteCoexistence.bind(this, coexistence.id)}
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
    coexistence: state.coexistence.coexistence
});

export default connect(mapStateToProps, 
    { getCoexistence, deleteCoexistence }
    )(Coexistence);
