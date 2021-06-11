//Instancio mi Neurona 





window.onload = function() {
  const Entrada = document.querySelector("input")
  const Spoiler = document.querySelector("#spoiler")


  const NeuronaAprendeColor = new brain.NeuralNetwork({
    activaction:'sigmoid',// función de activación  existen tres tipos -> sigmoid (predeterminada,relu, leaky-relu, tanh)
    learningRate:0.5, // tasa de aprendizaje global, útil cuando se entrena usando streams
    iterations:20000,// training iterations
  });  

/*
//No me funciona los claros y oscuros ando metiendo mal los datos de entrada // 

  NeuronaAprendeColor.train([
    {input:{r:0,        g:0,    b:0   },   output:{oscuro:1}},
    {input:{r:0.019,    g:0.019,    b:0.019   },   output:{oscuro:1}},
    {input:{r:0.003,    g:0.003,    b:0.003   },   output:{oscuro:1}},
    {input:{r:0.011,    g:0.011,    b:0.011   },   output:{oscuro:1}},
    {input:{r:0.023,    g:0.015,    b:0.015   },   output:{oscuro:1}},
    {input:{r:0.39,     g:0.23,     b:0.23  },     output:{oscuro:1}},

    {input:{r:1,       g:1,      b:1 },      output:{claro:1} },
    {input:{r:0.45,    g:0.17,   b:0.17 },   output:{claro:1}  },
    {input:{r:0.51,    g:0.32,   b:0.32 },   output:{claro:1}  },
    {input:{r:0.54,    g:0.47,   b:0.47 },   output:{claro:1}  },
    {input:{r:0.92,    g:0.49,   b:0.49 },   output:{claro:1}  },
    {input:{r:0.99,    g:0.49,   b:0.49 },   output:{claro:1}  },
    
  ]);
  */

  
  //Este si funciona 
  
    NeuronaAprendeColor.train([{input: {r:1, g:0.65, b:0},  output: {orange: 1}},
    {input: {r:0, g:0.54, b:0},  output: {green: 1}},
    {input: {r:0.6, g:1, b:0.5}, output: {green: 1}},
    {input: {r:0.67, g:0, b:1},  output: {purple: 1}}]);
  

  
  

  Entrada.addEventListener("change", (e) => {
    Spoiler.style.background = e.target.value;
    var ColorRGB = getRgb(e.target.value);
    console.log("Color Selecionado: " + e.target.value);
    console.log("Rojo: " + ColorRGB.r);
    console.log("Azul: " + ColorRGB.b);
    console.log("Verde: " + ColorRGB.g);


   let ColorSelect = {
      r: ColorRGB.r,
      g: ColorRGB.g,
      b: ColorRGB.b
    }


    let resultadoNeurona = NeuronaAprendeColor.run( ColorRGB );

    console.log( "Resultado Run", resultadoNeurona);

    const ResultadoProbabilidad = brain.likely( ColorRGB , NeuronaAprendeColor);

    console.log( "Resultado Likely", ResultadoProbabilidad);


    let colorIA = "";
    
               

  switch (ResultadoProbabilidad) {
    case 'green':
       
       document.querySelector("#texto").style.color='white';       
       
      break;    
      case 'orange':
       
         document.querySelector("#texto").style.color='black';       
      break;    
      case 'purple':
       
         document.querySelector("#texto").style.color='red';       
      break;
    default:
      break;
  }





  })

 //Metodo que me permite obtener el RGB por separado 
  function getRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
      return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null;
  }
}
