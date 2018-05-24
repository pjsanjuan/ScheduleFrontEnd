import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
} from '@angular/material';

@NgModule({
  imports: [MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  exports: [MatToolbarModule,
    MatListModule,
    MatButtonModule,
    MatTableModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatProgressBarModule]
})
export class MaterialModule {
}
