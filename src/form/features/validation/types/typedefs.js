/**
 * @typedef FormValidationState
 *
 * @property {{[key:string]: FormValidator[]}} validators
 */

/**
 * @typedef FormValidator
 * @property {string} id
 * @property {function(state: FormState): {errorLevel: number}|any} validate
 */