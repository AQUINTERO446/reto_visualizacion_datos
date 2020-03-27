import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getReinstallationWaterService, deleteReinstallationWaterService } from '../../../actions/water/reinstallationWaterService';

export class ReinstallationWaterService extends Component {
    static propTypes = {
        reinstallationWaterService: PropTypes.array.isRequired,
        getReinstallationWaterService: PropTypes.func.isRequired,
        deleteReinstallationWaterService: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getReinstallationWaterService();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de Reinstalación y reconexión del servicio de agua potable</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Hogares totales con desconexión</th>
                    <th>Hogares con reinstalaciones pendientes</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.reinstallationWaterService.map(reinstallationWaterService => (
                    <tr key={reinstallationWaterService.id}>
                        <td>{reinstallationWaterService.id}</td>
                        <td>{reinstallationWaterService.disconnection}</td>
                        <td>{reinstallationWaterService.pending}</td>
                        <td>{reinstallationWaterService.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteReinstallationWaterService.bind(this, reinstallationWaterService.id)}
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
    reinstallationWaterService: state.reinstallationWaterService.reinstallationWaterService
});

export default connect(mapStateToProps, 
    { getReinstallationWaterService, deleteReinstallationWaterService }
    )(ReinstallationWaterService);
