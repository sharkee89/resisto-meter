angular.module('ResistoMeter')
    .constant('Constants', {

        colors: [
            { name: 'black', posOneValue: '0', posTwoValue: '0', multiplier: 1,tolerance: '20%'},
            { name: 'brown', posOneValue: '1', posTwoValue: '1', multiplier: 10,tolerance: '1%'},
            { name: 'red', posOneValue: '2', posTwoValue: '2', multiplier: 100,tolerance: '2%'},
            { name: 'orange', posOneValue: '3', posTwoValue: '3', multiplier: 1000,tolerance: '3%'},
            { name: 'yellow', posOneValue: '4', posTwoValue: '4', multiplier: 10000,tolerance: '4%'},
            { name: 'green', posOneValue: '5', posTwoValue: '5', multiplier: 100000,tolerance: 'n/a'},
            { name: 'blue', posOneValue: '6', posTwoValue: '6', multiplier: 1000000,tolerance: 'n/a'},
            { name: 'violet', posOneValue: '7', posTwoValue: '7', multiplier: 10000000,tolerance: 'n/a'},
            { name: 'gray', posOneValue: '8', posTwoValue: '8', multiplier: 100000000, tolerance: 'n/a'},
            { name: 'white', posOneValue: '9', posTwoValue: '9', multiplier: '', tolerance: 'n/a'},
            { name: 'gold', posOneValue: '-', posTwoValue: '', multiplier: 0.1, tolerance: '5%'},
            { name: 'silver', posOneValue: 'Nan', posTwoValue: '', multiplier: 0.01, tolerance: '10%'}
        ],

        measurements: [
            {name: 'ohm', multiplicator: 1, sign: 'Ω'},
            {name: 'kiloohm', multiplicator: 0.001, sign: 'kΩ'},
            {name: 'megaohm', multiplicator: 0.000001, sign: 'MΩ'},
        ]

    });
