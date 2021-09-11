function lagTabell(tilEl, overskrifter, objArr) {

    var tabellEl = document.createElement("table");
    var tbodyEl = document.createElement("tbody");

    for (var i = -1; i < objArr.length; i++) {
        var trEl = document.createElement("tr");

        if ( i == -1) {
            for (var j = 0; j < overskrifter.length; j++) {
                var thEl = document.createElement("th");

                thEl.innerHTML = overskrifter[j];

                trEl.appendChild(thEl);
            }
        } else {
            for (var egenskap in objArr[i]) {
                var tdEl = document.createElement("td");

                tdEl.innerHTML = objArr[i] [egenskap];

                trEl.appendChild(tdEl);
            }
        }
        tbodyEl.appendChild(trEl);
    }
    tabellEl.appendChild(tbodyEl);

    tilEl.appendChild(tabellEl);
}