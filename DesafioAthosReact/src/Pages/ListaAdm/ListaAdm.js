import React, { Component } from 'react';
import Topo from '../../components/Topo/topo'
import api from '../../services/api'
import '../../Assets/css/listaAdm.css'

export default class ListaAdm extends Component {
    constructor() {
        super();

        this.state = {
            listaAdm: []
        };
    }

    buscarAdms() {
        fetch(api + 'administradora', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaAdm: data }))
            .catch(erro => console.log(erro))
    }

    componentDidMount() {
        this.buscarAdms();
    }

    render() {
        return (
            <div>

                <Topo />

                <section className="ListaAdms">
                    <div className="dadosAdm">

                        <p>Administradores</p>

                        <table id="tabela">
                            <tbody>
                                {
                                    this.state.listaAdm.map((adm, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{adm.nomeAdministradora}</td>
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