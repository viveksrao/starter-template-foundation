(function(){
  'use strict';
  // Base Constructor
  function Shape2d(){
    return{
      type: this.constructor.name,
      sides: []
    };
  }
  // Rectangle constructor extending Shape2d
  function Rectangle(width, height){
    // Instantiation of Base Class using the call method
    // which the Shape2d function inherits from the function prototype.
    // Our base class doesn't take any arguments so we can use the call method instead of apply.
    var shape = Shape2d.call(this);
    shape.sides.push(width, height, width, height);
    shape.getArea = function(){
      return shape.sides[0] * shape.sides[1];
    }
    return shape;
  }

  function Square(sidesLength){
    return Rectangle.call(this, sidesLength, sidesLength);
  }

  var myRect = new Rectangle(5, 4);
  console.log(myRect.type);
  console.log(myRect.sides.length);
  console.log(myRect.getArea());

  var mySquare = new Square(5);
  console.log(mySquare.type);
  console.log(mySquare.sides.length);
  console.log(mySquare.getArea());

  console.log(mySquare instanceof Object);


}());
