import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    { id: 101, name: "Laptop 1", image: "assets/anete-lusina-zwsHjakE_iI-unsplash.jpg", price: "$1,001.11" },
    { id: 102, name: "Laptop 2", image: "assets/bram-naus-N1gUD_dCvJE-unsplash.jpg", price: "$2,002.22" },
    { id: 103, name: "Laptop 3", image: "assets/kari-shea-1SAnrIxw5OY-unsplash.jpg", price: "$3,003.33" },
    { id: 104, name: "Laptop 4", image: "assets/michal-kubalczyk-WecngmAT-KY-unsplash.jpg", price: "$4,004.44" },
    { id: 105, name: "Laptop 5", image: "assets/nordwood-themes-_sg8nXmpWDM-unsplash.jpg", price: "$5,005.55" },
    { id: 106, name: "Laptop 6", image: "assets/james-mckinven-tpuAo8gVs58-unsplash.jpg", price: "$6,006.66" },
    { id: 107, name: "Laptop 7", image: "assets/samantha-borges-gXsJ9Ywb5as-unsplash.jpg", price: "$7,007.77" },
    { id: 108, name: "Laptop 8", image: "assets/sincerely-media-ylveRpZ8L1s-unsplash.jpg", price: "$8,008.88" },
    { id: 109, name: "Laptop 9", image: "assets/unsplash-NuFUbftUu_s-unsplash.jpg", price: "$9,009.99" },
  ];
}
