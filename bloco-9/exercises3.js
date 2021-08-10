const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars); // imprime no tempo normal

  setTimeout(()=>{ //imprime depois de 4 segundos
    console.log('depois de 4 segundos => Returned planet: ', mars);
  }, 4000);
};

getPlanet(); // imprime Marte depois de 4 segundos
