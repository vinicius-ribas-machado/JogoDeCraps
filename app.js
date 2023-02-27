let dados = Math.floor(Math.random() * 13)


function Craps(){
    if(dados == 7 || dados == 11){
        console.log('Natural')
    }else if(dados == 3 || dados == 2 || dados == 12){
        console.log('vc perdeu')
    }else if(dados == 4 || dados == 5 || dados == 6 || dados == 9 || dados == 8 || dados == 10){
        console.log('Vc ganhou só  '+ dados)
    }
}

Craps()