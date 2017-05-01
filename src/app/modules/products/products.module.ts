import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../../components/products/products.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
    },
    {
        path: ':id',
        component: ProductsComponent,
        loadChildren: 'app/modules/product/product.module#ProductModule'
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ProductsComponent]
})

export class ProductsModule {}
