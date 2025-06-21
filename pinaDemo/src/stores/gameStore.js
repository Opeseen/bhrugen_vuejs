import { defineStore } from "pinia";
import {ref, computed} from 'vue';

// using the composition api style
export const useGameStore = defineStore("gameStore", () => {
  const score = ref(0);
  const maxHealth = ref(100);
  const maxAttack = ref(30);
  const maxDefense = ref(10);

  const getScore = computed(() => score.value);
  const getWinningScore = computed(() => maxHealth.value);
  
  function setNextAttack(){
    let attack = Math.floor(Math.random() * maxAttack.value) +1;
    score.value += attack;
  };
  function setNextDefense(){
    let defense = Math.floor(Math.random() * maxDefense.value) +1;
    score.value -= defense;
  };
  function resetScore(){
    score.value = 50;
  };
  return {
    // state
    score,
    maxAttack,
    maxHealth,
    maxDefense,
    // getters
    getScore,
    getWinningScore,
    // actions
    setNextAttack,
    setNextDefense,
    resetScore
  }
});