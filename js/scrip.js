$('.btn_continuar').on('click', function(){
    let nombre = $('input[name=nombre]').val();
    let apellido = $('input[name=apellido]').val();
    let edad = $('input[name=edad]').val();

    console.log(nombre);
    console.log(apellido);
    console.log(edad);

    let texto = `
    <h1>${nombre} ${apellido}</h1>
    <h3>edad ${edad} anos </h3>
    `;
    $('#resultado').html(texto);
});
var ope = ['suma', 'resta', 'multiplicacion', 'division'];
function operacion(){
}
var valor = $('button[value=1]').val();

    $('.btn_operacion').on('click', function(){ 
        if (valor <= 0){
            valor = parseFloat(valor) + 1;
            console.log(valor);
            $("span", this).text("+");
        }
        else if (valor <= 1){
            valor = parseFloat(valor) + 1;
            console.log(valor);
            $("span", this).text("-");
        }
        else if (valor <= 2){
            valor = parseFloat(valor) + 1;
            console.log(valor);
            $("span", this).text("*");
        }
        else if (valor <= 3){
            valor = parseFloat(valor) + 1;
            console.log(valor);           
            $("span", this).text("/");

        }
        else if (valor <= 4){
            valor = 1;
            $("span", this).text("+");

        }
    });   
$('.btn_resultado').on('click', function(){
    var dt1 = $('input[name=dt1]').val();
    var dt2 = $('input[name=dt2]').val();
    if(valor <= 1){
        var suma = parseFloat(dt1) + parseFloat(dt2);
        $("#resultado2").val(suma);

    }
    else if (valor <= 2){
        var resta = parseFloat(dt1) - parseFloat(dt2);
        $("#resultado2").val(resta);

    }
    else if (valor <= 3){
        var multiplicacion = parseFloat(dt1) * parseFloat(dt2);
        $("#resultado2").val(multiplicacion);

    }
    else if (valor <=4){
        var division = parseFloat(dt1) / parseFloat(dt2);
        $("#resultado2").val(division);           
    }
    

        

        

    });
    /*var i = $("span");
var toperacion = ['suma', 'resta', 'division', 'multiplicacion'];
function operacion(){
    let dt1 = $('input[name=dt1]').val();
    let dt2 = $('input[name=dt2]').val();
    suma = parseFloat(dt1) + parseFloat(dt2);
    resta = parseFloat(dt1) - parseFloat(dt2);
    multiplicacion = parseFloat(dt1) + parseFloat(dt2);
    division = parseFloat(dt1) + parseFloat(dt2);
}*/
/*for ( i = 0; i < 3; i++){
    i = 0
}*/
/*$('.btn_resultado').on('click', function(){
    console.log(resultado);
    let texto = `
    <h1>${i}</h1>
    `;
    $('#resultado').html(texto);


});*/

/*
var toperacion = ['suma', 'resta', 'division', 'multiplicacion'];
var i = $("span");
let fp1 = $('.btn_operacion').on('click', function(){
    var i = $("span", this);
    $("span", this).text("-");
    $('.btn_operacion').on('click', function(){
        $("span", this).text("*");
        $('.btn_operacion').on('click', function(){
            $("span", this).text("/");
            $('.btn_operacion').on('click', function(){ 
            });
        });
    });
    


});
*/ 



    



