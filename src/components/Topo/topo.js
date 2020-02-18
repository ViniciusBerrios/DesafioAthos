import React from 'react';
import '../../Assets/css/topo.css';
import logo from '../../Assets/img/logoAthosTI.png'

function topo(){
    return(
        <div>

            <header className="top">
                <div className="banner">
                    <div className="logo">
                        <img src={logo} alt="logo Athos"></img>
                    </div>

                <nav>
                    <ul className="menu">
                        <li><a href="#">Menu</a>
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/listaadministrador">Administradores</a></li>
                      <li><a href="/listacondominio">Condomínios</a></li>
                      <li><a href="/listausuario">Usuários</a></li>
                      <li><a href="/listaemail">E-mails</a></li>  
                      <li><a href="/cadastroemail">Envio de email</a></li>                    
                    </ul>
                        </li>              
                    </ul>
                </nav>
                </div>
            </header>

        </div>
    )
}

export default topo;