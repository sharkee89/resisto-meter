angular.module('ResistoMeter').controller('ResistCtrl', ['Constants', function(Constants) {

    var self = this;

    self.colors = Constants.colors;
    self.measurements = Constants.measurements;
    self.resistance = {
        positionOne: '',
        positionTwo: '',
        positionThree: '',
        positionFour: '',
        measureMultiplicator: 1
    }

    self.modes = {
        resistor: 'standard',
    };

    self.calculateResistance = function () {
        var firstVal = getValueByColor(self.resistance.positionOne, 'posOneValue');
        var secondVal = getValueByColor(self.resistance.positionTwo, 'posTwoValue');
        var multiplier = getValueByColor(self.resistance.positionThree, 'multiplier');
        var tolerance = getValueByColor(self.resistance.positionFour, 'tolerance');
        //console.log(self.resistance.measureMultiplicator);
        var measureSignObject = getSignByMultiplicator(self.resistance.measureMultiplicator);
        //console.log(measureSignObject);
        var firstTwo = firstVal + secondVal;
        var withMulti = firstTwo * multiplier;
        var result = withMulti * self.resistance.measureMultiplicator;
        self.resistValue = result + measureSignObject.sign + ' with tolerance of ' + tolerance;
    }

    function getValueByColor (color, position) {
        var result = 0;
        angular.forEach(self.colors, function(value, key) {
            if (color === value.name) {
                result = value[position];
            }
        });
        return result;
    }

    function getSignByMultiplicator (multiplicator) {
        var result;
        angular.forEach(self.measurements, function(value, key) {
            if (multiplicator == value.multiplicator) {
                result = value;
            }
        });
        return result;
    }

}]);
