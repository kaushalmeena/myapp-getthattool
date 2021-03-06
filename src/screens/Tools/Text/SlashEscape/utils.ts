export const escapeSlash = (input: string): string =>
  input
    .replace(/[\\]/g, "\\\\")
    .replace(/[/]/g, "\\/")
    .replace(/[\b]/g, "\\b")
    .replace(/[\f]/g, "\\f")
    .replace(/[\n]/g, "\\n")
    .replace(/[\r]/g, "\\r")
    .replace(/[\t]/g, "\\t")
    .replace(/[']/g, "\\'")
    .replace(/["]/g, '\\"');
