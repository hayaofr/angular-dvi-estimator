import {Injectable} from '@angular/core';

import {FormData} from './formData.model';

@Injectable()
export class FormDataService {

  private formData: FormData = new FormData();
  private isEstimationFormValid = false;
  private isNbEquipeFormValid = false;
  private isTailleSpecFormValid = false;
  private isUrgenceFormValid = false;

  getEstimationVueDeNez(): number {
    return this.formData.estimationVueDeNez
  }

  setEstimationVueDeNez(data: number) {
    this.isEstimationFormValid = true;
    this.formData.estimationVueDeNez = data;
  }

  getNbEquipes(): number {
    return this.formData.nbEquipes;
  }

  setNbEquipes(data: number) {
    this.isNbEquipeFormValid = true;
    this.formData.nbEquipes = data;
  }

  getUrgence(): number {
    return this.formData.urgence;
  }

  setUrgence(data: number) {
    this.isUrgenceFormValid = true;
    this.formData.urgence = data;
  }

  getTailleSpec(): number {
    return this.formData.tailleSpec;
  }

  setTailleSpec(data: number) {
    this.isTailleSpecFormValid = true;
    this.formData.tailleSpec = data;
  }

  getFormData(): FormData {
    // Return the entire Form Data
    return this.formData;
  }

  resetFormData(): FormData {
    // Return the form data after all this.* members had been reset
    this.formData.clear();
    this.isEstimationFormValid = this.isNbEquipeFormValid = this.isTailleSpecFormValid = this.isUrgenceFormValid = false;
    return this.formData;
  }

  isFormValid() {
    // Return true if all forms had been validated successfully; otherwise, return false
    return this.isEstimationFormValid &&
      this.isNbEquipeFormValid &&
      this.isTailleSpecFormValid && this.isUrgenceFormValid;
  }
}
