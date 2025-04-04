import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BoatsComponent } from './boats/boats.component';
import { BoatResolver } from './boats/boats.resolver';

import { ContactsComponent } from './contacts/contacts.component';
import { TourComponent } from './tour/tour.component';
import { ErrorComponent } from './error/error.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AccessoriesResolver } from './accessories/accessories.resolver';
import { TermsComponent } from './terms/terms.component';
import { CollabComponent } from './collab/collab.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'contatti', component: ContactsComponent},
    {path:'lavora-con-noi', component: CollabComponent},
    {path:'tour', component: TourComponent},
    {path:'barche/:id', component: BoatsComponent, resolve:[BoatResolver]},
    {path:'servizi/:id', component: AccessoriesComponent, resolve:[AccessoriesResolver]},
    {path:'termini-e-condizioni', component: TermsComponent},
    {path:'error-404', component: ErrorComponent},
    {path:'**', redirectTo:'/error-404'}
];
