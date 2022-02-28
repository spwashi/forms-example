/**
 * @typedef FormItemInternalState
 *
 * @property {FormItemInternalController} controller
 * @property initialValue
 * @property initialStatus
 * @property status
 * @property value
 * @property valueMapper
 * @property statusMapper
 */

/**
 * @typedef FormItemInternalController
 *
 * @type {{resetData: function(): void, updateData: function(*): void, updateStatus: function(*): void, clearStatus: function(): void, resetStatus: function(): void, clearData: function(): void}}
 */