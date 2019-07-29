'use strict';

const debug1 = document.getElementById('debug1');
const debug2 = document.getElementById('debug2');
const debug3 = document.getElementById('debug3');
const debug4 = document.getElementById('debug4');

// Master-TODO:
/* - All sounds
 * - Background music
 * - *All* animations (Intro, Catastrophes, Outro)
 * - All options
 */

let options = {
	language: 'DE', // Language of the game. Currently one of ['DE', 'EN']
	wm_ai_delay: 0.05, // How many ms between two moves of the AI
	wm_ai_auto_continue: false, // After the AI finished, shall the "continue" button be pressed automatically?
	transition_delay: 0.5, // How many seconds to show the transition screens
	surv_move_speed: 80, // Speed of the player figure in survival (TODO: what unit?? Pixel per second?)
	music_on: true,
	music: 255, // Music volume (0 - 255)
	sound_on: true,
	sound: 255, // Sound volume (0 - 255)
};


function Game() {
	this.last_time = 0;
	this.last_fps = 0;
	this.frames = 0;
	this.clicked_element = null;
	this.right_clicked_element = null;
	this.stage = null;
	this.backstage = [];
	this.players = [];
}


// The main game loop
Game.prototype.main = function() {
	const now = Date.now();
	const dt = (now - this.last_time) / 1000;

	this.update_fps(now);

	this.stage.update(dt);
	this.stage.render();

	this.last_time = now;

	requestAnimationFrame(() => this.main());
};


Game.prototype.update_fps = function(now) {
	// FPS will be shown as 1/s
	this.frames++;
	if(now - this.last_fps > 1000) {
		debug4.value = 'FPS: ' + this.frames;
		this.frames = 0;
		this.last_fps = now;
	}
};


Game.prototype.start = function() {
	ctx.font = 'bold 12px sans-serif';
	this.players = [];
	for(let i = 0; i < 6; i++) {
		this.players.push(new Player(i));
	}
	this.max_turns = 5;
	this.turn = 0;
	this.humid = 50;
	this.temp = 50;
	this.water_level = 20;
	this.mountain_level = 80;
	this.humans_present = false;
	this.current_player = this.players[0];
	this.height_map = null;
	this.world_map = null;
	this.map_positions = null;
	//this.stage = new Intro(); // DEBUG
	this.stage = new Survival(); // DEBUG
	this.stage.initialize();
	this.last_time = Date.now();
	this.main();
};


Game.prototype.next_player = function() {
	for(let i = this.current_player.id + 1; i < 6; i++) {
		if(!this.players[i].is_dead && this.players[i].type !== NOBODY) {
			this.current_player.id = i;
			this.current_player = this.players[i];
			console.log('There is another player.');
			return true;
		}
	}

	for(let i = 0; i < 6; i++) {
		if(!this.players[i].is_dead && this.players[i].type !== NOBODY) {
			this.current_player.id = i;
			this.current_player = this.players[i];
			console.log('This was the last player.');
			return false;
		}
	}

	console.warn('All players are dead or inactive!!!');
	return false;
};


// TODO: Is this ever used?
Game.prototype.is_last_player = function() {
	for(let i = this.current_player.id + 1; i < 6; i++) {
		if(!this.players[i].is_dead && this.players[i].type !== NOBODY) {
			return false;
		}
	}
	return true;
};


// TODO: This should ask if the single human player wants to continue alone
// TODO: Should also give some feedback, whether the game has finished.
// TODO RESEARCH: Does it really directly jump to the outro? Maybe rather set some variable to true and let the stagemanager handle it!
Game.prototype.test_finished = function() {
	let humans_alive = 0;
	let pcs_alive = 0;
	for(let player of this.players) {
		if(player.type === MENSCH) {
			humans_alive++;
		}
		else if(player.type === COMPUTER) {
			pcs_alive++;
		}
	}

	this.stage = new Outro();
}


