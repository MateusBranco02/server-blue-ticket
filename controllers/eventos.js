const listaEventos = require('../model/data');

exports.listaEventos = (req, res) => {
    res.status(200).send(listaEventos);
};

exports.cadastrarEventos = (req, res) => {
    const novoEvento = req.body;
    listaEventos.push(novoEvento);
    res.status(201).send({ mensagem: 'Evento cadastrado!' })
}

exports.detalhesEvento = (req, res) => {
    const id = Number(req.params.id);
    const detalhesDoEvento = listaEventos.find((evento) => evento.id === id);

    if (detalhesDoEvento) {
        res.status(200).send(detalhesDoEvento);
    } else {
        res.status(404).send({ mensagem: 'Evento não encontrado!' });
    }
}
