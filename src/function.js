/**
 * Add new event to Datalayer Array
 * @param {String} event Event name - 'generic-event-trigger' by default
 * @param {String} action Action name - 'default action' by default
 * @param {String} category Category name - 'default category' by default
 * @param {String} label Label name - 'default label' by default
 */
const dispatchDataLayer = (
	event = "generic-event-trigger",
	action = "default action",
	category = "default category",
	label = "default label"
) => {
	const payload = { event, action, category, label };
	window.dataLayer.push(payload);
};

module.exports = dispatchDataLayer;
