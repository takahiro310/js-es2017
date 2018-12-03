const fs = require('fs')

class CSV {
	constructor(delimiter = ',') {
		this.delimiter = delimiter
	}
	
	parseFile(filename) {
		const file = fs.readFileSync(filename).toString()
		const lines = file.split('\n')
		return lines.map(line => line.split(this.delimiter))
	}
}

const csv = new CSV()
const result = csv.parseFile('./src/takahiro310/test.csv')
console.log(result)
