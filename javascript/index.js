function mostrarConteudo(conteudo) {
    document.getElementById('conversor-container').style.display = 'none';
    document.getElementById('gerador-container').style.display = 'none';
    document.getElementById('restaurantes-container').style.display = 'none';
    document.getElementById('geradornum-container').style.display = 'none';
    document.getElementById('roleta-container').style.display = 'none';

    document.getElementById(`${conteudo}-container`).style.display = 'block';
}
5