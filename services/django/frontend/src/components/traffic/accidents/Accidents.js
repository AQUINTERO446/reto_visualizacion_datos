import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAccidents, deleteAccidents } from '../../../actions/traffic/accidents';

export class Accidents extends Component {
    static propTypes = {
        accidents: PropTypes.array.isRequired,
        getAccidents: PropTypes.func.isRequired,
        deleteAccidents: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getAccidents();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de Accidentes</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Número de accidentes de transito</th>
                    <th>Número de accidentes en moto</th>
                    <th>Número de accidentes en carro</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.accidents.map(accidents => (
                    <tr key={accidents.id}>
                        <td>{accidents.id}</td>
                        <td>{accidents.transit}</td>
                        <td>{accidents.motorcycle}</td>
                        <td>{accidents.car}</td>
                        <td>{accidents.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteAccidents.bind(this, accidents.id)}
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
    accidents: state.accidents.accidents
});

export default connect(mapStateToProps, 
    { getAccidents, deleteAccidents }
    )(Accidents);
