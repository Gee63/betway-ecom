var addedToBetSlip = [],
    multiBet,
    singleBet,
    betAmount,
    totalAmount,
    currencyCode,
    freeBet,
    coupon;


/*examples of data layer pushes for each step*/
/*add to betslip*/
/*dataLayer.push({
    'event': 'addToBetslip',
    'ecommerce': {
        'currencyCode': 'ZAR',
        'add': {
            'actionField': {'step':'1'},
            'products': [{
                    'dimension9' :        '1bb8ca01-b
                    'dimension10':        'sports',
                    'dimension11':        'soccer',
                    'dimension12':        'EPL',
                    'dimension13':        '1x2',
                    'dimension14':        'V234',
                    'dimension15':        'stoke v Le
                    'dimension16':        'Leicester'
                    'dimension17':        '2.85',
                    'dimension18':        'false',
                    'dimension19':        'true',
                    'dimension20':        '5'
            }]
        }
    }
});*/


/*remove from betslip*/
/*dataLayer.push({
    'event': 'removeFromBetslip',
    'ecommerce': {
        'currencyCode': 'ZAR',
        'remove': {
            'products': [{
                'id': '1bb8ca01-b7ae-e711-80c2-00155dc0af27',
                'category': 'sports',
                'sport': 'soccer',
                'league': 'EPL',
                'betType': '1x2',
                'gameId': 'V234',
                'details': 'stoke v Leicester',
                'outcome': 'Leicester',
                'odds': '2.85',
                'multiBet': 'false',
                'singleBet': 'true',
                'betAmount': 'null'
            }]
        }
    }
});*/


/*remove all from betslip*/
/*dataLayer.push({
    'event': 'removeAllFromBetslip',
    'ecommerce': {
        'currencyCode': 'ZAR',
        'remove': {
            'products': [{
                'id': '1bb8ca01-b7ae-e711-80c2-00155dc0af27',
                'category': 'sports',
                'sport': 'soccer',
                'league': 'EPL',
                'betType': '1x2',
                'gameId': 'V234',
                'details': 'stoke v Leicester',
                'outcome': 'Leicester',
                'odds': '2.85',
                'multiBet': 'false',
                'singleBet': 'true',
                'betAmount': 'null'
            },
                {
                    'id': '55a48ac4-b7ae-e711-80c2-00155dc0af27',
                    'category': 'sports',
                    'sport': 'soccer',
                    'league': 'EPL',
                    'betType': '1x2',
                    'gameId': 'V196',
                    'details': 'Southampton v Burnley',
                    'outcome': 'Southampton',
                    'odds': '2.55',
                    'multiBet': 'false',
                    'singleBet': 'true',
                    'betAmount': 'null'
                }]
        }
    }
});*/

/*placeBet*/
/*dataLayer.push({
    'event': 'placeBet',
    'ecommerce': {
        'currencyCode': 'ZAR',
        'checkout': {
            'actionField': {'step': 2},
            'products': [{
                'dimension9' :        '1bb8ca01-b7ae-e711-80c2-00155dc0af27',
                'dimension10':        'sports',
                'dimension11':        'soccer',
                'dimension12':        'EPL',
                'dimension13':        '1x2',
                'dimension14':        'V234',
                'dimension15':        'stoke v Leicester',
                'dimension16':        'Leicester',
                'dimension17':        '2.85',
                'dimension18':        'false',
                'dimension19':        'true',
                'dimension20':        '5'
            },
                {
                      'dimension9' :    '55a48ac4-b7ae-e711-80c2-00155dc0af27',
                      'dimension10':    'sports',
                      'dimension11':    'soccer',
                      'dimension12':    'EPL',
                      'dimension13':    '1x2',
                      'dimension14':    'V196',
                      'dimension15':    'Southampton v Burnley',
                      'dimension16':    'Southampton',
                      'dimension17':    '2.55',
                      'dimension18':    'false',
                      'dimension19':    'true',
                      'dimension20':    '5'
                }]
        }
    }
});*/

