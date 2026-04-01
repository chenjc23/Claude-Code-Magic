// Stub for color-diff-napi (native addon, not published)
// Only needs to satisfy the methods used by StructuredDiff/colorDiff.ts.
export class ColorDiff {
  diff() {
    return []
  }

  // StructuredDiff expects `new ColorDiff(...).render(theme, width, dim)`
  // to return an array of ANSI-colored lines (string[]). For the stub,
  // return an empty array to disable fancy highlighting but avoid crashes.
  render() {
    return []
  }
}

export class ColorFile {
  constructor(code, filePath) {
    this.code = code
    this.filePath = filePath
  }

  // Returns string[] of plain (non-highlighted) lines to avoid crashes.
  render(theme, width, dim) {
    return this.code.split('\n')
  }
}

export function getSyntaxTheme() {
  return {}
}
