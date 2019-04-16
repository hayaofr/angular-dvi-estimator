import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormDataService} from '../data/formData.service';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {
  title = 'La taille de la spécification';
  specification = 0;

  constructor(private router: Router, private formDataService: FormDataService) { }

  ngOnInit() {
    this.specification = this.formDataService.getTailleSpec();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setTailleSpec(this.specification);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigation vers la page suivante
      this.router.navigate(['/result']);
    }
  }

  onChange(newValue) {
    this.specification = newValue;
  }


}
