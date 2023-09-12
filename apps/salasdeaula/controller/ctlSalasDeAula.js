const mdlSalasDeAula = require("../model/mdlSalasDeAula");

const getAllSalasDeAula = (req, res) =>
  (async () => {
    let registro = await mdlSalasDeAula.getAllSalasDeAula();
    res.json({ status: "ok", "registro": registro });
  })();

  const getSalasDeAulaByID = (req, res) =>
  (async () => {
    const saladeaulaID = parseInt(req.body.saladeaulaid);
    let registro = await mdlSalasDeAula.getSalasDeAulaByID(saladeaulaID);

    res.json({ status: "ok", "registro": registro });
  })();

  const insertSalasDeAula = (request, res) =>
  (async () => {
    //@ Atenção: aqui já começamos a utilizar a variável msg para retornar erros de banco de dados.
    const saladeaulaREG = request.body;  
    //console.log("[insertSalasDeAulaCTL",saladeaulaREG)  
    let { msg, linhasAfetadas } = await mdlSalasDeAula.insertSalasDeAula(saladeaulaREG);    
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

const updateSalasDeAula = (request, res) =>
  (async () => {
    const saladeaulaREG = request.body;
    let  { msg, linhasAfetadas } = await mdlSalasDeAula.updateSalasDeAula(saladeaulaREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

  const DeleteSalasDeAula = (request, res) =>
  (async () => {
    const saladeaulaREG = request.body;
    let { msg, linhasAfetadas } = await mdlSalasDeAula.DeleteSalasDeAula(saladeaulaREG);
    res.json({ "status": msg, "linhasAfetadas": linhasAfetadas });
  })();

  module.exports = {
    getAllSalasDeAula,
    getSalasDeAulaByID,
    insertSalasDeAula,
    updateSalasDeAula,
    DeleteSalasDeAula
  };