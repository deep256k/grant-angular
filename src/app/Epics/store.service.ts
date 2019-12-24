import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storeData: any;
  formInfo: any;
  constructor() {
  }
  selectedInfo(selecteddata) {
    this.storeData = selecteddata;
  }
  formData(data) {
    this.formInfo = data;
  }
}
