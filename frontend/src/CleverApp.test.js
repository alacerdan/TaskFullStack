import { render } from '@testing-library/react';
import CleverApp from './CleverApp';
import VCard from './components/VCard';
import { sortBy, sortByCriteria } from './components/helpers'


describe("Clever APP Components", () => {
  test('renders Clever Task', () => {
    const { getByText } = render(<CleverApp />);
    const linkElement = getByText(/clever task/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("VCard test component", ()=>{

    const item = {
      "id": 529,
      "type": "HOTEL",
      "address1": "81 Kensington Garden Square",
      "address2": "Bayswater W2 4DJ",
      "name": "London House Hotel",
      "city": {
        "id": 3,
        "name": "London",
        "idCountry": 237,
        "country": "England"
      },
      "lowestPricePerNight": {
        "value": "56.95",
        "currency": "EUR"
      },
      "overview": "Looking for a quiet and relaxed stay only minutes from Bayswater and Hyde Park? You've found it with us!",
      "overallRating": {
        "value": 0,
        "numberOfRatings": "1378"
      },
      "starRating": 0,
      "isFeatured": false
    }

    const {getByText} = render(<VCard property={item} />)
    const el = getByText(/London/i)
  
    expect(el).toBeInTheDocument()
  
  })

})

describe("Filter Test", () => {

  const data = [
    {lowestPricePerNight:{value:10}, overallRating:{value:4 }, isFeatured: true },
    {lowestPricePerNight:{value:2 }, overallRating:{value:21}, isFeatured: false },
    {lowestPricePerNight:{value:43}, overallRating:{value:1 }, isFeatured: true },
    {lowestPricePerNight:{value:74}, overallRating:{value:78}, isFeatured: false },
    {lowestPricePerNight:{value:15}, overallRating:{value:6 }, isFeatured: true },
    {lowestPricePerNight:{value:6 }, overallRating:{value:54}, isFeatured: true }
  ]
  
  test('Properties sort asc', () => {
  
    const ordered = data.sort(sortBy('lowestPricePerNight'))
  
    const a = ordered[0].lowestPricePerNight.value
    const b = ordered[1].lowestPricePerNight.value
  
    const underTest = a < b
  
    expect(underTest).toBe(true);
  });
  
  test('Properties sort desc', () => {
  
    const ordered = data.sort(sortBy('lowestPricePerNight', 'desc'))
  
    const a = ordered[0].lowestPricePerNight.value
    const b = ordered[1].lowestPricePerNight.value
  
    const underTest = a < b
  
    expect(underTest).toBe(false);
  });
  
  test('Properties sort by Rating: Low to High', () => {
  
    const obj = {sortBy, sortByCriteria}
    const ordered = obj.sortByCriteria('lowRating', data)
  
    const a = ordered[0].overallRating.value
    const b = ordered[1].overallRating.value
  
    const underTest = a < b
  
    expect(underTest).toBe(true);
  });
  
  
  test('Properties sort by Rating: High to Low', () => {
  
    const obj = {sortBy, sortByCriteria}
    const ordered = obj.sortByCriteria('highRating', data)
  
    const a = ordered[0].overallRating.value
    const b = ordered[1].overallRating.value
  
    const underTest = a < b
  
    expect(underTest).toBe(false);
  });

  test('Properties sort by Price: Low to High', () => {
  
    const obj = {sortBy, sortByCriteria}
    const ordered = obj.sortByCriteria('lowPrice', data)
  
    const a = ordered[0].overallRating.value
    const b = ordered[1].overallRating.value
  
    const underTest = a < b
  
    expect(underTest).toBe(true);
  });

  test('Properties sort by Price: High to Low', () => {
  
    const obj = {sortBy, sortByCriteria}
    const ordered = obj.sortByCriteria('highPrice', data)
  
    const a = ordered[0].overallRating.value
    const b = ordered[1].overallRating.value
  
    const underTest = a < b
  
    expect(underTest).toBe(false);
  });

  test('Properties filter featured', () => {
  
    const obj = {sortBy, sortByCriteria}
    const ordered = obj.sortByCriteria('featured', data)
  
    const underTest = ordered.length
  
    expect(underTest).toBe(4);
  });
})





