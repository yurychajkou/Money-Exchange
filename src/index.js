module.exports = function makeExchange(currency) {
    let change = {};
    let h = currency / 50;
    let hRemais = currency - Math.trunc(h) * 50;
    let q = hRemais / 25;
    let qRemains = hRemais - Math.trunc(q) * 25;
    let d = qRemains / 10;
    let dRemains = qRemains - Math.trunc(d) * 10;
    let n = dRemains / 5;
    let nRemains = dRemains - Math.trunc(n) * 5;
    let p = nRemains;
    
    if (Math.trunc(h) != 0) {
        change.H = Math.trunc(h)
    };
    if (Math.trunc(q) != 0) {
        change.Q = Math.trunc(q)
    };
    if (Math.trunc(d) != 0) {
        change.D = Math.trunc(d)
    };
    if (Math.trunc(n) != 0) {
        change.N = Math.trunc(n)
    };
    if (Math.trunc(nRemains) != 0) {
        change.P = Math.trunc(nRemains)
    };

    if (currency <= 0) {
        change = {}
    };

    if (currency > 10000) {
        change = { error: "You are rich, my friend! We don't have so much coins for exchange" };

    };

    return change
    
};

   
    
    





