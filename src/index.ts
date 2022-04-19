import * as functions from './functionsIndex'

let root = functions.pipe as typeof functions.pipe & typeof functions
Object.assign(root, functions)

export default root
