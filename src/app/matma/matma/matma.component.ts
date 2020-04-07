import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-matma',
  templateUrl: './matma.component.html',
  styleUrls: ['./matma.component.scss']
})
export class MatmaComponent {

  form = new FormGroup({
    score: new FormControl('', [Validators.required])
  });

  numberOne: number;
  numberTwo: number;

  currentScoreShouldBe: number;

  displayUserNotGuessedMsg = false;
  displayUserGuessedMsg = false;

  operation: '+' | '-' = '+';

  onNew() {
    this.resetMessages();
    if (this.operation === '+') {
      this.addOperation();
    } else {
      this.subtractionOperation();
    }
  }

  onChangeOperation(operation) {
    this.operation = operation;
    this.onNew();
  }

  onCheckValue() {
    this.resetMessages();
    const currentUserScoreValue = this.form.get('score').value;

    if (currentUserScoreValue === this.currentScoreShouldBe) {
      this.displayUserGuessedMsg = true;
    } else {
      this.displayUserNotGuessedMsg = true;
    }
  }

  private resetMessages() {
    this.displayUserNotGuessedMsg = false;
    this.displayUserGuessedMsg = false;
  }

  private addOperation() {
    this.numberOne = this.getRandomInt(0, 10);
    this.numberTwo = this.getRandomInt(0, 10);
    this.currentScoreShouldBe = this.numberOne + this.numberTwo;
  }

  private subtractionOperation() {
    this.numberOne = this.getRandomInt(0, 10);
    this.numberTwo = this.getRandomInt(0, this.numberOne);
    this.currentScoreShouldBe = this.numberOne - this.numberTwo;
  }


  private getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
