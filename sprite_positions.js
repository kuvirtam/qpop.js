'use strict';

const anims_players = [
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
			frames: [[0, 0], [0, 0], [64, 0], [128, 0], [64, 0], [128, 0], [64, 0], [128, 0]], // 11232323
		},
		power_food: {
			soffset: [0, 0],
			frames: [[0, 0], [448, 128], [0, 0], [448, 128], [0, 0], [448, 128], [0, 0], [448, 128], [0, 0], [448, 128], [512, 192], [576, 192], [512, 192], [576, 192], [512, 192], [576, 192], [512, 192], [576, 192]],
		},
		poisoned: {
			soffset: [448, 256],
			frames: [[0, 0], [64, 0], [128, 0], [64, 0], [128, 0], [64, 0], [128, 0], [64, 0], [128, 0], [64, 0], [128, 0], [64, 0]], // 123232323232
		},
		female: {
			soffset: [0, 256],
			frames: [[0, 0], [0, 0], [64, 0], [64, 0], [128, 0], [128, 0], [192, 0], [192, 0]],
		},
		offspring: {
			soffset: [256, 256],
			frames: [[0, 0], [0, 0], [64, 0], [64, 0], [0, 0], [0, 0], [64, 0], [64, 0], [0, 0], [0, 0], [128, 0], [128, 0], [0, 0], [0, 0], [128, 0], [128, 0]],
		},
		quicksand: {
			soffset: [0, 128],
			frames: [[0, -128], [0, 0], [64, 0], [128, 0], [192, 0], [256, 0], [320, 0], [384, 0]],
		},
		/*zapped: { // TODO RESEARCH
			soffset: [, ],
			frames: [[, ]],
		},*/
		winner: {
			soffset: [512, 192],
			frames: [[0, 0], [0, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0]], // 111212121212121212
		},
		enem_still: {
			soffset: [0, 0],
			frames: [[0, 0]],
		},
		enem_boasting: {
			soffset: [320, 0],
			frames: [[0, 0], [0, 64]],
		},
		enem_defeated: {
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
			frames: [[64, 0], [128, 0], [0, 0], [128, 0], [64, 0], [128, 0], [0, 0], [128, 0]],
		},
		south: {
			soffset: [0, 0],
			frames: [[0, 64], [576, 0], [64, 64], [576, 0], [0, 64], [576, 0], [64, 64], [576, 0]],
		},
		east: {
			soffset: [64, 0],
			frames: [[192, 0], [0, 0], [64, 0], [128, 0], [192, 0], [0, 0], [64, 0], [128, 0]],
		},
		west: {
			soffset: [320, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0], [0, 0], [64, 0], [128, 0], [192, 0]],
		},
		feeding: {
			soffset: [320, 64],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0], [0, 0], [64, 0], [128, 0], [192, 0]],
		},
		/*power_food: { // TODO RESEARCH
			soffset: [, ],
			frames: [[, ]],
		},*/
		poisoned: {
			soffset: [128, 0],
			frames: [[0, 0], [64, 0], [0, 0], [64, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0], [128, 0], [192, 0]],
		},
		female: {
			soffset: [128, 256],
			frames: [[0, 0], [64, 0]],
		},
		pre_offspring: {
			soffset: [256, 256],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
		},
		offspring: {
			soffset: [512, 256],
			frames: [[0, 0], [64, 0]],
		},
		quicksand: {
			soffset: [0, 192],
			frames: [[192, 0], [256, 0], [320, 0], [384, 0], [448, 0], [512, 0], [576, 0], [64, 0], [64, 64]],
		},
		/*zapped: { // TODO RESEARCH
			soffset: [, ],
			frames: [[, ]],
		},*/
		winner: {
			soffset: [64, 192],
			frames: [[0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0]],
		},
		enem_still: {
			soffset: [0, 64],
			frames: [[0, 0]],
		},
		enem_boasting: {
			soffset: [320, 64],
			frames: [[0, 0], [0, 64]],
		},
		enem_defeated: {
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
			frames: [[0, 0], [64, 0], [128, 0], [192, 0], [0, 0], [64, 0], [128, 0], [192, 0]],
		},
		south: {
			soffset: [0, 0],
			frames: [[576, 0], [0, 64], [64, 64], [128, 64], [576, 0], [0, 64], [64, 64], [128, 64]],
		},
		east: {
			soffset: [64, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0], [0, 0], [64, 0], [128, 0], [192, 0]],
		},
		west: {
			soffset: [320, 0],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0], [0, 0], [64, 0], [128, 0], [192, 0]],
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
			frames: [[0, 0], [64, 0], [0, 0], [64, 0], [0, 0], [64, 0], [64, 64]],
		},
		female: {
			soffset: [192, 256],
			frames: [[0, 0], [320, 0]],
		},
		offspring: {
			soffset: [256, 256],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
		},
		quicksand: {
			soffset: [64, 128],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0], [256, 0], [320, 0], [448, 0], [384, 0], [512, 0]],
		},
		/*zapped: {
			soffset: [, ],
			frames: [[, ]],
		},*/
		winner: {
			soffset: [0, 192],
			frames: [[0, 0], [0, 64], [0, 0], [0, 64], [0, 0], [0, 64], [0, 0], [0, 64], [0, 0], [0, 64], [0, 0], [0, 64], [0, 0], [0, 64], [0, 0], [0, 64]],
		},
		enem_still: {
			soffset: [0, 128],
			frames: [[0, 0]],
		},
		enem_boasting: {
			soffset: [320, 128],
			frames: [[0, 0], [0, 64]],
		},
		enem_defeated: {
			soffset: [64, 128],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
		},
	},
	/*{   // Isnobug
		still: {
			soffset: [0, 0],
			frames: [[0, 0]],
		},
		north: {
			soffset: [, ],
			frames: [[, ]],
		},
		south: {
			soffset: [, ],
			frames: [[, ]],
		},
		east: {
			soffset: [, ],
			frames: [[, ]],
		},
		west: {
			soffset: [, ],
			frames: [[, ]],
		},
		feeding: {
			soffset: [, ],
			frames: [[, ]],
		},
		power_food: {
			soffset: [, ],
			frames: [[, ]],
		},
		poisoned: {
			soffset: [, ],
			frames: [[, ]],
		},
		female: {
			soffset: [, ],
			frames: [[, ]],
		},
		offspring: {
			soffset: [, ],
			frames: [[, ]],
		},
		quicksand: {
			soffset: [, ],
			frames: [[, ]],
		},
		zapped: {
			soffset: [, ],
			frames: [[, ]],
		},
		winner: {
			soffset: [, ],
			frames: [[, ]],
		},
		enem_still: {
			soffset: [0, 192],
			frames: [[0, 0]],
		},
		enem_boasting: {
			soffset: [320, 192],
			frames: [[0, 0], [0, 64]],
		},
		enem_defeated: {
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
			soffset: [, ],
			frames: [[, ]],
		},
		south: {
			soffset: [, ],
			frames: [[, ]],
		},
		east: {
			soffset: [, ],
			frames: [[, ]],
		},
		west: {
			soffset: [, ],
			frames: [[, ]],
		},
		feeding: {
			soffset: [, ],
			frames: [[, ]],
		},
		power_food: {
			soffset: [, ],
			frames: [[, ]],
		},
		poisoned: {
			soffset: [, ],
			frames: [[, ]],
		},
		female: {
			soffset: [, ],
			frames: [[, ]],
		},
		offspring: {
			soffset: [, ],
			frames: [[, ]],
		},
		quicksand: {
			soffset: [, ],
			frames: [[, ]],
		},
		zapped: {
			soffset: [, ],
			frames: [[, ]],
		},
		winner: {
			soffset: [, ],
			frames: [[, ]],
		},
		enem_boasting: {
			soffset: [0, 256],
			frames: [[0, 0]],
		},
		enem_still: {
			soffset: [320, 256],
			frames: [[0, 0], [0, 64]],
		},
		enem_defeated: {
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
			soffset: [, ],
			frames: [[, ]],
		},
		south: {
			soffset: [, ],
			frames: [[, ]],
		},
		east: {
			soffset: [, ],
			frames: [[, ]],
		},
		west: {
			soffset: [, ],
			frames: [[, ]],
		},
		feeding: {
			soffset: [, ],
			frames: [[, ]],
		},
		power_food: {
			soffset: [, ],
			frames: [[, ]],
		},
		poisoned: {
			soffset: [, ],
			frames: [[, ]],
		},
		female: {
			soffset: [, ],
			frames: [[, ]],
		},
		offspring: {
			soffset: [, ],
			frames: [[, ]],
		},
		quicksand: {
			soffset: [, ],
			frames: [[, ]],
		},
		zapped: {
			soffset: [, ],
			frames: [[, ]],
		},
		winner: {
			soffset: [, ],
			frames: [[, ]],
		},
		enem_still: {
			soffset: [0, 320],
			frames: [[0, 0]],
		},
		enem_boasting: {
			soffset: [320, 320],
			frames: [[0, 0], [0, 64]],
		},
		enem_defeated: {
			soffset: [64, 320],
			frames: [[0, 0], [64, 0], [128, 0], [192, 0]],
		},
	},*/
];

