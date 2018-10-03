import { Dict } from './dict'

export type Argv = Dict<string> & { _: string[] }