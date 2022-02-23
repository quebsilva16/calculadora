(() => {
    class Calculadora 
    {
        constructor(signo, dato1, dato2)
        {
            this.button_operacion =  $('.btn_operacion');
            this.button_resultado =  $('.btn_resultado');
            this.button_signo = signo;
            this.input_dato1 = dato1;
            this.input_dato2 = dato2;
        }
        signo()
        {

            
            this.button_operacion.on('click', function()
            {
                if (this.button_signo == null)
                {
                    this.button_signo = $('button[value=1]').val();
                }
               
                if (this.button_signo <= 0)
                {
                    this.button_signo = parseFloat(this.button_signo) + 1;
                    $("span").text("+");
                    $('.btn_operacion').val("1");
                }
                else if (this.button_signo <= 1)
                {
                    this.button_signo = parseFloat(this.button_signo) + 1;
                    $("span").text("-");
                    $('.btn_operacion').val("2");
                }
                else if (this.button_signo <= 2)
                {
                    this.button_signo = parseFloat(this.button_signo) + 1;
                    $("span").text("*");
                    $('.btn_operacion').val("3");
                }
                else if (this.button_signo <= 3)
                {
                    this.button_signo = parseFloat(this.button_signo) + 1;          
                    $("span").text("/");
                    $('.btn_operacion').val("4");

                }
                else if (this.button_signo <= 4)
                {
                    this.button_signo = 1;     
                    $("span").text("+");
                    $('.btn_operacion').val("1");
                }
            });
        }
        operacion()
        {
            this.button_resultado.on('click', function()
            {
                this.input_dato1 = $('input[name=dt1]').val();
                this.input_dato2 = $('input[name=dt2]').val();
                this.button_signo = $('.btn_operacion').val();
                console.log(this.button_signo);
                if(this.button_signo <= 1){
                    var suma = parseFloat(this.input_dato1) + parseFloat(this.input_dato2);
                    $("#resultado2").val(suma);
            
                }
                else if (this.button_signo <= 2){
                    var resta = parseFloat(this.input_dato1) - parseFloat(this.input_dato2);
                    $("#resultado2").val(resta);
            
                }
                else if (this.button_signo <= 3){
                    var multiplicacion = parseFloat(this.input_dato1) * parseFloat(this.input_dato2);
                    $("#resultado2").val(multiplicacion);
                }
                else if (this.button_signo <=4){
                    var division = parseFloat(this.input_dato1) / parseFloat(this.input_dato2);
                    if(this.input_dato1 == 0)
                    {
                        if(this.input_dato2 == 0)
                        {
                            division = 0;
                        }
                    }
                    $("#resultado2").val(division);     
                }
            });

        }

    }
    let operacion = new Calculadora();
    operacion.signo();
    operacion.operacion();
    
})();