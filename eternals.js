    
    const characterData =[
        {
          name: "Ajak",
          skills: "unarmed combat",
          affiliation: "Eternals",
          homePlanet: "Earth",
          pic: "ajak.jpg"
        },
        {
            name: "Ikaris",
            skills:  "durability",
            affiliation: "Eternals",
            homePlanet: "Titan",
            pic: "ikaris.jpg" 
    

          },
          {
            name: "Makkari",
            skills:  "speed",
            affiliation: "Eternals",
            homePlanet: "Olympia",
            pic: "makkari.jpg"
          },
          {
            name: "Thena",
            skills: "heat vision",
            affiliation: "Eternals",
            homePlanet: "Earth",
            pic: "thena.jpg"
          },
          
          {
            name: "Sersi",
            skills: "transmutation",
            affiliation: "Eternals",
            homePlanet: "Earth",
            pic: "sersi.png"
          },  
        ];
    
    // Add the content of our array to DOM

    const showInfo = () => {
      let selectedCharInfo = document.querySelector(".selectedCharInfo");
      let charPic = document.querySelector(".selectedCharPic");
      

        // get a handle to the input field and get the value
        let charSkill = document.querySelector("#charStr").value;
        characterData.forEach((character, index) =>{
            if(charSkill == character.skills){
              let character = characterData[index]
              
              // set the information
                selectedCharInfo.textContent = `"${character.name} has ${character.skills} as his/her superpower. Home planet is ${character.homePlanet}"`;
    
                // set the image
                charPic.src = character.pic;}

            else if (charSkill == character.name){
              let character = characterData[index]
          
              // set the information
                selectedCharInfo.textContent = `"${character.name} has ${character.skills} as his/her superpower. Home planet is ${character.homePlanet}"`;
    
                // set the image
                charPic.src = character.pic;
            }
  })
}
  
    // ------------------------------------------------------
    
    let charList = document.querySelector(".charList");
    let allcharList = `<ul>`;
    characterData.forEach((character) => {
        allcharList += `<li><span>${character.name}</span></li><br>`;
    });

    allcharList += `</ul>`;
    
    charList.innerHTML = allcharList;