// Import stylesheets
import { Agility, Character, Damage, Stats } from './src/patterns';
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

const damage = new Damage(2);
const agility = new Agility(3);

const stats = new Stats({
  Agility: agility,
  Damage: damage,
});

const char = new Character(stats);

console.log(char.stats.Agility.get());
console.log(char.stats.Damage.get());

appDiv.innerHTML = `
  <h1>TypeScript Starter</h1>
  <div>Damage: ${char.stats.Damage.get()}</div>
  <div>Agility: ${char.stats.Agility.get()}</div>

`;
