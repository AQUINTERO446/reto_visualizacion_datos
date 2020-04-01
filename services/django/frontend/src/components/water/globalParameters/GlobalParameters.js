import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGlobalParameters, deleteGlobalParameters } from '../../../actions/water/globalParameters';

export class GlobalParameters extends Component {
    static propTypes = {
        globalParameters: PropTypes.array.isRequired,
        getGlobalParameters: PropTypes.func.isRequired,
        deleteGlobalParameters: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getGlobalParameters();
    }

    render() {
        return (
            <Fragment>
                <h2>Parametros Globales</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Consumo per capita</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.globalParameters.map(globalParameters => (
                    <tr key={globalParameters.id}>
                        <td>{globalParameters.id}</td>
                        <td>{globalParameters.consumption_per_capita}</td>
                        <td>{globalParameters.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteGlobalParameters.bind(this, globalParameters.id)}
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
    globalParameters: state.globalParameters.globalParameters
});

export default connect(mapStateToProps, 
    { getGlobalParameters, deleteGlobalParameters }
    )(GlobalParameters);
