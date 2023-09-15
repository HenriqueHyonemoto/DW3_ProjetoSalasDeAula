CREATE TABLE IF NOT EXISTS saladeaula (
    saladeaulaid bigserial CONSTRAINT pk_saladeaula PRIMARY KEY,
    descricao VARCHAR(60),
    localizacao VARCHAR(60),
    capacidade integer,
    removido boolean
);

INSERT INTO saladeaula VALUES 
    (default, 'Sala de Teatro', 'Bloco A', 40, false),
    (default, 'Sala de Desenho', 'Bloco B', 30, false)
    ON CONFLICT DO NOTHING;

