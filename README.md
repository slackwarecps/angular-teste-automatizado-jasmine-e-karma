# angular-teste-automatizado-jasmine-e-karma

angular-teste-automatizado-jasmine-e-karma

"@fortawesome/angular-fontawesome": "^0.7.0",
"@fortawesome/fontawesome-svg-core": "^1.2.30",
"@fortawesome/free-solid-svg-icons": "^5.14.0",

    "uuid": "^8.3.0",


    #
    O papel do Jasmine como framework de testes

O papel do Karma como executor de testes
Estrutura mínima para declaração de testes
Teste de expectativas
Evitando vícios na criação de testes

# ferramentas

https://karma-runner.github.io/latest/index.html

https://jasmine.github.io/

#

A importância de testes precisos, legíveis e fáceis de manter
O papel da função beforeEach
Teste de exeções
Como testes ajudam na refatoração
Expectativas com contexto
A diferença entre as funções toBe, ToBeTrue e ToBeTruthy

#

A criar um componente de like
Tornar o componente acessível
Integrá-lo na aplicação

#

TestBed e criação de módulos de teste
Abordagens Test First / Test Later
Fixture de componentes
Teste de input e output properties
Asserções assíncronas
Introdução ao uso do Spy
Padronização na descrição de testes

## instalar o karma Firfox launcher

npm install -D karma-firefox-launcher@1.3.0

npm install karma-safari-launcher --save-dev

depois adicionar o plugin no karma.config

require('karma-firefox-launcher'),

depois ativar o browser tambem no arquivo karma

    browsers: ['Chrome','Firefox'],


    browsers: ['Safari']

# custom test CI para Jenkins

      "test-ci": "ng test --watch=false --browsers ChromeHeadless,FirefoxSemCabeca",

       customLaunchers:{
      FirefoxSemCabeca:{
        base: 'Firefox',
        flags: ['-headless']
      }
    }

# Tests Headless

"test-ci": "ng test --watch=false --browsers ChromeHeadless,FirefoxHeadless",

# Gerador de Report de Erro para ci-cd no formato Junit

npm install -D karma-junit-reporter@2.0.1

adicionar o plugin no karma

      require('karma-junit-reporter'),

mudar no package.js

"test-ci": "ng test --watch=false --reporters junit --browsers ChromeHeadless,FirefoxHeadless",

# Saber a cobertura de testes

    "test-coverage": "ng test --watch=false --sourceMap=true --codeCoverage=true --browsers ChromeHeadless",

# ---

    Testes em paralelo e com diferentes navegadores

Criação de scripts customizados
Trabalhando com navegadores Headless
Lançadores customizados
Cobertura de testes e relatório
