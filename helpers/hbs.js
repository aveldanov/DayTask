const moment = require('moment-timezone');

module.exports = {
  formatDate: function (date, format) {
		return moment(date).tz('America/Los_Angeles').startOf(format).fromNow();
	},
	editIcon: function(taskUser, loggedUser, floating = true){
		if(taskUser == loggedUser){
			if(floating){
				return `<a href="/tasks" class="btn-floating btn-small  waves-effect waves-light teal edit-btn">
				<i class="fas fa-pencil-alt"></i>
			</a>`
			}else{
				return `<a href="/tasks/"><i class="fas fa-pencil-alt"></i></a>`
			}
		}else{	
			return '';
		}
	}
}