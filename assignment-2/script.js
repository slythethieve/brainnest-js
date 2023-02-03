function squareDiagonal(side) {
    return side*Math.sqrt(2);
}

function triangleAreaWithSides(side1, side2, side3) {
    let semiperimeter = (side1 + side2 + side3) / 2;
    return Math.sqrt(semiperimeter*(semiperimeter - side1)*(semiperimeter - side2)* (semiperimeter - side3));
}

function circumference(radius) {
    return 2*radius*Math.PI;
}

function circleArea(radius) {
    return radius*radius*Math.PI;
}
