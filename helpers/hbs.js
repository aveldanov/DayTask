const moment = require('moment-timezone');

module.exports = {
  formatDate: function (date, format) {
		return moment(date).tz('America/Los_Angeles').startOf(format).fromNow();
	}
}