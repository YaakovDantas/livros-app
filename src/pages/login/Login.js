import React, { Fragment, Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { changeSenha, changeEmail, cleanForm } from '../../pages/login/loginAction'
import { loginUser } from '../../utils/userAction'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Home extends Component {

    componentDidMount(){
        this.props.cleanForm()
    }
    componentDidUpdate() {
       if(this.props.user){
           this.props.history.push('/')
       }
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <h2>Login into Livros-API</h2>
                    <form>
                        <div className="row">
                            <div className="input-field col s12">
                                <label className="input-field" htmlFor="email">Email</label>
                                <input
                                    className="validate"
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={this.props.email}
                                    onChange={this.props.changeEmail} 
                                     />
                            </div>

                            <div className="input-field col s12">
                                <label className="input-field col s4" htmlFor="password">Senha</label>
                                <input
                                    className="validate"
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={this.props.senha}
                                    onChange={this.props.changeSenha} />
                            </div>
                            <div className=" col s9">
                                <br />
                                <button onClick={()=>this.props.loginUser(this.props.email, this.props.senha)} className="btn waves-effect waves-light indigo darken-2" type="button">Entrar
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
        user: state.user.data,
        email: state.login.email,
        senha: state.login.senha
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ loginUser, changeSenha, changeEmail, cleanForm }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
