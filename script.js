// lembrar botar if = 0 nao dividir
var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var resultado = document.getElementById('resultado');

function somar() {
    if (numero1.value === '' || numero2.value === '') {
        alert('não deixe um campo em branco!.');
    } else {
        var soma = Number(numero1.value) + Number(numero2.value);
        resultado.innerText = 'Resultado: ' + soma;
    }
}

function subtrair() {
    if (numero1.value === '' || numero2.value === '') {
        alert('não deixe um campo em branco!.');
    } else {
        var subtracao = Number(numero1.value) - Number(numero2.value);
        resultado.innerText = 'Resultado: ' + subtracao;
    }
}

function multiplicar() {
    if (numero1.value === '' || numero2.value === '') {
        alert('não deixe um campo em branco!');
    } else {
        var multiplicacao = Number(numero1.value) * Number(numero2.value);
        resultado.innerText = 'Resultado: ' + multiplicacao;
    }
}

function dividir() {
    if (numero1.value === '' || numero2.value === '') {
        alert('não deixe um campo em branco!.');
    } else if (Number(numero2.value) === 0) {
        alert('Já viu algo dividir por 0? BURRO.');
    } else {
        var divisao = Number(numero1.value) / Number(numero2.value);
        resultado.innerText = 'Resultado: ' + divisao;
    }
}

function limpar() {
    numero1.value = '';
    numero2.value = '';
    resultado.innerText = 'Resultado :';
}

var ap1 = document.getElementById('ap1');
var ap2 = document.getElementById('ap2');
var as = document.getElementById('as');
var resultadoNota = document.getElementById('resultadoNota');

function validarCampo(campoId, min, max) {
    var campo = document.getElementById(campoId);
    var valor = Number(campo.value);
    if (valor < min || valor > max) {
        alert('valor inserido invalido para ' + campoId + '. Deve estar entre ' + min + ' e ' + max + '.');
        campo.value = '';
        campo.focus();
    }
}

function calcularNotaFinal() {
    if (ap1.value === '' || ap2.value === '' || as.value === '') {
        alert('Não deixe um campo em branco!');
    } else {
        var notaAP1 = Number(ap1.value);
        var notaAP2 = Number(ap2.value);
        var notaAS = Number(as.value);
        var notaFinal = notaAP1 + notaAP2 + notaAS;
        resultadoNota.innerText = 'Nota Final: ' + notaFinal;
        
        if (notaFinal >= 6) {
            resultadoNota.innerText += '. Aprovado! Parabéns.';
        } else {
            resultadoNota.innerText += '. Reprovado. Reforce seus estudos para realização da AF.';
        }
    }
}

