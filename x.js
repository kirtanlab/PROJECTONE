

const getdata = async(name)=>{
    const resp =await fetch(`https://dblp.org/search/publ/api?q=${name}&format=json`)
    const respdata = await resp.json();
    const result = respdata.result.hits.hit;

    
    const final = result.filter((doc)=>{
        const co_authors =  doc.info.authors.author
        let flag = 0;
        for(let i=0;i<co_authors.length;i++)
        {
            if(co_authors[i].text === name)
            {
                flag = 1;
                break;
            }
        }
        return flag==1
        // console.log(flag);
    })

    
    const pubs = final.map((doc)=>{
        return doc.info.title;
    })
    const year = final.map((doc)=>{
        return doc.info.year;
    })
    year_array = year;
    //console.log(final);
    // console.log(result);
    //console.log(year_array[0]);//year
    //console.log(pubs[0]);//array of publications (title)

    //CONNECTING FRONT_END
    $('th').on('click', function() {
        var column = $(this).data('column')
        var order = $(this).data('order')

        if (order == 'desc') {
            $(this).data('order', "asc")
            data = data.sort((a, b) => a[column] > b[column] ? 1 : -1)

        } else {
            $(this).data('order', "desc")
            data = data.sort((a, b) => a[column] < b[column] ? 1 : -1)

        }

        buildTable(data)
    })

    buildTable(data)

    function buildTable(data) {
        var table = document.getElementById('myTable')
        console.log("lol");
        table.innerHTML = ''
        for (var i = 0; i < data.length; i++) {

            objIndex = i;
            // console.log("value of objIndex: ", objIndex);

            // console.log("Before update: ", data[objIndex]); 

            if (data[objIndex].VIP === "true") {
                // console.log("if true ", data[objIndex]);
            } else {
                data[objIndex].VIP = "false";
                // console.log("if false ", data[objIndex]);
            }


            var row = `<tr>
						<td>${year[i]}</td>
						<td>${pubs[i]}</td>
						<td>${data[i]['First Name'] }</td>
						</tr>`
            table.innerHTML += row;
        }
    }
}

getdata('Puneet Goel')
//console.log(year_array);


//Connecting to Front END
