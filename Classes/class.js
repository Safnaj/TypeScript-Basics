var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //Implementation
        console.log('X :' + this.x + ', Y :' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //Implementation
    };
    return Point;
}());
var point = new Point(); //Creating New Object from the class
point.x = 1;
point.y = 2;
point.draw();
