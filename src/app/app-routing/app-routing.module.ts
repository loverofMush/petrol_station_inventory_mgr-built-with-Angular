import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/user/login/login.component';
import { AdminSidebarComponent } from '../components/admin-sidebar/admin-sidebar.component';
import { UsersComponent } from '../components/user/users/users.component';
import { RequestResetComponent } from '../components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from '../components/password/response-reset/response-reset.component';
import { BeforeLoginService } from '../guards/before-login.service';
import { AfterLoginService } from '../guards/after-login.service';
import { CreateUserComponent } from '../components/user/create-user/create-user.component';
import { RoleGuardService } from '../guards/roleguard.service';
import { NewwetproductsaleComponent } from '../components/sales/newwetproductsale/newwetproductsale.component';
import { DailywetsaleComponent } from '../components/sales/dailywetsale/dailywetsale.component';
import { WetProductSalesComponent } from '../components/sales/wet-product-sales/wet-product-sales.component';
import { DailyDrySaleComponent } from '../components/sales/daily-dry-sale/daily-dry-sale.component';
import { DryProductSalesComponent } from '../components/sales/dry-product-sales/dry-product-sales.component';
import { WetProductsComponent } from '../components/products/wet-products/wet-products.component';
import { CreateWetProductComponent } from '../components/products/create-wet-product/create-wet-product.component';
import { DryProductsComponent } from '../components/products/dry-products/dry-products.component';
import { EditWetProductComponent } from '../components/products/edit-wet-product/edit-wet-product.component';
import { EditDryProductComponent } from '../components/products/edit-dry-product/edit-dry-product.component';
import { CreateDryProductComponent } from '../components/products/create-dry-product/create-dry-product.component';
import { WetProductStockComponent } from '../components/stocks/wet-product-stock/wet-product-stock.component';
import { CreateWetStockComponent } from '../components/stocks/create-wet-stock/create-wet-stock.component';
import { DryProductStockComponent } from '../components/stocks/dry-product-stock/dry-product-stock.component';
import { CreateDryStockComponent } from '../components/stocks/create-dry-stock/create-dry-stock.component';
import { EditWetStockComponent } from '../components/stocks/edit-wet-stock/edit-wet-stock.component';
import { EditDryStockComponent } from '../components/stocks/edit-dry-stock/edit-dry-stock.component';
import { WetProductPurchaseComponent } from '../components/supplies/wet-product-purchase/wet-product-purchase.component';
import { EditWetPurchaseComponent } from '../components/supplies/edit-wet-purchase/edit-wet-purchase.component';
import { DryProductSupplyComponent } from '../components/supplies/dry-product-supply/dry-product-supply.component';
import { EditDrySupplyComponent } from '../components/supplies/edit-dry-supply/edit-dry-supply.component';
import { CreateWetPurchaseComponent } from '../components/supplies/create-wet-purchase/create-wet-purchase.component';
import { CreateDrySupplyComponent } from '../components/supplies/create-dry-supply/create-dry-supply.component';
import { ChartsComponent } from '../components/dashboard/charts/charts.component';
import { NewdryproductsaleComponent } from '../components/sales/newdryproductsale/newdryproductsale.component';
import { ExpensesComponent } from '../components/expenses/expenses/expenses.component';
import { EditExpenseComponent } from '../components/expenses/edit-expense/edit-expense.component';
import { CreateExpensesComponent } from '../components/expenses/create-expenses/create-expenses.component';
import { EmployeesComponent } from '../components/employees/employees/employees.component';
import { CreateExpenseCategoryComponent } from '../components/expenses/create-expense-category/create-expense-category.component';
import { EditExpenseCategoryComponent } from '../components/expenses/edit-expense-category/edit-expense-category.component';
import { ExpensesCategoryComponent } from '../components/expenses/expenses-category/expenses-category.component';
import { EditEmployeeComponent } from '../components/employees/edit-employee/edit-employee.component';
import { CreateEmployeesComponent } from '../components/employees/create-employees/create-employees.component';
import { EmployeesLevelComponent } from '../components/employees/employees-level/employees-level.component';
import { CreateEmployeeLevelComponent } from '../components/employees/create-employee-level/create-employee-level.component';
import { EditEmployeeLevelComponent } from '../components/employees/edit-employee-level/edit-employee-level.component';
import { SupplierComponent } from '../components/suppliers/supplier/supplier.component';
import { CreateSupplierComponent } from '../components/suppliers/create-supplier/create-supplier.component';
import { EditSupplierComponent } from '../components/suppliers/edit-supplier/edit-supplier.component';
import { ExpenseListComponent } from '../components/expenses/expense-list/expense-list.component';
import { DrySalesListComponent } from '../components/sales/dry-sales-list/dry-sales-list.component';
import { EditDrySaleComponent } from '../components/sales/edit-dry-sale/edit-dry-sale.component';
import { WetSalesListComponent } from '../components/sales/wet-sales-list/wet-sales-list.component';
import { EditWetSaleComponent } from '../components/sales/edit-wet-sale/edit-wet-sale.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'user-login', redirectTo: '', pathMatch: 'full', canActivate: [BeforeLoginService]},
  {path: 'request-password-reset', component: RequestResetComponent},
  {path: 'response-password-reset', component: ResponseResetComponent},
  {path: 'dashboard', component: AdminSidebarComponent, canActivate: [AfterLoginService], children: [
    {path: '', component: ChartsComponent},
    {path: 'admin-page', redirectTo: '', pathMatch: 'full', canActivate: [AfterLoginService, RoleGuardService],
      data: {
        expectedRole: 1
      }
    },
    {path: 'users', canActivate: [AfterLoginService, RoleGuardService], 
      data: { 
        expectedRole: 1
      },
      children: [
        {path: 'all-users', component: UsersComponent},
        {path: 'create-user', component: CreateUserComponent }
      ]
    },
    {path: 'sales', canActivate: [AfterLoginService], 
      children: [
        {path: 'new-wetproduct-sale', component: NewwetproductsaleComponent}, 
        {path: 'new-wetproduct-sale/:id', component: DailywetsaleComponent},
        {path: 'all-wet-sales', component: WetProductSalesComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'all-wet-sales/:id/:product_id/:date', component: WetSalesListComponent , canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'all-wet-sales/:id/:product_id/:date/edit-wet-sale/:id', component: EditWetSaleComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          } 
        },
        {path: 'new-dryproduct-sale', component: NewdryproductsaleComponent},
        {path: 'new-dryproduct-sale/:id', component: DailyDrySaleComponent}, 
        {path: 'all-dry-sales', component: DryProductSalesComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'all-dry-sales/:id/:date', component: DrySalesListComponent , canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'all-dry-sales/:id/:date/edit-dry-sale/:id', component: EditDrySaleComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          } 
        }
      ]
    },
    {path: 'products', canActivate: [AfterLoginService, RoleGuardService],
      data: {
        expectedRole: 1
      },
      children: [
        {path: 'wet-products', component: WetProductsComponent},
        {path: 'wet-products/:id', component: EditWetProductComponent},
        {path: 'create-wet-product', component: CreateWetProductComponent},
        {path: 'dry-products', component: DryProductsComponent},
        {path: 'dry-products/:id', component: EditDryProductComponent},
        {path: 'create-dry-product', component: CreateDryProductComponent}
      ]
    },
    {path: 'stocks', canActivate: [AfterLoginService], 
      children: [
        {path: 'all-wet-stocks', component: WetProductStockComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'all-wet-stocks/:id', component: EditWetStockComponent},
        {path: 'all-dry-stocks', component: DryProductStockComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'all-dry-stocks/:id', component: EditDryStockComponent},
        {path: 'create-wet-stock', component: CreateWetStockComponent},
        {path: 'create-dry-stock', component: CreateDryStockComponent}
      ]
    },
    {path: 'supplies', canActivate: [AfterLoginService], 
      children: [
        {path: 'all-wet-purchases', component: WetProductPurchaseComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'all-wet-purchases/:id', component: EditWetPurchaseComponent},
        {path: 'all-dry-supplies', component: DryProductSupplyComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'all-dry-supplies/:id', component: EditDrySupplyComponent},
        {path: 'create-wet-purchase', component: CreateWetPurchaseComponent},
        {path: 'create-dry-supply', component: CreateDrySupplyComponent}
      ]
    },
    {path: 'suppliers', canActivate: [AfterLoginService, RoleGuardService], 
      data: {
        expectedRole: 1
      },
      children: [
        {path: 'suppliers', component: SupplierComponent},
        {path: 'create-supplier', component: CreateSupplierComponent},
        {path: 'edit-supplier/:id', component: EditSupplierComponent},
      ]
    },
    {path: 'expenses', canActivate: [AfterLoginService], 
      children: [
        {path: 'all-expenses', component: ExpensesComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'all-expenses/:id/:date', component: ExpenseListComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'edit-expense/:id', component: EditExpenseComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'all-expense-category', component: ExpensesCategoryComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'create-expense', component: CreateExpensesComponent},
        {path: 'create-expense-category', component: CreateExpenseCategoryComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          }
        },
        {path: 'edit-expense-category/:id', component: EditExpenseCategoryComponent, canActivate: [RoleGuardService], 
          data: {
            expectedRole: 1
          } 
        }
      ]
    },
    {path: 'employees', canActivate: [AfterLoginService, RoleGuardService], 
      data: {
        expectedRole: 1
      }, 
      children: [
        {path: 'all-employees', component: EmployeesComponent},
        {path: 'all-employees/:id', component: EditEmployeeComponent},
        {path: 'create-employee', component: CreateEmployeesComponent},
        {path: 'all-employee-level', component: EmployeesLevelComponent},
        {path: 'create-employee-level', component: CreateEmployeeLevelComponent},
        {path: 'edit-employee-level/:id', component: EditEmployeeLevelComponent}
      ]
    }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
