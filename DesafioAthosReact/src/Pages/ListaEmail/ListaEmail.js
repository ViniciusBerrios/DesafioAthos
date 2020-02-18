import React, { Component } from 'react';
import Topo from '../../components/Topo/topo'
import api from '../../services/api'
import '../../Assets/css/listaEmail.css'

export default class ListaAdm extends Component {
    constructor() {
        super();

        this.state = {
            listaEmails: [],
        };
    }

    buscarEmails() {
        fetch(api + 'email', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaEmails: data }))
            .catch(erro => console.log(erro))
    }

    componentDidMount() {
        this.buscarEmails();
    }

    render() {
        return (
            <div>

                <Topo />

                <section className="ListaEmails">
                    <div className="dadosEmail">

                        <p>Emails</p>

                        <table id="tabela">
                            <tbody>
                                {
                                    this.state.listaEmails.map((email, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{email.de}</td>
                                                <td>{email.para}</td>
                                                <td>{email.assunto}</td>
                                                <td>{email.conteudo}</td>
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