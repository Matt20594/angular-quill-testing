import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../Services/local-storage.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent  implements OnInit {
  public content: string = 'Main Page Content';

  constructor(
    public localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.content = this.localStorageService.getItem('quillContent') || '';
  }

  public setContent(): void {
    this.content = this.localStorageService.getItem('quillContent') || '';
  }

}
