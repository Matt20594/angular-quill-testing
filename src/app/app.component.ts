import { Component } from '@angular/core';
import { QuillEditorComponent } from "./quill-editor/quill-editor.component";
import { IonMenu, IonContent, IonSplitPane, IonHeader, IonToolbar, IonTitle } from '@ionic/angular/standalone';
import { MainPageComponent } from './main-page/main-page/main-page.component';

@Component({
  selector: 'app-root',
  imports: [QuillEditorComponent, IonContent, IonMenu, IonSplitPane, IonHeader, IonToolbar, IonTitle, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
