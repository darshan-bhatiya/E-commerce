import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsSearchComponent } from './components/products-search/products-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ProductsListComponent } from './pages/products-list/products-list.component';

import { ButtonModule } from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';

import { ProductPageComponent } from './pages/product-page/product-page.component';
import { UiModule } from '@bluebites/ui';
//NGSX
import { NgxsModule } from '@ngxs/store';
import { ProductState } from './store/state/product.state';

const routes: Routes =[
    {
        path: 'products',
        component: ProductsListComponent
    },
    {
        path: 'category/:categoryid',
        component: ProductsListComponent
    },
    {
        path: 'products/:productid',
        component: ProductPageComponent
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ButtonModule,
        CheckboxModule,
        RatingModule,
        InputNumberModule,
        FormsModule,
        UiModule,
        //NGSX
        NgxsModule.forRoot([ProductState]),
    ],
    declarations: [
        ProductsSearchComponent,
        CategoriesBannerComponent,
        ProductItemComponent,
        FeaturedProductsComponent,
        ProductsListComponent,
        ProductPageComponent
    ],
    exports: [
        ProductsSearchComponent,
        CategoriesBannerComponent,
        ProductItemComponent,
        FeaturedProductsComponent,
        ProductsListComponent,
        ProductPageComponent
    ]
})
export class ProductsModule {}