Game.prototype.save_game = function() {
	const save_file = new ArrayBuffer(4171);
	const content = new DataView(save_file);

	const qpopstring = 'Q-POP Savegame';
	for(let i = 0; i < qpopstring.length, i++) {
		content.setUint8(i, qpopstring.charCodeAt(i));
	}

	content.setUint8(0x10, options.music_on);
	content.setUint8(0x11, options.music);
	content.setUint8(0x12, options.sound_on);
	content.setUint8(0x13, options.sound);

	for(let i = 0; i < game.players.length; i++) {
		const p = game.players[i];
		content.setUint8(0x14 + 2*i, p.type);
		content.setUint8(0x15 + 2*i, p.iq);

		const offset = 0x17 * i;
		content.setUint8(0x20 + offset, p.stats[ATT_ATTACK]);
		content.setUint8(0x21 + offset, p.stats[ATT_DEFENSE]);
		content.setUint8(0x22 + offset, p.stats[ATT_REPRODUCTION]);
		content.setUint8(0x23 + offset, p.stats[ATT_CAMOUFLAGE]);
		content.setUint8(0x24 + offset, p.stats[ATT_SPEED]);
		content.setUint8(0x25 + offset, p.stats[ATT_PERCEPTION]);
		content.setUint8(0x26 + offset, p.stats[ATT_INTELLIGENCE]);

		content.setUint8(0x27 + offset, p.deaths);  // Unused
		content.setUint8(0x28 + offset, p.experience);  // Unused
		content.setUint8(0x29 + offset, Math.floor(p.eaten / 37));  // Unused
		content.setUint8(0x2a + offset, p.individuals);  // Unused (counted on map)
		content.setUint8(0x2b + offset, p.evo_score);
		content.setUint8(0x2c + offset, p.tomove);
		content.setUint8(0x2d + offset, p.toplace);
		content.setUint16(0x2e + offset, p.total_score, true);

		content.setUint8(0x30 + offset, p.stats[ATT_RANGONES]);
		content.setUint8(0x31 + offset, p.stats[ATT_BLUELEAF]);
		content.setUint8(0x32 + offset, p.stats[ATT_HUSHROOMS]);
		content.setUint8(0x33 + offset, p.stats[ATT_STINKBALLS]);
		content.setUint8(0x34 + offset, p.stats[ATT_SNAKEROOTS]);
		content.setUint8(0x35 + offset, p.stats[ATT_FIREGRASS]);
		content.setUint8(0x36 + offset, !p.is_dead);
		content.setUint8(0x1042 + i, p.is_dead);
	}

	content.setUint16(0xaa, game.turn, true);
	content.setUint8(0xac, game.max_turns);
	content.setUint8(0xad, game.humans_present);
	content.setUint16(0xb1, game.water_level, true);
	content.setUint16(0xb3, game.humid, true);
	content.setUint16(0xb5, game.temp, true);

	const size = 28;

	for(let y = 0; y < size; y++) {
		for(let x = 0; x < size; x++) {
			const i = x + y*size;
			const j = y + x*size; // x and y are exchanged in the heightmap for some reason

			content.setUint8(0xb7 + i, game.world_map[y][x]);
			content.setUint8(0x3c7 + j, game.height_map[y][x]);
			content.setUint8(0x6d7 + i, game.map_positions[y][x]);
		}
	}

	// TODO: The following two options:
	//content.setUint8(); // Set when the game is infinite (not in the mechanics yet)
	//content.setUint8(); // Set when the all enemies are dead and the player continues alone (not in the mechanics yet)
	content.setUint8(0x104b, 1);

	download(save_file, 'qpop_save.qpp', 'application/octet-stream');
};


