import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addWaterSources } from '../../../actions/water/waterSources'

export class Form extends Component {
    state = {
        location: '',
        flow: '',
        turbidity: '',
        color: '',
        created_at: ''
    }

    static propTypes = {
        addWaterSources: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { location, flow, turbidity, color, created_at } = this.state;
        const waterSources = { location, flow, turbidity, color, created_at };
        this.props.addWaterSources(waterSources);
        this.setState({
            location: '',
            flow: '',
            turbidity: '',
            color: '',
            created_at: ''
        });
      };

    render() {
        const { location, flow, turbidity, color, created_at } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Indice de Fuentes de agua (cruda)</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Localización</label>
                    <select className="browser-default custom-select"
                    name="location"
                    onChange={this.onChange}
                    value={location}>
                        <option value="TON">Tona</option>
                        <option value="RFR">Rio Frío</option>
                        <option value="SUR">Suratá</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Caudal [m3/s]</label>
                    <input
                    className="form-control"
                    type="number"
                    name="flow"
                    onChange={this.onChange}
                    value={flow}
                    />
                </div>
                <div className="form-group">
                    <label>Turbiedad [Ntu]</label>
                    <input
                    className="form-control"
                    type="number"
                    name="turbidity"
                    onChange={this.onChange}
                    value={turbidity}
                    />
                </div>
                <div className="form-group">
                    <label>Color (Unidades de Pt-Co)</label>
                    <input
                    className="form-control"
                    type="number"
                    name="color"
                    onChange={this.onChange}
                    value={color}
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

export default connect(null, { addWaterSources })(Form);
