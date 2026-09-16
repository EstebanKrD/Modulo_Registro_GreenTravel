import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-proximamente',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './proximamente.component.html',
  styleUrl: './proximamente.component.css'
})
export class ProximamenteComponent implements OnInit {
  protected readonly titulo = signal('Próximamente');
  protected readonly descripcion = signal(
    'Esta funcionalidad todavía no está disponible en el backend de GreenTravel.'
  );

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    const data = this.route.snapshot.data;
    if (data['titulo']) {
      this.titulo.set(data['titulo']);
    }
    if (data['descripcion']) {
      this.descripcion.set(data['descripcion']);
    }
  }
}
