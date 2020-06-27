import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Tutorial } from './../models/tutorial.model'

export const ADD_TUTORIAL = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove'


/* Nutné pro všechny  */
export class AddTutorial implements Action {
    readonly type = ADD_TUTORIAL

    /* pokud není nic na vstupu, není třeba */
    constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

/* Abychom mohli přistoupit na Actions v Reduceru */
export type Actions = AddTutorial | RemoveTutorial