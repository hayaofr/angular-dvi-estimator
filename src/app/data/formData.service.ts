import {Injectable} from '@angular/core';

import {FormData} from './formData.model';

@Injectable()
export class FormDataService {

  private formData: FormData = new FormData();
  private isEstimationFormValid = false;
  private isNbEquipeFormValid = false;
  private isTailleSpecFormValid = false;
  private isUrgenceFormValid = false;

  private finalEstimation = 0;

  public computeEstimation() {

    let estimation = this.getEstimationVueDeNez();

    console.log('Spec ' + this.getTailleSpec());
    console.log('Urgence ' + this.getUrgence());
    console.log('NbEquipe ' + this.getNbEquipes());

    estimation = this.computeNbEquipe(this.getNbEquipes(), estimation);
    estimation = this.computeUrgence(this.getUrgence(), estimation);
    this.finalEstimation = this.computeSpecification(this.getTailleSpec(), estimation);
  }

  private computeNbEquipe(nbEquipes: string, estimation: number) {
    switch (nbEquipes) {
      case '0':
        return estimation * 1.2;
        break;
      case '1':
        return estimation * 1.3
        break;
      case '2':
        return estimation * 1.5;
        break;
      default:
        return estimation;
        break;
    }
  }

  private computeUrgence(urgence: string, estimation: number) {
    switch (urgence) {
      case '0':
        return estimation * 1.5;
        break;
      case '1':
        return estimation * 1.4
        break;
      case '2':
        return estimation * 1.3;
        break;
      default:
        return estimation;
        break;
    }
  }

  private computeSpecification(specification: string, estimation: number) {
    switch (specification) {
      case '0':
        return estimation * 1.5;
        break;
      case '1':
        return estimation * 1.2
        break;
      case '2':
        return estimation * 1.3;
        break;
      default:
        return estimation;
        break;
    }
  }

  getFinalEstimation(): number {
    return this.finalEstimation;
  }

  getEstimationVueDeNez(): number {
    return this.formData.estimationVueDeNez
  }

  setEstimationVueDeNez(data: number) {
    this.isEstimationFormValid = true;
    this.formData.estimationVueDeNez = data;
  }

  getNbEquipes(): string {
    return this.formData.nbEquipes;
  }

  setNbEquipes(data: string) {
    this.isNbEquipeFormValid = true;
    this.formData.nbEquipes = data;
  }

  getUrgence(): string {
    return this.formData.urgence;
  }

  setUrgence(data: string) {
    this.isUrgenceFormValid = true;
    this.formData.urgence = data;
  }

  getTailleSpec(): string {
    return this.formData.tailleSpec;
  }

  setTailleSpec(data: string) {
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
