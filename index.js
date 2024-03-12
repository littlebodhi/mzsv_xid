const uuidlib= require('uuid');
  
function generateId() {
	        return uuidlib.v3('UNm85ssZnO', uuidlib.v4());
	}

module.exports = generateId
