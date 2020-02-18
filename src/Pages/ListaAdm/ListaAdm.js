import React, {Component} from 'react';

export default class ListaAdm extends Component{
    constructor(){
        super();

        this.state={
            listaAdm:[]
        };
    }

    buscarAdms(){
        fetch('https://api.backendless.com/5B47E127-88D3-2562-FF22-589138DA6B00/AB3D4F84-00B8-4787-FF90-0527E5132500/data/administradora',{
            headers: {
                'Authorization' : 'Bearer'
            }
            })
            .then(resposta => resposta.json())
            .then(data => this.setState({listaAdm : data}))
            .catch(erro => console.log(erro))
    }

    componentDidMount(){
        this.buscarAdms();
    }

    render(){
        return(
            <div>
                
                <div>
                    <table>
                        <tbody>
                            {
                                this.state.listaAdm.map(function(adm){
                                    return(
                                        <tr key={adm.id}>
                                            <td>{adm.nomeAdministradora}</td>
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