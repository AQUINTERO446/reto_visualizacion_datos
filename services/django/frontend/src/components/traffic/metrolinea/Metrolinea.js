import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMetrolinea, deleteMetrolinea } from '../../../actions/traffic/metrolinea';

export class Metrolinea extends Component {
    static propTypes = {
        metrolinea: PropTypes.array.isRequired,
        getMetrolinea: PropTypes.func.isRequired,
        deleteMetrolinea: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getMetrolinea();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de Metrolinea</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Número de pasajeros en metrolinea</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.metrolinea.map(metrolinea => (
                    <tr key={metrolinea.id}>
                        <td>{metrolinea.id}</td>
                        <td>{metrolinea.passengers}</td>
                        <td>{metrolinea.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteMetrolinea.bind(this, metrolinea.id)}
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
    metrolinea: state.metrolinea.metrolinea
});

export default connect(mapStateToProps, 
    { getMetrolinea, deleteMetrolinea }
    )(Metrolinea);
