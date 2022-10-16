export const typeColor = (type: string) => {
  switch (type) {
    case 'bug':
      return '#A8B820';
    case 'dark':
      return '#705848';
    case 'dragon':
      return '#7038F8';
    case 'electric':
      return '#F8D030';
    case 'fairy':
      return '#FDB9E9';
    case 'fighting':
      return '#C03028';
    case 'fire':
      return '#FD7D25';
    case 'flying':
      return '#A890F0';
    case 'ghost':
      return '#7B62A3';
    case 'grass':
      return '#95C24D';
    case 'ground':
      return '#E0C068';
    case 'ice':
      return '#98D8D8';
    case 'normal':
      return '#A3ACAE';
    case 'psychic':
      return '#F366B9';
    case 'poison':
      return '#BA7EC8';
    case 'rock':
      return '#B8A038';
    case 'steel':
      return '#B8B8D0';
    case 'water':
      return '#4592C3';
    default:
      return '#A3ACAE';
  }
}
