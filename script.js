window.addEventListener("load", function() {

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
            const div = document.getElementById("container");

            // Bonus Mission: Sort Astronauts by hours spent in space
            function sortFunction(a,b){
                if(a.hoursInSpace < b.hoursInSpace)
                    return 1;
                else
                    return -1;
            }
            json.sort(sortFunction);

            // Write a function to add a space before each element in 'skills' array within each object
            
            let astroCounter = 0;
            for (let i = 0; i < json.length; i++) {
                div.innerHTML += `
                    <div class="astronaut">
                        <div class="bio">
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li id="active">Active: ${json[i].active}</li>
                                    <li>Skills: ${json[i].skills}</li>
                                </ul>
                        </div>
                        <img class="avatar" src="${json[i].picture}">
                    </div>
                `;

                // Bonus Mission: Make the "Active: true" text green, for astronauts that are still active
                // if (json[i].active === true) {
                //     document.getElementById("active").style.color = "green";
                // }

                astroCounter++
            };

            // Bonus Mission: Add a count of astronauts to the page
            div.innerHTML += `
                <h3>Number of Astronauts in Study: ${astroCounter}</h3>
            `
        });
    });

});