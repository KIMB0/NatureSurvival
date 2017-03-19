import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()
export class NoteProvider {

  public notes: Array<string>;

  constructor(public storage: Storage) {}

  getNotes(){
    this.storage.get("notes").then((data) => {
      this.notes = data;
      if(!this.notes){
        this.notes = []
      }
    })
  }

  addNote(note: string){
    this.notes.push(note);
    this.storage.set("notes", this.notes);
  }

  deleteNote(index: number){
    this.notes.splice(index, 1);
    this.storage.set("notes", this.notes);
  }
}
