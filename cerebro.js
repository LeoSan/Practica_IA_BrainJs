window.onload = function() {
  const Entrada = document.querySelector("input")
  const Spoiler = document.querySelector("#spoiler")

  Entrada.addEventListener("change", (e) => {
    Spoiler.style.background = e.target.value;
    var ColorRGB = getRgb(e.target.value);
    console.log("Color Selecionado: " + e.target.value);
    console.log("Rojo: " + ColorRGB.r);
    console.log("Azul: " + ColorRGB.b);
    console.log("Verde: " + ColorRGB.g);

  })

  // https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
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
