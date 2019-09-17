import validador from 'validator';

class FormValidator {

    constructor(validacoes) {

        // validacoes é um array específico do formulário com regras de validação
        this.validacoes = validacoes;
    }

    valida(state) {

        //itera pelo array de regras de validação e constrói
        //um objeto validacao e retorna-o

        //começa assumindo que está tudo válido
        let validacao = this.valido();
        // console.log('-----')
        // console.log(validacao)
        this.validacoes.forEach(regra => {
            
            //Se o campo não tiver sido marcado anteriormente como invalido por uma regra.
            // console.log(validacao[regra.campo].isInvalid)
            if (!validacao[regra.campo].isInvalid) {
                //Determina o valor do campo, o método a ser invocado
                //e os argumentos opcionais pela definição da regra
                const campoValor = state[regra.campo.toString()];
                const args = regra.args || [];
                const metodoValidacao = typeof regra.metodo === 'string' ?
                    validador[regra.metodo] : regra.metodo;

                    // só entra aqui se o valor for invalido do esperado
                if (metodoValidacao(campoValor, ...args, state) !== regra.validoQuando) {
                    validacao[regra.campo] = { 
                        isInvalid: true, 
                        message: regra.mensagem 
                    };
                    validacao.isValid = false;
                    // console.log('entre')
                }
            }


        });
        return validacao;
    }
    //cria um objeto validaçao para um form válido
    valido() {
        const validacao = {};

        this.validacoes.map(regra => (
            validacao[regra.campo] = { isInvalid: false, message: '' }
        ));
        // console.log( { isValid: true, ...validacao }); 
        return { isValid: true, ...validacao };

    }

}
export default FormValidator;