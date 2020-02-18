import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ListaAdm from './Pages/ListaAdm/ListaAdm';
import CadastroEmail from './Pages/CadastroEmail/CadastroEmail';
import ListaCondominio from './Pages/ListaCondominio/ListaCondominio';
import ListaEmail from './Pages/ListaEmail/ListaEmail';
import ListaUsuario from './Pages/ListaUsuario/ListaUsuario';
import NaoEncontrada from './Pages/NaoEncontrada/NaoEncontrada';
import{Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const rotas = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={ListaAdm}/>
                <Route path="/listacondominio" component={ListaCondominio}/>
                <Route path="/listaemail" component={ListaEmail}/>
                <Route path="/listausuario" component={ListaUsuario}/>
                <Route path="/cadastroemail" component={CadastroEmail}/>
                <Route component={NaoEncontrada}/>
            </Switch>
        </div>
    </Router>
);

ReactDOM.render(rotas, document.getElementById('root'));
serviceWorker.unregister();