const anims_predators = [
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
			frames: [[128, 64], [0, 192], [64, 192], [128, 192]],  // N E S W
		},
		winner: {
			soffset: [0, 64],
			frames: [[448, 0], [512, 0], [576, 0], [0, 64], [576, 0]],
		},
		defeated: [
			{  // Stars
				soffset: [64, 128],
				frames: [[0, 0], [0, 64], [0, 128], [0, 192]],
			},
			{  // Crying
				soffset: [320, 128],
				frames: [[0, 0], [0, 64], [0, 128], [0, 192]],
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
			frames: [[0, 0], [0, 64], [0, 64], [0, 0], [0, 0], [0, 64], [0, 64], [0, 0]],
		},
		south: {
			soffset: [0, 0],
			frames: [[128, 64], [128, 64], [320, 0], [320, 0], [128, 64], [128, 64], [320, 0], [320, 0]],
		},
		east: {
			soffset: [0, 0],
			frames: [[64, 0], [0, 64], [0, 64], [128, 0], [64, 0], [0, 64], [0, 64], [128, 0]],
		},
		west: {
			soffset: [0, 0],
			frames: [[192, 0], [64, 64], [64, 64], [256, 0], [192, 0], [64, 64], [64, 64], [256, 0]],
		},
		attack: {
			soffset: [0, 0],
			frames: [[384, 0], [0, 64], [128, 64], [64, 64]],  // N E S W; TODO RESEARCH: North unclear
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
			frames: [[192, 64], [64, 0], [576, 0], [320, 0]],  // N E S W; TODO RESEARCH: All unclear
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
];

const anims_clouds = {
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
};
