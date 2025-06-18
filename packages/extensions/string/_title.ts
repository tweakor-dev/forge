declare global {
    interface String {
        _title(preserveCase?: boolean): string;
    }
}

if (!String.prototype._title) {
    String.prototype._title = function (preserveCase = false): string {
        const str = this.toString();
        return preserveCase
            ? str.charAt(0).toUpperCase() + str.slice(1)
            : str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
}

export { };