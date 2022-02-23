class Calculadora
{

    constructor()
    {
        this.operaciones = ["suma", "resta", "multiplicacion", "division"];
        this.operacion = "suma";
        this.primer_numero = 0;
        this.segundo_numero = 0;
        this.resultado = 0;
        this.calcular();
    }

    calcular()
    {
        if(this.operacion === "suma")
        {
            this.resultado = this.primer_numero + this.segundo_numero;
        }
        else if(this.operacion === "resta")
        {
            this.resultado = this.primer_numero - this.segundo_numero;
        }
        else if(this.operacion === "multiplicacion")
        {
            this.resultado = this.primer_numero * this.segundo_numero;
        }
        else if(this.operacion === "division")
        {
            this.resultado = this.primer_numero / this.segundo_numero;
        }
        else
        {
            console.error("operacion no soportada");
        }
    }

    cambiarOperacion()
    {
        let posicion = this.operaciones.indexOf(this.operacion);
        let nueva_posicion = posicion + 1;
        if(nueva_posicion === this.operaciones.length)
        {
            nueva_posicion = 0;
        }
        this.operacion = this.operaciones[nueva_posicion];
    }

    mostrarOperacion()
    {
        console.log(this.operacion);
        return this.operacion;
    }

    mostrarResultado()
    {
        console.log(this.resultado);
        return this.resultado;
    }

    asignarPrimerNumero(numero = 0)
    {
        this.primer_numero = numero;
    }

    asignarSegundoNumero(numero = 0)
    {
        this.segundo_numero = numero;
    }

}

class AdministradorHtml
{
    constructor()
    {
        let self = this;
        this.calculadora = new Calculadora();
        this.$primer_numero = $('input[name=primer_numero]');
        this.$segundo_numero = $('input[name=segundo_numero]');
        this.$input_resultado = $('#resultado');
        this.$btn_operaciones = $('#boton_operaciones');
        this.$btn_resultado = $('#boton_resultado');
        this.$btn_operaciones.html( this.calculadora.mostrarOperacion() );

        this.$btn_operaciones.on('click', function(){
            self.calculadora.cambiarOperacion();
            let operacion = self.calculadora.mostrarOperacion();
            self.$btn_operaciones.html(operacion);
        });
        this.$primer_numero.on('keyup', function(){
            let valor = parseInt($(this).val());
            if(valor > 0)
            {
                self.calculadora.asignarPrimerNumero(valor);
            }
        });
        this.$segundo_numero.on('keyup', function(){
            let valor = parseInt($(this).val());
            if(valor > 0)
            {
                self.calculadora.asignarSegundoNumero(valor);
            }
        });
        this.$btn_resultado.on('click', function(){
            self.calculadora.calcular();
            let resultado = self.calculadora.mostrarResultado();
            self.$input_resultado.val(resultado);
        });
    }
}

new AdministradorHtml();

/*let calculadora = new Calculadora();
calculadora.asignarPrimerNumero(5);
calculadora.asignarSegundoNumero(10);
calculadora.calcular();
calculadora.mostrarResultado();*/


