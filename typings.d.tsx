type PokemonDetail = {
  id:number
  name:string
  base_experience:number
  height:number
  weight:number
  abilities: {
    ability: {
      name:string
      url: string
    }
  }
  forms: {
    name:string
    url:string
  }
  moves: {
    move: {
      name:string
      url:string
    }
  }
  stats: {
    base_stat:number
    effort:number
    stat: {
      name:string
      url: string
    }
  }
  sprites: {
    front_default: string;
    front_shiny: string;
    back_default: string;
    back_shiny: string;
  }
  types: [{
    slot: number,
    type: {
      name: string
    }
  }]
}


type Pokemon = {
  name: string,
  url: string
}

type Props = {
  item: {
    name: string,
    url: string
  }
}