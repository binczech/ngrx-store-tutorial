import { Tutorial } from './models/tutorial.model'

/* Pokud bych měl více modelů, importuju a přidám řádek do AppState */
export interface AppState {
    readonly tutorial: Tutorial[];
}