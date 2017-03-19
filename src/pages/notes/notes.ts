import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NoteProvider } from '../../providers/note-provider';
import { ToastProvider } from '../../providers/toast-provider';

@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html'
})
export class NotesPage {

  constructor(private noteProvider: NoteProvider, private alertCtrl: AlertController, public toastProvider: ToastProvider) {}

  ionViewDidLoad() {
    this.noteProvider.getNotes();
  }

  presentAddNoteAlert(){
    let alert = this.alertCtrl.create({
      title: "Add a note",
      inputs: [{
        name: "note",
        placeholder: "Write a note here",
        type: "text"
      }],
      buttons: [{
        text: "Cancel",
        role: "cancel"
      },
      {
        text: "Add",
        handler: data => {
          if(data.note != ""){
            this.noteProvider.addNote(data.note);
          }
        }
      }]
    });
    alert.present();
  }

  deleteNote(index: number){
    this.noteProvider.deleteNote(index);
    this.toastProvider.presentToast("Note deleted");
  }

}
