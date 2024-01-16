function calcularHoras() {
    const horasDoContrato = 9.30;
    const entradaInput = document.getElementById('entrada');
    
    if (!entradaInput) {
        alert('Elemento de entrada não encontrado.');
        return;
    }

    const entradaValor = parseFloat(entradaInput.value);

    if (isNaN(entradaValor)) {
        alert('Por favor, insira um valor válido para a entrada.');
        return;
    }

    const calculoDeHoras = entradaValor + horasDoContrato;
    
    const horas = Math.floor(calculoDeHoras);
    const minutos = Math.round((calculoDeHoras - horas) * 60);

    const horasFormatadas = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;

    alert('Trabalhar até: ' + horasFormatadas);
}
