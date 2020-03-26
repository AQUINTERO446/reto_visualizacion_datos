import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addCoexistence } from '../../../actions/coexistence'

export class Form extends Component {
    state = {
        contempts: '',
        establishments: '',
        underage: '',
        domestic_violence: '',
        created_at: ''
    }

    static propTypes = {
        addCoexistence: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { contempts, establishments, underage, domestic_violence, created_at } = this.state;
        const coexistence = { contempts, establishments, underage, domestic_violence, created_at };
        this.props.addCoexistence(coexistence);
        this.setState({
            contempts: '',
            establishments: '',
            underage: '',
            domestic_violence: '',
            created_at: ''
        });
      };

    render() {
        const { contempts, establishments, underage, domestic_violence, created_at } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Indice de Convivencia</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Número de Desacatos a decretos de COVID-19</label>
                    <input
                    className="form-control"
                    type="number"
                    name="contempts"
                    onChange={this.onChange}
                    value={contempts}
                    />
                </div>
                <div className="form-group">
                    <label>Establecimientos que incumplan decretos de COVID-19</label>
                    <input
                    className="form-control"
                    type="number"
                    name="establishments"
                    onChange={this.onChange}
                    value={establishments}
                    />
                </div>
                <div className="form-group">
                    <label>Menores de edad que incumplan decretos COVID-19</label>
                    <input
                    className="form-control"
                    type="number"
                    name="underage"
                    onChange={this.onChange}
                    value={underage}
                    />
                </div>
                <div className="form-group">
                    <label>Casos de violencia intrafamiliar atendidos</label>
                    <input
                    className="form-control"
                    type="number"
                    name="domestic_violence"
                    onChange={this.onChange}
                    value={domestic_violence}
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

export default connect(null, { addCoexistence })(Form);
