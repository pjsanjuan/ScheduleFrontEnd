import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule, MatCardModule, MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule,
  MatListModule,
  MatTableModule, MatTabsModule,
  MatToolbarModule
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
    MatDialogModule
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
    MatDialogModule]
})
export class MaterialModule {
}
