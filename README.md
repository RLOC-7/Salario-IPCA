# 💹 Análise de Salário Mínimo e IPCA
Este é um script simples em JavaScript que permite analisar os dados de salário mínimo e índice IPCA (Índice Nacional de Preços ao Consumidor Amplo) no Brasil entre os anos de 1994 e 2023.

**Como Utilizar**
Clone este repositório:
bash:
`` git clone https://github.com/seu-usuario/seu-repositorio.git ``

Navegue até o diretório do projeto:
bash:
`` cd seu-repositorio ``

Instale as dependências:
bash:
`` npm install readline-sync ``

Execute o script:
bash:
`` node nome-do-script.js ``

#### Siga as instruções apresentadas no console para escolher uma das opções disponíveis.

###### Opções Disponíveis
- **¹ Listar os salários mínimos de 1994 à 2023**
  - Exibe a lista de salários mínimos para cada ano no período especificado.
- **² Listar o índice IPCA de 1994 à 2023**
  - Exibe o índice IPCA para cada ano no período especificado.
- **³ Comparação entre o percentual de aumento salarial e o IPCA**
  - Compara o percentual de crescimento salarial em relação ao ano anterior com o índice IPCA correspondente. 

### Dados Utilizados
Os dados de salário mínimo e IPCA foram inseridos manualmente no script para os anos de 1994 a 2023. Caso deseje atualizar ou adicionar mais anos, você pode modificar diretamente os arrays salarioMinimo e inflacao no código.

###### Fonte dos Dados:
  - ## Salarios
| Ano  | Salário Mínimo (R$)  |
|------|----------------------|
| 1994 | 64.79                |
| 1995 | 70.00                |
| 1996 | 112.00               |
| 1997 | 120.00               |
| 1998 | 130.00               |
| 1999 | 136.00               |
| 2000 | 151.00               |
| 2001 | 180.00               |
| 2002 | 200.00               |
| 2003 | 240.00               |
| 2004 | 260.00               |
| 2005 | 300.00               |
| 2006 | 350.00               |
| 2007 | 380.00               |
| 2008 | 415.00               |
| 2009 | 465.00               |
| 2010 | 510.00               |
| 2011 | 540.00               |
| 2011 | 545.00               |
| 2012 | 622.00               |
| 2013 | 678.00               |
| 2014 | 724.00               |
| 2015 | 788.00               |
| 2016 | 880.00               |
| 2017 | 937.00               |
| 2018 | 954.00               |
| 2019 | 998.00               |
| 2020 | 1045.00              |
| 2021 | 1100.00              |
| 2022 | 1212.00              |
| 2023 | 1302.00              |
|------|----------------------|
  - ## IPCA
| Ano  | IPCA Acumulado (%)  |
|------|---------------------|
| 1994 | 916.43              |
| 1995 | 22.41               |
| 1996 | 9.56                |
| 1997 | 5.22                |
| 1998 | 1.66                |
| 1999 | 8.94                |
| 2000 | 5.97                |
| 2001 | 7.67                |
| 2002 | 12.53               |
| 2003 | 9.3                 |
| 2004 | 7.6                 |
| 2005 | 5.69                |
| 2006 | 3.14                |
| 2007 | 4.46                |
| 2008 | 5.9                 |
| 2009 | 4.31                |
| 2010 | 5.91                |
| 2011 | 6.5                 |
| 2012 | 5.84                |
| 2013 | 5.91                |
| 2014 | 6.41                |
| 2015 | 10.67               |
| 2016 | 6.29                |
| 2017 | 2.95                |
| 2018 | 3.75                |
| 2019 | 4.31                |
| 2020 | 4.52                |
| 2021 | 10.06               |
| 2022 | 5.79                |
| 2023 | 3.75                |
|------|---------------------|

#### Nota
Este script foi desenvolvido como uma ferramenta simples para análise de dados específicos. Sinta-se à vontade para adaptar e expandir conforme necessário para atender às suas necessidades.
