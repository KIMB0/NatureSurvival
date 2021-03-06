import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NotesPage } from '../notes/notes';
import { MapPage } from '../map/map';
import { WeatherPage } from '../weather/weather';
import { SharePage } from '../share/share';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  homeRoot = HomePage;
  notesRoot = NotesPage;
  mapRoot = MapPage;
  weatherRoot = WeatherPage;
  shareRoot = SharePage;
}
