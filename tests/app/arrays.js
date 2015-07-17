if ( typeof window === 'undefined' ) {
  require('../../app/arrays');
  var expect = require('chai').expect;
}

describe('arrays', function() {
  var a;

  beforeEach(function() {
    a = [ 1, 2, 3, 4 ];
  });

  it('you should be able to add the values of an array', function() {
    expect(arraysAnswers.sum(a)).to.eql(10);
  });

  it('you should be able to remove all instances of a value from an array', function() {
    a.push(2); // Make sure the value appears more than one time
    var result = arraysAnswers.remove(a, 2);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('1 3 4');
  });

  it('you should be able to add an item to the beginning of an array', function () {
    var result = arraysAnswers.prepend(a, 10);

    expect(result).to.have.length(5);
    expect(result[0]).to.eql(10);
  });

  it('you should be able to remove the first item of an array', function () {
    var result = arraysAnswers.curtail(a);

    expect(result).to.have.length(3);
    expect(result.join(' ')).to.eql('2 3 4');
  });

  it('you should be able to add an item anywhere in an array', function() {
    var result = arraysAnswers.insert(a, 'z', 2);

    expect(result).to.have.length(5);
    expect(result.join(' ')).to.eql('1 2 z 3 4');
  });
});
