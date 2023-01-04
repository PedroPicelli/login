const btn = window.document.getElementById('btnEnviar')
const usu = window.document.getElementById('usuario')
const email = window.document.getElementById('email')
const senha = window.document.getElementById('senha')
const repSenha = window.document.getElementById('repSenha')
const termos = window.document.getElementById('termos')
const divErro = window.document.querySelector('div#erroLogin')
let enviar = false

btn.addEventListener('click', verificar)

divErro.style.display = 'none'

function erro(obj, msgDoErro) {
    divErro.innerText = msgDoErro
    obj.style.border = '1.5px solid #ff1000'
}

function verUsu() {
    if(usu.value.length < 6) {
        erro(usu, 'Por favor, digite um nome de usuario com mais de 5 letras!')
        return false
    } else if(usu.value.length > 16) {
        erro(usu, 'Por favor, digite um nome de usuario com menos de 16 letras!')
        return false
    } else {
        usu.style.border = 'none'
        return true
    }
}

function verEmail() {
    let tipoEmail = ''
    for(let c in email.value) {
        if(email.value[c] === '@') {
            var lda = c
            var ta = true
        }
    }
    if(ta === true) {
        let contagem = 0
        for(let c = lda; c < email.value.length; c++) {
            contagem += 1
        }
        if(contagem < 10) {
            erro(email, 'Por favor, insira um email valido!')
            return false
        } else {
            for(let c = lda; c < email.value.length; c++) {
                tipoEmail += email.value[c]
            }
            console.log(tipoEmail)
            if(tipoEmail === '@gmail.com' || tipoEmail === '@outlook.com' || tipoEmail === '@hotmail.com') {
                email.style.border = 'none'
                return true
            } else {
                erro(email, 'Por favor, insira um email valido!')
                return false
            }
        }
    } else {
        erro(email, 'Por favor, insira um email valido!')
        return false
    }
}

function verSenha() {
    if(senha.value.length < 8) {
        erro(senha, 'Por favor, digite uma senha maior que 7 caracteres!')
        return false
    } else if(senha.value.length > 26) {
        erro(senha, 'Por favor, digite uma senha menor que 26 caracteres!')
        return false
    } else {
        senha.style.border = 'none'
        return true
    }
}

function verRepSenha() {
    if(repSenha.value != senha.value) {
        erro(repSenha, 'Por favor, tenha certeza que digitou sua senha corretamente!')
        return false
    } else {
        repSenha.style.border = 'none'
        return true
    }
}

function aceitoTermos() {
    if(!termos.checked) {
        erro(termos, 'Por favor, aceite nossos termos para continuar!')
        return false
    } else {
        return true
    }
}

function verificar() {
    if(verUsu() === true && verEmail() === true && verSenha() === true && verRepSenha() === true && aceitoTermos() === true) {
        divErro.style.display = 'none'
        window.location = './login-feito.html'
    } else {
        divErro.style.display = 'block'
    }
}
