

// 1 . Crie uma função que receba o nome de um aluno e suas três notas, calcule
// a média e informe se ele está aprovado (média maior ou igual a 7) ou
// reprovado. A mensagem deverá ser personalizada com o nome do aluno.

function mediaAluno(nome, nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
''
    if (media >= 7) {
        console.log(nome + " está aprovado " + media)
    } else {
        console.log(nome + " não está aprovado " + media)
    }
}
 
// 2 . Crie uma função que receba dois números e exiba a diferença entre eles.
 
function diferençaNumero(numero1, numero2) {
    let diferença = 0
    if (numero1 >= numero2) {
        diferença = numero1 - numero2
    } else if (numero2 > numero1) {
        diferença = numero2 - numero1
    } else {
        console.log("Tem que ter um numero valido")
    }
 
    console.log("A diferença entre " + numero1 + " e " + numero2 + " é " + diferença)
}
 
// 3 . Crie uma função que receba um número e exiba sua tabuada de multiplicação, utilizando um laço de repetição, do 1 ao 10.
 
function tabuada(numero) {
    for (i = 1; i <= 10; i++) {
        resultado = i * numero
        console.log(numero + " X " + i + " = " + resultado)
    }
}

//4. Crie uma função que receba a idade de uma pessoa e classifique sua faixa 
//etária de acordo com as seguintes regras: menor que 12 anos: criança; de 
//12 até 17 anos: adolescente; de 18 até 59 anos: adulto; 60 anos ou mais: 
//idoso. Ao final, exiba a classificação correspondente. 

function fnIdade(idade)
{
   
    if (idade < 12 ){
        console.log("É uma criança")
        
    }else if(idade >= 12 && idade <= 17){
        console.log("É um adolecente")
    }else if ((idade > 17) && (idade <= 18) || (idade <= 59)){
        console.log ("é um adulto")
    }else{
        console.log("É um idoso")
    }
}
//5. Crie uma função que receba a largura e a altura de um retângulo, calcule sua 
//área e exiba o resultado. (Para calcular a área de um retângulo, utilize a 
//fórmula Área = base × altura), O resultado deve ser expresso em unidades de 
//área, como centímetros quadrados (cm²)

// var base = 8
// var altura = 8
// var area 
// area = base * altura
// console.log (area + "cm2")

function fnArea (base, altura){
    area = base * altura
    console.log (area + "cm2")
}

//6. Crie uma função que receba um número e realize uma contagem regressiva 
//até chegar a zero, utilizando um laço de repetição.
function fnContagemRegressiva (numero){
    for (let i = numero; i >= 0; i = i-1){
        console.log (i)
    }
}

//7. Crie uma função que receba o salário de um funcionário e aplique um 
//aumento de acordo com as seguintes regras: salários menores que R$ 1.000 
//recebem 20% de aumento, entre R$ 1.000 e R$ 2.000 recebem 15% e acima 
//de R$ 2.000 recebem 10%. Ao final, exiba o novo salário.







