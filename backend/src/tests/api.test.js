const axios = require('axios');
 
const API = 'http://localhost:5000';


describe("API test connection and data returned", () => {
    test('API should return all proprieties', async () => {
          const req = await axios.get(`${API}/properties`);
          const underTest = req.data.length > 1
          expect(underTest).toBe(true);
    });
    test('API should return one property by ID', async () => {
          const req = await axios.get(`${API}/properties/1`);
          const underTest = req.data.length
          expect(underTest).toBe(0);
          
     });
    
    test('API should not return any properties by ID', async () => {
          const req = await axios.get(`${API}/properties/88047`);
          const underTest = req.data.length
          expect(underTest).toBe(1);
      });

})



