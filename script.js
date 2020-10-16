document.getElementById("exchangeSubmit").addEventListener("click", function(event) {
    event.preventDefault();
    let exFrom = document.getElementById('From').options[document.getElementById('From').selectedIndex].value;
    let exTo = document.getElementById('To').options[document.getElementById('To').selectedIndex].value;
    const url = "https://free.currconv.com/api/v7/convert?q=" + exFrom + "_" + exTo + "&compact=ultra&apiKey=aa5a439e3d2c7ebf6f88";
    let results = "";
    fetch(url)
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);
            results += "<p class = 'exInfo'>The current rate from " + exFrom + " to " + exTo + " is " + out[exFrom + '_' + exTo];
            if (out[exFrom + '_' + exTo] > 1) {
                results += ". Looks like you can treat yourself! </p>"
            } else if (out[exFrom + '_' + exTo] === 1) {
                results += ". Are you sure you selected a different currency? </p>"
            } else if (out[exFrom + '_' + exTo] < 1) {
                results += ". Looks like you might need to do a little more saving! </p>"
            }
            console.log(results);
            document.getElementById('exchangeResults').innerHTML = results;
        }).catch(err => console.error(err));


})
//https://free.currconv.com/api/v7/convert?q=USD_PHP&compact=ultra&apiKey=aa5a439e3d2c7ebf6f88
