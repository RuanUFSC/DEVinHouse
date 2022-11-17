const buscaMediaIdade = async (name) => {
    try {
        const resultado = await fetch(`https://api.agify.io/?country_id=BR&name=${name}`);
        const data = await resultado.json();
        console.log(`${name} - ${data.age}`);
    } catch (err) {
        console.error(err);
    }
};

buscaMediaIdade('Ruan');
