var context = require.context('./tests', true, /.js$/);
context.keys().forEach(context);
module.exports = context;
