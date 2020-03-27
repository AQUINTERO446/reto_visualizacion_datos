import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addAccidents } from '../../../actions/traffic/accidents';

export class Form extends Component {
    state = {
        transit: '',
        motorcycle: '',
        car: '',
        created_at: ''
    }

    static propTypes = {
        addAccidents: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { transit, created_at, motorcycle, car } = this.state;
        const accidents = { transit, created_at, motorcycle, car };
        this.props.addAccidents(accidents);
        this.setState({
            transit: '',
            motorcycle: '',
            car: '',
            created_at: ''
        });
      };

    render() {
        const { transit, created_at, motorcycle, car } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Indice de Accidentes</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Número de accidentes de transito</label>
                    <input
                    className="form-control"
                    type="number"
                    name="transit"
                    onChange={this.onChange}
                    value={transit}
                    />
                </div>
                <div className="form-group">
                    <label>Número de accidentes en moto</label>
                    <input
                    className="form-control"
                    type="number"
                    name="motorcycle"
                    onChange={this.onChange}
                    value={motorcycle}
                    />
                </div>
                <div className="form-group">
                    <label>Número de accidentes en carro</label>
                    <input
                    className="form-control"
                    type="number"
                    name="car"
                    onChange={this.onChange}
                    value={car}
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

export default connect(null, { addAccidents })(Form);
