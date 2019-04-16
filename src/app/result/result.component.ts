import {Component, OnInit} from '@angular/core';
import {FormDataService} from '../data/formData.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title = 'Résultat de l\'estimation';
  finalEstimation = 0;

  constructor(private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.finalEstimation = this.formDataService.getFinalEstimation();
  }

}
