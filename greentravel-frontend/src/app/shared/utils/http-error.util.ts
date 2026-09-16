import { HttpErrorResponse } from '@angular/common/http';

/**
 * Traduce un error HTTP del backend a un mensaje simple para el usuario.
 * Solo cubre los códigos que el backend realmente puede devolver hoy
 * (ver sección 13 del prompt: 201 éxito, 400 datos inválidos).
 * Los demás casos (red caída, 500, etc.) usan un mensaje genérico.
 */
export function toFriendlyErrorMessage(error: HttpErrorResponse): string {
  if (error.status === 400) {
    const mensajeBackend = error.error?.mensaje as string | undefined;
    return mensajeBackend ?? 'Los datos ingresados no son válidos o el correo ya está registrado.';
  }

  if (error.status === 0) {
    return 'No fue posible conectar con el servidor. Verifica tu conexión a internet.';
  }

  return 'Ocurrió un error inesperado. Intenta nuevamente en unos minutos.';
}
