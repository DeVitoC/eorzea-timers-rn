export interface Node {
  id: number;
  name: string;
  time?: number;
  duration?: number;
  location: string;
  img: string;
  description: string;
  type: string;
  source: string;
  lvl: number;
  stars: number;
  x: number;
  y: number;
  expac: number;
  gathering: number;
  desynthLvl?: number;
  desynthJob?: string
  mooch?: boolean
  moochFrom?: string[]
  isWeatherChain?: boolean
  weatherChain?: string[]
  weather?: string[]
  waterType?: string
}
