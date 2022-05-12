'use strict';


const api = 'https://randomuser.me/api/?nat=CA&results=5&seed=4f455651c5d8b363';

const ul = document.querySelector('.ulIMG')

const options = {

    method: 'GET',

    mode: 'cors'

}




const getUsers = async () => {

    try {

        const response = await fetch(api, options);

        if(response.ok)

        {

            const data = await response.json()

            const friends = data.results




            friends.forEach(element => {

                const li = document.createElement("li")   
                const img = document.createElement('img')
 

                li.innerText = `${element.name.first}`

                img.src = `${element.picture.thumbnail}`

                li.appendChild(img)

                ul.appendChild(li)

            });

        }

      

    } catch (error) {

        console.log(error)

    }

}



getUsers()