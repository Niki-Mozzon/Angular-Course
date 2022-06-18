import { NgModule } from "@angular/core";
import {
  Router,
  RouterModule,
  Routes,
  RoutesRecognized,
} from "@angular/router";
import { AuthGuard } from "./auth-guard.service";
import { HomeComponent } from "./home/home.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }],
    canActivate: [AuthGuard],
  },
  {
    path: "servers",
    component: ServersComponent,
    children: [
      { path: ":id", component: ServerComponent },
      { path: ":id/edit", component: EditServerComponent },
    ],
  },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/not-found", pathMatch: "full" }, //important to stay at the end
  //- "**" is the "wild card" so any route not covered above this one is "**"
  //pathMatch:"full" means that the path has to MATCH instead of just START WITH
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], //here we import the classes
  exports: [RouterModule],
})
//we created this class to store all the routes
export class AppRoutingModule {}
