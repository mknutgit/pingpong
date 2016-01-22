describe('count', function () {
  it("For any numbers divisable by 3 in the array they will show as 'ping' rather than the number", function() {
    expect(count(3)).to.eql([1,2,"ping"]);
  });

  it("is false for years divisible by 100", function() {
   expect(leapYear(1900)).to.equal(false);
  });

  it("is true for years divisible by 400", function() {
   expect(leapYear(2000)).to.equal(true);
  });
});
