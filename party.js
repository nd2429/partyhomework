let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]

// Prompt 1: double the hitpoints of everyone in the party
// const doPartyLoop= () =>{
//   party.forEach(member =>
//     {
    
//         member.hitpoints= member.hitpoints * 2;
    
    
//     })
// }

// doPartyLoop()

// console.log(party)

// Prompt 2: Timothy has been hit with an arrow, subtract 5 points from his hp

//   party.forEach((member)=> {
//     if (member.name =="Timothy"){

      
//         //member.hitpoints =member.hitpoints - 5;
//         member.hitpoints -= 5
//     }
// })
// console.log(party);

// Prompt 3: Sarah's tiger has been turned into a jellyfish by a wizard, please change it

// const changeType=(member)=>{
// loop through array and find correct object 
//check if objects name is the name of the person
//change companion type
party.forEach((member, index)=>{

 if (member.name == "Sarah"){
    member.companion.type = "jellyfish";
 }
})

console.log(party);

;
// Prompt 4: Timothy drank this potion. Raise his hitpoints by 20 and remove "potion" from his belongings.
party.forEach((member, index)=>{

if (member.name == "Timothy"){

    member.hitpoints +=20;
    member.belongings.forEach((belongingString, idx)=>{
        if(belongingString=="potion"){
            member.belongings.splice(idx,1)
        }
    })
}
})



// Prompt 5: Timothy got hungry and stole Joline's bread. Take it out of her belongings and put it  into Timothy's belongings.
// 


// Prompt 6: Joline got upset and left the party. Take her out of the array.

// Prompt 7: Timothy and Sarah have been recruiting. Add a new adventurer to the party. (new adventurer is parameter)

// Prompt 8: The party has been doing well! They found 200 gold. Create a new property called gold and split the gold evenly between everyone. (amount of gold is parameter)

// Prompt 9: Sarah is tired of taking care of a jellyfish. Subtract some gold from her and change her companion to a bear. 

// Prompt 10: Timothy’s sword has gotten old. Change it to “Rusty Sword" 

// Prompt 11: Write a function called setLeader that takes a name as a parameter. The member with that name should have a new property leader: true while the other members have leader: false.