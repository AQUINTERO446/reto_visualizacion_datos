import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTargetVolumes } from '../../../actions/targetVolumes'

export class Form extends Component {
    state = {
        atlatinco: '',
        guajira: '',
        bolivar: '',
        cesar: '',
        magdalena: '',
        norte_santander: '',
        magdalena_medio: '',
        nororiente_antioqueño: '',
        provincia_guanentina: '',
        created_at: ''
    }

    static propTypes = {
        addTargetVolumes: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]: e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { atlatinco, guajira, bolivar, cesar, magdalena, norte_santander, magdalena_medio, nororiente_antioqueño, provincia_guanentina, created_at } = this.state;
        const targetVolumes = { atlatinco, guajira, bolivar, cesar, magdalena, norte_santander, magdalena_medio, nororiente_antioqueño, provincia_guanentina, created_at };
        this.props.addTargetVolumes(targetVolumes);
        this.setState({
            atlatinco: '',
            guajira: '',
            bolivar: '',
            cesar: '',
            magdalena: '',
            norte_santander: '',
            magdalena_medio: '',
            nororiente_antioqueño: '',
            provincia_guanentina: '',
            created_at: ''
        });
      };

    render() {
        const { atlatinco, guajira, bolivar, cesar, magdalena, norte_santander, magdalena_medio, nororiente_antioqueño, provincia_guanentina, created_at } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Agregar Indice de Volumenes de destino</h2>
                <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Departamento del Atlantico</label>
                    <input
                    className="form-control"
                    type="number"
                    name="atlatinco"
                    onChange={this.onChange}
                    value={atlatinco}
                    />
                </div>
                <div className="form-group">
                    <label>Departamento de la Guajira</label>
                    <input
                    className="form-control"
                    type="number"
                    name="guajira"
                    onChange={this.onChange}
                    value={guajira}
                    />
                </div>
                <div className="form-group">
                    <label>Departamento de Bolivar</label>
                    <input
                    className="form-control"
                    type="number"
                    name="bolivar"
                    onChange={this.onChange}
                    value={bolivar}
                    />
                </div>
                <div className="form-group">
                    <label>Departamento del Cesar</label>
                    <input
                    className="form-control"
                    type="number"
                    name="cesar"
                    onChange={this.onChange}
                    value={cesar}
                    />
                </div>
                <div className="form-group">
                    <label>Departamento de Magdalena</label>
                    <input
                    className="form-control"
                    type="number"
                    name="magdalena"
                    onChange={this.onChange}
                    value={magdalena}
                    />
                </div>
                <div className="form-group">
                    <label>Departamento de Norte de Santander</label>
                    <input
                    className="form-control"
                    type="number"
                    name="norte_santander"
                    onChange={this.onChange}
                    value={norte_santander}
                    />
                </div>
                <div className="form-group">
                    <label>Magdalena Medio (Barrancabermeja, Sabana de Torres, Puerto Wilches, San Vicente, Cimitarra</label>
                    <input
                    className="form-control"
                    type="number"
                    name="magdalena_medio"
                    onChange={this.onChange}
                    value={magdalena_medio}
                    />
                </div>
                <div className="form-group">
                    <label>Nororiente antioqueño</label>
                    <input
                    className="form-control"
                    type="number"
                    name="nororiente_antioqueño"
                    onChange={this.onChange}
                    value={nororiente_antioqueño}
                    />
                </div>
                <div className="form-group">
                    <label>Provincia Guanentina</label>
                    <input
                    className="form-control"
                    type="number"
                    name="provincia_guanentina"
                    onChange={this.onChange}
                    value={provincia_guanentina}
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

export default connect(null, { addTargetVolumes })(Form);
