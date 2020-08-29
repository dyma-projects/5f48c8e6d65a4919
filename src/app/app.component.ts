import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
})
export class AppComponent {
  name: string = "je suis l'élément parent";
  red: boolean = true;

  consoleClic() {
    console.log("clic");
  }
}
