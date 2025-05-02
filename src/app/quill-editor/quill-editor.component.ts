import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../Services/local-storage.service';

import Quill from 'quill';
import 'quill/dist/quill.snow.css';

@Component({
  selector: 'app-quill-editor',
  imports: [],
  templateUrl: './quill-editor.component.html',
  styleUrl: './quill-editor.component.css'
})
export class QuillEditorComponent implements OnInit {
  public quill: any;

  constructor(
    public localStorageService: LocalStorageService
  ) { }
  
  ngOnInit() {
    const fonts:any = Quill.import('formats/font');
      fonts.whitelist = [false, 'Arial', 'Calibri', 'Lucida', 'Montserrat', 'Open', 'Roboto', 'Times-New-Roman', 'Verdana'];
      Quill.register(fonts, true);

    const quillFontSize:any = Quill.import('attributors/style/size');
      quillFontSize.whitelist = [false, '8px','9px','10px','12px','14px','16px','20px','24px','32px','42px','54px','68px','84px','98px'];
      Quill.register(quillFontSize, true);

    this.quill = new Quill('#editor', {
      theme: 'snow',
      placeholder: 'Write something...',
      modules: {
        toolbar: [
          [
            { header: [1, 2, 3, 4, 5, 6, false] }, 
            { size: quillFontSize.whitelist }, 
            { font: fonts.whitelist }, 
            { color: [] }, 
            { 'background': [] }, 
            'bold', 
            'italic', 
            'underline', 
            'strike', 
            { script: 'sub' }, 
            { script: 'super' }, 
            { indent: '-1' }, 
            { indent: '+1' }, 
            { direction: 'rtl' }, 
            'blockquote', 
            { list: 'ordered' }, 
            { list: 'bullet' },
            'clean'
          ]
        ]
      },
    })

    this.quill.root.innerHTML = this.localStorageService.getItem('quillContent') || '';
  }

  public setContent(): void {
    this.localStorageService.setItem('quillContent', this.quill.root.innerHTML);
  }

  public getContent(): void {
    this.quill.root.innerHTML = this.localStorageService.getItem('quillContent') || '';
  }

  public clearContent(): void {
    this.localStorageService.removeItem('quillContent');
    this.quill.root.innerHTML = '';
  }
}
