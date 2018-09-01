import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { LoginComponent } from './components/user/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/user/signup/signup.component';
import { UsersComponent } from './components/user/users/users.component';
import { NotificationComponent } from './components/notification/notification.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { CreateUserComponent } from './components/user/create-user/create-user.component';
import { DailywetsaleComponent } from './components/sales/dailywetsale/dailywetsale.component';
import { NewwetproductsaleComponent } from './components/sales/newwetproductsale/newwetproductsale.component';
import { WetProductSalesComponent } from './components/sales/wet-product-sales/wet-product-sales.component';
import { EditWetSaleComponent } from './components/sales/edit-wet-sale/edit-wet-sale.component';
import { DailyDrySaleComponent } from './components/sales/daily-dry-sale/daily-dry-sale.component';
import { DryProductSalesComponent } from './components/sales/dry-product-sales/dry-product-sales.component';
import { CreateDryProductComponent } from './components/products/create-dry-product/create-dry-product.component';
import { DryProductsComponent } from './components/products/dry-products/dry-products.component';
import { CreateWetProductComponent } from './components/products/create-wet-product/create-wet-product.component';
import { WetProductsComponent } from './components/products/wet-products/wet-products.component';
import { EditWetProductComponent } from './components/products/edit-wet-product/edit-wet-product.component';
import { EditDryProductComponent } from './components/products/edit-dry-product/edit-dry-product.component';
import { WetProductStockComponent } from './components/stocks/wet-product-stock/wet-product-stock.component';
import { CreateWetStockComponent } from './components/stocks/create-wet-stock/create-wet-stock.component';
import { EditWetStockComponent } from './components/stocks/edit-wet-stock/edit-wet-stock.component';
import { EditDryStockComponent } from './components/stocks/edit-dry-stock/edit-dry-stock.component';
import { CreateDryStockComponent } from './components/stocks/create-dry-stock/create-dry-stock.component';
import { DryProductStockComponent } from './components/stocks/dry-product-stock/dry-product-stock.component';
import { WetProductPurchaseComponent } from './components/supplies/wet-product-purchase/wet-product-purchase.component';
import { DryProductSupplyComponent } from './components/supplies/dry-product-supply/dry-product-supply.component';
import { CreateDrySupplyComponent } from './components/supplies/create-dry-supply/create-dry-supply.component';
import { CreateWetPurchaseComponent } from './components/supplies/create-wet-purchase/create-wet-purchase.component';
import { EditWetPurchaseComponent } from './components/supplies/edit-wet-purchase/edit-wet-purchase.component';
import { EditDrySupplyComponent } from './components/supplies/edit-dry-supply/edit-dry-supply.component';
import { SupplierComponent } from './components/suppliers/supplier/supplier.component';
import { CreateSupplierComponent } from './components/suppliers/create-supplier/create-supplier.component';
import { EditSupplierComponent } from './components/suppliers/edit-supplier/edit-supplier.component';
import { ChartsComponent } from './components/dashboard/charts/charts.component';
import { NewdryproductsaleComponent } from './components/sales/newdryproductsale/newdryproductsale.component';
import { ExpensesComponent } from './components/expenses/expenses/expenses.component';
import { ExpensesCategoryComponent } from './components/expenses/expenses-category/expenses-category.component';
import { CreateExpensesComponent } from './components/expenses/create-expenses/create-expenses.component';
import { EditExpenseComponent } from './components/expenses/edit-expense/edit-expense.component';
import { EmployeesComponent } from './components/employees/employees/employees.component';
import { EmployeesLevelComponent } from './components/employees/employees-level/employees-level.component';
import { CreateEmployeesComponent } from './components/employees/create-employees/create-employees.component';
import { EditEmployeeComponent } from './components/employees/edit-employee/edit-employee.component';
import { EditExpenseCategoryComponent } from './components/expenses/edit-expense-category/edit-expense-category.component';
import { CreateExpenseCategoryComponent } from './components/expenses/create-expense-category/create-expense-category.component';
import { EditEmployeeLevelComponent } from './components/employees/edit-employee-level/edit-employee-level.component';
import { CreateEmployeeLevelComponent } from './components/employees/create-employee-level/create-employee-level.component';

import { AuthenticationService } from './services/authentication.service';
import { TokenService } from './services/token.service';
import { UserService } from './services/user.service';
import { NotificationService } from './services/notification.service';
import { TokenInterceptor } from './guards/token-interceptor';
import { AfterLoginService } from './guards/after-login.service';
import { BeforeLoginService } from './guards/before-login.service';
import { RoleGuardService } from './guards/roleguard.service';
import { ErrorsHandler } from './guards/errors-handler';
import { SalesService } from './services/sales.service';
import { ProductService } from './services/product.service';
import { StocksService } from './services/stocks.service';
import { SearchPipe } from './search.pipe';
import { SuppliesService } from './services/supplies.service';
import { DealerService } from './services/dealer.service';
import { ChartsService } from './services/charts.service';
import { ExpensesService } from './services/expenses.service';
import { EmployeesService } from './services/employees.service';
import { ExpenseListComponent } from './components/expenses/expense-list/expense-list.component';
import { DrySalesListComponent } from './components/sales/dry-sales-list/dry-sales-list.component';
import { WetSalesListComponent } from './components/sales/wet-sales-list/wet-sales-list.component';
import { EditDrySaleComponent } from './components/sales/edit-dry-sale/edit-dry-sale.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminSidebarComponent,
    LoginComponent,
    NavigationComponent,
    SignupComponent,
    UsersComponent,
    NotificationComponent,
    RequestResetComponent,
    ResponseResetComponent,
    CreateUserComponent,
    DailywetsaleComponent,
    NewwetproductsaleComponent,
    WetProductSalesComponent,
    EditWetSaleComponent,
    DailyDrySaleComponent,
    DryProductSalesComponent,
    CreateDryProductComponent,
    DryProductsComponent,
    CreateWetProductComponent,
    WetProductsComponent,
    EditWetProductComponent,
    EditDryProductComponent,
    WetProductStockComponent,
    CreateWetStockComponent,
    EditWetStockComponent,
    DryProductStockComponent,
    EditDryStockComponent,
    CreateDryStockComponent,
    SearchPipe,
    WetProductPurchaseComponent,
    DryProductSupplyComponent,
    CreateDrySupplyComponent,
    CreateWetPurchaseComponent,
    EditWetPurchaseComponent,
    EditDrySupplyComponent,
    SupplierComponent,
    CreateSupplierComponent,
    EditSupplierComponent,
    ChartsComponent,
    NewdryproductsaleComponent,
    ExpensesComponent,
    ExpensesCategoryComponent,
    CreateExpensesComponent,
    EditExpenseComponent,
    EmployeesComponent,
    EmployeesLevelComponent,
    CreateEmployeesComponent,
    EditEmployeeComponent,
    EditExpenseCategoryComponent,
    CreateExpenseCategoryComponent,
    EditEmployeeLevelComponent,
    CreateEmployeeLevelComponent,
    ExpenseListComponent,
    DrySalesListComponent,
    WetSalesListComponent,
    EditDrySaleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SnotifyModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthenticationService,
    TokenService,
    UserService,
    NotificationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AfterLoginService,
    BeforeLoginService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService,
    RoleGuardService,
    {
      provide: ErrorHandler,
      useClass: ErrorsHandler
    },
    SalesService,
    ProductService,
    StocksService,
    SuppliesService,
    DealerService,
    ChartsService,
    ExpensesService,
    EmployeesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
