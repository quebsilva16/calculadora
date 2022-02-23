var valor = $('button[value=1]').val();

    $('.btn_operacion').on('click', function(){ 
        if (valor <= 0)
        {
            valor = parseFloat(valor) + 1;
            $("span", this).text("+");
        }
        else if (valor <= 1)
        {
            valor = parseFloat(valor) + 1;
            $("span", this).text("-");
        }
        else if (valor <= 2)
        {
            valor = parseFloat(valor) + 1;
            $("span", this).text("*");
        }
        else if (valor <= 3)
        {
            valor = parseFloat(valor) + 1;          
            $("span", this).text("/");

        }
        else if (valor <= 4)
        {
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
