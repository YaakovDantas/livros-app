import React, { Fragment, Component } from 'react'
import Header from '../../components/header/Header'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAuthor, changeNameForm, createAuthor,attAuthor } from './authorAction';
import FormValidator from '../../utils/formValidator';
import PopUp from '../../utils/popUp';

class AuthorForm extends Component {

    constructor(props) {
        super(props);
        this.validador = new FormValidator([
            {
                campo: 'name',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Insert a name'
            },
        ]);
        this.state = { name: this.props.name, hasID : false }
        

    }
    componentWillMount() {
        if (this.props.match.params.id) {
            this.props.getAuthor(this.props.match.params.id, this.props.user);
            this.setState({ hasID: true })

        }
    }
    UNSAFE_componentWillReceiveProps(nextProps) {
        this.setState({ name: nextProps.name });
        
    };

    submitAutor = () => {

        const validacao = this.validador.valida(this.state);
        // console.log('primeiro')
        // console.log(validacao)
        
        if (validacao.isValid) {
            this.state.hasID ? this.props.attAuthor(this.props.name, this.props.author.id, this.props.user) : this.props.createAuthor(this.props.name, this.props.user);
            // this.props.attAuthor(this.props.name, this.props.author.id, this.props.user) 
            
            this.props.history.push('/authors')
        } else {
            const { name, } = validacao;
            const campos = [name,];
            const camposInvalidos = campos.filter(elem => {
                return elem.isInvalid
            });
            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message);

            });
        }


    }
    render() {
        return (
            <Fragment>
                <Header />
                <div className="container">
                    <h1>Create new Author</h1>

                    <form>
                        <div className="row">
                            <div className="input-field col s3">
                                <label className="input-field" htmlFor="name">Name</label>
                                <input
                                    className="validate"
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={this.props.name}
                                    onChange={this.props.changeNameForm}
                                />
                            </div>

                            <div className=" col s3">
                                <br />
                                <button onClick={this.submitAutor} className="btn waves-effect waves-light indigo darken-2" type="button">Save
                        </button>

                            </div>
                        </div>

                    </form>

                </div>

            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.authorForm.name,
        author: state.author.author,
        user: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAuthor, changeNameForm, createAuthor, attAuthor }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorForm)


