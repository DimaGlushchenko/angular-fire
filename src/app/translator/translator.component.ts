import { Component, OnInit } from '@angular/core';
import { TranslatorService } from './translator.service';

@Component({
  selector: 'translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.scss'],
  providers: [TranslatorService]
})
export class TranslatorComponent implements OnInit {
  
  ngOnInit() {}
  
  userText: string;
  currentTranslation;

  constructor(private translateSvc: TranslatorService) { }
  
  handleTranslation() {
    this.currentTranslation = this.translateSvc.createTranslation(this.userText)
  }
  
  defaultMessage() {
    if (!this.currentTranslation) return "Enter text and click run translation"
    else return "Running translation in the cloud..."
  }

}
