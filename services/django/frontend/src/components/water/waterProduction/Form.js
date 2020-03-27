import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addWaterProduction } from '../../../actions/water/waterProduction'

export class Form extends Component {
    state = {
        location: '',
        plant_capacity: '',
        flow_treated: '',
        flow_delivered: '',
        daily_production: '',
        consumption_per_capita: '',
        created_at: ''
    }

    static propTypes = {
        addWaterProduction: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { location, plant_capacity, flow_treated, flow_delivered, daily_production, consumption_per_capita, created_at } = this.state;
        const waterProduction = { location, plant_capacity, flow_treated, flow_delivered, daily_production, consumption_per_capita, created_at };
        this.props.addWaterProduction(waterProduction);
        this.setState({
            location: '',
            plant_capacity: '',
            flow_treated: '',
            flow_delivered: '',
            daily_production: '',
            consumption_per_capita: '',
            created_at: ''
        });
      };

    render() {
        const { location, plant_capacity, flow_treated, flow_delivered, daily_production, consumption_per_capita, created_at } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Indice de Producción de agua</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Localización</label>
                    <select className="browser-default custom-select"
                    name="location"
                    onChange={this.onChange}
                    value={location}>
                        <option value="FLO">Floridablanca</option>
                        <option value="BOS">Bosconia</option>
                        <option value="MOR">Morrorico</option>
                        <option value="LFL">La Flora</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Capacidad de la planta [lps]</label>
                    <input
                    className="form-control"
                    type="number"
                    name="plant_capacity"
                    onChange={this.onChange}
                    value={plant_capacity}
                    />
                </div>
                <div className="form-group">
                    <label>Caudal tratado [lps]</label>
                    <input
                    className="form-control"
                    type="number"
                    name="flow_treated"
                    onChange={this.onChange}
                    value={flow_treated}
                    />
                </div>
                <div className="form-group">
                    <label>Caudal suministrado [lps]</label>
                    <input
                    className="form-control"
                    type="number"
                    name="flow_delivered"
                    onChange={this.onChange}
                    value={flow_delivered}
                    />
                </div>
                <div className="form-group">
                    <label>Producción díaria [ m3]</label>
                    <input
                    className="form-control"
                    type="number"
                    name="daily_production"
                    onChange={this.onChange}
                    value={daily_production}
                    />
                </div>
                <div className="form-group">
                    <label>Color (Unidades de Pt-Co)</label>
                    <input
                    className="form-control"
                    type="number"
                    name="consumption_per_capita"
                    onChange={this.onChange}
                    value={consumption_per_capita}
                    />
                </div>
                <div className="form-group">
                    <label>Fecha</label>
                    <input
                    className="form-control"
                    type="date"
                    name="created_at"
                    onChange={this.onChange}
                    value={created_at}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                    Submit
                    </button>
                </div>
                </form>
            </div>
    
        )
    }
}

export default connect(null, { addWaterProduction })(Form);
