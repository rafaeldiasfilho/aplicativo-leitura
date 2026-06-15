// Mostra o horário de forma calma: "às 14:32" se for hoje, senão "12/06".
export function formatNoteDate(timestamp: number): string {
  const d = new Date(timestamp);
  const now = new Date();
  const sameDay =
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear();
  const pad = (n: number) => n.toString().padStart(2, "0");
  if (sameDay) return `às ${pad(d.getHours())}:${pad(d.getMinutes())}`;
  return `${pad(d.getDate())}/${pad(d.getMonth() + 1)}`;
}
