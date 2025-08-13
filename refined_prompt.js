/**
 * Converts various string casing styles (snake_case, kebab-case, PascalCase, ALLCAPS, etc.)
 * to lower camelCase. Handles non-string inputs, empty strings, null/undefined values,
 * trims whitespace, removes special characters and numbers as word delimiters.
 *
 * @param {any} input - The value to convert to camelCase.
 * @returns {string} The camelCase version of the input, or an empty string for invalid input.
 */
function camelCase(input) {
  // Handle null, undefined, non-string inputs
  if (typeof input !== 'string' || input == null) return '';

  // Trim whitespace
  let str = input.trim();
  if (!str) return '';

  // Use a single regex to normalize delimiters and split words
  const words = str
    // Insert a space before a capital letter preceded by a lowercase letter
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    // Insert a space before a capital letter preceded by a number
    .replace(/(\d)([A-Z])/g, '$1 $2')
    // Replace non-alphanumeric characters (including underscores and hyphens) with a space
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .toLowerCase()
    .split(' ')
    .filter(Boolean);

  // Convert to lower camelCase
  return words
    .map((word, i) =>
      i === 0
        ? word
        : word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join('');
}

// Example usage:
console.log(camelCase('snake_case_example')); // "snakeCaseExample"
console.log(camelCase('kebab-case-example')); // "kebabCaseExample"
console.log(camelCase('PascalCaseExample')); // "pascalCaseExample"
console.log(camelCase('ALLCAPS_EXAMPLE')); // "allcapsExample"
console.log(camelCase('  spaced   out  ')); // "spacedOut"
console.log(camelCase('mixed123Numbers456Here')); // "mixed123numbers456here"
console.log(camelCase('IDCard')); // "idcard"
console.log(camelCase('')); // ""
console.log(camelCase(null)); // ""
console.log(camelCase(undefined)); // ""
console.log(camelCase(12345)); // ""