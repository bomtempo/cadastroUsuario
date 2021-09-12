# language: pt
# encoding: utf-8
################################   Fluxos Tristes ################################


Funcionalidade: Cadastro de Usuários

    EU COMO usuário do sistema.
    DESEJO realizar o cadastro de novos usuários.
    PARA QUE seja possível armazenar e gerenciar seus dados.

Contexto:
    Dado que eu acesse a home da página

Esquema do Cenário: Cadastrar sem valores (Fluxo Triste)
    Quando clico em cadastrar sem preencher os campos "<tipo>"
    Então deverá apresentar a mensagem "<mensagem>"

    Exemplos:
    | <tipo>           | <mensagem>                    |
    | name_false       | O campo Nome é obrigatório.   |
    | email_false      | O campo E-mail é obrigatório. |
    | password_false   | O campo Senha é obrigatório.  |



Esquema do Cenário: Cadastrar com nome incompleto (Fluxo Triste)
    Quando eu clico em cadastrar tendo colocado somente "Alex" no campo "<nome>"
    E preencha o email 
    E preencha a senha
    Então o sistema deve exibir a mensagem "<mensagem>" 

    Exemplos:
    | <nome>              | <mensagem>                          |
    | Alex                | Por favor, insira um nome completo.  |


Esquema do Cenário: Cadastrar com e-mail invalido (Fluxo Triste)
    Quando eu clico em cadastrar tendo colocado "alexbomtempo" no campo "<email>"
    E preencher o campo nome completo
    E preencher o campo senha correta
    Então o sistema deve exibir a mensagem "Por favor, insira um e-mail válido." "<mensagem>"

    Exemplos: 
    | <email>             | <mensagem>                          |
    | alexbomtempo        | Por favor, insira um e-mail válido.  |


Esquema do Cenário: Cadastrar com senha curta (Fluxo Triste)
    Quando eu clico em cadastrar tendo colocado a "<senha>" menor que 8 caracteres "123456" no campo
    E preencher o campo nome completo correto
    E preencher o campo email valido
    Então o sistema deve exibir a "<mensagem>" "A senha deve conter ao menos 8 caracteres."

     Exemplos: 
    | <senha>             | <mensagem>                                  |
    | 123456              | A senha deve conter ao menos 8 caracteres.  |


################################   Fluxos Alegres  ################################


Esquema do Cenário: Cadastrar novo usuário (Fluxo Feliz)
    Quando eu acessar a página
    E preencher o campo nome com um nome completo "<nome>"
    E preencher o campo E-mail com um email valido "<E-mail>"
    E preencher o capo senha com uma senha com 8 ou mais digitos "<senha>"
    Então o sistema deve realizar o cadastro com sucesso e exibir o cadastro em uma tabela abaixo

    Exemplos:
    | <nome>        | <E-mail>                  | <senha>   |
    | Alex Bomtempo | alexbomtempo@hotmail.com  | 12345678  |

Esquema do Cenário: Excluir Cadastro (fluxo Feliz)
    Quando eu faço um cadastro
    E eu preencha o campo com nome completo "<nome>" 
    E eu preencha o campo email válido "<E-mail>"
    E eu preencha o campo com senha "<senha>"
    Então o sistema devera excluir o cadastro da tabela
    
    Exemplos:
    | <nome>        | <E-mail>                  | <senha>   |
    | Alex Bomtempo | alexbomtempo@hotmail.com  | 12345678  |