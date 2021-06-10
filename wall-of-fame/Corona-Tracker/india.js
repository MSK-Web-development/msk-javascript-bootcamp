function getData() {
    const url = "https://api.covid19india.org/data.json";
    fetch(url)
        .then((resonse) => {
            return resonse.json();
        })
        .then((data) => {
            console.log(data['statewise']);
            let newData = document.getElementById("newData");
            // console.log(newData);
            let html = "";
            for (let i = 1; i < data["statewise"].length; i++) {
                // console.log(data["statewise"][i]);
                var newRow = newData.insertRow();
                newRow.classList.add('state');
                newRow.insertCell(0);
                newData.rows[i].cells[0].innerText = data['statewise'][i]['lastupdatedtime'];
                newData.rows[i].cells[0].style.background = '#7a4191';
                newData.rows[i].cells[0].style.color = '#fff';
               
                newRow.insertCell(1);
                newData.rows[i].cells[1].innerText = data['statewise'][i]['state'];
                newData.rows[i].cells[1].style.background = '#4bb7d8';


                newRow.insertCell(2);
                newData.rows[i].cells[2].innerText = data['statewise'][i]['confirmed'];
                newData.rows[i].cells[2].style.background = '#9cc850';


                newRow.insertCell(3);
                newData.rows[i].cells[3].innerText = data['statewise'][i]['active'];
                newData.rows[i].cells[3].style.background = '#f36e23';


                newRow.insertCell(4);
                newData.rows[i].cells[4].innerText = data['statewise'][i]['recovered'];
                newData.rows[i].cells[4].style.background = '#4bb7d8';


                newRow.insertCell(5);
                newData.rows[i].cells[5].innerText = data['statewise'][i]['deaths'];
                newData.rows[i].cells[5].style.background = '#9cc850';
            }
        });
}
getData();