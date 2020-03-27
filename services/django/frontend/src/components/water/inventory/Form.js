import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addInventory } from '../../../actions/water/inventory'

export class Form extends Component {
    state = {
        location: '',
        coagultant_available: '',
        coagulant_estimated_duration: '',
        disinfectant_available: '',
        disinfectan_estimated_duration: '',
        created_at: ''
    }

    static propTypes = {
        addInventory: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { location, coagultant_available, coagulant_estimated_duration, disinfectant_available, disinfectan_estimated_duration, created_at } = this.state;
        const inventory = { location, coagultant_available, coagulant_estimated_duration, disinfectant_available, disinfectan_estimated_duration, created_at };
        this.props.addInventory(inventory);
        this.setState({
            location: '',
            coagultant_available: '',
            coagulant_estimated_duration: '',
            disinfectant_available: '',
            disinfectan_estimated_duration: '',
            created_at: ''
        });
      };

    render() {
        const { location, coagultant_available, coagulant_estimated_duration, disinfectant_available, disinfectan_estimated_duration, created_at } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Indice de Inventario de insumos</h2>
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
                    <label>Coagultante disponible [ton] ( Sulfato)</label>
                    <input
                    className="form-control"
                    type="number"
                    name="coagultant_available"
                    onChange={this.onChange}
                    value={coagultant_available}
                    />
                </div>
                <div className="form-group">
                    <label>Coagulante duración estimada inventario  [días] ( Sulfato )</label>
                    <input
                    className="form-control"
                    type="number"
                    name="coagulant_estimated_duration"
                    onChange={this.onChange}
                    value={coagulant_estimated_duration}
                    />
                </div>
                <div className="form-group">
                    <label>Desinfectante  duración estimada inventario  [días] ( Sulfato)</label>
                    <input
                    className="form-control"
                    type="number"
                    name="disinfectant_available"
                    onChange={this.onChange}
                    value={disinfectant_available}
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

export default connect(null, { addInventory })(Form);
