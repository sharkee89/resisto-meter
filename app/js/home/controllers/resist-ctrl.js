angular.module('ResistoMeter').controller('ResistCtrl', ['Constants', function(Constants) {

    var self = this;

    self.colors = Constants.colors;
    self.measurements = Constants.measurements;
    self.highPrecisionMode = false;
    self.resistance = {
        positionOne: '',
        positionTwo: '',
        positionThree: '',
        positionFour: '',
        measureMultiplicator: 1
    }

    self.switchMode = function () {
        self.highPrecisionMode = !self.highPrecisionMode;
    };

    self.calculateResistance = function () {
        var firstVal = getValueByColor(self.resistance.positionOne, 'posOneValue');
        var secondVal = getValueByColor(self.resistance.positionTwo, 'posTwoValue');
        var multiplier = getValueByColor(self.resistance.positionThree, 'multiplier');
        var tolerance = getValueByColor(self.resistance.positionFour, 'tolerance');
        var firstTwo = firstVal + secondVal;
        var withMulti = firstTwo * multiplier;
        var result = withMulti * self.resistance.measureMultiplicator;
        self.resistValue = result + '';
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

}]);
