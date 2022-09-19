async function postData(url = 'https://demo2211087.mockable.io/mock', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  postData('https://demo2211087.mockable.io/mock')
    .then((data) => {
        
      console.log(data);
console.log(typeof(data));
console.log(typeof(data));
      displayData(data);
    }); 

      function displayData( data)
    {
            var temp = "";
            
            data.companies.forEach((itemData) => {
              temp += "<tr>";
              temp += "<td>" + itemData.name + "</td>";
              temp += "<td>" + itemData.email + "</td></tr>";
            });
            document.getElementById('data').innerHTML += temp;
          
    }