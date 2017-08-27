import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ContentService } from "./content.service";
import { Router } from '@angular/router';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [ContentService]
})

export class ContentComponent implements OnInit {

  ad: any;
  adForm: FormGroup;

  constructor(private adService: ContentService, private fb: FormBuilder) { }
  
  ngOnInit() {}
  
  startNewAdListing() {
    this.ad =     this.adService.createAd()
    this.buildForm()
  }

  saveAdChanges() {
    if (this.adForm.status != 'VALID') {
      console.log('form is not valid, cannot save to database')
      return
    }

    const data = this.adForm.value
    this.adService.updateAd(this.ad, data)
  }

  private buildForm() {
    this.adForm = this.fb.group({
      title:    ['', Validators.required ],
      content:  ['', Validators.required ],
      price:    ['', Validators.required ],
      image:    ['', Validators.required ]
    });

    this.ad.subscribe(ad => {
      this.adForm.patchValue(ad)
    })
  }

}