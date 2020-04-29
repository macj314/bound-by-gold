import $ from 'jquery';
import './styles.css';
import { JobBoard } from './contracts.js';

$(document).ready(function () {
  $('#gameStart').click(function () {
    console.log(`we are in click function`);
    let jobBoard = new JobBoard;
    jobBoard.callOurFunctions();

    for (let i = 0; i < 8; i = i + 1) {
      if (i === 0) {
        $("#showOutput0").html("");
        $("#showOutput0").append("<h3>WereWolf contracts are here</h3>");
        for (let l = 0; l < jobBoard.ourThreeDimentionalArray[i][0].length; l = l + 1) {
          $("#showOutput0").append(`<li>Enemies present are ${jobBoard.ourThreeDimentionalArray[i][0][l]} werewolves and the contract is worth ${jobBoard.ourThreeDimentionalArray[i][1][l]}g, with death money valued at ${jobBoard.werewolfDeathMoney} gold. <button class="scb werewolf" id="${i},${l}">Select Contract</button></li>`);
        }
      }
      if (i === 1) {
        $("#showOutput1").html("");
        $("#showOutput1").append("<h3>Goblin contracts are here</h3>");
        for (let l = 0; l < jobBoard.ourThreeDimentionalArray[i][0].length; l = l + 1) {
          $("#showOutput1").append(`<li> Enemies present are ${jobBoard.ourThreeDimentionalArray[i][0][l]} goblins and the contract is worth ${jobBoard.ourThreeDimentionalArray[i][1][l]}g, with death money valued at ${jobBoard.goblinCaveDeathMoney} gold. <button class="scb goblin" id="${i},${l}">Select Contract</button></li>`);
        }
      }
      if (i === 2) {
        $("#showOutput2").html("");
        $("#showOutput2").append("<h3>Caravan Escort contracts are here</h3>");
        for (let l = 0; l < jobBoard.ourThreeDimentionalArray[i][0].length; l = l + 1) {
          $("#showOutput2").append(`<li> Enemies present are ${jobBoard.ourThreeDimentionalArray[i][0][l]} bandits and the contract is worth ${jobBoard.ourThreeDimentionalArray[i][1][l]}g, with death money valued at ${jobBoard.caravanEscortDeathMoney} gold. <button class="scb caravanEscort" id="${i},${l}">Select Contract</button></li>`);
        }
      }
      if (i === 3) {
        $("#showOutput3").html("");
        $("#showOutput3").append("<h3>Caravan Ambush contracts are here</h3>");
        for (let l = 0; l < jobBoard.ourThreeDimentionalArray[i][0].length; l = l + 1) {
          $("#showOutput3").append(`<li> Enemies present are ${jobBoard.ourThreeDimentionalArray[i][0][l]} caravan guards and the contract is worth ${jobBoard.ourThreeDimentionalArray[i][1][l]}g, with death money valued at ${jobBoard.caravanAmbushDeathMoney} gold. <button class="scb caravanAmbush" id="${i},${l}">Select Contract</button></li>`);
        }
      }
      if (i === 4) {
        $("#showOutput4").html("");
        $("#showOutput4").append("<h3>ManHunter contracts are here</h3>");
        for (let l = 0; l < jobBoard.ourThreeDimentionalArray[i][0].length; l = l + 1) {
          $("#showOutput4").append(`<li>Enemies present are ${jobBoard.ourThreeDimentionalArray[i][0][l]} man hunters and the contract is worth ${jobBoard.ourThreeDimentionalArray[i][1][l]}g, with death money valued at ${jobBoard.manHunterContractDeathMoney} gold. <button class="scb manHunter" id="${i},${l}">Select Contract</button></li>`);
        }
      }
      if (i === 5) {
        $("#showOutput5").html("");
        $("#showOutput5").append(`<h3>Soldier contracts are here </h3>`);
        for (let l = 0; l < jobBoard.ourThreeDimentionalArray[i][0].length; l = l + 1) {
          $("#showOutput5").append(`<li>Enemies present are ${jobBoard.ourThreeDimentionalArray[i][0][l]} soldiers and the contract is worth ${jobBoard.ourThreeDimentionalArray[i][1][l]}g, with death money valued at ${jobBoard.soldierContractDeathMoney} gold. <button class="scb soldier" id="${i},${l}">Select Contract</button></li>`);
        }
      }
      if (i === 6) {
        $("#showOutput6").html("");
        $("#showOutput6").append(`<h3>Ogre contracts are here </h3>`);
        for (let l = 0; l < jobBoard.ourThreeDimentionalArray[i][0].length; l = l + 1) {
          $("#showOutput6").append(`<li>Enemies present are ${jobBoard.ourThreeDimentionalArray[i][0][l]} ogres and the contract is worth ${jobBoard.ourThreeDimentionalArray[i][1][l]}g, with death money valued at ${jobBoard.ogreContractDeathMoney} gold. <button class="scb ogre" id="${i},${l}">Select Contract</button></li>`);
        }
      }
      if (i === 7) {
        $("#showOutput7").html("");
        $("#showOutput7").append(`<h3>WarParty contracts are here </h3>`);
        for (let l = 0; l < jobBoard.ourThreeDimentionalArray[i][0].length; l = l + 1) {
          $("#showOutput7").append(`<li>Enemies present are ${jobBoard.ourThreeDimentionalArray[i][0][l]} knights and the contract is worth ${jobBoard.ourThreeDimentionalArray[i][1][l]}g, with death money valued at ${jobBoard.warPartyContractDeathMoney} gold. <button class="scb warParty" id="${i},${l}">Select Contract</button></li>`);
        }
      }

    }

  });

  //$(".container").on("click", ".scb", function () {

  // console.log(this.id);
  // });
});

//theirNewCode(thierOwnOUtputofHowManySurvived, theirownoutputOnHowManyDied, valueofdeathMone, ValueOfContract)
//if (missionSuccesfull)

