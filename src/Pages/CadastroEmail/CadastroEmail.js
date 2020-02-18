import React, { Component } from 'react';
import Topo from '../../components/Topo/topo'
import api from '../../services/api'
import '../../Assets/css/cadastroEmail.css';

export default class CadastroEmail extends Component {
    constructor() {
        super();

        this.state = {
            de: '',
            para: '',
            assunto: '',
            conteudo: '',
            listaUsuarios: []
        }
    }

    buscarUsuarios() {
        fetch(api + 'usuario', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaUsuarios: data }))
            .catch(erro => console.log(erro))
    }

    componentDidMount() {
        this.buscarUsuarios();
    }

    cadastroEmail(event) {
        event.preventDefault();
        const { de, para, assunto, conteudo } = this.state;

        fetch(api + 'email', {
            method: 'PUT',
            body: JSON.stringify({
                de: de,
                para: para,
                assunto: assunto,
                conteudo: conteudo
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resposta => resposta)
            .then(data => {

                this.props.history.push('/listaEmail');
                console.log(data);
            })
            .catch(erro => console.log(erro))
    }

    render() {
        const { de, para, assunto, conteudo } = this.state
        return (
            <div>

                <Topo />

                <section className="cadastroEmail">
                    <div className="camposEmails">

                        <p>Cadastro de Email</p>
                        <form className="formEmail" onSubmit={this.cadastroEmail.bind(this)}>

                            <div>

                                <label className="tituloDe">De</label>

                                <select className="inputDe" value={de} onChange={e => this.setState({ de: e.target.value })}>

                                    <option value="">Selecione </option>
                                    {
                                        this.state.listaUsuarios.map((usuario, index) => {
                                            return (
                                                <option key={index} value={usuario.email}>{usuario.email}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>

                            <div>
                                <label className="tituloPara">Para</label>
                                <select className="inputPara" value={para} onChange={e => this.setState({ para: e.target.value })}>

                                    <option value="">Selecione </option>
                                    {
                                        this.state.listaUsuarios.map((usuario, index) => {
                                            return (
                                                <option key={index} value={usuario.email}>{usuario.email}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>

                            <div>
                                <label className="tituloAssunto">Assunto</label>
                                <input className="inputAssunto" type="text" value={assunto} onChange={e => this.setState({ assunto: e.target.value })} />
                            </div>

                            <div>
                                <label className="tituloConteudo">Conteúdo</label>
                                <input className="inputConteudo" type="text" value={conteudo} onChange={e => this.setState({ conteudo: e.target.value })} />
                            </div>

                            <div className="botao_enviar">
                                <button type="submit">Enviar</button>
                            </div>
                        </form>
                    </div>
                </section>

            </div>
        )
    }

}