#!/bin/bash

set -e

echo "Instalando dependências Node.js..."
npm install

echo "Iniciando a aplicação..."
node index.js
