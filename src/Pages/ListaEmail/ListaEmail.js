import React, {Component} from 'react';

export default class ListaAdm extends Component{
    constructor(){
        super();

        this.state={
            listaEmails:[],
        };
    }

    buscarEmails(){
        fetch('https://api.backendless.com/5B47E127-88D3-2562-FF22-589138DA6B00/AB3D4F84-00B8-4787-FF90-0527E5132500/data/email',{
            headers: {
                'Authorization' : 'Bearer'
            }
            })
            .then(resposta => resposta.json())
            .then(data => this.setState({listaEmails : data}))
            .catch(erro => console.log(erro))
    }

    componentDidMount(){
        this.buscarEmails(); 
    }

    render(){
        return(
            <div>
                
                <div>
                    <table>
                        <tbody>
                            {
                                this.state.listaEmails.map(function(email){
                                    return(
                                        <tr key={email.id}>
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

               

            </div>
        )
    }
}