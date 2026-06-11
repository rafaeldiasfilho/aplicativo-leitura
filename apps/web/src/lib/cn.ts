/**
 * Junta classes condicionais em uma única string, ignorando valores falsy.
 * Mínimo proposital: se um dia precisarmos resolver conflitos de classes
 * Tailwind, avaliamos adicionar `tailwind-merge`.
 */
export function cn(
  ...classes: Array<string | false | null | undefined>
): string {
  return classes.filter(Boolean).join(" ");
}
