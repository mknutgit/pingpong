describe('count', function () {
  it("number entered will be returned in a string counting from 1 itself.", function () {
    expect(count(3)).to.eql([1,2,3]);
  });

  it("is true for years divisible by 4", function() {
    expect(leapYear(2004)).to.equal(true);
  });

  it("is false for years divisible by 100", function() {
   expect(leapYear(1900)).to.equal(false);
  });

  it("is true for years divisible by 400", function() {
   expect(leapYear(2000)).to.equal(true);
  });
});
