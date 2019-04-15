import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormDataService} from '../data/formData.service';

@Component({
  selector: 'app-nbequipes',
  templateUrl: './nbequipes.component.html',
  styleUrls: ['./nbequipes.component.css']
})
export class NbequipesComponent implements OnInit {
  title = 'Nombre d\'équipes contributrices';
  nbEquipes = 0;


  constructor(private router: Router, private formDataService: FormDataService) {
  }

  ngOnInit() {
    this.nbEquipes = this.formDataService.getNbEquipes();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setNbEquipes(this.nbEquipes);
    return true;
  }

  goToNext(form: any) {
    if (this.save(form)) {
      // Navigation vers la page suivante
      this.router.navigate(['/urgence']);
    }
  }

  onChange(newValue) {
    this.nbEquipes = newValue;
  }

}
