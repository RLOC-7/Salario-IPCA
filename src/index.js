import opcao from "readline-sync";
import {salarioMinimo, inflacao} from '../data/dados.js';

console.log("Escolha uma das alternativas: \n");
console.log("1 - Listar os salários mínimos de 2010 à 2020\n");
console.log("2 - Listar o índice IPCA de 2010 à 2020\n");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let escolha = opcao.question("Digite o número da sua escolha: ");
escolha = Number(escolha);

const anoLabel = "Ano: ";
const salarioLabel = "Salário mínimo: ";
const crescimentoLabel = "Crescimento Salarial: ";
const ipcaLabel = "Inflação IPCA: ";

const formatarNumero = (numero) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(numero);

switch (escolha) {
    case 1:
        for (let i = 0; i < salarioMinimo.length; i++) {
            const ano = salarioMinimo[i].ano;
            const salario = salarioMinimo[i].salario;
            const salarioFormatado = formatarNumero(salario);

            console.log(`\n${anoLabel}${ano}`);
            console.log(`${salarioLabel}${salarioFormatado}`);
        }
        break;
    case 2:
        for (let i = 0; i < inflacao.length; i++) {
            const ano = inflacao[i].ano;
            const ipca = inflacao[i].ipca;
            const ipcaFormatado = ipca.toFixed(2).replace(".", ",");

            console.log(`\n${anoLabel}${ano}`);
            console.log(`${ipcaLabel}${ipcaFormatado}%`);
        }
        break;
    case 3:
        for (let i = 0; i < salarioMinimo.length; i++) {
            const ano = salarioMinimo[i].ano;
            const salario = salarioMinimo[i].salario;
            const percentualCrescimento = i > 0 ? ((salario - salarioMinimo[i - 1].salario) / salarioMinimo[i - 1].salario) * 100 : 0;
            const crescimentoFormatado = percentualCrescimento.toFixed(2).replace(".", ",") + "%";
            const ipca = inflacao[i].ipca;

            const salarioFormatado = formatarNumero(salario);
            const ipcaFormatado = ipca.toFixed(2).replace(".", ",");

            console.log(`\n${anoLabel}${ano}`);
            console.log(`${salarioLabel}${salarioFormatado}`);
            console.log(`${crescimentoLabel}${crescimentoFormatado}`);
        }
        break;
    default:
        console.log("Opção Inválida!");
        break;
}
