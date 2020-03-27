import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSubpoena, deleteSubpoena } from '../../../actions/traffic/subpoena';

export class Subpoena extends Component {
    static propTypes = {
        subpoena: PropTypes.array.isRequired,
        getSubpoena: PropTypes.func.isRequired,
        deleteSubpoena: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getSubpoena();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de Comparendos</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Comparendos totales</th>
                    <th>Comparendos por Decretos COVID-19</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.subpoena.map(subpoena => (
                    <tr key={subpoena.id}>
                        <td>{subpoena.id}</td>
                        <td>{subpoena.total_subpoena}</td>
                        <td>{subpoena.covid_subpoena}</td>
                        <td>{subpoena.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteSubpoena.bind(this, subpoena.id)}
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
    subpoena: state.subpoena.subpoena
});

export default connect(mapStateToProps, 
    { getSubpoena, deleteSubpoena }
    )(Subpoena);
