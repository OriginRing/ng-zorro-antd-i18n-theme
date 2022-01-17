import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminGuard } from "@my/pages/admin/admin.guard";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    canActivateChild: [AdminGuard],
    children: [
      { path: 'user', loadChildren: () => import('./routes/user/user.module').then(m => m.UserModule) },
      { path: 'banner', loadChildren: () => import('./routes/banner/banner.module').then(m => m.BannerModule) },
      { path: 'productCategory', loadChildren: () => import('./routes/product-category/product-category.module').then(m => m.ProductCategoryModule) },
      { path: 'product', loadChildren: () => import('./routes/product/product.module').then(m => m.ProductModule) },
      { path: '**', pathMatch: 'full', redirectTo: 'user' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
