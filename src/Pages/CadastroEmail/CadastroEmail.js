import React, {Component} from 'react';

export default class CadastroEmail extends Component{
    constructor(){
        super();

        this.state={
            id:'',
            de:'',
            para:'',
            assunto:'',
            conteudo:''
        }
        this.atualizaEstadoDeForm = this.atualizaEstadoDe.bind(this);
        this.atualizaEstadoParaForm = this.atualizaEstadoPara.bind(this);
        this.atualizaEstadoAssuntoForm = this.atualizaEstadoAssunto.bind(this);
        this.atualizaEstadoConteudoForm = this.atualizaEstadoConteudo.bind(this);
    }

    atualizaEstadoDe(event){
        this.setState({ de : event.target.value})
    }

    atualizaEstadoPara(event){
        this.setState({ para : event.target.value})
    }

    atualizaEstadoAssunto(event){
        this.setState({ assunto : event.target.value})
    }

    atualizaEstadoConteudo(event){
        this.setState({ conteudo : event.target.value})
    }

    cadastroEmail(event){
        event.preventDefault();

        fetch('https://api.backendless.com/5B47E127-88D3-2562-FF22-589138DA6B00/AB3D4F84-00B8-4787-FF90-0527E5132500/data/email'+ this.state.id,{
        method:'PUT',
        body: JSON.stringify({
            id: this.state.id,
            de:this.state.de,
            para:this.state.para,
            assunto:this.state.assunto,
            conteudo:this.state.conteudo
        }),
        headers:{
            'Authorization': 'Bearer ',
            'Content-Type' : 'application/json'
        }
    })
    .then(response => response)
        .then(data => {
            this.setState({ id: '' })
            this.props.history.push('/listaEmail');
            console.log(data);
        })
        .catch(erro => console.log(erro))
    }

    buscarPorId(event, data) {
        event.preventDefault();

        fetch('https://api.backendless.com/5B47E127-88D3-2562-FF22-589138DA6B00/AB3D4F84-00B8-4787-FF90-0527E5132500/data/email' + event.target.getAttribute('id'), {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => this.setState({
                id: data.id,
                de:data.de,
                para:data.para,
                assunto:data.assunto,
                conteudo:data.conteudo
            }))
            .catch(erro => console.log(erro))
    }

    render(){
        return(
            <div>
                <div>
                    <form onSubmit={this.cadastroEmail.bind(this)}>
                        <div>
                            <label>De</label>
                            <input type="text" value={this.state.de} onChange={this.atualizaEstadoDeForm}/>
                        </div>

                        <div>
                            <label>Para</label>
                            <input type="text" value={this.state.para} onChange={this.atualizaEstadoParaForm}/>
                        </div>

                        <div>
                            <label>Assunto</label>
                            <input type="text" value={this.state.assunto} onChange={this.atualizaEstadoAssuntoForm}/>
                        </div>

                        <div>
                            <label>Conteúdo</label>
                            <input type="text" value={this.state.conteudo} onChange={this.atualizaEstadoConteudoForm}/>
                        </div>

                        <div className="botao_enviar">
                            <button type="submit">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}