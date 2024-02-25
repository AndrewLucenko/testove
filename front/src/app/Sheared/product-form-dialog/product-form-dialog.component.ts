import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {ProductsInterface} from "../../core/product.controler";

@Component({
  selector: 'app-product-form-dialog',
  templateUrl: './product-form-dialog.component.html',
  standalone: true,
  imports: [
    MatFormField,
    MatDialogContent,
    ReactiveFormsModule,
    MatInput,
    MatDialogClose,
    MatButton,
    MatDialogActions,
    MatDialogTitle,
    MatLabel,
  ],
  styleUrls: ['./product-form-dialog.component.scss']
})
export class ProductFormDialogComponent {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ProductFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ProductsInterface
) {
    this.productForm = this.fb.group({
      name: [data.name ?? '', Validators.required],
      description: [data.description ?? '', Validators.required],
      price: [data.price ?? null, [Validators.required, Validators.min(0)]],
      quantity: [data.quantity ?? null, [Validators.required, Validators.min(0)]]
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.dialogRef.close(this.productForm.value);
    }
  }
}
