import {Component, OnInit, TemplateRef} from '@angular/core';
import {Router} from '@angular/router';
import {FormDataService} from '../data/formData.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.css']
})
export class SpecificationComponent implements OnInit {
  public modalRef: BsModalRef;
  title = 'La taille de la spécification';
  specification = '0';

  constructor(private router: Router, private formDataService: FormDataService, private modalService: BsModalService) {
  }

  ngOnInit() {
    this.specification = this.formDataService.getTailleSpec();
  }

  save(form: any): boolean {
    if (!form.valid) {
      return false;
    }

    this.formDataService.setTailleSpec(this.specification);
    this.formDataService.computeEstimation();
    return true;
  }

  goToNext(form: any, template: TemplateRef<any>) {

    this.modalRef = this.modalService.show(template);
    this.delay(5000).then(any => {
      this.modalRef.hide();
      if (this.save(form)) {
        // Navigation vers la page suivante
        this.router.navigate(['/result']);
      }
    });


  }

  onChange(newValue) {
    this.specification = newValue;
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(() => resolve(), ms)).then();
  }


}
