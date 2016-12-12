function Menu() {
    menuOS = false;
    dayEnd = true;
    MenuB.os = false;
    contB.os = true;
}

function Continue() {
    dayEnd = false;
    contB.os = false;
    roomBGOS = true;
    dialogBox = true;
}

function PassiveB() {
    diaNum++;
    passiveChoice.os = false;
    dialogChoices = true;
    LivingPeople[currentPerson].friendlyness++;
}

function AggressiveB() {
    diaNum += 2;
    agressiveChoice.os = false;
    dialogChoices = true;
    LivingPeople[currentPerson].suspition++;

}

function nextDia() {
    diaNum = 0;
    currentPerson++;
    nextDialog.os = false;
    dialogChoices = false;
}

function vote() {


    voting = false;
    for (i = 0; i < Buttons.length; i++) {
        Buttons[i].os = false;
    }
    if (dayNum >= numVotes) {

        for (i = 0; i < LivingPeople.length; i++) {
            Buttons.pop();
        }

        votingCleanUp();
        LivingPeople[n] = LivingPeople[LivingPeople.length - 1];
        LivingPeople.pop();
        DialogueChoices[n] = DialogueChoices[DialogueChoices.length - 1];
        DialogueChoices.pop();
        countVotes();
        wakeUp.os = true;


        nameOfPersonLynched = LivingPeople[votingIndex].name;
        LivingPeople[votingIndex] = LivingPeople[LivingPeople.length - 1];
        LivingPeople.pop();
        DialogueChoices[votingIndex] = DialogueChoices[DialogueChoices.length - 1];
        DialogueChoices.pop();

    }

}


function guiltyAlive() {

    for (i = 0; i < LivingPeople.length; i++) {
        console.log("returning true");
        if (LivingPeople[i].guilty) {

            return true;
        }
    }

    return false;
}

function votingCleanUp() { // call before you kill player

    killersTurn();
    briefing = true;
}

function newDay() {
    if ((LivingPeople.length >= 2)) {
        briefing = false;
        day++;
        dayNum++;
        dialogBox = true;
        wakeUp.os = false;
        currentPerson = 0;
    } else {
        dead = true;
    }
}

function countVotes() {
    votesForPlayer = 0;
    voteResultsIdx = 0;
    maxVotes = 0;
    for (i = 0; i < LivingPeople.length; i++) {
        if (LivingPeople[i].suspition > LivingPeople[i].friendlyness) {
            votesForPlayer++;
        } else {
            n = Math.floor(Math.random() * (LivingPeople.length));
            if (maxVotes < n) {
                maxVotes = n;
                voteResultsIdx = i;
            }
        }
    }
    if (votesForPlayer > maxVotes) {
        endGame();
    } else
        votingIndex = voteResultsIdx;

}

function killersTurn() {
    n = Math.floor(Math.random() * (LivingPeople.length));
    console.log(votingIndex);
    nameOfPersonKilled = LivingPeople[n].name;


}

function endGame() {
    dead2 = true;
}