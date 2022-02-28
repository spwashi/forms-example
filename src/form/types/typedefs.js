

/**
 * @typedef FormStateRoot
 *
 * @property formId
 */

/**
 * @typedef FormDispatch
 *
 * @type Function
 */

/**
 * @typedef FormState
 *
 * @type {FormStateRoot & FormDataState & FormValidationState}
 *
 * @property initialStatus
 * @property status
 *
 * @property initialMessages
 * @property messages
 *
 * @property {function(*): *} dispatch
 */
