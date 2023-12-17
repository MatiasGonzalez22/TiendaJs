const {google} = require ("googleapis")

const auth = new google.auth.GoogleAuth({

    keyFile: './secret-key.json',
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],

});

const sheets = google.sheets ({ version: "v4", auth: auth});

async function read() {
    const response = await  sheets.spreadsheets.values.get({
        spreadsheetId: "1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms",
        range: "Class Data!A2:E",
    });


    const rows= response.data.values;
    const products = rows.map((row)=> ({
        id: +row [0],
        name: +row [1],
        price: +row [2],
        image: +row [3],
        stock: +row [4],
    }));

    return products;
}