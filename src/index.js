const debug = require('debug');
class Loggy{
	constructor(){}
	log = (data, types = {verbose: false}) => {		
		let verboseErr = "Expected verbose to be of type error";
		let lineNumber = '';
		let fullTrace = [];
		let errors = []
		let errObj = {
			"log": "",
			"lineNumber": ""
		}
		errors = this._getErrStack()
		let errLine = errors[3].split(" ")
		lineNumber = errLine[errLine.length - 1]
		errObj.log = data;		
		errObj.lineNumber = lineNumber;
		if(!types.verbose){
				console.log(lineNumber, data)
				return data
		}
		else{
			if(typeof types.verbose != Boolean){
				return verboseErr;
			}
		}
		console.log(errObj)
		return errObj
	}		
	_getErrStack = () => {		
		let e = new Error().stack.split("\n")
		let errs = []
		e.forEach(error => {
			errs.push(error)
		})
		return errs;
	}
}
const lg = new Loggy()
module.exports = lg
