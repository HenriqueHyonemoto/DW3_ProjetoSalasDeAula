create table IF NOT EXISTS salasdeaula (
    saladeaulaid bigserial constraint pk_saladeaula PRIMARY KEY,
    descricao VARCHAR(60),
    localizacao VARCHAR(60),
    capacidade integer,
    removido boolean,
);

insert into clientes values 
    (default, 'Sala de Teatro', 'Bloco A', 40, false),
    (default, 'Sala de Desenho', 'Bloco B', 30, false)
    ON CONFLICT DO NOTHING;

