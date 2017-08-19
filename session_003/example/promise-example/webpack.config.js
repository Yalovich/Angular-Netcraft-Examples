var SRC_FOLDER = __dirname.concat("/src");

module.exports = {
 entry: {
     app: SRC_FOLDER.concat('/index.ts')
 },
 module: {
   rules: [
     {
       test: /\.tsx?$/,
       use: 'ts-loader',
       exclude: /node_modules/
     }
   ]
 },
 resolve: {
   extensions: [".tsx", ".ts", ".js"]
 },
 output: {
   filename: '[name].js',
   path: __dirname.concat('/dist')
 }
};