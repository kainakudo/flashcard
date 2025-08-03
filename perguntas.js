const perguntas = [
    {
        categoria: 'Programação',
        pergunta: 'O que é Python?',
        resposta: 'O Python é uma linguagem de programação',
    },
    {
        categoria: 'Geografia',
        pergunta: 'Qual a capital da França?',
        resposta: 'A capital da França é Paris',
    },
    {
        categoria: 'Programação',
        pergunta: 'O que é uma função?',
        resposta: 'Uma função é um bloco de código que executa alguma tarefa',
    },
    {
        categoria: 'Língua inglesa',
        pergunta: 'Como se diz oi em Inglês?',
        resposta: 'Oi em inglês é HI (RAI)',
    }
];

// Cria os cartões passando o índice para mostrar número
perguntas.forEach((item, index) => {
    criaCartao(item.categoria, item.pergunta, item.resposta, index + 1);
});
