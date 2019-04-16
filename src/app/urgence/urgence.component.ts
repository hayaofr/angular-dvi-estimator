import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormDataService} from '../data/formData.service';

@Component({
  selector: 'app-urgence',
  templateUrl: './urgence.component.html',
  styleUrls: ['./urgence.component.css']
})
export class UrgenceComponent implements OnInit {
  title = 'Degré d\'urgence du projet';
  urgence = '0';

  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.urgence = this.formDataService.getUrgence();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setUrgence(this.urgence);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigation vers la page suivante
      this.router.navigate(['/specification']);
    }
  }

  onChange(newValue) {
    this.urgence = newValue;
  }

}
