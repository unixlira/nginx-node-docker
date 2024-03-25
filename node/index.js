const express = require('express');
const mysql = require('mysql2/promise');
const waitPort = require('wait-port');
const app = express();
const port = 3000;

const dbConfig = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

const nomesBrasileiros = [
    'José', 'Maria', 'João', 'Ana', 'Francisco',
    'Antônio', 'Adriana', 'Juliana', 'Marcos',
    'Márcia', 'Fernando', 'Fernanda', 'Patrícia',
    'Aline', 'Lucas', 'Luana', 'Paulo', 'Paula',
    'Rafael', 'Rafaela'
];

const sobrenomesBrasileiros = [
    'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues',
    'Fernandes', 'Alves', 'Pereira', 'Lira', 'Gomes',
    'Ribeiro', 'Martins', 'Carvalho', 'Machado', 'Nunes',
    'Almeida', 'Vieira', 'Dias', 'Andrade', 'Moreira'
];

(async () => {
    await waitPort({host: dbConfig.host, port: 3306});
    console.log('MySQL is ready for connections.');

    const pool = mysql.createPool(dbConfig);

    // Inicialização: Crie a tabela se não existir
    const createTableSql = `CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`;
    await pool.query(createTableSql);
    console.log("Tabela 'users' verificada/criada com sucesso!");

    app.get('/', async (req, res) => {
        try {
            const nomeAleatorio = nomesBrasileiros[Math.floor(Math.random() * nomesBrasileiros.length)];
            const sobrenomeAleatorio = sobrenomesBrasileiros[Math.floor(Math.random() * sobrenomesBrasileiros.length)];
            const nomeCompleto = `${nomeAleatorio} ${sobrenomeAleatorio}`;

            await pool.query('INSERT INTO users(name) VALUES(?)', [nomeCompleto]);

            const [results] = await pool.query('SELECT name FROM users');
            let html = '<h1>Full Cycle Rocks!</h1>';
            html += '<ul>';
            results.forEach(row => {
                html += `<li>${row.name}</li>`;
            });
            html += '</ul>';
            res.send(html);
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro ao processar a requisição');
        }
    });

    app.listen(port, () => {
        console.log(`App rodando na porta ${port}`);
    });
})();
