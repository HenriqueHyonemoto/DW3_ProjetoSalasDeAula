const db = require("../../../database/databaseconfig");

const getAllSalasDeAula = async () => {
  return (
    await db.query(
      "SELECT *" +
        "FROM saladeaula where removido = false ORDER BY descricao ASC"
    )
  ).rows;
};

const getSalasDeAulaByID = async (saladeaulaIDPar) => {
    return (
      await db.query(
        "SELECT *" +
          "FROM saladeaula WHERE saladeaulaid = $1 and removido = false ORDER BY descricao ASC",
        [saladeaulaIDPar]
      )
    ).rows;
  };

  const insertSalasDeAula = async (saladeaulaREGPar) => {
    //@ Atenção: variável de msg para retornar erros do banco de dados.
    //console.log("[insertsaladeaula]",saladeaulaREGPar)
    let linhasAfetadas;
    let msg = "ok";
    try {
      linhasAfetadas = (
        await db.query(
          "INSERT INTO saladeaula " + "values(default, $1, $2, $3, $4",
          [
            saladeaulaREGPar.descricao,
            saladeaulaREGPar.localizacao,
            saladeaulaREGPar.capacidade,
            saladeaulaREGPar.removido,
          ]
        )
      ).rowCount;
    } catch (error) {
      msg = "[mdlsaladeaula|insertSalasDeAula] " + error.detail;
      linhasAfetadas = -1;
    }
  
    return { msg, linhasAfetadas };
  };
  
  const updateSalasDeAula = async (saladeaulaREGPar) => {
    console.log("[updateSalasDeAula]",saladeaulaREGPar)
    let linhasAfetadas;
    let msg = "ok";
    try {
      linhasAfetadas = (
        await db.query(
          "UPDATE saladeaula SET " +
            "descricao = $2, " +
            "localizacao = $3, " +
            "capacidade = $4, " +
            "removido = $5, " +
            "WHERE saladeaulaid = $1",
          [
            saladeaulaREGPar.saladeaulaid,
            saladeaulaREGPar.descricao,
            saladeaulaREGPar.localizacao,
            saladeaulaREGPar.capacidade,
            saladeaulaREGPar.removido,         
          ]
        )
      ).rowCount;
    } catch (error) {
      msg = "[mdlSalasDeAula|updateSalasDeAula] " + error.detail;
      linhasAfetadas = -1;
    }
  
    return { msg, linhasAfetadas };
  };
  
  const DeleteSalasDeAula = async (saladeaulaREGPar) => {
    let linhasAfetadas;
    let msg = "ok";
      
    try {
      linhasAfetadas = (
      await db.query(
        "UPDATE saladeaula SET " + "removido = true " + "WHERE saladeaulaid = $1",
        [saladeaulaREGPar.saladeaulaid]
      )
    ).rowCount;
  } catch (error) {
    msg = "[mdlsaladeaula|Deletesaladeaula] " + error.detail;
    linhasAfetadas = -1;
  }
  
  return { msg, linhasAfetadas };
  };

module.exports = {
    getAllSalasDeAula,
    getSalasDeAulaByID,
    insertSalasDeAula,
    updateSalasDeAula,
    DeleteSalasDeAula
  };
