{% raw %}
describe('Test app', function() {
  
  var simpleCalc;
  
  beforeEach(function(){

    module('app');
    
    inject(function($injector){
      simpleCalc = $injector.get('simpleCalc');
    });
    
  });

  describe('Test simpleCalc Service', function() {
    
    it('returns the correct sum of two positive numbers', function() {
      expect(simpleCalc.add(1,2)).toEqual(3);
    });
    
    it('returns the correct multiplication of two positive numbers', function() {
      expect(simpleCalc.multiply(3,4)).toEqual(12);
    });
    
  });
  
});
{% endraw %}