Game.prototype.load_game = function(save_file) {
	// NB! Except for a simple test for the right file type, I do not do any sanity checks. The file will only be processed on the client side with data provided by the client, so at worst, the game will freeze when using a manipulated file.

	const content = new DataView(save_file);

	if(save_file.size !== 4171 || new TextDecoder().decode(new Uint8Array(save_file, 0, 14)) !== 'Q-POP Savegame') {
		open_popup(lang.popup_title, 'dino_cries', lang.not_a_savegame, () => {}, lang.next);
		return;
	}

	options.music_on = !!content.getUint8(0x10);
	options.music = content.getUint8(0x11);
	options.sound_on = !!content.getUint8(0x12);
	options.sound = content.getUint8(0x13);

	for(let i = 0; i < game.players.length; i++) {
		const p = game.players[i];
		p.type = content.getUint8(0x14 + 2*i);
		p.iq = content.getUint8(0x15 + 2*i);

		const offset = 0x17 * i;
		p.stats[ATT_ATTACK] = content.getUint8(0x20 + offset);
		p.stats[ATT_DEFENSE] = content.getUint8(0x21 + offset);
		p.stats[ATT_REPRODUCTION] = content.getUint8(0x22 + offset);
		p.stats[ATT_CAMOUFLAGE] = content.getUint8(0x23 + offset);
		p.stats[ATT_SPEED] = content.getUint8(0x24 + offset);
		p.stats[ATT_PERCEPTION] = content.getUint8(0x25 + offset);
		p.stats[ATT_INTELLIGENCE] = content.getUint8(0x26 + offset);

		p.evo_score = content.getUint8(0x2b + offset);
		p.tomove = content.getUint8(0x2c + offset);
		p.toplace = content.getUint8(0x2d + offset);
		p.total_score = content.getUint16(0x2e + offset, true);

		p.stats[ATT_RANGONES] = content.getUint8(0x30 + offset);
		p.stats[ATT_BLUELEAF] = content.getUint8(0x31 + offset);
		p.stats[ATT_HUSHROOMS] = content.getUint8(0x32 + offset);
		p.stats[ATT_STINKBALLS] = content.getUint8(0x33 + offset);
		p.stats[ATT_SNAKEROOTS] = content.getUint8(0x34 + offset);
		p.stats[ATT_FIREGRASS] = content.getUint8(0x35 + offset);
		p.is_dead = !content.getUint8(0x36 + offset);

		p.individuals = 0;
	}

	game.turn = content.getUint16(0xaa, true);
	game.max_turns = content.getUint8(0xac);
	game.humans_present = content.getUint8(0xad);
	game.water_level = content.getUint16(0xb1, true);
	game.humid = content.getUint16(0xb3, true);
	game.temp = content.getUint16(0xb5, true);

	const size = 28;

	game.world_map = Array.from(Array(size), _ => Array(size).fill(0));
	game.height_map = Array.from(Array(size), _ => Array(size).fill(0));
	game.map_positions = Array.from(Array(size), _ => Array(size).fill(0));


	for(let y = 0; y < size; y++) {
		for(let x = 0; x < size; x++) {
			const i = x + y*size;
			const j = y + x*size; // x and y are exchanged in the heightmap for some reason

			game.world_map[y][x] = content.getUint8(0xb7 + i);
			game.height_map[y][x] = content.getUint8(0x3c7 + j);

			const map_pos = content.getUint8(0x6d7 + i);
			game.map_positions[y][x] = map_pos;
			if(map_pos > 0) {
				game.players[map_pos].individuals++;
			}
		}
	}

	game.stage = new Survival();
	game.stage.initialize();
};


