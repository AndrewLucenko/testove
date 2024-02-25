import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {ProductController, ProductsInterface} from "../../core/product.controler";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {ProductFormDialogComponent} from "../../Sheared/product-form-dialog/product-form-dialog.component";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatButton,
    MatTable,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatProgressSpinner
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
 @Input() products: ProductsInterface[] | null = [];
 displayedColumns = ['name', 'actions'];
 productController: ProductController;
 dialog: MatDialog;
 _snackBar: MatSnackBar;

  constructor() {
    this.productController = inject(ProductController);
    this._snackBar = inject(MatSnackBar);
    this.dialog = inject(MatDialog);
  }

  addProduct() {
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.productController.addProduct(result);

      this._snackBar.open(`New product add`, 'Close');
    });
  }

  editProduct(product: ProductsInterface) {
    const dialogRef = this.dialog.open(ProductFormDialogComponent, {
      width: '250px',
      data: product
    });


    dialogRef.afterClosed().subscribe(result => {
      this.productController.updateProduct({ id: product.id, ...result});

      this._snackBar.open(`Product with id ${product.id} updated`, 'Close');
    });
  }

  deleteProduct(id: string) {
    if (this.products) {
      this.productController.deleteProduct(id)
    }

    this._snackBar.open(`Delete product with id: ${id}`, 'Close');
  }
}
