import React, {Component} from 'react';

export default class ListaAdm extends Component{
    constructor(){
        super();

        this.state={
            listaCondominio:[],
        };
    }

    buscarCondominios(){
        fetch('https://api.backendless.com/5B47E127-88D3-2562-FF22-589138DA6B00/AB3D4F84-00B8-4787-FF90-0527E5132500/data/condominio',{
            headers: {
                'Authorization' : 'Bearer'
            }
            })
            .then(resposta => resposta.json())
            .then(data => this.setState({listaCondominio : data}))
            .catch(erro => console.log(erro))
    }

    componentDidMount(){
        this.buscarCondominios(); 
    }

    render(){
        return(
            <div>
                
                <div>
                    <table>
                        <tbody>
                            {
                                this.state.listaCondominio.map(function(condominio){
                                    return(
                                        <tr key={condominio.id}>
                                            <td>{condominio.nomeCondominio}</td>
                                            <td>{condominio.administradora.nomeAdministradora}</td>
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