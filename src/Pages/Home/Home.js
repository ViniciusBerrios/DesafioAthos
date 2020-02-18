import React, { Component } from 'react';
import Topo from '../../components/Topo/topo'
import fundo from '../../Assets/img/fundo.jpg';
import '../../Assets/css/home.css'

export default class ListaAdm extends Component {

    render() {
        return (
            <div>

                <Topo />

                <section className="HomeVini">
                    <div className="perfil">
                        <img src={fundo} alt="fundo desafio"></img>
                        <h1>Vinícius Desafio Athos</h1>
                        <p>Acesse o menu</p>
                    </div>
                </section>
            </div>
        )
    }
}