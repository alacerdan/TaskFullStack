const { convertCurreny, readFile } = require('../api/util');

describe("Test util functions", () => {
    test('Convert VEF (float) to EUR (string)', () => {
        const underTest = convertCurreny({value:7.55}).value;
        expect(underTest).toBe("1.00");
    
    });
    
    test('Convert VEF (string) to EUR (string)', () => {
        const underTest = convertCurreny({value:"7.55"}).value;
        expect(underTest).toBe("1.00");
    
    });

    test('Read JSON File', async () => {
        const path = './db/data.json';
        const result = await readFile(path);
        const json = JSON.parse(result);

        isString = typeof(result) === 'string';
        isObj = json instanceof Object;
        underTest = isString && isObj
        expect(underTest).toBe(true);
        
    });
})


