import {Component, Input, OnInit} from '@angular/core';
import {FormDataService} from './data/formData.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  @Input() formData;

  constructor(private formDataService: FormDataService) {
  }

  ngOnInit(): void {
    this.formData = this.formDataService.getFormData()
  }
}
