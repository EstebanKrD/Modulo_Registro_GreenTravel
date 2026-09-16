/**
 * Coincide con AuthResponseDTO documentado en /v3/api-docs.
 * El backend define "data" como un objeto genérico sin forma fija,
 * por eso se tipa como Record<string, unknown> en lugar de "any".
 */
export interface AuthResponse {
  mensaje?: string;
  status?: string;
  data?: Record<string, unknown>;
}
