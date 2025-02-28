// Função para calcular a média e a situação do aluno
function calcularMediaESituacao() {
    // Pegando os valores das notas digitadas pelo usuário
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    
    // Verificar se as notas são válidas
    if (isNaN(nota1) || isNaN(nota2) || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
        alert("Por favor, insira notas válidas entre 0 e 10.");
        return;
    }
    
    // Calcular a média
    const media = (nota1 + nota2) / 2;

    // Determinar a situação do aluno
    let situacao = '';
    if (media >= 7) {
        situacao = 'Aprovado';
    } else if (media >= 5) {
        situacao = 'Em Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    // Exibir o resultado
    document.getElementById('media').textContent = `Média: ${media.toFixed(2)}`;
    document.getElementById('situacao').textContent = `Situação: ${situacao}`;
}

// Adicionar evento ao botão de calcular
document.getElementById('calcularBtn').addEventListener('click', calcularMediaESituacao);
