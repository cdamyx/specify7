import Backbone from './backbone';
import commonText from './localization/common';

export default Backbone.View.extend({
  __name__: 'NotFoundView',
  title: commonText('pageNotFound'),
  render() {
    this.el.setAttribute('role', 'alert');
    this.el.setAttribute('class', 'p-2');
    this.el.innerHTML = `<h3>${commonText('pageNotFound')}</h3`;
  },
});