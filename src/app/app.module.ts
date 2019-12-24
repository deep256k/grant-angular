import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TopBarComponent } from './Components/top-bar/top-bar.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { InnerContainerComponent } from './Epics/inner-container/inner-container.component';
import { FundDetailsComponent } from './Components/fund-details/fund-details.component';
import { PageHeadingComponent } from './Components/page-heading/page-heading.component';
import {HttpClientModule} from '@angular/common/http';
import { GrantSelectionComponent } from './Epics/grant-history/grant-selection/grant-selection.component';
import { SectionHeadingComponent } from './Components/section-heading/section-heading.component';
import { GrantTabsComponent } from './Epics/grant-history/grant-tabs/grant-tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { GrantTableComponent } from './Epics/grant-history/grant-table/grant-table.component';
import { GrantPurposeComponent } from './Epics/grant-purpose/grant-purpose/grant-purpose.component';
import { GranteeContactComponent } from './Epics/grant-purpose/grantee-contact/grantee-contact.component';
import { PurposeDetailsComponent } from './Epics/grant-purpose/purpose-details/purpose-details.component';
import { GrantReviewComponent } from './Epics/grant-review/grant-review/grant-review.component';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
  { path: 'grant', component: InnerContainerComponent, children: [
    { path: '', component: GrantSelectionComponent },
    { path: 'step1', component: GrantPurposeComponent },
    { path: 'step1/review', component: GrantReviewComponent }
  ] }
];
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    InnerContainerComponent,
    FundDetailsComponent,
    PageHeadingComponent,
    GrantSelectionComponent,
    SectionHeadingComponent,
    GrantTabsComponent,
    GrantTableComponent,
    GrantPurposeComponent,
    GranteeContactComponent,
    PurposeDetailsComponent,
    GrantReviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
