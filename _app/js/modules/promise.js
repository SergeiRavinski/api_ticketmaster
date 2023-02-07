export const myPromise = new Promise((fullfilled, reject) => {
    const error = false;
    setTimeout(() => {
        if(!error) {
            fullfilled('vellykket! operasjon');
        } else {
            reject('oops noe gikk galt! prøv igjen');
        }
    }, 3000);
});
