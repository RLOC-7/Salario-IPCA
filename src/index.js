import opcao from "readline-sync";
import { salarioMinimo, inflacao} from './data/dados.js'

console.log("Escolha uma das alternativas: \n")

console.log("1 - Listar os salários minímos de 2010 à 2020\n")
console.log("2 - Listar o índice IPCA de 2010 à 2020\n")
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n")


let escolha = opcao.question("Digite o numero da sua escolha: ")

escolha = Number(escolha)

let anoLabel = "Ano: "
let salarioLabel = "Salário mínimo: "
let crescimentoLabel = "Crescimento Salarial: "
let ipcaLabel = "Inflação IPCA: "

anoLabel = anoLabel.padEnd(30, '.')
salarioLabel = salarioLabel.padEnd(30, '.')
crescimentoLabel = crescimentoLabel.padEnd(30, '.')
ipcaLabel = ipcaLabel.padEnd(30, '.')


switch (escolha) {
    case 1:
        for (let i = 0; i <= salarioMinimo.length-1; i++) {
            let ano = salarioMinimo[i].ano
            let salario = salarioMinimo[i].salario
            
            let salarioFormatado = salario.toFixed(2).replace(".",".")

            console.log("\n")
            console.log(anoLabel+ano)
            console.log(salarioLabel+"R$ "+salarioFormatado)
        }
        break;
    case 2:
        for (let i = 0; i < inflacao.length; i++) {
            let ano = inflacao[i].ano
            let ipca = inflacao[i].ipca

            let ipcaFormatado = ipca.toFixed(2).replace(".",",")

            console.log("\n")
            console.log(anoLabel+ano)
            console.log(ipcaLabel+ipcaFormatado+"%")

            
        }
        break;
    case 3:
        for (let i = 0; i < salarioMinimo.length; i++) {
            let ano = salarioMinimo[i].ano;
            let salario = salarioMinimo[i].salario
            let percentualCrescimento;
            let crescimentoFormatado;
            
            if (i > 0) {
                let salarioAnterior = salarioMinimo[i-1].salario
                let diferenca = salario - salarioAnterior
                
                percentualCrescimento = (diferenca / salarioAnterior) * 100

                crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".",",")+"%"
                
            } else {
                crescimentoFormatado = "-"
            }
            let ipca = inflacao[i].ipca

            let salarioFormatado = salario.toFixed(2).replace(".",",")
            let ipcaFormatado = ipca.toFixed(2).replace(".",",")

            console.log("\n")
            console.log(anoLabel+ano)
            console.log(salarioLabel+"R$ "+salarioFormatado)
        }
        break;
    default:
        console.log("Opção Inválida!")
        break;
}