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
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
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
    //canActivate: [AuthGuard], //add authentication method that in order to let you navigate to that route must return true
    canActivateChild: [AuthGuard], //add authentication method to all children of this route
  },
  {
    path: "servers",
    component: ServersComponent,
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
        //whenever we will try to leave this component Angular will run this guard
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  {
    path: "not-found",
    component: PageNotFoundComponent,
    data: { message: "The page was not found!" },
  },
  {
    path: "**",
    redirectTo: "/not-found",
    pathMatch: "full",
  }, //important to stay at the end
  //- "**" is the "wild card" so any route not covered above this one is "**"
  //pathMatch:"full" means that the path has to MATCH instead of just START WITH
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)], //here we import the classes
  exports: [RouterModule],
})
//we created this class to store all the routes
export class AppRoutingModule {}
