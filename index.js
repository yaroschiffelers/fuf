const fp = require('lodash/fp')

const data = Object.create(null)



const mapReduce = fp.compose(
    fp.reduce((prev, curr) => prev + curr, 1),
    fp.map(a => a + 1)
)

