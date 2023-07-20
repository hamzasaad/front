import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css']
})
export class AddproduitComponent implements OnInit {
  formProduct: FormGroup;
  submitted = false;
  produit: any;
  fileToUpload: Array<File> = [];
  constructor(private formBulder: FormBuilder, private produitService: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProduit();
    this.formProduct = this.formBulder.group({
      nom: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(1)]],
      quantite: ['', [Validators.required, Validators.min(1)]],
      
    })
  }
  get f() { return this.formProduct.controls; }
  handelFileInput(files: any) {
    this.fileToUpload = <Array<File>>files.target.files;
    console.log(this.fileToUpload)
  }
  getAllProduit() {
    this.produitService.getProduit().subscribe(
      (res: any) => {
        this.produit = res;
        console.log("produit : ", this.produit);
      }
    )
  }
  AjouterProduit() {
    this.submitted = true;
    if (this.formProduct.invalid) {
      return;
    } else {
      this.produitService.addProduit(this.formProduct.value).subscribe(
        (res: any) => {
          console.log("produit ", res)
          Swal.fire(
            'Ajouter produit',
          )
        }
      )

    }

  }
}
