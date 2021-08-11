/**
 * Matches `navigator.userAgent` against the provided regular expression.
 *
 * @param rx
 *  regular expression to check against
 * @returns
 *  result of `navigator.userAgent.match(rx)`
 */
export function agent(rx: RegExp): RegExpMatchArray | null {
    if (typeof navigator !== 'undefined' && navigator) {
        if (typeof navigator.userAgent === 'string') {
            return navigator.userAgent.match(rx);
        }
    }
    return null;
}
export default agent;
