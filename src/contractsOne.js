export class JobBoard {

  constructor() {
    this.ourThreeDimentionalArray = new Array(7);
    this.werewolfDeathMoney = 75;
    this.goblinCaveDeathMoney = 50;
    this.caravanEscortDeathMoney = 80;
    this.caravanAmbushDeathMoney = 100;
    this.manHunterContractDeathMoney = 125;
    this.soldierContractDeathMoney = 150;
    this.ogreContractDeathMoney = 175;
    this.warPartyContractDeathMoney = 200;
    this.contractClicked = new Array(3);
  }

  callOurFunctions() {
    this.werewolf();
    this.goblinCave();
    this.caravanEscort();
    this.caravanAmbush();
    this.manHunterContract();
    this.soldierContract();
    this.ogreContract();
    this.warPartyContract();

  }

  werewolf() {
    let numberOfWolvesContracts = this.randomGen(3);
    this.ourThreeDimentionalArray[0] = new Array(2);
    this.ourThreeDimentionalArray[0][0] = new Array(numberOfWolvesContracts);
    this.ourThreeDimentionalArray[0][1] = new Array(numberOfWolvesContracts);
    for (let i = 0; i < numberOfWolvesContracts; i = i + 1) {
      this.ourThreeDimentionalArray[0][0][i] = this.randomGen(8);
      this.ourThreeDimentionalArray[0][1][i] = ((this.randomGen(45) * (this.ourThreeDimentionalArray[0][0][i])) + 300);
    }
  }

  goblinCave() {
    let numberOfGoblinContracts = this.randomGen(2);
    this.ourThreeDimentionalArray[1] = new Array(2);
    this.ourThreeDimentionalArray[1][0] = new Array(numberOfGoblinContracts);
    this.ourThreeDimentionalArray[1][1] = new Array(numberOfGoblinContracts);
    for (let i = 0; i < numberOfGoblinContracts; i = i + 1) {
      this.ourThreeDimentionalArray[1][0][i] = this.randomGen(12);
      this.ourThreeDimentionalArray[1][1][i] = this.ourThreeDimentionalArray[1][0][i] * 150;
    }
  }

  caravanEscort() {
    let numberOfEscortContracts = this.randomGen(7);
    this.ourThreeDimentionalArray[2] = new Array(2);
    this.ourThreeDimentionalArray[2][0] = new Array(numberOfEscortContracts);
    this.ourThreeDimentionalArray[2][1] = new Array(numberOfEscortContracts);
    for (let i = 0; i < numberOfEscortContracts; i = i + 1) {
      this.ourThreeDimentionalArray[2][0][i] = this.randomGen(10);
      this.ourThreeDimentionalArray[2][1][i] = this.ourThreeDimentionalArray[2][0][i] * 500;
    }
  }

  caravanAmbush() {
    let numberOfAmbushContracts = this.randomGen(2);
    this.ourThreeDimentionalArray[3] = new Array(2);
    this.ourThreeDimentionalArray[3][0] = new Array(numberOfAmbushContracts);
    this.ourThreeDimentionalArray[3][1] = new Array(numberOfAmbushContracts);
    for (let i = 0; i < numberOfAmbushContracts; i = i + 1) {
      this.ourThreeDimentionalArray[3][0][i] = this.randomGen(9);
      this.ourThreeDimentionalArray[3][1][i] = (this.ourThreeDimentionalArray[3][0][i] * this.randomGen(35)) + 675;
    }
  }

  manHunterContract() {
    let numberOfManhunterContracts = this.randomGen(4);
    this.ourThreeDimentionalArray[4] = new Array(2);
    this.ourThreeDimentionalArray[4][0] = new Array(numberOfManhunterContracts);
    this.ourThreeDimentionalArray[4][1] = new Array(numberOfManhunterContracts);
    for (let i = 0; i < numberOfManhunterContracts; i = i + 1) {
      this.ourThreeDimentionalArray[4][0][i] = this.randomGen(10);
      this.ourThreeDimentionalArray[4][1][i] = (this.ourThreeDimentionalArray[4][0][i] * this.randomGen(35)) + 750;
    }
  }

  soldierContract() {
    let numberOfSoldierContracts = this.randomGen(3);
    this.ourThreeDimentionalArray[5] = new Array(2);
    this.ourThreeDimentionalArray[5][0] = new Array(numberOfSoldierContracts);
    this.ourThreeDimentionalArray[5][1] = new Array(numberOfSoldierContracts);
    for (let i = 0; i < numberOfSoldierContracts; i = i + 1) {
      this.ourThreeDimentionalArray[5][0][i] = this.randomGen(12);
      this.ourThreeDimentionalArray[5][1][i] = (this.ourThreeDimentionalArray[5][0][i] * this.randomGen(40)) + 1250;
    }
  }

  ogreContract() {
    let numberOfOgreContracts = this.randomGen(2);
    this.ourThreeDimentionalArray[6] = new Array(2);
    this.ourThreeDimentionalArray[6][0] = new Array(numberOfOgreContracts);
    this.ourThreeDimentionalArray[6][1] = new Array(numberOfOgreContracts);
    for (let i = 0; i < numberOfOgreContracts; i = i + 1) {
      this.ourThreeDimentionalArray[6][0][i] = this.randomGen(8);
      this.ourThreeDimentionalArray[6][1][i] = (this.ourThreeDimentionalArray[6][0][i] * this.randomGen(40)) + 2000;
    }
  }

  warPartyContract() {
    let numberOfWarPartyContracts = this.randomGen(1);
    this.ourThreeDimentionalArray[7] = new Array(2);
    this.ourThreeDimentionalArray[7][0] = new Array(numberOfWarPartyContracts);
    this.ourThreeDimentionalArray[7][1] = new Array(numberOfWarPartyContracts);
    for (let i = 0; i < numberOfWarPartyContracts; i = i + 1) {
      this.ourThreeDimentionalArray[7][0][i] = this.randomGen(15);
      this.ourThreeDimentionalArray[7][1][i] = (this.ourThreeDimentionalArray[7][0][i] * this.randomGen(45)) + 3000;
    }
  }

  randomGen(number) {
    return Math.ceil(Math.random() * number);
  }

}