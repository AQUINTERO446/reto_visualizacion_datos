import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWaterProduction, deleteWaterProduction } from '../../../actions/water/waterProduction';

export class WaterProduction extends Component {
    static propTypes = {
        waterProduction: PropTypes.array.isRequired,
        getWaterProduction: PropTypes.func.isRequired,
        deleteWaterProduction: PropTypes.func.isRequired,
    }

    componentDidMount(){
        this.props.getWaterProduction();
    }

    render() {
        return (
            <Fragment>
                <h2>Indicadores de Producción de agua</h2>
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Localización</th>
                    <th>Capacidad de la planta [lps]</th>
                    <th>Caudal tratado [lps]</th>
                    <th>Caudal suministrado [lps]</th>
                    <th>Producción díaria [ m3]</th>
                    <th>Fecha</th>
                    <th />
                    </tr>
                </thead>
                <tbody>
                    {this.props.waterProduction.map(waterProduction => (
                    <tr key={waterProduction.id}>
                        <td>{waterProduction.id}</td>
                        <td>{waterProduction.location}</td>
                        <td>{waterProduction.plant_capacity}</td>
                        <td>{waterProduction.flow_treated}</td>
                        <td>{waterProduction.flow_delivered}</td>
                        <td>{waterProduction.daily_production}</td>
                        <td>{waterProduction.consumption_per_capita}</td>
                        <td>{waterProduction.created_at}</td>
                        <td>
                            <button onClick={this.props.deleteWaterProduction.bind(this, waterProduction.id)}
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
    waterProduction: state.waterProduction.waterProduction
});

export default connect(mapStateToProps, 
    { getWaterProduction, deleteWaterProduction }
    )(WaterProduction);
