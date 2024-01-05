const validarNome = (nome) => {
    //Valida que o nome seja maior do que 2
    return nome?.toString().length > 2;
    //'to string' vai converter para String
}

const validarEmail = (email) => {
    const emailStr = email?.toString();   //Converte para String
    return emailStr.length >= 5 && emailStr.includes('@') && emailStr.includes('.'); //Verifica se te 5 caracteres, se tem @ e se tem . (ponto)
}

const validarSenha = (senha) => {
    return senha?.toString().length >= 6; //Precia ter mais de 6 caracteres 
}

const validarConfirmacaoSenha = (senha, confirmacao) => {
    return validarSenha(senha) && senha === confirmacao;
}

export {
    validarNome,
    validarEmail,
    validarSenha,
    validarConfirmacaoSenha
}