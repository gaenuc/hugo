import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {
  searchQuery: string = '';
  message: string = '';

  search() {
    if (this.searchQuery.trim()) {
      console.log(`Searching for: ${this.searchQuery}`);
      // Puoi aggiungere logica di navigazione o gestione della ricerca qui
    } else {
      this.message = 'Please enter a search term.';
    }
  }
}
