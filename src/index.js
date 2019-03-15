/**
 * DispatchDataLayer Helper Class
 */
class DispatchDataLayer {
  /**
   * Add new event to Datalayer Array
   * @param {String} event Event name - 'generic-event-trigger' by default
   * @param {String} action Action name - 'default action' by default
   * @param {String} category Category name - 'default category' by default
   * @param {String} label Label name - 'default label' by default
   */
  constructor(event, action, category, label) {
    this.event = event || 'generic-event-trigger';
    this.action = action || 'default action';
    this.category = category || 'default category';
    this.label = label || 'default label';

    this.send();
  }

  send() {
    const payload = {
      event: this.event,
      action: this.action,
      category: this.category,
      label: this.label,
    };

    window.dataLayer.push(payload);
  }
}

module.exports = DispatchDataLayer;
