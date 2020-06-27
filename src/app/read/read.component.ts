import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; /* to je, co se vrací z reduceru, když chceme přistoupit k datům. */
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/tutorial.actions'

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    /* Takto přistupujeme k ngrx storu; tutorial se váže na řádek tutorial: TutorialReducer z app.module */
    this.tutorials = store.select('tutorial')
  }

  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }

  ngOnInit(): void {
  }

}
