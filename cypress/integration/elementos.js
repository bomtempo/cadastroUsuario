class Home {

    acessarHome() {
        cy.visit('http://prova.stefanini-jgr.com.br/teste/qa/')
    }

    verifyTitle() {
        cy.get('h1').should('contain', 'Cadastro de usuários')
    }

    verifyName() {
        cy.get(':nth-child(1)>label').should('contain', 'Nome')
    }

    verifyEmail() {
        cy.get(':nth-child(2)>label').should('contain', 'E-mail')
    }

    verifySenha() {
    cy.get(':nth-child(3)>label').should('contain', 'Senha')
    }

    cadastrar() {
        cy.get('#register').click()
    }

    obrigatorioName() {
        cy.get('p.error').should('exist').and('contain', 'O campo Nome é obrigatório.')
    }
    
    obrigatorioEmail() {
        cy.get('p.error').should('exist').and('contain', 'O campo E-mail é obrigatório.')
    }

    obrigatorioSenha() {
        cy.get('p.error').should('exist').and('contain', 'O campo Senha é obrigatório.')
    }

    nomeincompleto() {
        cy.get('#name').type('Alex', {delay:50}).should('have.value', 'Alex')
    }

    verifyIncompleto() {
        cy.get('p.error').should('exist').and('contain', 'Por favor, insira um nome completo.')
    }

    email() {
        cy.get('#email').type('alexbomtempo@hotmail.com', {delay:50}).should('have.value', 'alexbomtempo@hotmail.com')
    }

    senha() {
        cy.get('#password').type('b12345678', {delay:50}).should('have.value', 'b12345678')
    }

    einvalid() {
        cy.get('#email').type('alexbomtempo', {delay:50}).should('have.value', 'alexbomtempo')
    }

    nomecompleto() {
        cy.get('#name').type('Alex Bomtempo', {delay:50}).should('have.value', 'Alex Bomtempo')
    }

    verifyinvalidEmail() {
        cy.get('p.error').should('exist').and('contain', 'Por favor, insira um e-mail válido.')
    }

    senhaCurta() {
        cy.get('#password').type('b123456', {delay:50}).should('have.value', 'b123456')
    }

    verifySenhaCurta() {
        cy.get('p.error').should('exist').and('contain', 'A senha deve conter ao menos 8 caracteres.')
    }

    verifyTabela() {
        cy.get('table').should('exist').and('contain', 'Id').and('contain', 'Nome').and('contain', 'E-mail').and('contain', 'Ações')
    }

    verifyIdtable() {
        cy.get('#tdUserId1').should('exist').and('contain', '1')
    }

    verifyNametable() {
        cy.get('#tdUserName1').should('exist').and('contain', 'Alex Bomtempo')
    }

    verifyEmailtable() {
        cy.get('#tdUserEmail1').should('exist').and('contain', 'alexbomtempo@hotmail.com')
    }

    excluir() {
        cy.get('tr > :nth-child(4)').should('exist').and('contain', 'Excluir').click()
    }
}

export default new Home();

