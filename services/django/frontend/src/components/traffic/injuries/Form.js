import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addInjuries } from '../../../actions/traffic/injuries';

export class Form extends Component {
    state = {
        transit: '',
        motorcycle: '',
        car: '',
        pedestrians: '',
        bicyclist: '',
        created_at: ''
    }

    static propTypes = {
        addInjuries: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { transit, created_at, motorcycle, car, pedestrians, bicyclist } = this.state;
        const injuries = { transit, created_at, motorcycle, car, pedestrians, bicyclist };
        this.props.addInjuries(injuries);
        this.setState({
            transit: '',
            motorcycle: '',
            car: '',
            pedestrians: '',
            bicyclist: '',
            created_at: ''
        });
      };

    render() {
        const { transit, created_at, motorcycle, car, pedestrians, bicyclist } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Indice de Lesiones</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Lesionados en accidentes de transito</label>
                    <input
                    className="form-control"
                    type="number"
                    name="transit"
                    onChange={this.onChange}
                    value={transit}
                    />
                </div>
                <div className="form-group">
                    <label>Lesionados en moto</label>
                    <input
                    className="form-control"
                    type="number"
                    name="motorcycle"
                    onChange={this.onChange}
                    value={motorcycle}
                    />
                </div>
                <div className="form-group">
                    <label>Lesionados en carro</label>
                    <input
                    className="form-control"
                    type="number"
                    name="car"
                    onChange={this.onChange}
                    value={car}
                    />
                </div>
                <div className="form-group">
                    <label>Lesionados peatones</label>
                    <input
                    className="form-control"
                    type="number"
                    name="pedestrians"
                    onChange={this.onChange}
                    value={pedestrians}
                    />
                </div>
                <div className="form-group">
                    <label>Lesionados ciclistas ( bici-usuarios)</label>
                    <input
                    className="form-control"
                    type="number"
                    name="bicyclist"
                    onChange={this.onChange}
                    value={bicyclist}
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

export default connect(null, { addInjuries })(Form);
