#!/usr/bin/env node
'use strict'

const { spawn } = require('child_process')
const argv = require('yargs');
const chalk = require('chalk');
const inquirer = require('inquirer');
const header = require('./cli-header');
const confParser = require('./conf-parser');

header();
const params = argv
  .option('tag', {
    alias: 't',
    type: 'string',
    description: 'Filtra a lista de conexões baseado na tag'
  })
  .version()
  .help()
  .argv;

const choices = confParser(params.tag);
inquirer
  .prompt([
    {
      type: 'list',
      name: 'host',
      message: 'Escolha o host que deseja se conectar',
      choices,
    },
  ])
  .then(({ host }) => {
    if (host.length === 0) {
      console.log(chalk`{red O host não foi encontrado.}`);
    }
    const shell = spawn('ssh',[host], { stdio: 'inherit' })
    shell.on('close',(code) => {
      console.log(chalk`{green [SSH List] Conexão encerrada:}`, code);
    })
  });
