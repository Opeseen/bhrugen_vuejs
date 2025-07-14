import { defineStore } from "pinia";

// using the options api style 
export const useGameStore = defineStore("gameStore",{
  state: () => ({
    score: 0,
    maxHealth: 100,
    maxAttack: 30,
    maxDefense: 10
  }),
  getters: {
    getScore(){
      return this.score;
    },
    getWinningScore(){
      return this.maxHealth;
    }
  },
  actions:{
    setNextAttack(){
      let attack = Math.floor(Math.random() * this.maxAttack) +1;
      this.score += attack;
    },
    setNextDefense(){
      let defense = Math.floor(Math.random() * this.maxDefense) +1;
      this.score -= defense;
    },
    resetScore(){
      this.score = 50;
    }
  }
});