export { };

declare global {
    interface String {
        _title(preserveCase?: boolean): string;
    }
}

// runtime patch with safe fallback
String.prototype._title ??= function (preserveCase = false): string {
    const s = this.toString();
    return preserveCase
        ? s.charAt(0).toUpperCase() + s.slice(1)
        : s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};
