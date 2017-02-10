import {Component} from '@angular/core';

const style: string = require("./app.component.scss");
const template: string = require("./app.component.html");

@Component({
  selector: 'app',
  template: template,
  styles: [style],
})
export class AppComponent {

	private isActive = false;

	constructor() {
	}

	menuToggle(e) {
		e.preventDefault();
		if (this.isActive) {
			this.isActive = false;
		} else {
			this.isActive = true;
		}
	}

}
