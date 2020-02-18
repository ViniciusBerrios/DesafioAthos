import React, {Component} from 'react';

export default class ListaAdm extends Component{
    constructor(){
        super();

        this.state={
            listaUsuarios:[]
        };
    }

    buscarUsuarios(){
        fetch('https://api.backendless.com/5B47E127-88D3-2562-FF22-589138DA6B00/AB3D4F84-00B8-4787-FF90-0527E5132500/data/usuario',{
            headers: {
                'Authorization' : 'Bearer'
            }
            })
            .then(resposta => resposta.json())
            .then(data => this.setState({listaUsuarios : data}))
            .catch(erro => console.log(erro))
    }

    componentDidMount(){
        this.buscarUsuarios();
    }

    render(){
        return(
            <div>
                
                <div>
                    <table>
                        <tbody>
                            {
                                this.state.listaUsuarios.map(function(usuario){
                                    return(
                                        <tr key={usuario.id}>
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

            </div>
        )
    }
}