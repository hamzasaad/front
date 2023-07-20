import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-updateproduit',
  templateUrl: './updateproduit.component.html',
  styleUrls: ['./updateproduit.component.css']
})
export class UpdateproduitComponent implements OnInit {
  formProduit: FormGroup;
  id = this.activateroot.snapshot.params['id']
  machine: any;
  produit:any;
  submitted = false;
  constructor(private formBulder: FormBuilder,private produitService:ProduitService , private router: Router, private activateroot: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneProduit();
    this.formProduit = this.formBulder.group({
      nom: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(1)]],
      quantite: ['', [Validators.required, Validators.min(1)]],
      
    })
  }

  get f() { return this.formProduit.controls; }
  getOneProduit() {
    this.produitService.getOneProduit(this.id).subscribe(
      (res: any) => {
        this.produit = res;
        console.log("Maintenance", this.produit);
        this.Formvalalues(this.produit);
      }
    )
  }
  UpdateProduit() {
    this.submitted=true;
    if (this.formProduit.invalid) {
      return;
    }
    else{      
    this.submitted = true;
    this.produitService.updateProduits(this.formProduit.value,this.id ).subscribe(
      (res: any) => {
        console.log("maintenance modifier ! ", res)
        Swal.fire(
          'Modifier maintenance',
          'success'
        )
      }
    )
   }

  }

  Formvalalues(produit: any) {
    this.formProduit.patchValue({
      nom: produit.nom,
      prix: produit.prix,
      quantite: produit.quantite,
    })
  }
}
