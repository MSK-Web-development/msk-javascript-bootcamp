function getData() {
    const url = "https://api.covid19api.com/summary";
    fetch(url)
        .then((resonse) => {
            return resonse.json();
        })
        .then((data) => {
            // console.log(data['Countries']);
            let newData = document.getElementById("newData");
            // console.log(newData);
            let html = "";
            for (let i = 1; i < data["Countries"].length; i++) {
                // console.log(data["Countries"][i]);
                var newRow = newData.insertRow();
                newRow.classList.add('country');
                newRow.insertCell(0);
                newData.rows[i].cells[0].innerText = data['Countries'][i - 1]['Country'];
                newData.rows[i].cells[0].style.background = '#7a4191';
                newData.rows[i].cells[0].style.color = '#fff'

                newRow.insertCell(1);
                newData.rows[i].cells[1].innerText = data['Countries'][i - 1]['TotalConfirmed'];
                newData.rows[i].cells[1].style.background = '#4bb7d8';


                newRow.insertCell(2);
                newData.rows[i].cells[2].innerText = data['Countries'][i - 1]['TotalRecovered'];
                newData.rows[i].cells[2].style.background = '#9cc850';


                newRow.insertCell(3);
                newData.rows[i].cells[3].innerText = data['Countries'][i - 1]['TotalDeaths'];
                newData.rows[i].cells[3].style.background = '#f36e23';


                newRow.insertCell(4);
                newData.rows[i].cells[4].innerText = data['Countries'][i - 1]['NewConfirmed'];
                newData.rows[i].cells[4].style.background = '#4bb7d8';


                newRow.insertCell(5);
                newData.rows[i].cells[5].innerText = data['Countries'][i - 1]['NewRecovered'];
                newData.rows[i].cells[5].style.background = '#9cc850';


                newRow.insertCell(6);
                newData.rows[i].cells[6].innerText = data['Countries'][i - 1]['NewDeaths'];
                newData.rows[i].cells[6].style.background = '#f36e23';
            }
        });
}
getData();

                // let corona = `<tr>
                //         <td id="cn">${data["Countries"][i].Country}</td>
                //         <td id="tc">${data["Countries"][i].TotalConfirmed}</td>
                //         <td id="tr">${data["Countries"][i].TotalRecovered}</td>
                //         <td id="td">${data["Countries"][i].TotalDeaths}</td>
                //         <td id="nc">${data["Countries"][i].NewConfirmed}</td>
                //         <td id="nr">${data["Countries"][i].NewRecovered}</td>
                //         <td id="nd">${data["Countries"][i].NewDeaths}</td>
                //     </tr>`;
                // html += corona;
            // }
            // newData.appendChildren=html;
            // console.log(newData);