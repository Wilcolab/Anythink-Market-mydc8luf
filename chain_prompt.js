function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str
        .trim()
        // Replace underscores and spaces with hyphens
        .replace(/[_\s]+/g, '-')
        // Insert hyphen before uppercase letters (camelCase, PascalCase)
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        // Convert to lowercase
        .toLowerCase()
        // Remove multiple consecutive hyphens
        .replace(/-+/g, '-');
}