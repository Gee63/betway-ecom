var addedToBetSlip = [],
    multiBet,
    singleBet,
    betAmount,
    totalAmount,
    currencyCode;

dataLayer.push({
    'event': 'addToBetslip',
    'ecommerce': {
        'currencyCode': 'ZAR',
        'add': {
            'products': [{
                'id': '1bb8ca01-b7ae-e711-80c2-00155dc0af27',
                'sport': 'soccer',
                'league': 'EPL',
                'betType': '1x2',
                'gameId': 'V243',
                'details': 'stoke v Leicester',
                'outcome': 'Leicester',
                'odds': '2.85',
                'multiBet': false,
                'singleBet': true,
                'betAmount': 'null',
                'totalAmount': 'null'
            }]
        }
    }
})


function AddBetToBetslip(id, sport, league, betType, gameId, detail, outcome, odds) {
    addedToBetSlip.push({
            'id': id,
            'sport': sport,
            'league': league,
            'betType': betType,
            'gameId': gameId,
            'details': detail,
            'outcome': outcome,
            'odds': odds,
            'multiBet': multiBet,
            'singleBet': singleBet,
            'betAmount': betAmount,
            'totalAmount': totalAmount
        });

    console.log(`dataLayer.push({
    'event': 'addToBetslip',
        'ecommerce': {
        'currencyCode': currencyCode,
        'add': {
            'products': addedToBetSlip
        }
    }
})`);

    console.log(addedToBetSlip);
}

function RemoveFromBetSlip(id, sport, league, betType, gameId, detail, outcome, odds){

    for(var i = 0; i < addedToBetSlip.length; i++){
        if(addedToBetSlip[i].id === id){
            addedToBetSlip.splice(i, 1);
        }
    }

    console.log(addedToBetSlip);

    console.log(`dataLayer.push({
    'event': 'removeFromBetslip',
        'ecommerce': {
        'currencyCode': currencyCode,
        'remove': {
            products: [{
                'id': id,
                'sport': sport,
                'league': league,
                'betType': betType,
                'gameId': gameId,
                'details': detail,
                'outcome': outcome,
                'odds': odds,
                'multiBet': true/false,
                'singleBet': true/false,
                'betAmount': betAmount,
                'totalAmount': totalAmount
            }]
        }
    }
})`);

}

function RemoveAllFromBetslip (){
    console.log('betslip array before reset', addedToBetSlip);

    console.log(`dataLayer.push({
    event: removeAllFromBetslip,
        ecommerce: {
        removeAllFromBetslip: {
            bets: [addedToBetSlip]
        }
    }
})`);

    addedToBetSlip.length = 0;
    console.log('betslip array after reset', addedToBetSlip);

}

function PlaceBet(addedToBetSlip){
    console.log(`
    dataLayer.push({
        'event': 'placeBet',
        'ecommerce': {
        'currencyCode': currencyCode,
            'checkout': {
                'actionField': {'step': 1},
                'products': addedToBetSlip 
            }
        }
    })
    `);
}

function ConfirmBet(addedToBetSlip){
    console.log(`
    dataLayer.push({
        'event': 'confirmBet',
        'ecommerce': {
        'currencyCode': currencyCode,
            'checkout': {
                'actionField': {'step': 2},
                'products': addedToBetSlip
            }
        }
    })
    `);
}



/*dataLayer.push({
    'event': 'addToCart',
    'ecommerce': {
        'currencyCode': 'EUR',
        'add': {                                // 'add' actionFieldObject measures.
            'products': [addedToBetSlip]
        }
    }
});*/


