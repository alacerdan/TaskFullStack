
function sortBy(key, order='asc'){
    const compare = (a, b) => {
      if (+a[key].value > +b[key].value) {
        return order === 'asc'? 1: -1;
      }
      if (+a[key].value < +b[key].value) {
        return order === 'asc'? -1: 1;
      }
      return 0;

    }
    return compare
}

function sortByCriteria (value, properties){
    let ordered = []

    switch (value) {
      case 'lowPrice':
        ordered = properties.sort(this.sortBy('lowestPricePerNight'));
        break;

      case 'highPrice':
        ordered = properties.sort(this.sortBy('lowestPricePerNight', 'desc'));
        break;
      
      case 'lowRating':
        ordered = properties.sort(this.sortBy('overallRating'));
        break;

      case 'highRating':
        ordered = properties.sort(this.sortBy('overallRating', 'desc'));
        break;

      case 'featured':
        ordered = properties.filter(item => item.isFeatured);
        break;
    
      default:
        break;
    }
    return ordered
  }


export {
    sortBy,
    sortByCriteria
}
