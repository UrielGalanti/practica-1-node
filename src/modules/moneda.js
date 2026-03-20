import currencyCodes from "currency-codes";

const paisAMoneda = {
  AR: "ARS",
  US: "USD",
  BR: "BRL",
  CL: "CLP",
  UY: "UYU",
  EU: "EUR"
};

export function obtenerMoneda(pais) {
  try {
    const codigoMoneda = paisAMoneda[pais.toUpperCase()];

    if (!codigoMoneda) {
      console.log("País no encontrado");
    }

    const moneda = currencyCodes.code(codigoMoneda);

    return moneda.currency;
  } catch (error) {
    console.log("Error:");
  }
}