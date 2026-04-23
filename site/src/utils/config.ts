import { siteConfig } from "../../site.config";

export function fontsUrl(): string {
  const families = [
    `family=${siteConfig.fonts.display.replace(/ /g, "+")}:wght@400;500;600;700;800`,
    `family=${siteConfig.fonts.body.replace(/ /g, "+")}:wght@400;500;600;700`,
  ];
  return `https://fonts.googleapis.com/css2?${families.join("&")}&display=swap`;
}

export function fullUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, "");
  const clean = path.startsWith("/") ? path : `/${path}`;
  const hasFileExt = /\.[a-z0-9]{2,5}($|[?#])/i.test(clean);
  const hasSuffix = /[/?#]$/.test(clean) || clean.includes("?") || clean.includes("#");
  if (hasFileExt || hasSuffix) return `${base}${clean}`;
  return `${base}${clean}/`;
}

export function gradeColor(grade: string): string {
  const colors: Record<string, string> = {
    A: "var(--grade-a)",
    B: "var(--grade-b)",
    C: "var(--grade-c)",
    D: "var(--grade-d)",
    E: "var(--grade-e)",
  };
  return colors[grade] || colors.C;
}

export function gradeClass(grade: string): string {
  return `grade-${grade.toLowerCase()}`;
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
