'use strict';

const anims_players = Object.freeze([
	{   // Purplus
		still: {
			soffset: [0, 0],
			frames: [[0, 0]],
					},
		north: {
			soffset: [128, 64],
			frames: [[0, 0], [64, 0], [128, 0], [64, 0]],
					},
		south: {
			soffset: [64, 0],
			frames: [[64, 0], [0, 0], [128, 0], [0, 0]],
					},
		east: {
			soffset: [0, 0],
			frames: [[512, 0], [576, 0], [0, 64], [64, 64]],
					},
		west: {
			soffset: [256, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		feeding: {
			soffset: [320, 64],
			frames: [[0, 0], [0, 0], [64, 0], [128, 0], [64, 0], [128, 0], [64, 0], [128, 0]],
					},
		power_food: {
			soffset: [0, 0],
			frames: [[0, 0], [448, 128], [0, 0], [448, 128], [0, 0], [448, 128], [0, 0], [448, 128], [0, 0], [448, 128], [512, 192], [576, 192], [512, 192], [576, 192], [512, 192], [576, 192], [512, 192], [576, 192]],
					},
		poisoned: {
			soffset: [0, 0],
			frames: [[0, 0], [0, 0], [448, 256], [448, 256], [512, 256], [512, 256], [576, 256], [576, 256], [512, 256], [512, 256], [576, 256], [576, 256], [512, 256], [512, 256], [576, 256], [576, 256], [512, 256], [512, 256], [576, 256], [576, 256], [512, 256], [512, 256], [576, 256], [576, 256], [512, 256], [512, 256]],
					},
		female: {
			soffset: [0, 256],
			frames: [[[0, 0], [0, 0]], [[64, 0], [64, 0]], [[128, 0], [128, 0]], [[192, 0], [192, 0]]],
			transitions: [[0.8, 0.9, 0.95, 1], [0.5, 0.85, 0.93, 1], [0.5, 0.57, 0.93, 1], [0.5, 0.57, 0.64, 1]],
					},
		female_pre_love: {
			soffset: [0, 256],
			frames: [[0, 0]],
					},
		offspring: {
			soffset: [256, 256],
			frames: [[[0, 0], [0, 0]], [[64, 0], [64, 0]], [[128, 0], [128, 0]]],
			transitions: [[0.7, 0.85, 1], [0.4, 0.8, 1], [0.4, 0.6, 1]],
					},
		quicksand: {
			soffset: [0, 0],
			frames: [[0, 0], [0, 128], [64, 128], [128, 128], [192, 128], [256, 128], [320, 128], [384, 128], [384, 128], [384, 128]],
					},
		zapped: {
			soffset: [0, 128],
			frames: [[576, 0], [512, 0], [576, 0], [512, 0], [576, 0], [512, 0], [576, 0], [512, 0], [576, 0], [512, 0], [0, 64], [64, 64], [128, 64], [192, 64], [256, 64], [320, 64], [384, 64], [448, 64]],
					},
		winner: {
			soffset: [512, 192],
			frames: [[0, 0], [64, 0]],
					},
		enem_still: {
			soffset: [0, 0],
			frames: [[0, 0]],
					},
		enem_boasting: {
			soffset: [0, 0],
			frames: [[[0, 0], [0, 0]], [[320, 0], [320, 0]], [[384, 0], [384, 0]]],
			transitions: [[0.8, 0.9, 1], [0.1, 0.95, 1], [0.1, 0.15, 1]],
					},
		defeated: {
			soffset: [64, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
	},
	{   // Kiwiopteryx
		still: {
			soffset: [0, 0],
			frames: [[0, 0]],
					},
		north: {
			soffset: [128, 64],
			frames: [[64, 0], [128, 0], [0, 0], [128, 0]],
					},
		south: {
			soffset: [0, 0],
			frames: [[0, 64], [576, 0], [64, 64], [576, 0]],
					},
		east: {
			soffset: [64, 0],
			frames: [[192, 0], [0, 0], [64, 0], [128, 0]],
					},
		west: {
			soffset: [320, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		feeding: {
			soffset: [320, 64],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0], [0, 0], [64, 0], [128, 0], [192, 0]],
					},
		power_food: {
			soffset: [0, 0],
			frames: [[0, 0], [256, 128], [0, 0], [256, 128], [0, 0], [256, 128], [0, 0], [256, 128], [0, 0], [256, 128], [64, 192], [128, 192], [64, 192], [128, 192], [64, 192], [128, 192], [64, 192], [128, 192]],
					},
		poisoned: {
			soffset: [0, 128],
			frames: [[0, 0], [64, 0], [0, 0], [64, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0]],
					},
		female: {
			soffset: [128, 256],
			frames: [[0, 0], [0, 0], [64, 0], [64, 0]],
					},
		female_pre_love: {
			soffset: [128, 256],
			frames: [[0, 0]],
					},
		pre_offspring: {
			soffset: [256, 256],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		offspring: {
			soffset: [512, 256],
			frames: [[0, 0], [0, 0], [64, 0], [64, 0]],
					},
		quicksand: {
			soffset: [0, 192],
			frames: [[192, 0], [256, 0], [320, 0], [384, 0], [448, 0], [512, 0], [576, 0], [0, 64], [64, 64], [64, 64], [64, 64]],
					},
		zapped: {
			soffset: [0, 128],
			frames: [[384, 0], [320, 0], [384, 0], [320, 0], [384, 0], [320, 0], [384, 0], [320, 0], [384, 0], [320, 0], [448, 0], [512, 0], [576, 0], [0, 64]],
					},
		winner: {
			soffset: [64, 192],
			frames: [[0, 0], [64, 0]],
					},
		enem_still: {
			soffset: [0, 64],
			frames: [[0, 0]],
					},
		enem_boasting: {
			soffset: [0, 64],
			frames: [[[0, 0]], [[384, 0], [320, 0]]],
			transitions: [[0.95, 1], [0.3, 1]],
					},
		defeated: {
			soffset: [64, 64],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
	},
	{   // Pesciodyphus
		still: {
			soffset: [0, 0],
			frames: [[0, 0]],
					},
		north: {
			soffset: [192, 64],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		south: {
			soffset: [0, 0],
			frames: [[576, 0], [0, 64], [64, 64], [128, 64]],
					},
		east: {
			soffset: [64, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		west: {
			soffset: [320, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		feeding: {
			soffset: [0, 64],
			frames: [[448, 0], [512, 0], [576, 0], [0, 64], [576, 0], [0, 64], [576, 0], [0, 64]],
					},
		power_food: {
			soffset: [0, 0],
			frames: [[0, 0], [576, 192], [0, 0], [576, 192], [0, 0], [576, 192], [0, 0], [576, 192], [0, 0], [576, 192], [0, 192], [64, 192], [0, 192], [64, 192], [0, 192], [64, 192], [0, 192], [64, 192]],
					},
		poisoned: {
			soffset: [0, 256],
			frames: [[0, 0], [0, 0], [64, 0], [64, 0], [0, 0], [0, 0], [64, 0], [64, 0], [0, 0], [0, 0], [64, 0], [64, 0], [128, 0], [128, 0], [128, 0], [128, 0], [128, 0], [128, 0], [128, 0], [128, 0], [128, 0], [128, 0], [128, 0], [128, 0], [128, 0], [128, 0]],
					},
		female: {
			soffset: [192, 256],
			frames: [[0, 0], [0, 0], [320, 0], [320, 0]],
					},
		female_pre_love: {
			soffset: [192, 256],
			frames: [[0, 0]],
					},
		offspring: {
			soffset: [256, 256],
			frames: [[0, 0], [0, 0], [64, 0], [64, 0], [128, 0], [128, 0], [192, 0], [192, 0]],
					},
		quicksand: {
			soffset: [64, 128],
			frames: [[0, 0], [0, 0], [64, 0], [64, 0], [128, 0], [128, 0], [192, 0], [192, 0], [256, 0], [256, 0], [320, 0], [320, 0], [320, 0], [320, 0], [320, 0], [320, 0], [320, 0], [320, 0], [448, 0], [448, 0], [448, 0], [448, 0], [448, 0], [448, 0], [448, 0], [448, 0], [384, 0], [384, 0], [384, 0], [384, 0], [384, 0], [384, 0], [384, 0], [384, 0], [512, 0], [512, 0], [512, 0], [512, 0], [512, 0], [512, 0], [512, 0], [512, 0]],
					},
		zapped: {
			soffset: [128, 192],
			frames: [[0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [128, 0], [192, 0], [256, 0], [320, 0], [384, 0]],
					},
		winner: {
			soffset: [0, 192],
			frames: [[0, 0], [64, 0]],
					},
		enem_still: {
			soffset: [0, 128],
			frames: [[0, 0]],
					},
		enem_boasting: {
			soffset: [0, 128],
			frames: [[[0, 0]], [[320, 0], [384, 0]]],
			transitions: [[0.95, 1], [0.3, 1]],
					},
		defeated: {
			soffset: [64, 128],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
	},
	{   // Isnobug
		still: {
			soffset: [0, 0],
			frames: [[0, 0]],
					},
		north: {
			soffset: [192, 64],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		south: {
			soffset: [0, 0],
			frames: [[576, 0], [0, 64], [64, 64], [128, 64]],
					},
		east: {
			soffset: [320, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		west: {
			soffset: [64, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		feeding: {
			soffset: [448, 64],
			frames: [[0, 0], [64, 0], [128, 0], [64, 0], [128, 0], [64, 0], [128, 0], [64, 0]],
					},
		power_food: {
			soffset: [0, 0],
			frames: [[0, 0], [384, 128], [0, 0], [384, 128], [0, 0], [384, 128], [0, 0], [384, 128], [0, 0], [384, 128], [128, 128], [192, 128], [256, 128], [320, 128], [128, 128], [192, 128], [256, 128], [320, 128]],
					},
		poisoned: {
			soffset: [0, 0],
			frames: [[0, 0], [0, 0], [0, 320], [0, 320], [64, 320], [64, 320], [128, 320], [128, 320], [64, 320], [64, 320], [128, 320], [128, 320], [192, 320], [192, 320], [192, 320], [192, 320], [192, 320], [192, 320], [192, 320], [192, 320], [192, 320], [192, 320], [192, 320], [192, 320], [192, 320], [192, 320]],
					},
		female: {
			soffset: [384, 256],
			frames: [[0, 0], [64, 0]],
					},
		female_pre_love: {
			soffset: [384, 256],
			frames: [[0, 0]],
					},
		offspring: {
			soffset: [512, 256],
			frames: [[0, 0], [64, 0]],
					},
		quicksand: {
			soffset: [0, 192],
			frames: [[448, 0], [512, 0], [576, 0], [0, 64], [64, 64], [128, 64], [192, 64], [256, 64], [320, 64], [320, 64], [320, 64]],
					},
		zapped: {
			soffset: [0, 128],
			frames: [[512, 0], [448, 0], [512, 0], [448, 0], [512, 0], [448, 0], [512, 0], [448, 0], [512, 0], [448, 0], [576, 0], [0, 64], [64, 64], [128, 64], [192, 64], [256, 64], [192, 64], [320, 64], [384, 64]],
					},
		winner: {
			soffset: [128, 128],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		enem_still: {
			soffset: [0, 192],
			frames: [[0, 0]],
					},
		enem_boasting: {
			soffset: [0, 192],
			frames: [[[0, 0]], [[320, 0], [384, 0]]],
			transitions: [[0.95, 1], [0.5, 1]],
					},
		defeated: {
			soffset: [64, 192],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
	},
	{   // Amorph
		still: {
			soffset: [0, 0],
			frames: [[0, 0]],
					},
		north: {
			soffset: [128, 64],
			frames: [[0, 0], [64, 0], [128, 0], [64, 0]],
					},
		south: {
			soffset: [0, 0],
			frames: [[576, 0], [0, 64], [64, 64], [0, 64]],
					},
		east: {
			soffset: [64, 0],
			frames: [[64, 0], [128, 0], [192, 0], [0, 0]],
					},
		west: {
			soffset: [320, 0],
			frames: [[64, 0], [128, 0], [192, 0], [0, 0]],
					},
		feeding: {
			soffset: [320, 64],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0], [0, 0], [64, 0], [128, 0], [192, 0]],
					},
		power_food: {
			soffset: [0, 0],
			frames: [[0, 0], [512, 128], [0, 0], [512, 128], [0, 0], [512, 128], [0, 0], [512, 128], [0, 0], [512, 128], [576, 64], [0, 128], [576, 64], [0, 128], [576, 64], [0, 128], [576, 64], [0, 128]],
					},
		poisoned: {
			soffset: [0, 0],
			frames: [[0, 0], [0, 0], [448, 192], [512, 192], [448, 192], [512, 192], [448, 192], [512, 192], [448, 192], [512, 192], [448, 192], [512, 192], [576, 192], [576, 192], [576, 192], [576, 192], [576, 192], [576, 192], [576, 192], [576, 192], [576, 192], [576, 192], [576, 192], [576, 192], [576, 192], [576, 192]],
					},
		female: {
			soffset: [0, 256],
			frames: [[0, 0], [64, 0]],
					},
		female_pre_love: {
			soffset: [0, 256],
			frames: [[0, 0]],
					},
		offspring: {
			soffset: [128, 256],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		quicksand: {
			soffset: [64, 128],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0], [256, 0], [320, 0], [384, 0], [384, 0], [384, 0]],
					},
		zapped: {
			soffset: [0, 128],
			frames: [[0, 64], [576, 0], [0, 64], [576, 0], [0, 64], [576, 0], [0, 64], [576, 0], [0, 64], [576, 0], [64, 64], [128, 64], [192, 64], [256, 64], [320, 64], [384, 64]],
					},
		winner: {
			soffset: [0, 64],
			frames: [[576, 0], [0, 64]],
					},
		enem_still: {
			soffset: [0, 256],
			frames: [[0, 0]],
					},
		enem_boasting: {
			soffset: [0, 256],
			frames: [[[0, 0]], [[320, 0], [384, 0]]],
			transitions: [[0.95, 1], [0.3, 1]],
					},
		defeated: {
			soffset: [64, 256],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
	},
	{   // Chuck Berry
		still: {
			soffset: [0, 0],
			frames: [[0, 0]],
					},
		north: {
			soffset: [320, 0],
			frames: [[0, 0], [64, 0]],
					},
		south: {
			soffset: [448, 0],
			frames: [[0, 0], [64, 0]],
					},
		east: {
			soffset: [64, 0],
			frames: [[0, 0], [64, 0]],
					},
		west: {
			soffset: [192, 0],
			frames: [[0, 0], [64, 0]],
					},
		feeding: {
			soffset: [0, 0],
			frames: [[576, 0], [0, 64], [0, 64], [64, 64], [64, 64], [0, 64], [0, 64], [576, 0]],
					},
		power_food: {
			soffset: [0, 0],
			frames: [[64, 0], [64, 128], [64, 0], [64, 128], [64, 0], [64, 128], [64, 0], [64, 128], [64, 0], [64, 128], [576, 64], [0, 128], [576, 64], [0, 128], [576, 64], [0, 128], [576, 64], [0, 128]],
					},
		poisoned: {
			soffset: [0, 0],
			frames: [[0, 0], [0, 0], [128, 64], [128, 64], [192, 64], [192, 64], [256, 64], [256, 64], [320, 64], [320, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64], [384, 64]],
					},
		female: {
			soffset: [0, 192],
			frames: [[448, 0], [0, 64], [64, 64], [0, 64]],
					},
		female_pre_love: {
			soffset: [0, 192],
			frames: [[448, 0]],
					},
		offspring: {
			soffset: [512, 192],
			frames: [[0, 0], [64, 0]],
					},
		quicksand: {
			soffset: [0, 0],
			frames: [[0, 0], [0, 192], [64, 192], [128, 192], [192, 192], [256, 192], [320, 192], [384, 192], [384, 192], [384, 192]],
					},
		zapped: {
			soffset: [128, 128],
			frames: [[0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [128, 0], [192, 0], [256, 0], [320, 0], [384, 0], [448, 0]],
					},
		winner: {
			soffset: [0, 64],
			frames: [[0, 64], [576, 0]],
					},
		enem_still: {
			soffset: [0, 320],
			frames: [[0, 0]],
					},
		enem_boasting: {
			soffset: [0, 320],
			frames: [[[0, 0]], [[320, 0], [384, 0]]],
			transitions: [[0.95, 1], [0.3, 1]],
					},
		defeated: {
			soffset: [64, 320],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
	},
]);

const anims_predators = Object.freeze([
	{   // Dino
		still: {
			soffset: [0, 0],
			frames: [[0, 0]],
					},
		north: {
			soffset: [0, 0],
			frames: [[576, 0], [0, 64], [64, 64], [128, 64]],
					},
		south: {
			soffset: [192, 64],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		east: {
			soffset: [64, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		west: {
			soffset: [320, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		attack: {
			soffset: [0, 0],
			frames: [[[128, 192]], [[64, 192]], [[0, 64]], [[0, 192]]],  // Attacks from N E S W
					},
		winner: {
			soffset: [0, 64],
			frames: [[448, 0], [512, 0], [576, 0], [0, 64], [576, 0]],
					},
		defeated: [
			{  // Stars
				soffset: [64, 128],
				frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
			},
			{  // Crying
				soffset: [320, 128],
				frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
			},
			{  // Skeleton
				soffset: [576, 128],
				frames: [[0, 0]],
			},
		],
	},
	{   // Mushroom
		still: {
			soffset: [0, 0],
			frames: [[0, 0]],
					},
		north: {
			soffset: [384, 0],
			frames: [[0, 0], [64, 0], [64, 0], [0, 0]],
					},
		south: {
			soffset: [0, 0],
			frames: [[128, 64], [128, 64], [320, 0], [320, 0]],
					},
		east: {
			soffset: [0, 0],
			frames: [[64, 0], [0, 64], [0, 64], [128, 0]],
					},
		west: {
			soffset: [0, 0],
			frames: [[192, 0], [64, 64], [64, 64], [256, 0]],
					},
		attack: {
			soffset: [0, 0],
			frames: [[[128, 64]], [[64, 64]], [[576, 0]], [[0, 64]]],  // Attacks from N E S W
					},
		winner: {
			soffset: [0, 0],
			frames: [[0, 0], [320, 64], [384, 64], [448, 64], [512, 64]],
					},
		defeated: [
			{ // Soup
				soffset: [576, 64],
				frames: [[0, 0]],
			},
			{ // Plaster
				soffset: [0, 128],
				frames: [[0, 0]],
			},
			{
				soffset: [64, 128],
				frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
			},
		],
	},
	{   // Human
		still: {
			soffset: [0, 0],
			frames: [[0, 0]],
					},
		north: {
			soffset: [192, 64],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		south: {
			soffset: [0, 0],
			frames: [[576, 0], [0, 64], [64, 64], [128, 64]],
					},
		east: {
			soffset: [64, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		west: {
			soffset: [320, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
					},
		attack: {
			soffset: [0, 0],
			frames: [[[64, 64]], [[448, 0]], [[320, 64]], [[64, 0]]],  // Attacks from N E S W
					},
		winner: {
			soffset: [448, 64],
			frames: [[0, 0]],
					},
		defeated: [
			{ // Stars
				soffset: [0, 64],
				frames: [[512, 0], [576, 0], [0, 64], [64, 64]],
			},
			{ // Naked
				soffset: [128, 128],
				frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
			},
			{ // RIP
				soffset: [384, 128],
				frames: [[0, 0]],
			},
		],
	},
]);

const anims_clouds = Object.freeze({
	fight_hor: {
		size: [100, 64],
		offset: [14, 0],
		soffset: [0, 0],
		frames: [[100, 0], [200, 0], [300, 0], [0, 64], [0, 0], [100, 0], [200, 0], [300, 0], [0, 64], [0, 0], [100, 64], [200, 64]], // 234512345167
	},
	fight_vert: {
		size: [64, 100],
		offset: [0, 14],
		soffset: [0, 128],
		frames: [[64, 0], [128, 0], [192, 0], [256, 0], [0, 0], [64, 0], [128, 0], [192, 0], [256, 0], [0, 0], [320, 0], [384, 0]], // 234512345167
	},
	love_hor: {
		size: [100, 64],
		offset: [14, 0],
		soffset: [0, 228],
		frames: [[100, 0], [200, 0], [300, 0], [0, 64], [0, 0], [100, 0], [200, 0], [300, 0], [0, 64], [0, 0], [100, 64], [200, 64]], // 234512345167
	},
	love_vert: {
		size: [64, 100],
		offset: [0, 14],
		soffset: [0, 356],
		frames: [[64, 0], [128, 0], [192, 0], [256, 0], [0, 0], [64, 0], [128, 0], [192, 0], [256, 0], [0, 0], [320, 0], [384, 0]], // 234512345167
	},
});

const anim_ranking = Object.freeze({
	walking: [
		{
			offset: [128, 0],
			frames: [[64, 0],  [128, 0],  [192, 0],  [0, 64]],
		},
		{
			offset: [0, 128],
			frames: [[0, 0],  [64, 0],  [128, 0],  [192, 0]],
		},
		{
			offset: [64, 192],
			frames: [[0, 0], [64, 0],  [128, 0],  [192, 0]],
		},
		{
			offset: [128, 256],
			frames: [[0, 0],  [64, 0],  [128, 0],  [192, 0]],
		},
		{
			offset: [0, 320],
			frames: [[320, 0],  [0, 64],  [64, 64],  [128, 64]],
		},
		{
			offset: [0, 448],
			frames: [[0, 0],  [64, 0]],
		},
	],
	standing: [[128, 0], [320, 64], [0, 192], [64, 256], [256, 320], [320, 384]],
	boasting: [
		{
			offset: [192, 64],
			frames: [[0, 0],  [64, 0]],
		},
		{
			offset: [256, 128],
			frames: [[0, 0],  [64, 0]],
		},
		{
			offset: [0, 192],
			frames: [[320, 0],  [0, 64]],
		},
		{
			offset: [0, 320],
			frames: [[0, 0],  [64, 0],  [128, 0],  [192, 0]],
		},
		{
			offset: [192, 384],
			frames: [[0, 0],  [64, 0]],
		},
		{
			offset: [256, 448],
			frames: [[0, 0],  [64, 0]],
		},
	],
});

const anim_delays = Object.freeze({
	movement: 2,
	electro: 3,
	feeding: 3,
	female: 3,
	offspring: 3,
	power_food: 3,
	winner: 3,
	defeated: 3,
	background: 3,
	world: 3,
	turn_selection: 3,
	ranking: 3,
	ranking_winner: 6,
	poison: 6,
	cloud: 6,
	quicksand: 6,
	popups: 12,
});

const survival_background = Object.freeze({
	36: [[384, 192], [448, 192], [512, 192], [576, 192], [0, 256], [64, 256], [128, 256], [192, 256]], // Swamp
	44: [[256, 256], [320, 256], [384, 256], [448, 256], [512, 256], [576, 256], [320, 256], [256, 256]], // Volcano
	66: [[384, 384], [448, 384], [512, 384], [576, 384], [576, 384], [512, 384], [448, 384], [384, 384]], // Snail
	80: [[0, 512], [64, 512], [128, 512], [192, 512]], // Thin crystal
	84: [[256, 512], [320, 512], [384, 512], [448, 512]], // Thick crystal
	100: [[0, 640], [64, 640], [128, 640], [192, 640]], // Radar station
	110: [[0, 704], [64, 704], [128, 704], [192, 704]], // Drippy flower
	114: [[256, 704], [320, 704], [384, 704], [448, 704], [384, 704], [320, 704], [256, 704], [256, 704]], // Eye
	122: [[128, 768], [192, 768], [256, 768], [128, 768], [256, 768], [192, 768], [128, 768], [192, 768]], // Nuclear waste
	125: [[320, 768], [384, 768], [448, 768], [512, 768], [576, 768], [512, 768], [576, 768], [512, 768]], // Single whip plant
	130: [[0, 832], [64, 832], [128, 832], [192, 832], [256, 832], [192, 832], [256, 832], [192, 832]], // Tripple whip plant

});
