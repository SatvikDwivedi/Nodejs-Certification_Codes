// function simple(){
//     console.log("simple is complex")
// }
// module.exports = simple;
const { PI } = Math;

exports.area = (r) => PI * r ** 2;

exports.circumference = (r) => 2 * PI * r;