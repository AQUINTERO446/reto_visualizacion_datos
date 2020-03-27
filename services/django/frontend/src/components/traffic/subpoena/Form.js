import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSubpoena } from '../../../actions/traffic/subpoena';

export class Form extends Component {
    state = {
        total_subpoena: '',
        covid_subpoena: '',
        created_at: ''
    }

    static propTypes = {
        addSubpoena: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { total_subpoena, created_at, covid_subpoena } = this.state;
        const subpoena = { total_subpoena, created_at, covid_subpoena };
        this.props.addSubpoena(subpoena);
        this.setState({
            total_subpoena: '',
            covid_subpoena: '',
            created_at: ''
        });
      };

    render() {
        const { total_subpoena, created_at, covid_subpoena } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Indice de Comparendos</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Comparendos totales</label>
                    <input
                    className="form-control"
                    type="number"
                    name="total_subpoena"
                    onChange={this.onChange}
                    value={total_subpoena}
                    />
                </div>
                <div className="form-group">
                    <label>Comparendos por Decretos COVID-19</label>
                    <input
                    className="form-control"
                    type="number"
                    name="covid_subpoena"
                    onChange={this.onChange}
                    value={covid_subpoena}
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

export default connect(null, { addSubpoena })(Form);
