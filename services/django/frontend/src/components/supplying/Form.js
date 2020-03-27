import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addSupplying } from '../../actions/supplying/supplying'

export class Form extends Component {
    state = {
        entry: '',
        first_out: '',
        second_out: '',
        collected: '',
        created_at: ''
    }

    static propTypes = {
        addSupplying: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { entry, first_out, second_out, collected, created_at } = this.state;
        const supplying = { entry, first_out, second_out, collected, created_at };
        this.props.addSupplying(supplying);
        this.setState({
            entry: '',
            first_out: '',
            second_out: '',
            collected: '',
            created_at: ''
        });
      };

    render() {
        const { entry, first_out, second_out, collected, created_at } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Indicador de Volumenes</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Volumen de entrada a la central de abastos [Ton] (Hasta 6am)</label>
                    <input
                    className="form-control"
                    type="number"
                    name="entry"
                    onChange={this.onChange}
                    value={entry}
                    />
                </div>
                <div className="form-group">
                    <label>Volumen de salida de la central de abastos ( 6AM)[Ton]</label>
                    <input
                    className="form-control"
                    type="number"
                    name="first_out"
                    onChange={this.onChange}
                    value={first_out}
                    />
                </div>
                <div className="form-group">
                    <label>Volumen de salida de la central de abastos ( 1 PM)[Ton]</label>
                    <input
                    className="form-control"
                    type="number"
                    name="second_out"
                    onChange={this.onChange}
                    value={second_out}
                    />
                </div>
                <div className="form-group">
                    <label>Volumen acopiado en la central de abastos [Ton]</label>
                    <input
                    className="form-control"
                    type="number"
                    name="collected"
                    onChange={this.onChange}
                    value={collected}
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

export default connect(null, { addSupplying })(Form);
