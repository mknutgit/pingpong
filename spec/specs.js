describe('count', function () {
  it("Will return an array for output beginning at one and going up to the number input", function() {
    expect(count(2)).to.eql([1,2]);
  });
  it("Will return and array of numbers and specific words (ex. ping, or pong) with the total of the elements in the array equalling the number provided by the user", function() {
    expect(count(6)).to.eql([1,2,"ping",4,"pong","ping"]);
  });

  it("For any numbers divisable by 3 in the array they will show as 'ping' rather than the number", function() {
    expect(count(3)).to.eql([1,2,"ping"]);
  });

  it("For any numbers divisable by 5 in the array they will show as 'pong' rather than the number", function() {
    expect(count(5)).to.eql([1,2,"ping",4,"pong"]);
  });

  it("For any numbers divisable by 15 in the array they will show as 'pingpong' rather than the number", function() {
    expect(count(5)).to.eql([1,2,"ping",4,"pong"]);
  });
});
