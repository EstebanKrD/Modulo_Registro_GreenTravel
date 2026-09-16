import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { RegisterRequest, RolUsuario } from '../../models/auth/register-request.model';
import { LoadingComponent } from '../../shared/components/loading/loading.component';
import { toFriendlyErrorMessage } from '../../shared/utils/http-error.util';

function passwordsIgualesValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password && confirmPassword && password !== confirmPassword
    ? { passwordsNoCoinciden: true }
    : null;
}

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, LoadingComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  private readonly fb = inject(FormBuilder);
  private readonly authService = inject(AuthService);

  protected readonly cargando = signal(false);
  protected readonly mensajeExito = signal<string | null>(null);
  protected readonly mensajeError = signal<string | null>(null);

  protected readonly form = this.fb.group(
    {
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
      rol: ['TURISTA', [Validators.required]]
    },
    { validators: passwordsIgualesValidator }
  );

  get f() {
    return this.form.controls;
  }

  onSubmit(): void {
    this.mensajeExito.set(null);
    this.mensajeError.set(null);

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { confirmPassword, ...datos } = this.form.getRawValue();
    const request: RegisterRequest = {
      nombre: datos.nombre!,
      email: datos.email!,
      password: datos.password!,
      rol: datos.rol as RolUsuario
    };

    this.cargando.set(true);

    this.authService.register(request).subscribe({
      next: () => {
        this.cargando.set(false);
        this.mensajeExito.set('Usuario registrado exitosamente.');
        this.form.reset({ rol: 'TURISTA' });
      },
      error: (error: HttpErrorResponse) => {
        this.cargando.set(false);
        this.mensajeError.set(toFriendlyErrorMessage(error));
      }
    });
  }
}
