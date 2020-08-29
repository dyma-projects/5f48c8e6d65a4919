import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  name: string = "Apporte la souris ici";

  importantContent(): boolean {
    return true;
  }

  dynamicChange() {
    this.name = "Tu es passé au-dessus de moi";
  }

  constructor() {}

  ngOnInit(): void {}
}
