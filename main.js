var a, b, c, d, e, f;
a = false;
var result = a || a || a || "b";
if (result) {
       console.log("True!!");
}
else {
       console.log("False!!")
}