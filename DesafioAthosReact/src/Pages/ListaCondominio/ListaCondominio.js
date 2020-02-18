import React, { Component } from 'react';
import Topo from '../../components/Topo/topo'
import api from '../../services/api'
import '../../Assets/css/listaCondominio.css'

export default class ListaAdm extends Component {
    constructor() {
        super();

        this.state = {
            listaCondominio: [],
        };
    }

    buscarCondominios() {
        fetch(api + 'condominio', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(resposta => resposta.json())
            .then(data => this.setState({ listaCondominio: data }))
            .catch(erro => console.log(erro))
    }

    componentDidMount() {
        this.buscarCondominios();
    }

    render() {
        return (
            <div>

                <Topo />

                <section className="ListaCondominios">
                    <div className="dadosCondominio">

                        <p>Condomínios</p>

                        <table id="tabela">
                            <tbody>
                                {
                                    this.state.listaCondominio.map((condominio, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{condominio.nomeCondominio}</td>
                                                <td>{condominio.administradora.nomeAdministradora}</td>
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