var json_superparse = require('../lib/index');
var expect = require('chai').expect;

describe('test json-superparser', function() {

	describe('test parse normal json string', function() {

		//json string
	var normaljson = '{"name":"gbw","age":18}';

		var result = json_superparse(normaljson);

		it('parse success!', function() {
			expect(result).to.have.a.property('age',18);
		});
	});

	describe('test parse json which key is not string', function() {
		//json string
		var specialjson = '{"name":"gbw",age:18}';
		var result = json_superparse(specialjson);

		it('parse success!', function() {
			expect(result).to.have.a.property('age',18);
		});
	});
});