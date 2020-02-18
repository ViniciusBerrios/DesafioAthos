import React, { Component } from 'react';
import Topo from '../../components/Topo/topo'
import api from '../../services/api'
import '../../Assets/css/listaUsuario.css'

export default class ListaAdm extends Component {
    constructor() {
        super();

        this.state = {
            listaUsuarios: []
        };
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

    render() {
        return (
            <div>

                <Topo />

                <section className="ListaUsuarios">
                    <div className="dadosUsuario">

                        <p>Usuários</p>

                        <table id="tabela">
                            <tbody>
                                {
                                    this.state.listaUsuarios.map((usuario, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{usuario.email}</td>
                                                <td>{usuario.nome}</td>
                                                <td>{usuario.condominio.nomeCondominio}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </section>

            </div>
        )
    }
}