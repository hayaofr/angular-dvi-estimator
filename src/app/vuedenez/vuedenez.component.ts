import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormDataService} from '../data/formData.service';

@Component({
  selector: 'app-vuedenez',
  templateUrl: './vuedenez.component.html',
  styleUrls: ['./vuedenez.component.css']
})
export class VuedenezComponent implements OnInit {
  title = 'Votre estimation du projet à Vue de Nez';
  aVueDeNez = 0;

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.aVueDeNez = this.formDataService.getEstimationVueDeNez();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setEstimationVueDeNez(this.aVueDeNez);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigation vers la page suivante
      this.router.navigate(['/nbequipes']);
    }
  }

}
