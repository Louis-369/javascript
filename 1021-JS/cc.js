// setTimeout(() => {
//   console.log(123);
// }, 3000);

const url =
  "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";
fetch(url)
  .then((resp) => {
    return resp.json();
  })

  .then((stations) => {
    stations
      .filter((station) => {
        return (
          station.ar.includes("民權西路") && station.available_rent_bikes >= 10
        );
      })

      .forEach((station) => {
        const address = station.ar;
        const bikes = station.available_rent_bikes;
        console.log(`(${bikes})${address} `);
      });
  })
  .catch((err) => {
    console.log(err);
  });
