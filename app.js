function createParagraph () {

    let adjectiveOne = document.getElementById("adjectiveOne").value;
    let firstNameOne = document.getElementById("firstNameOne").value;
    let adjectiveTwo = document.getElementById("adjectiveTwo").value;
    let nounOne = document.getElementById("nounOne").value;
    let verbOne = document.getElementById("verbOne").value;
    let animal = document.getElementById("animal").value;
    let verbingOne = document.getElementById("verbingOne").value;
    let adverb = document.getElementById("adverb").value;
    let adjectiveThree = document.getElementById("adjectiveThree").value;
    let firstNameTwo = document.getElementById("firstNameTwo").value;
    let adjectiveFour = document.getElementById("adjectiveFour").value;
    let nounTwo = document.getElementById("nounTwo").value;
    let verbingTwo = document.getElementById("verbingTwo").value;
    let pluralNoun = document.getElementById("pluralNoun").value;
    let verbingThree = document.getElementById("verbingThree").value;



    let paragraph = `<p>They say my school is haunted; My ${adjectiveOne} friend ${firstNameOne} says she saw a ${adjectiveTwo} ${nounOne} floating at the end of the hall near the cafeteria. Some say if you ${verbOne} down that hallway at night, you'll hear a ${animal} ${verbingOne} ${adverb}. My ${adjectiveThree} friend ${firstNameTwo} saw a ${adjectiveFour} ${nounTwo} ${verbingTwo} under one of the tables once. I hope I never see any ${pluralNoun} ${verbingThree}; eating lunch there is scary enough!</p>`;


    document.getElementById("answer").innerHTML = paragraph;
}