/*confirm purchase*/
/*
dataLayer.push({
    'event': 'confirmBet',
    'ecommerce': {
        'currencyCode': 'ZAR',
        'purchase': {
            'actionField': {
                'step':         '3',
                'id':           'T12345',                         // Transaction ID. Required for purchases and refunds.
                'revenue':      'totalAmount',
                'freeBet':      'false'
                'coupon':       'SUMMER_SALE'
            },
            'products': [{
                'dimension9' :        '1bb8ca01-b7ae-e711-80c2-00155dc0af27',
                'dimension10':        'sports',
                'dimension11':        'soccer',
                'dimension12':        'EPL',
                'dimension13':        '1x2',
                'dimension14':        'V234',
                'dimension15':        'stoke v Leicester',
                'dimension16':        'Leicester',
                'dimension17':        '2.85',
                'dimension18':        'false',
                'dimension19':        'true',
                'dimension20':        '5'
            },
                {
                    'dimension9' :    '55a48ac4-b7ae-e711-80c2-00155dc0af27',
                    'dimension10':    'sports',
                    'dimension11':    'soccer',
                    'dimension12':    'EPL',
                    'dimension13':    '1x2',
                    'dimension14':    'V196',
                    'dimension15':    'Southampton v Burnley',
                    'dimension16':    'Southampton',
                    'dimension17':    '2.55',
                    'dimension18':    'false',
                    'dimension19':    'true',
                    'dimension20':    '5'
                }]
        }
    }
});
*/


function AddBetToBetslip(id, category, sport, league, betType, gameId, detail, outcome, odds) {
    addedToBetSlip.push({
            'dimension9' :   id,
            'dimension10':   category,
            'dimension11':   sport,
            'dimension12':   league,
            'dimension13':   betType,
            'dimension14':   gameId,
            'dimension15':   detail,
            'dimension16':   outcome,
            'dimension17':   odds,
            'dimension18':   multiBet,
            'dimension19':   singleBet,
            'dimension20':   betAmount,
            'dimension21':   totalAmount
        });

    console.log(`dataLayer.push({
    'event': 'addToBetslip',
        'ecommerce': {
        'currencyCode': currencyCode,
        'add': {
        'actionField': {'step':'1'},
            'products': addedToBetSlip
        }
    }
})`);

    console.log(addedToBetSlip);
}

function RemoveFromBetSlip(id, category, sport, league, betType, gameId, detail, outcome, odds){
    console.log('before remove: ',addedToBetSlip);

    for(var i = 0; i < addedToBetSlip.length; i++){
        if(addedToBetSlip[i].dimension9 === id){
            addedToBetSlip.splice(i, 1);
        }
    }

    console.log('after remove: ',addedToBetSlip);

    console.log(`dataLayer.push({
    'event': 'removeFromBetslip',
        'ecommerce': {
        'currencyCode': currencyCode,
        'remove': {
            products: [{
                'dimension9' : id,
                'dimension10': category,
                'dimension11': sport,
                'dimension12': league,
                'dimension13': betType,
                'dimension14': gameId,
                'dimension15': detail,
                'dimension16': outcome,
                'dimension17': odds,
                'dimension18': true/false,
                'dimension19': true/false,
                'dimension20': betAmount,
                'dimension21': totalAmount
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
        remove: {
            products: addedToBetSlip
        }
    }
})`);

    addedToBetSlip.length = 0;
    console.log('betslip array after reset', addedToBetSlip);

}

function PlaceBet(addedToBetSlip){
    console.log(`dataLayer.push({
        'event': 'placeBet',
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

function ConfirmBet(addedToBetSlip){
    console.log(`
   dataLayer.push({
        'event': 'confirmBet',
        'ecommerce': {
            'purchase': {
                'actionField': {
                    'step':         '3',
                    'id':           'T12345',  // we need a transaction id here... think its called the"SKU" number
                    'revenue':      'totalAmount',
                    'freeBet':      freeBet
                    'coupon':       coupon
                },
                'products': addedToBetSlip
            }
        }
    })
    `);

}
