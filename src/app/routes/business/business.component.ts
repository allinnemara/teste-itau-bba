import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBusiness } from 'src/app/interfaces/IBusiness';
import { BusinessService } from 'src/app/services/business.service';
import { ViacepService } from 'src/app/services/viacep.service';
import { FormGroup, FormControl, Validators, AbstractControl, NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  business!: IBusiness;
  form!: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private businessService: BusinessService,
    private cepService: ViacepService,
    private snackBar: MatSnackBar
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: any) => {
        if (param.id) this.getBusiness(Number(param.id));
      }
    );
  }

  createForm() {
    this.form = new FormGroup({
      name: new FormControl(''),
      business: new FormControl(''),
      valuation: new FormControl(''),
      cnpj: new FormControl(''),
      active: new FormControl(true),
      adressCep: new FormControl(''),
      adressBairro: new FormControl(''),
      adressLogradouro: new FormControl(''),
      adressLocalidade: new FormControl(''),
      adressUf: new FormControl(''),
    })
  }

  resetForm() {
    this.form.reset();
  }

  save() {
    this.snackBar.open('Alteração salva com sucesso!', '', {
      duration: 5000,
      panelClass: 'bgSuccess',
      horizontalPosition: 'right'
    });
  }

  getBusiness(id: number){
    this.businessService.getBusinessById(id).subscribe(
      (result: IBusiness) => {
        this.business = result;
        this.business.valuation = Number(this.business.valuation.toFixed(2));

        this.form.get('name')?.setValue(result.name)
        this.form.get('business')?.setValue(result.business)
        this.form.get('valuation')?.setValue(result.valuation)
        this.form.get('cnpj')?.setValue(result.cnpj)
        this.form.get('active')?.setValue(result.active)
        this.form.get('adressCep')?.setValue(result.cep)

        this.completeAdress();
      }, (error: any) => {
        console.error(error);
      }
    );
  }

  async completeAdress() {
    try {
      const adress = await this.cepService.getCEP(this.business.cep)

      if(adress){
        this.form.get('adressBairro')?.setValue(adress.bairro)
        this.form.get('adressLogradouro')?.setValue(adress.logradouro)
        this.form.get('adressLocalidade')?.setValue(adress.localidade)
        this.form.get('adressUf')?.setValue(adress.uf)
      }
    } catch (error) {
      console.error(error)
    }
  }

  backPreviousPage(){
    window.history.back()
  }
}
