import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class NoteProvider {

  constructor(public storage: Storage) {}


}
