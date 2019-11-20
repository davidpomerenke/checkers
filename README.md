# Checkers

[![NPM version](https://img.shields.io/npm/v/aima-checkers.svg)](https://www.npmjs.com/package/aima-checkers)
![](https://github.com/davidpomerenke/checkers/workflows/Node%20CI/badge.svg)
[![Gitter](https://badges.gitter.im/aima-checkers/community.svg)](https://gitter.im/aima-checkers/community)

## Rules

You win the game if your opponent cannot do any moves and you have more pieces than them. In each round, you can move one of your checkers forward to a neighbouring empty black square. If this square is occupied by your opponent but the next square in this direction is free, then you can jump to the free square whilst your opponent will lose their checker. After a jump, you can perform another jump in the same round. If you reach the last row with a checker, it will be crowned and you can also move and jump backwards with it. When a checker jumps over a crowned checker, it will take over the crown. The same rules apply to both players. The player with the brown checkers starts.

## Installation

You can simply play this in the browser: [davidpomerenke.github.io/checkers](https://davidpomerenke.github.io/checkers)

If you prefer to install it locally, I recommend cloning this repository and then `npm start` within the directory's root directory. 

## Bugs

If you spot a bug, please create an issue. The game logs some information to the console, which you could copy and paste. 
