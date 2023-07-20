import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listproduit',
  templateUrl: './listproduit.component.html',
  styleUrls: ['./listproduit.component.css']
})
export class ListproduitComponent implements OnInit {
  produit: any;
  p: number = 1;
  searchFilter: any = '';
  constructor(private serviceProduit: ProduitService, private router: Router) { }

  ngOnInit(): void {
    this.getAllProduit();
  }
  getAllProduit() {
    this.serviceProduit.getProduit().subscribe(
      (res: any) => {
        this.produit = res;
        console.log("produit : ", this.produit);
      }
    )
  }

  deleteProduit(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceProduit.deleteProduit(id).subscribe(

          (res: any) => {
            console.log("deleted");
            this.getAllProduit()
          })

        Swal.fire(
          'Deleted!',
          'Your machine has been deleted.',
          'success'
        )

      }

    }

    )

  }
}
