import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';
import { LancamentosComponent } from './lancamentos/lancamentos.component';
import {DataTableModule} from 'primeng/datatable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import { NavbarComponent } from './navbar/navbar.component';
import { LOCALE_ID } from '@angular/core';
import { PessoaPesquisaComponent } from './pessoa-pesquisa/pessoa-pesquisa.component';
import {RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './sobre/sobre.component';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/pt';
import localeFrExtra from '@angular/common/locales/extra/pt';
import { ServiceDirective } from './service.directive';

registerLocaleData(localeBr, 'pt-br', localeFrExtra);


const routerList : Routes = [
  {path:"", component: LancamentosComponent},
  {path: "pessoas", component: PessoaPesquisaComponent},
  {path: "sobre", component: SobreComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LancamentosComponent,
    NavbarComponent,
    PessoaPesquisaComponent,
    SobreComponent,
    ServiceDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CalendarModule,
    InputTextModule,
    DataTableModule,
    BrowserAnimationsModule,
    TooltipModule,
    RouterModule.forRoot(routerList)
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