Game.prototype.next_stage = function() {
	switch(this.stage.id) {
	case 0: // Intro
		this.stage = 1;
		game.stage = new Init(game.players);
		game.stage.initialize();
		break;
	case 1: // Init screen (choose players)
		this.stage = 2;
		game.stage = new Turnselection();
		game.stage.initialize();
		break;
	case 2: // Choose game length
		this.stage = 3;
		game.stage = new Transition('gfx/transition_world.png', 3);
		game.stage.initialize();
		break;
	case 3: // Transition screen
		this.stage = 4;
		game.stage = new World();
		game.stage.initialize();
		break;
	case 4: // World map
		if(game.next_player()) {
			game.stage.next_player();
		} else {
			if(game.turn === 0) {
				this.stage = 7;
				game.stage = new Transition('gfx/transition_mutations.png', 7);
				game.stage.initialize();
			}
			else {
				this.stage = 5;
				game.backstage.push(game.stage);
				game.stage = new Catastrophe();
				game.stage.initialize();
			}
		}
		break;
	case 5: // Catastrophe
		this.stage = 6;
		game.stage = new Ranking();
		game.stage.initialize();
		break;
	case 6: // Ranking
		if(game.turn === game.max_turns) {
			this.stage = 11;
			game.stage = new Outro();
		}
		else {
			this.stage = 7;
			game.stage = new Transition('gfx/transition_mutations.png', 7);
		}
		game.stage.initialize();
		break;
	case 7: // Transition screen
		this.stage = 8;
		game.turn++;
		game.stage = new Mutations();
		game.stage.initialize();
		break;
	case 8: // Mutations
		if(game.next_player()) {
			game.stage.next_player();
		} else {
			this.stage = 9;
			game.stage = new Transition('gfx/transition_survival.png', 9);
			game.stage.initialize();
		}
		break;
	case 9: // Transition screen
		this.stage = 10;
		game.stage = new Survival();
		game.stage.initialize();
		break;
	case 10: // Survival
		if(game.next_player()) {
			game.stage.initialize();
		} else {
			this.stage = 3;
			game.stage = new Transition('gfx/transition_world.png', 3);
			game.stage.initialize();
		}
		break;
	case 11: // Outro
		// This should never happen
	default:
		open_popup(lang.popup_title, 'dino_cries', 'This should never ever happen!', () => {}, 'Oh no!');
	}
};


function Player(num) {
	this.id = num;
	this.iq = 2;
	this.type = (num === 1) ? HUMAN : NOBODY;  // DEBUG
	//this.type = (num === 0) ? HUMAN : COMPUTER;
	this.individuals = 0;
	this.toplace = 10;
	this.tomove = 0;
	this.is_dead = false;
	this.loved = 0;
	this.eaten = 0;
	this.experience = 0;
	this.deaths = 0;
	this.evo_score = 100;
	this.total_score = 230;
	this.stats = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
};


// Create the canvas
let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
canvas.width = 640;
canvas.height = 480;
document.body.appendChild(canvas);
let canvas_pos = canvas.getBoundingClientRect();

// Disable the right-click context menu in the game
canvas.addEventListener('contextmenu', function(e) {
	e.preventDefault();
	return false;
});

let lang = null;
switch(options.language) {
	case 'DE': lang = de; break
	default: lang = en;
}

const version = 'pre-alpha';
let game = new Game();

resources.load([
	'gfx/dummy_intro.png',
	'gfx/init.png',
	'gfx/clouds.png',
	'gfx/enemies.png',
	'gfx/spec1.png',
	'gfx/pred1.png',
	'gfx/dark_bg.png',
	'gfx/light_bg.png',
	'gfx/species.png',
	'gfx/turns.png',
	'gfx/transition_survival.png',
	'gfx/transition_world.png',
	'gfx/transition_mutations.png',
	'gfx/world.png',
	'gfx/world_gui.png',
	'gfx/background.png',
	'gfx/mutations.png',
	'gfx/survival_gui.png',
	'gfx/ranking.png',
	'gfx/wreath.png',
	'gfx/dummy_cata.png',
	'gfx/dummy_outro.png'
]);
resources.onReady(() => game.start());


canvas.addEventListener('dragover', function(event) {
    event.stopPropagation();
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
});


canvas.addEventListener('drop', function(event) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.dataTransfer.files[0];
	const reader = new FileReader();
	reader.readAsArrayBuffer(file);

	reader.addEventListener('load', readerEvent => {
		game.load_game(readerEvent.target.result);
	});
});


/*
// DEBUG: Next frame event listener
nf.addEventListener('click', function(e) {
	game.main();
});
*/
