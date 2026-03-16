export default function descomponerUrl(urlString) {
    try {
        const urlA = new URL(urlString);
        const host = urlA.origin;
        const pathname = urlA.pathname;
        const parametros = {};
        urlA.searchParams.forEach((valor, nombre) => {
            parametros[nombre] = valor;
        });
        return { host: host, pathname: pathname, parametros: parametros };
    } catch (error) {
        console.error('Error al descomponer la URL:', error);
        return null;
    }
};