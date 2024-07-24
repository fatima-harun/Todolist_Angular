import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = ''
  taskArray = [{taskName: 'Veille technologique', isCompleted: false}];

  constructor() {}

  ngOnInit(): void {}

  // fonction d'ajout d'une tache
  onSubmit(form: NgForm) {

    this.taskArray.push({
      taskName: form.controls['tache'].value,
      isCompleted: false
    })

    form.reset();
  }

  // fonction pour la suppression
  onDelete(index: number) {
    this.taskArray.splice(index, 1)
  }

  // fonction pour marquer la tache terminé
  onCheck(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }
}
