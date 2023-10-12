import { Component } from "@angular/core";

@Component({
  selector: "app-products-header",
  templateUrl: "./products-header.component.html",
})
export class ProductsHeaderComponent {
  sort = "desc";
  itemsShowCounter: number = 12;

  onSortUpdated(newSort: string): void {
    this.sort = newSort;
  }

  onItemsCounterUpdated(newItemsCounter: number): void {
    this.itemsShowCounter = newItemsCounter;
  }
}
