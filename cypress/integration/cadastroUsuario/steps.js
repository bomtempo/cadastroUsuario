/// <reference types="cypress" />

import Home from '../elementos'

Given(/^que eu acesse a home da página$/, () => {
	Home.acessarHome()
    Home.verifyTitle()
    Home.verifyName()
    Home.verifyEmail()
    Home.verifySenha()
});


When(/^clico em cadastrar sem preencher os campos "<tipo>"$/, (tipo) => {
	Home.cadastrar()
});


Then(/^deverá apresentar a mensagem "<mensagem>"$/, (mensagem) => {
	Home.obrigatorioName()
    Home.obrigatorioEmail()
    Home.obrigatorioSenha()
});



When(/^eu clico em cadastrar tendo colocado somente "([^"]*)" no campo "([^"]*)"$/, (Alex,nome) => {
	Home.nomeincompleto()
});


When(/^preencha o email$/, () => {
	Home.email()

});


When(/^preencha a senha$/, () => {
	Home.senha()
    Home.cadastrar()
});


Then(/^o sistema deve exibir a mensagem "([^"]*)"$/, (mensagem) => {
	Home.verifyIncompleto()
});


When(/^eu clico em cadastrar tendo colocado "([^"]*)" no campo "([^"]*)"$/, (alexbomtempo,email) => {
	Home.einvalid()
});

When(/^preencher o campo nome completo$/, () => {
	Home.nomecompleto()
});

When(/^preencher o campo senha correta$/, () => {
	Home.senha()
	Home.cadastrar()
});


Then(/^o sistema deve exibir a mensagem "([^"]*)" "([^"]*)"$/, (args1,args2) => {
	Home.verifyinvalidEmail()
});



When(/^eu clico em cadastrar tendo colocado a "([^"]*)" menor que 8 caracteres "([^"]*)" no campo$/, (args1,args2) => {
	Home.senhaCurta()
});


When(/^preencher o campo nome completo correto$/, () => {
	Home.nomecompleto()
});


When(/^preencher o campo email valido$/, () => {
	Home.email()
	Home.cadastrar()
});



Then(/^o sistema deve exibir a "([^"]*)" "([^"]*)"$/, (args1,args2) => {
	Home.verifySenhaCurta()
});


When(/^eu acessar a página$/, () => {
	Home.acessarHome()
});


When(/^preencher o campo nome com um nome completo "([^"]*)"$/, (nome) => {
	Home.nomecompleto()
});

When(/^preencher o campo E-mail com um email valido "([^"]*)"$/, (email) => {
	Home.email()
});

When(/^preencher o capo senha com uma senha com 8 ou mais digitos "([^"]*)"$/, (senha) => {
	Home.senha()
});



Then(/^o sistema deve realizar o cadastro com sucesso e exibir o cadastro em uma tabela abaixo$/, () => {
	Home.cadastrar()
	Home.verifyTabela()
	Home.verifyIdtable()
	Home.verifyNametable()
	Home.verifyEmailtable()
});



When(/^eu faço um cadastro$/, () => {
	Home.verifyTitle()
    Home.verifyName()
    Home.verifyEmail()
    Home.verifySenha()
});



When(/^eu preencha o campo com nome completo "([^"]*)"$/, (nome) => {
	Home.nomecompleto()
});

When(/^eu preencha o campo email válido "([^"]*)"$/, (email) => {
	Home.email()
});

When(/^eu preencha o campo com senha "([^"]*)"$/, (senha) => {
	Home.senha()
	Home.cadastrar()
	Home.verifyTabela()
});


Then(/^o sistema devera excluir o cadastro da tabela$/, () => {
	Home.excluir()
});













