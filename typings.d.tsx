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



// type ListCardProps = {
//   item: {
//     name: string
//     url: string
//   }
//   chosenPokemon: (item: PokemonDetail) => void,
//   search: string,
//   pokemon: PokemonDetail[],
//   object: PokemonDetail
// }


type Pokemon = {
  name: string,
  url: string
}

type Props = {
  item: {
    name: string,
    url: string
  }, 
  chosenPokemon: (item: any) => void
}

type PokemonDetailed = {
  pokemon: {
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
}

type ListSelection = {
    selection: string | undefined
}


type PokemonInfo = {
  id: number,
  name: string,
  weight: number,
  height: number,
  base_experience: number,
  sprites: {
    front_default: string
  },
  types: [{
    type: {
      name: string
    }
  }],
  stats: [{
    base_stat: number,
    effort: number,
    stat: {
      name: string
    }
  }],
  abilities: [{
    ability: {
      name: string
    },
    is_hidden: boolean
  }],
  moves: [{
    move: {
      name: string
    }
  }],
  evolution: [{
    evolves_to: [{
      species: {
        name: string
        url : string
      }
    }]
  }]
}

type User = {
  email: string
  password: string
}

type RegisterUser = {
  name: string
  email: string
  password: string
}

type Store= {
  theme: {
    theme: any
  }
}