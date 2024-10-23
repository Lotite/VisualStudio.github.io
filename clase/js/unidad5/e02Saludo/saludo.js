let intervaloSaludos;

document.getElementById("comenzar").addEventListener("click", () => {
  intervaloSaludos = setInterval(() => {
    alert("Hola");
  }, 3000); 
});

document.getElementById("parar").addEventListener("click", () => {
  clearInterval(intervaloSaludos);
});
