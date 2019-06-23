import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth.guard';
import {AdminComponent} from './admin/admin.component';
import {NoAccessComponent} from './no-access/no-access.component';
import {AdminAuthGuardService} from './services/admin-auth-guard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent , canActivate: [AuthGuardService , AdminAuthGuardService]  },
    { path: 'no-access', component: NoAccessComponent } ,
    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

export const routing = RouterModule.forRoot(appRoutes);
