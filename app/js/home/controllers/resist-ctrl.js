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
        var firstTwo = self.resistance.positionOne + self.resistance.positionTwo;
        console.log(firstTwo);
        var withMultiplicator = firstTwo * self.resistance.positionThree;
        console.log(withMultiplicator);
        var withMeasure = withMultiplicator + self.resistance.measureMultiplicator
        console.log(withMeasure);
        self.resistValue = withMeasure;
    }

}]);
