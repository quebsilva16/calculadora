(() => {
    var valor = $('button[value=1]').val();
    class Calculadora 
    {
        constructor(operacion, resultado, dato1, dato2 )
        {
            this.button_operacion = operacion;
            this.button_resultado = resultado;
            this.input_dato1 = dato1;
            this.input_dato2 = dato2;
        }
        signo()
        {
            
            $('.btn_operacion').on('click', function()
            {
                if (valor <= 0)
                {
                    valor = parseFloat(valor) + 1;
                    $("span", this).text("+");
                    return valor;
                }
                else if (valor <= 1)
                {
                    valor = parseFloat(valor) + 1;
                    $("span").text("-");
                    return valor;
                }
                else if (valor <= 2)
                {
                    valor = parseFloat(valor) + 1;
                    $("span", this).text("*");
                    return valor;
                }
                else if (valor <= 3)
                {
                    valor = parseFloat(valor) + 1;          
                    $("span", this).text("/");
                    return valor;
                }
                else if (valor <= 4)
                {
                    valor = 1;
                    $("span", this).text("+");
                    return valor;
        
                }
            });
        }
        operacion()
        {
            let dt1 = $('input[name=dt1]').val();
            let dt2 = $('input[name=dt2]').val();
            if(valor == 1){
                var suma = parseFloat(dt1) + parseFloat(dt2);

                $("#resultado2").val(suma);
                console.log(suma);
        
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
        }

    }
    let operacion = new Calculadora();
    operacion.signo();
     $('.btn_resultado').on('click', function(){
        operacion.operacion();
    });
})();