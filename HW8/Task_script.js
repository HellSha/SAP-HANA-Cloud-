 
           function Person(username, firstname, lastname, gender, concurrency) {
              this.username = username;
              this.firstname = firstname;
              this.lastname = lastname;
              this.gender = gender;
              this.concurrency = concurrency;
            }
        
            function createObjectsArray(data){
                var personsArray = [];                    
                    $.each(data.value, function (key, data) {
                        var person = new Person(data.UserName, data.FirstName, data.LastName, data.Gender, data.Concurrency);
                            personsArray.push(person);
                        })
                return personsArray;
            }
            
           
            function showData(personArray){
                var trHTML = '<tr><th>User Name</th><th>First Name</th><th>Last Name</th><th>Gender</th><th>Concurrency</th></tr>';
                     for (i = 0; i < personArray.length; i++) {
                          trHTML += '<tr><td>' + personArray[i].username + '</td><td>' + personArray[i].firstname + '</td><td>' + personArray[i].lastname + '</td><td>' + personArray[i].gender  + '</td><td>' + personArray[i].concurrency  + '</td></tr>';
                        } 
                        $('#added-articles').append(trHTML);
                }
            
            function basicConfig(){
                  //document.getElementById("getoutput").style.display = "none";
                  document.getElementById("added-articles").style.display = "block";
                  document.getElementById("added-articles").innerHTML = "";
            }
            
                
                //GET by Search oData Filtering
            $('#search').on('click', function() {
             $.ajax({
                type: "get",
                async: true,
                url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$search=Male",
                success: function (data) {
                    basicConfig();
                    showData(createObjectsArray(data));
                },
                error: function (xhr, textStatus, errorMessage) {
                    alert(errorMessage);
                }
            });
            });
            
               //GET by Select oData Filtering
             $('#select').on('click', function() {
              $.ajax({
                type: "get",
                async: true,
                url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$select=UserName,%20Gender",
                success: function (data) {  
                    basicConfig();
                    showData(createObjectsArray(data));
                },
                error: function (xhr, textStatus, errorMessage) {
                    alert(errorMessage);
                }
            });
             });
            
                //GET by Count oData 
            $('#count').on('click', function() {
              $.ajax({
                type: "get",
                async: true,
                url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People/$count",
                success: function (data) { 
                    alert("Amount of people using $count: " + data);
                },
                error: function (xhr, textStatus, errorMessage) {
                    alert(errorMessage);
                }
            });
             });
            
                //GET by Filter oData
            $('#filter').on('click', function() {
              $.ajax({
                type: "get",
                async: true,
                url: "https://services.odata.org/V4/TripPinServiceRW/People?$filter=Emails/any(s:endswith(s, 'contoso.com'))",
                success: function (data) {
                    basicConfig();
                    showData(createObjectsArray(data));
                },
                error: function (xhr, textStatus, errorMessage) {
                    alert(errorMessage);
                }
            });
            });
            
                //GET using Skip OData
            $('#skip').on('click', function() {
              $.ajax({
                type: "get",
                async: true,
                url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$skip=5",
                success: function (data) {
                    basicConfig();
                    showData(createObjectsArray(data));
                },
                error: function (xhr, textStatus, errorMessage) {
                    alert(errorMessage);
                }
            });
            });
            
                //GET using Top OData
            $('#top').on('click', function() {
              $.ajax({
                type: "get",
                async: true,
                url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$top=3",
                success: function (data) {
                    basicConfig();
                    showData(createObjectsArray(data));
                },
                error: function (xhr, textStatus, errorMessage) {
                    alert(errorMessage);
                }
            });
            });
            
                //GET Order by Filtering OData
            $('#order-by').on('click', function() {
              $.ajax({
                type: "get",
                async: true,
                url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$orderby=FirstName",
                success: function (data) {
                    basicConfig();
                    showData(createObjectsArray(data));
                },
                error: function (xhr, textStatus, errorMessage) {
                    alert(errorMessage);
                }
            });
            });
            
              //GET Request with combination of 3 filters + 3 string parameters
            $('#3filters').on('click', function() {
              $.ajax({
                type: "get",
                async: true,
                url: "https://services.odata.org/V4/(S(htf1jmmysolh4pyvhgn1umse))/TripPinServiceRW/People?$filter=endswith(LastName,'ndy') and startswith(FirstName,'Ro') or  substring(FirstName, 1, 2) eq 'o'",
                success: function (data) {
                    basicConfig();
                    showData(createObjectsArray(data));
                },
                error: function (xhr, textStatus, errorMessage) {
                    alert(errorMessage);
                }
            });
            });