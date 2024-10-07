import { Component } from '@angular/core';
import { Categorie } from '../Models/categorie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-category',
  templateUrl: './details-category.component.html',
  styleUrls: ['./details-category.component.css']
})
export class DetailsCategoryComponent {

  categories: Categorie[] = [
    {"id":1,"title":"Grand électroménager",
      "image":"assets/images/categorie_electromenager.jpg", "description":"Grand électroménager",
      "available":true},
      {"id":2,"title":"Petit électroménager",
      "image":"assets/images/categorie_petit_electromenager.jpg", "description":"test",
      "available":true},
      {"id":3,"title":"Produits informatiques",
      "image":"assets/images/categorie_produits_informatiques.jpg", "description":"test",
      "available":false},
      {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
      "description":"test", "available":true},
      {"id":5,"title":"TV, images et son",
      "image":"assets/images/categorie_tv_image_son.jpg", "description":"test",
      "available":true},
      {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
      "description":"test","available":false}
   ]

   idFromPath!:Number;
   cat!:Categorie | undefined;
  
   constructor(private actR:ActivatedRoute){}

   ngOnInit(){
   
    this.idFromPath=Number(this.actR.snapshot.params['x']);
    this.cat=this.categories.find(cat =>cat.id==this.idFromPath);
    
   }

   
   }
   
