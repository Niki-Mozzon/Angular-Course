import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CockpitComponent } from "./cockpit/cockpit.component";
import { ServerElementComponent } from "./server-element/server-element.component";
import { EvenComponent } from "./Even/even.component";
import { OddComponent } from "./odd/odd.component";
import { GameControlComponent } from "./game-controller/game-control.component";
import { BasicBackgroundDirective } from "./basic-background/basic-background.directive";
import { BetterBackgroundDirective } from "./basic-background/better-background.directive";
import { EasierBackgroundDirective } from "./basic-background/easier-background.directive";
import { UnlessDirective } from "./structural-directives/unless.directive";

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    EvenComponent,
    OddComponent,
    GameControlComponent,
    BasicBackgroundDirective,
    BetterBackgroundDirective,
    EasierBackgroundDirective,
    UnlessDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
