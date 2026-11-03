const BN_DIGITS = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];

// "1850" -> "১৮৫০"
export function toBn(value: number | string): string {
  return String(value).replace(/\d/g, (d) => BN_DIGITS[Number(d)]);
}

// 1850 -> "১,৮৫০"
export function formatNumber(value: number, maxFractionDigits = 2): string {
  return toBn(
    value.toLocaleString("en-US", { maximumFractionDigits: maxFractionDigits })
  );
}

// 148 -> "১৪৮ টাকা"
export function formatPrice(value: number): string {
  return `${formatNumber(value)} টাকা`;
}

// 2.1 -> "২.১%"   0 -> "০.০%"
export function formatPercent(pct: number): string {
  return `${toBn(Math.abs(pct).toFixed(1))}%`;
}

// Unit names from the API -> Bengali
const UNIT_MAP: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  liter: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  pcs: "পিস",
  pc: "পিস",
};

export function formatUnit(unit: string): string {
  return UNIT_MAP[unit.trim().toLowerCase()] ?? unit;
}

// "প্রতি কেজি"
export function formatUnitLabel(unit: string): string {
  return `প্রতি ${formatUnit(unit)}`;
}

// "মঙ্গলবার, ৩ নভেম্বর, ২০২৬" (always Dhaka time)
export function getBanglaDate(date: Date = new Date()): string {
  return new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(date);
}