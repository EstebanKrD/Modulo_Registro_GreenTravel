/**
 * Coincide exactamente con RegisterRequestDTO documentado en /v3/api-docs.
 * Los 4 campos son obligatorios según el backend.
 * El valor de "rol" no está documentado en el OpenAPI como enum, pero el
 * propio backend confirmó en su respuesta 400 que solo acepta estos dos valores.
 */
export type RolUsuario = 'TURISTA' | 'ANFITRION';

export interface RegisterRequest {
  nombre: string;
  email: string;
  password: string;
  rol: RolUsuario;
}
