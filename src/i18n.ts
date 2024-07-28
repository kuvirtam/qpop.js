
export const i18n = {
	DE: {
		title: 'Q-POP',
		subtitle: 'Evolution im Weltraum',
		next: 'Weiter',
		yes: 'Ja',
		no: 'Nein',
		turn: 'Runde',
		close: 'Schließen',
		load_game: 'Spielstand laden',
		save_game: 'Spielstand speichern',
		start_game: 'Spiel starten',
		loading: 'lädt',
		load: 'laden',
		player: 'Spieler {num}',
		species: ['Purplus', 'Kiwiopteryx', 'Pesciodyphus', 'Isnobug', 'Amorph', 'Chuckberry'],
		iq: 'IQ',
		iqs: ['Charles Darwin', 'Darwins Gehilfe', 'Darwins Tante', 'Darwins Hund'],
		popup_title: 'Q-POP Sicherheitsdienst',
		catastrophe: 'Katastrophe',
		turns: ['KURZ (5 Runden)', 'MITTEL (10 Runden)', 'LANG (20 Runden)', 'BIS ZUM BITTEREN ENDE'],
		turn_finished: 'Ist Ihr Zug wirklich beendet?',
		dead: '"...und nun müssen wir uns LEIDER von Ihnen verabschieden, Sie waren ein toller Kandidat. Applaus, Applaus..."',
		last_turn: 'Gong! Die letzte Runde beginnt...',
		who_plays: 'Wer soll denn spielen?\nSie haben keinen Spieler angegeben!',
		continue_alone: 'Möchten Sie allein weiterspielen?',
		where_to_live: 'Wo wollen Sie denn leben? Ihre Spezies ist gar nicht auf der Karte!',
		suicide: 'Möchten Sie dieses Individuum wirklich umbringen?',
		game_over: 'BUUH, NUN IST ES VORBEI!!\nAlle menschlichen Spieler sind tot, das Spiel ist aus!',
		evo_score: 'Evolutionspunkte',
		traits: ['Anpassung Rangonen', 'Anpassung Blaublatt', 'Anpassung Wulgpilze', 'Anpassung Stinkbälle', 'Anpassung Schlingwurz', 'Anpassung Feuergras', 'Vermehrung', 'Angriffsstärke', 'Verteidigungsstärke', 'Tarnung', 'Geschwindigkeit', 'Sinnesorgane', 'Intelligenz'],
		transition_mutations: '',	// Monstren und Mutationen
		transition_survival: '',	// Fressen und gefressen werden
		transition_world: '',		// Der Krieg der Arten
		upload_description: 'Hier können Sie einen originalen oder heruntergeladenen Speicherstand laden.',
		upload: 'qpp-Datei hochladen',
		not_a_savegame: 'Die Datei ist kein gültiger Q-Pop-Speicherstand.',
		no_local_saves: 'Keine Speicherstände im Browser gefunden',
		really_restart: 'Möchten Sie das Spiel wirklich neu starten?',
		sound_disabled: 'Der Ton wurde komplett ausgeschaltet. Dies kann daran liegen, dass Ihr Browser keinen Ton abspielen kann.',
		information: 'Dies ist eine neue Version des Spiels Q-Pop, das 1995 in Deutschland veröffentlicht wurde. Diese Version sollte das Originalspiel so gut wie möglich kopieren und einige praktische Funktionen hinzufügen. Sie sollte auf allen modernen Browsern laufen, die Javascript aktiviert haben. Der Quelltext ist auf Github frei verfügbar.',
		credits_original: [
			['Herausgeber und Entwickler', ['von Wendt Konzept GmbH']],
			['Idee', ['Karl-L. von Wendt']],
			['Programmierung', ['Karl-L. von Wendt', 'Lars Hammer']],
			['Grafiken und Animationen', ['Stefan Beyer']],
			['Musik', ['Karl-L. von Wendt', 'Lars Hammer']],
		],
		credits_remake: [
			['Programmierung', ['Mathias Bockwoldt']],
			['Reverse Engineering', ['Mathias Bockwoldt', 'Christian Klamt']],
			['Neue Grafiken', ['Eike Strathmann']],
		],
		options_music: 'Musik',
		options_sound: 'Geräusche',
		options_lang: 'Sprache',
		options_this_lang: 'DE Deutsch',
		options_auto_continue: 'Automatisch weiter klicken nach Computerzug auf der Weltkarte',
		options_click_hold: 'Maustaste gedrückt halten um Einheiten auf der Weltkarte zu platzieren',
		options_plants: 'Verteilung eigener Pflanzen auf Mutationsübersicht zeigen',
		options_predators: 'Besiegte Fleischfresser als Symbole in der Überlebensphase zeigen',
		options_tutorial: 'Tutorial zum Spiel anzeigen (aus- und anschalten zum Zurücksetzen)',
		options_ai_speed: 'Computergeschwindigkeit auf der Weltkarte',
		options_ai_speeds: ['extrem langsam', 'sehr langsam', 'langsam', 'schnell', 'augenblicklich'],
		options_transition: 'Anzeigedauer der Übergangsbildschirme',
		options_restart: 'Spiel neu starten',
		tutorial_title: 'Tutorial',
		tutorial_abort: 'Abbrechen',
		tutorial: {
			welcome: 'Willkommen zu Q-Pop! Dieses Tutorial soll dir helfen, in die Gänge zu kommen. Für mehr Informationen, wirf einen Blick in die Anleitung, die in der Beschreibung unter dem Spiel verlinkt ist. Du kannst das Tutorial jederzeit mit dem Abbrechen-Button beenden.',
			change_language: 'Du kannst die Sprache und andere Optionen mit den Buttons hier oben ändern.',
			player_select: 'Wähle die Arten die du und der Computer spielen sollen. Du kannst dafür auf den Kopf bzw. einen der Computer klicken. Wähle außerdem eine Schwierigkeitsstufe (das IQ-Level) für jede Art.',
			next: 'Um weiter zu kommen, kannst du immer hier klicken.',
			turns: 'Wähle, wie lang das Spiel dauern soll. Für den Anfang sollten fünf Runden ausreichen.',
			wm_units: 'Setze deine Einheiten auf die Weltkarte. Nach der ersten Einheit kannst du weitere Einheiten nur direkt neben schon platzierte Einheiten setzen. Du kannst keine Einheiten auf Wasser oder Berge setzen. Pass also auf, dich nicht einzubauen! Am Anfang ist es ratsam, möglichst viele Pflanzen vom gleichen Typ zu besetzen.',
			wm_shadows: 'Du kannst so viele Einheiten wieder aufnehmen, wie du Schatten hast. So kannst du Einheiten umplatzieren. Du bekommst mehr Schatten, wenn du die Geschwindigkeit der Spezies durch Mutationen verbesserst. Du kannst jetzt auch gegen benachbarte Einheiten einer anderen Art kämpfen, wenn du noch Einheiten übrig hast.',
			wm_rightclick: 'Um zu sehen, auf welchen Pflanzen deine Einheiten stehen, kannst du auf eine Einheit rechtsklicken um zu sehen, auf welcher Pflanze sie steht. Alternativ kannst du auf den Avatar unter dem Kalender klicken, um alle Einheiten halbtransparent zu machen.',
			mutation_start: 'Benutze Evolutionspunkte um die Eigenschaften der Spezies zu verbessern. Zu Beginn hast du 100 Evolutionspunkte, später wird die Anzahl von deinen Erfolgen im Spiel abhängen. Die Kreise rechts zeigen an, welche Pflanzen die Spezies auf der Weltkarte besetzt. Du kannst plus oder minus für kleine Schritte klicken, oder direkt in den Balken für große Schritte.',
			mutation_plant: 'Die Spezies sollte mindestens 50% an die Pflanze angepasst sein, die sie auf der Weltkarte hauptsächlich besetzt. Klicke mit rechts auf eine Eigenschaft um mehr zu erfahren.',
			survival_start: 'In diesem Teil des Spiels kontrollierst du ein Individuum deiner Spezies in einer Umgebung, die auf der Verteilung der Spezies auf der Weltkarte basiert. Bewege das Individuum indem du auf die Karte in der Richtung klickst, in der es gehen soll. Du kannst auch die Pfeil- und WASD-Tasten verwenden. Du kannst fressen, indem du auf das Individuum klickst oder die Leertaste drückst. Solltest du in einer ausweglosen Situation sein, kannst du das Individuum umbringen, indem du mit rechts drauf klickst oder Escape drückst.',
			survival_goals: 'Versuche, so viele wie möglich zu fressen. Pflanzen, an die deine Spezies gut angepasst bist, sind nahrhafter für sie. Versuche, mindestens eine Reihe mit Nahrung zu füllen. Außerdem solltest du versuchen, dich zu vermehren, indem du neben ein Weibchen läufst. Nimm dich vor Fleischfressern in Acht!',
			survival_time: 'Du hast eine bestimmte Anzahl Schritte zur Verfügung und für jeden Schritt nur ein paar Sekunden Zeit. Wenn das Individuum sterben sollte, kannst du mit einem anderen weiter machen, solange du noch Schritte hast. Jeder Tod wirkt sich auf die Verteilung der Spezies auf der Weltkarte aus.',
			survival_radar: 'Nutze die Sinne deiner Spezies um vielversprechende Futterstellen, Weibchen, andere Pflanzenfresser und Fleichfresser in der Ferne zu sehen. Du kannst die Reichweite durch Mutationen verbessern.',
			catastrophe: 'Jede Runde wird die Welt von einer Katastrophe heimgesucht. Diese können die Welt auf vielfältige Art verändern. Du solltest prüfen, ob deine Einheiten immer noch auf denselben Pflanzen stehen wie vor der Katastrophe.',
			catastrophe0: 'Durch eine Verschiebung der Planetenachse wird der Kontinent näher an den Äquator gerückt. Dadurch steigt die mittlere Temperatur an, und durch veränderte Meeresströmungen fällt weniger Regen, während gleichzeitig der Meeresspiegel sinkt.', // Warming
			catastrophe1: 'Veränderungen in der Rotation des Planeten sorgen für eine Abkühlung des Klimas und mehr Regen.', // Cooling
			catastrophe2: 'Ein riesiger Meteorit ist auf dem Planeten aufgeschlagen. Die unmittelbare Umgebung der Einschlagstelle wird verwüstet. Durch den Aufprall werden Millionen Tonnen an Staub in die Stratosphäre geschleudert. Die Sonneneinstrahlung sinkt, und das globale Klima kühlt sich stark ab. Die polaren Eiskappen dehnen sich aus und binden mehr Wasser, so dass der Meeresspiegel sinkt.', // Comet
			catastrophe3: 'In einem bestimmten Gebiet der Karte tritt eine neue, rätselhafte Krankheit auf, an der alle Arten in diesem Gebiet erkranken. Jedes Individuum in dem Gebiet, in dem die Seuche auftritt, hat eine gewisse Chance, die Seuche zu überleben.', // Plague
			catastrophe4: 'Gewaltige Vulkaneruptionen zerstören alles tierische Leben in den unmittelbar angrenzenden Feldern.', // Volcano
			catastrophe5: 'Das globale Klima hat sich stark erwärmt. Als Folge schmelzen die Polkappen, der Meeresspiegel steigt stark an und überflutet niedrig liegende Küstenregionen.', // Flood
			catastrophe6: 'Ein starkes Erdbeben hat die gesamte Oberfläche des Planeten verändert. Wo eben noch Seen waren, können jetzt Berge entstehen und umgekehrt.', // Earthquake
			catastrophe7: 'Menschen sind auf dem Planeten gelandet! In ihrem unermüdlichen Bestreben, der bedrohten Natur zu helfen, bauen sie eine Forschungsstation auf dem Planeten und machen sich auf die Jagd nach Versuchstieren, um die Wesen „vor dem Aussterben zu bewahren“. Die Menschen verhalten sich wie Fleischfresser, sind aber schwerer abzuschütteln als die natürlichen Feinde.', // Humans
			catastrophe8: 'Verstärktes Auftreten kosmischer Strahlung verändert die Arten durch Mutation. Als Folge ändern sich die Eigenschaftswerte jeder Spezies sprunghaft.', // Cosmic rays
			ranking: 'Hier kannst du den Erfolg der verschiedenen Spezies sehen. Am Anfang ist die Anzahl der Individuen auf der Weltkarte. Danach die Anzahl der zur Verfügung stehenden Evolutionspunkte (abhängig von der Anzahl der Individuen) und dann die Siegpunkte. Siegpunkte sind die Gesamtanzahl an eingesetzten und verfügbaren Evolutionspunkte.',
			ranking_save: 'Das Spiel wird automatisch im Browser gespeichert. Wenn du einen Spielstand runterladen willst, kannst du das hier tun.',
			ranking_no_save: 'Wenn du einen Spielstand runterladen willst, kannst du das hier tun. Das Spiel wird nicht automatisch gespeichert.',
			save: 'Der Spielstand, den du eben runterladen konntest, kann wieder in diesem Spiel geladen werden. Außerdem ist er kompatibel mit dem Originalspiel!',
		},
		trait_hints: [
			'Anpassung an Rangonen verbessert die Nahrungsverwertung der Pflanze. Außerdem verbessert sie die Kampffähigkeiten auf der Weltkarte auf Rangonenfeldern.', // Rangones
			'Anpassung an Blaublatt verbessert die Nahrungsverwertung der Pflanze. Außerdem verbessert sie die Kampffähigkeiten auf der Weltkarte auf Blaublattfeldern.', // Blueleaf
			'Anpassung an Wulgpilze verbessert die Nahrungsverwertung der Pilze. Außerdem verbessert sie die Kampffähigkeiten auf der Weltkarte auf Wulgpilzfeldern.', // Hushrooms
			'Anpassung an Stinkbälle verbessert die Nahrungsverwertung der Pflanze. Außerdem verbessert sie die Kampffähigkeiten auf der Weltkarte auf Stinkballfeldern.', // Stinkballs
			'Anpassung an Schlingwurz verbessert die Nahrungsverwertung der Pflanze. Außerdem verbessert sie die Kampffähigkeiten auf der Weltkarte auf Schlingwurzfeldern.', // Snakeroot
			'Anpassung an Feuergras verbessert die Nahrungsverwertung der Pflanze. Außerdem verbessert sie die Kampffähigkeiten auf der Weltkarte auf Feuergrasfeldern.', // Firegrass
			'Vermehrung erhöht den Effekt des Paarens und Nahrungssammelns in der Überlebensphase und ergibt so mehr Einheiten auf der Weltkarte.', // Reproduction
			'Angriff verbessert die Chancen des Aggressors eines Kampfes auf der Weltkarte.', // Attack
			'Verteidigung verbessert die Chancen des Verteidigers eines Kampfes auf der Weltkarte. Außerdem erhöht sie die Chancen gegen Fleischfresser.', // Defense
			'Tarnung erhöht die Wahrscheinlichkeit, dass Fleischfresser die Fährte verlieren und einen nicht mehr verfolgen.', // Camouflage
			'Geschwindigkeit gibt mehr Bewegungspunkte auf der Weltkarte. Außerdem erhöht sie ein wenig die Wahrscheinlichkeit, dass Fleischfresser die Fährte verlieren.', // Speed
			'Sinnesorgane verbessern die Reichweite der kleinen Karte in der Überlebensrunde.', // Perception
			'Intelligenz verbessert die meisten der anderen Eigenschaften ein bisschen.', // Intelligence
		],
	},
	EN: {
		title: 'Q-POP',
		subtitle: 'Evolution in space',
		next: 'Continue',  // "continue" is a protected word, so "next" is used as variable name
		yes: 'Yes',
		no: 'No',
		turn: 'Turn',
		close: 'Close',
		load_game: 'Load savegame',
		save_game: 'Save game',
		start_game: 'start game',
		loading: 'loading',
		load: 'load',
		player: 'Player {num}',
		species: ['Purplus', 'Kiwiopteryx', 'Pesciodyphus', 'Isnobug', 'Amorph', 'Chuckberry'],
		iq: 'IQ',
		iqs: ['Charles Darwin', 'Darwin’s helper', 'Darwin’s aunt', 'Darwin’s dog'],
		popup_title: 'Q-POP Security Service',
		catastrophe: 'Catastrophe',
		turns: ['Short (5 turns)', 'Medium (10 turns)', 'Long (20 turns)', 'To the bitter end'],
		turn_finished: 'Is your turn really finished?',
		dead: 'Sorry, but you’re history now!\nYour species is gone...',
		last_turn: 'Gong! The last turn begins!',
		who_plays: 'Who shall play?\nYou haven’t selected a player!',
		continue_alone: 'Do you want to continue alone?',
		where_to_live: 'Where do you want to live? You haven’t placed your species on the map!',
		suicide: 'Do you really want to kill this individual?',
		game_over: 'IT’S ALL OVER NOW!!\nAll human players are dead, the game is over!',
		evo_score: 'Evolution Score',
		traits: ['Adaption to Rangones', 'Adaption to Blueleaf', 'Adaption to Hushrooms', 'Adaption to Stinkballs', 'Adaption to Snakeroots', 'Adaption to Firegrass', 'Reproduction Rate', 'Attack Strength', 'Defence Strength', 'Camouflage', 'Speed', 'Perception', 'Intelligence'],
		transition_mutations: 'Monsters and Mutants',
		transition_survival: 'Eat and Be Eaten',
		transition_world: 'The War of the Species',
		upload_description: 'Here, you can upload an original or downloaded savegame.',
		upload: 'Upload qpp file',
		not_a_savegame: 'The file is not a valid Q-Pop save game.',
		no_local_saves: 'No save games found in browser',
		really_restart: 'Do you really want to restart the game?',
		sound_disabled: 'The sound was disabled. It seems like your browser cannot play any sound.',
		information: 'This game is a remake of the original Q-Pop game, released in Germany in 1995 by von Wendt Konzept GmbH. This remake should be as close as possible to the original game with some added convenience functions. It should run on all modern browsers that have Javascript enabled. The source code is freely available on Github.',
		credits_original: [
			['Publisher and developer', ['von Wendt Konzept GmbH']],
			['Game design', ['Karl-L. von Wendt']],
			['Programming', ['Karl-L. von Wendt', 'Lars Hammer']],
			['Graphics', ['Stefan Beyer']],
			['Music', ['Karl-L. von Wendt', 'Lars Hammer']],
		],
		credits_remake: [
			['Programming', ['Mathias Bockwoldt']],
			['Reverse engineering', ['Mathias Bockwoldt', 'Christian Klamt']],
			['New graphics', ['Eike Strathmann']],
			['English translation', ['Mathias Bockwoldt']],
		],
		options_music: 'Music',
		options_sound: 'Sound',
		options_lang: 'Language',
		options_this_lang: 'EN English',
		options_auto_continue: 'Auto continue after AI placement on world map',
		options_click_hold: 'Click and hold to place or remove units from world map',
		options_plants: 'Show distribution of plants on mutation screen',
		options_predators: 'Show vanquished predator symbols in survival',
		options_tutorial: 'Show game tutorial (switch off and on to reset)',
		options_ai_speed: 'AI speed on world map',
		options_ai_speeds: ['extremly slow', 'very slow', 'slow', 'fast', 'instantaneous'],
		options_transition: 'View duration of transition screen',
		options_restart: 'Restart game',
		tutorial_title: 'Tutorial',
		tutorial_abort: 'Abort',
		tutorial: {
			welcome: 'Welcome to Q-Pop! This tutorial will help you getting started. For more details, please have a look at the manual linked in the description below the game. You can abort the tutorial any time by clicking abort.',
			change_language: 'You can change the language and other options with the buttons up here.',
			player_select: 'Select the species you and the computer should play. Click on the head or the computers to select the type of the player. In addition, choose a difficulty setting (IQ level) for each species.',
			next: 'You can always continue here or by pressing enter.',
			turns: 'Select how long a game you want to play. For the beginning, five rounds may be enough.',
			wm_units: 'Place your units on the world map. After the first unit, you can only place units adjacent to others. You cannot place units on mountains or water. So take care to not trap yourself close to the coast or in the mountains. In the beginning, it is favourable to place most units on the same type of plants.',
			wm_shadows: 'You can pick up as many units as you have shadows. This way, you can move units on the world map. You can improve your speed trait in the mutations screen to get more shadows. From this turn on, you can fight against adjacent units of a different species if you have units left.',
			wm_rightclick: 'To see, on which plants your units are, you can right click on a unit to see the plant below it. Alternatively, you can click on the avatar below the calendar to make all units semitransparent.',
			mutation_start: 'Distribute evolution points to improve traits of your species. In the beginning, you have 100 evolution points but later in the game, the number will depend on your success in the game. The circles to the right show, which plants your species occupies on the world map. You can click on plus or minus for small steps or directly click the bar for large steps.',
			mutation_plant: 'In the beginning, the adaptation to the plant you occupy most should have at least 50%. Rightclick on any trait to learn more about it.',
			survival_start: 'In this part of the game, you play one individual of your species in an environment that is created dependent on the positions you occupy on the world map. Move by clicking on the survival map or by using the arrow keys or WASD. You can eat by clicking on the individual or pressing space. If you should be in a hopeless situation, you can rightclick on the individual or press escape to kill it and start at a new position.',
			survival_goals: 'Try to eat as many plants as possible. Plants that your species is adapted to will yield more nutrition. You should fill at least one food bar. In addition, you should try to reproduce by walking next to a female. Finally, try to avoid predators.',
			survival_time: 'You have a limited amount of steps and a limited amount of time for each step. If you die, you will continue with another individual, but every death affects the distribution of your species on the world map.',
			survival_radar: 'Use the senses of your species to see promising food patches, mating partners, other herbivores and predators. You can increase the range of the senses by mutations.',
			catastrophe: 'Catastrophes happen every turn. They can change various aspects of the world. You should check whether your units still occupy the same plants as before.',
			catastrophe0: 'The planetary axis shifted, moving the continent closer to the equator. As a consequence, the average temperature rises, the sea level falls and there is less rain.', // Warming
			catastrophe1: 'Changes in the rotation of the planet cause a colder climate and more rain.', // Cooling
			catastrophe2: 'A large meteorite hit the planet. The vicinity of the impact becomes devastated. Millions of tons of sand and dust are blown into the stratosphere, cooling the climate. The polar ice caps bind more water leading to a falling sea level.', // Comet
			catastrophe3: 'A new, puzzling disease appears in a specific area of the continent, affecting all species in that area. Every individual in the area where the disease occurs has a certain chance of surviving the disease.', // Plague
			catastrophe4: 'Huge volcanic eruptions destroy all animal life in the immediately adjacent fields.', // Volcano
			catastrophe5: 'The global climate has warmed up. As a result, the polar ice caps melt, the sea level rises sharply and floods low lying coastal regions.', // Flood
			catastrophe6: 'A strong earthquake change the whole surface of the planet. Lakes may turn into mountains and vice versa.', // Earthquake
			catastrophe7: 'Humans have landed on the planet! In their tireless efforts to help endangered nature, they build a research station on the planet and hunt for experimental animals “save them from extinction”. Humans behave like carnivores, but are more difficult to shake off than the natural enemies.', // Humans
			catastrophe8: 'Increased occurrence of cosmic radiation changes all species by mutation. As a result, the traits of each species change dramatically.', // Cosmic rays
			ranking: 'Here, you can see your ranking in the world. First is the number of individuals on the world map. Second is the amount of evolution points available this round. This depends on the number of individuals. Third is the victory points, that are all used and available evolution points added up.',
			ranking_save: 'The game is automatically saved in the browser. If you want to download a savegame, you can do that here.',
			ranking_no_save: 'If you want to download a savegame, you can do that here. The game will not be saved automatically.',
			save: 'The savegame you were just offered can be loaded again in this game. But it is also compatible with the original game!',
		},
		trait_hints: [
			'Adaptation to rangones improves the food utilisation of the plant. In addition, the adaptation is an advantage in fights on the world map on rangone fields.', // Rangones
			'Adaptation to blueleaf improves the food utilisation of the plant. In addition, the adaptation is an advantage in fights on the world map on blueleaf fields.', // Blueleaf
			'Adaptation to hushrooms improves the food utilisation of the plant. In addition, the adaptation is an advantage in fights on the world map on hushroom fields.', // Hushrooms
			'Adaptation to stinkballs improves the food utilisation of the plant. In addition, the adaptation is an advantage in fights on the world map on stinkball fields.', // Stinkballs
			'Adaptation to snakeroots improves the food utilisation of the plant. In addition, the adaptation is an advantage in fights on the world map on snakeroot fields.', // Snakeroot
			'Adaptation to firegrass improves the food utilisation of the plant. In addition, the adaptation is an advantage in fights on the world map on firegrass fields.', // Firegrass
			'The reproduction rate increases the effect of mating and feeding, yielding more units for the world map.', // Reproduction
			'The attack strength increases the chances for the aggressor of a fight on the world map.', // Attack
			'The defence strength increases the chances for the defender of a fight on the world map. Furthermore, it increases the probability of winning against predators.', // Defense
			'Camouflage increases the probability that predators lose the trail and do not follow the player.', // Camouflage
			'Speed grants more movement points on the world map. In addition, speed increases the probability that predators lose the trail by a small amount.', // Speed
			'Perception improves the range of the mini map during survival.', // Perception
			'Intelligence improves most of the other traits by a small amount.', // Intelligence
		],
	},
	RU: {
		title: 'Q-POP',
		subtitle: 'Evolution in space',
		next: 'Продолжить',  // "continue" is a protected word, so "next" is used as variable name
		yes: 'Да',
		no: 'Нет',
		turn: 'Раунд',
		close: 'Закрыть',
		load_game: 'Загрузить сохранение',
		save_game: 'Сохранить игру',
		start_game: 'Начать игру',
		loading: 'загрузка',
		load: 'загрузить',
		player: 'Игрок {num}',
		species: ['Purplus', 'Kiwiopteryx', 'Pesciodyphus', 'Isnobug', 'Amorph', 'Chuckberry'],
		iq: 'IQ',
		iqs: ['Чарльз Дарвин', 'Помощник Дарвина', 'Тетушка Дарвина', 'Собака Дарвина'],
		popup_title: 'Служба безопасности Q-POP',
		catastrophe: 'Катастрофа',
		turns: ['Короткий (5 раундов)', 'Средний (10 раундов)', 'Длинный (20 раундов)', 'До победного конца'],
		turn_finished: 'Ваша очередь действительно закончилась?',
		dead: 'Простите, но вы ушли в историю!\nВаш вид исчез...',
		last_turn: 'Гонг! Начинается последний раунд!',
		who_plays: 'Кто будет играть?\nВы не выбрали игрока!',
		continue_alone: 'ТЫ хочешь продолжить в одиночестве?',
		where_to_live: 'Где бы вы хотели жить? Вы не указали свой биологический вид на карте!',
		suicide: 'Вы действительно хотите убить это существо?',
		game_over: 'ВСЕ КОНЧЕНО!!\nВсе игроки мертвы, игра окончена.!',
		evo_score: 'Очки Эволюции',
		traits: ['Адаптация к Rangones', 'Адаптация к Blueleaf', 'Адаптация к Hushrooms', 'Адаптация к Stinkballs', 'Адаптация к Snakeroots', 'Адаптация к Firegrass', 'Скорость размножения', 'Сила атаки', 'Сила защиты', 'Маскировка', 'Скорость', 'Чувствительность', ' Интеллект'],
		transition_mutations: 'Монстры и мутанты',
		transition_survival: 'Ешь или будь съеден',
		transition_world: 'Война Видов',
		upload_description: 'Здесь вы можете загрузить оригинальное или скачанное сохранение.',
		upload: 'Загрузить qpp-файл',
		not_a_savegame: 'Файл не является сохранением для Q-Pop.',
		no_local_saves: 'В браузере не найдены сохранения',
		really_restart: 'Вы действительно хотите перезапустить игру?',
		sound_disabled: 'Звук отключен. Похоже, ваш браузер не может воспроизводить звуки.',
		information: 'Эта игра является ремейком оригинальной игры Q-Pop, выпущенной в Германии в 1995 году компанией von Wendt Konzept GmbH. Этот ремейк должен быть максимально приближен к оригинальной игре с некоторыми дополнительными функциями. Он должен работать во всех современных браузерах, в которых включен Javascript. Исходный код находится в свободном доступе на Github.',
		credits_original: [
			['Издатель и разработчик', ['von Wendt Konzept GmbH']],
			['Игровой дизайн', ['Karl-L. von Wendt']],
			['Код', ['Karl-L. von Wendt', 'Lars Hammer']],
			['Графика', ['Stefan Beyer']],
			['Музыка', ['Karl-L. von Wendt', 'Lars Hammer']],
		],
		credits_remake: [
			['Код', ['Mathias Bockwoldt']],
			['Обратная Инженерия', ['Mathias Bockwoldt', 'Christian Klamt']],
			['Новая графика', ['Eike Strathmann']],
			['Русский перевод', ['Egor Priezzhikh']],
		],
		options_music: 'Музыка',
		options_sound: 'Звук',
		options_lang: 'Язык',
		options_this_lang: 'RU Russian',
		options_auto_continue: 'Авто-продожение после хода ИИ',
		options_click_hold: 'Нажмите и удерживайте, чтобы разместить или удалить объекты с карты мира',
		options_plants: 'Показать распределение занятых растений на экране мутаций',
		options_predators: 'Показать символ побежденного хищника в выживании',
		options_tutorial: 'Включить обучение (выключите и включите для сброса)',
		options_ai_speed: 'Скорость ИИ на карте мира',
		options_ai_speeds: ['Экстремально медленный', 'Очень медленный', 'Медленный', 'Быстрый', 'Мгновенный'],
		options_transition: 'Просмотр продолжительности переключения экрана',
		options_restart: 'Перезапустить игру',
		tutorial_title: 'Обучение',
		tutorial_abort: 'Прекратить',
		tutorial: {
			welcome: 'Добро пожаловать в Q-Pop! Это обучение поможет тебе начать играть. Для более подробной информации, загляните в описание игры и найдите ссылку на мануал. Вы можете закончить обучение в любое время, нажав Прекратить.',
			change_language: 'Вы можете изменить язык и другие параметры с помощью кнопок, расположенных здесь.',
			player_select: 'Выберете виды для игроков и компьютеров, за которые они будут играть. Нажмите на картинку лица/компьютера для смены типа игрока. Так же выберете уровень сложности(IQ level) для каждого вида.',
			next: 'Вы всегда можете продолжить здесь или нажав Enter.',
			turns: 'Выберете длительность игры. Для начала, 5 раундов может быть достаточно.',
			wm_units: 'Размести существ на мировой карте. После первого существа, вы можете поставить только около других существ своего вида. Вы не можете расположить существ на озерах и горах. Поэтому будьте осторожны и не попадитесь в ловушку около побережий и гор . Для начала, лучше всего будет расположить всех существ на растениях одного типа.',
			wm_shadows: 'Вы можете собрать столько существ с карты, сколько у вас теней. Таким образом, вы можете перемещать существ по карте. Вы можете увеличить свою скорость для получения большего количества теней. С этого момента вы можете сражаться с существами другого вида, если у вас остались существа.',
			wm_rightclick: 'Чтобы узнать, на каком растении находится существо, нажмите на существо Правой Кнопкой Мыши. Так же вы можете нажать на вашу аватарку под календарем, чтобы сделать всех существ прозрачными.',
			mutation_start: 'Распредели очки эволюции для улучшения характеристик вашего вида. В начале вам дается 100 очков, но позже их количество будет зависеть от ваших успехов в игре. Кружки справа показывают, насколько сейчас зависит адаптация к растениям у существ, которые расположены на них. Вы можете нажимать + и - для маленьких шагов и на саму шкалу для больших.',
			mutation_plant: 'В начале, адаптация к растении, от которой вы больше всего зависите, не должна быть меньше 50%. Нажмите Правую Кнопку Мыши на любом признаке, чтобы узнать о нем больше.',
			survival_start: 'В этой части игры вы играете за представителя своего вида в среде, которая зависит от положения, которое вы заняли на карте мира. Для перемещения кликайте по карте или нажимайте на клавиши WASD или стрелки. Чтобы есть растения, на которых стоит существо - нажмите на своего существа или нажмите Пробел. Если вы окажетесь в безвыходной ситуации - вы можете убить свое существо и начать с новой позиции, для этого нажмите на него Правой Кнопкой Мыши или на Escape.',
			survival_goals: 'Старайтесь есть как можно больше растений. Растения будут давать тем больше питательных веществ, чем больше адаптация существа к ним. Вы должны заполнить хотя бы одну шкалу еды. Кроме того, вам стоит размножиться с самкой, проходя рядом с ней. Наконец, старайтесь избегать хищников.',
			survival_time: 'У вас есть ограниченное количество шагов и ограниченное количество времени на каждый шаг. Если вы умрете - вы начнете с другого существа вашего вида, но от этого зависит распределение существ на карте мира.',
			survival_radar: 'Используй чувства вашего существа для определения местоположения питания, самки, других травоядных и хищников. Вы можете увеличить свою чувствительно в окне мутаций.',
			catastrophe: 'Катастрофы случаются каждый раунд. Они могут изменить различные аспекты мира. После них вам следует проверить положение ваших существ, которое могло измениться.',
			catastrophe0: 'Ось планеты сместилась, континент переместился ближе к экватору. В результате - повышается средняя температура, понижается урвоень моря и выпадает меньше осадков.', // Warming
			catastrophe1: 'Изменения во вращении планеты. В итоге - похоладание климата и большее количество дождей.', // Cooling
			catastrophe2: 'На планету упал крупный метеорит. Окрестность места падения пустеют. Милионны тонн песка и пыли выбрасываются в стратосферу, из-за чего холодеет климат. На полярных ледянных шапках замерзает больше воды, в итоге уровень моря падает.', // Comet
			catastrophe3: 'В определенном районе континента появляется новая загадочная болезнь, поражающая все виды животных в этом районе. Каждое существо в районе заражения имеет определенный шанс пережить его.', // Plague
			catastrophe4: 'Мощные извержения вулканов уничтожают всю животную жизнь на прилегающих полях.', // Volcano
			catastrophe5: 'Потепление глобального климата. В результате, полярные ледянные шапки тают, уровень моря резко растет и затопляются низменные прибрежные районы.', // Flood
			catastrophe6: 'Сильное землетрясение изменило поверхность планеты. Некоторые озера превращаются в горы, а горы в озера.', // Earthquake
			catastrophe7: 'Люди высадились на планету! В попытке спасти природу, которая находится под угрозой исчезновения, они строят исследовательские станции и охотятся на подопытных животных, якобы спасая их от вымирания. Люди ведут себя как хищники, но от них тяжелее избавиться.', // Humans
			catastrophe8: 'Повышенное воздействие космической радиации изменяет все виды путем мутации. В результате, характеристики каждого вида резко меняеются.', // Cosmic rays
			ranking: 'Здесь вы можете ознакомиться со своим рейтингом. Первое - количество существ на карте. Второе - количество очков эволюции, доступных в этом раунде. Они зависят от количества существ. Третье - очки победы, это сумма использованных и доступных очков эволюции.',
			ranking_save: 'Игра автоматически сохраняется в браузере. Если вы хотите загрузить сохранение, то можете сделать это здесь.',
			ranking_no_save: 'Если вы хотите загрузить сохранение, то можешь сделать это сделать. Игра не будет автоматически сохранена.',
			save: 'Сохранение которое вы получили, можно будет загрузить снова в эту игру. Но она так же совместима с оригинальной игрой!',
		},
		trait_hints: [
			'Адаптация к rangones позволяет лучше усваивать ее питательные вещества. Кроме того, адаптация к ним является преимуществом в боях на полях с rangones.', // Rangones
			'Адаптация к blueleaf позволяет лучше усваивать ее питательные вещества. Кроме того, адаптация к ним является преимуществом в боях на полях с blueleaf.', // Blueleaf
			'Адаптация к hushrooms позволяет лучше усваивать ее питательные вещества. Кроме того, адаптация к ним является преимуществом в боях на полях с hushrooms.', // Hushrooms
			'Адаптация к stinkballs позволяет лучше усваивать ее питательные вещества. Кроме того, адаптация к ним является преимуществом в боях на полях с stinkballs.', // Stinkballs
			'Адаптация к snakeroot позволяет лучше усваивать ее питательные вещества. Кроме того, адаптация к ним является преимуществом в боях на полях с snakeroot.', // Snakeroot
			'Адаптация к firegrass позволяет лучше усваивать ее питательные вещества. Кроме того, адаптация к ним является преимуществом в боях на полях с firegrass.', // Firegrass
			'Скорость размножения увеличивает эффекты от спаривания и кормления, увеличивая количество существ на карте.', // Reproduction
			'Сила атаки увеличивает шансы агрессора на победу в бою на карте мира.', // Attack
			'Сила защиты увеличивает шансы защитника выжить в бою на карте мира. Кроме того, это увеличивает вероятность победы над хищниками.', // Defense
			'Маскировка увеличивает шанс того, что хищник потеряет след и перестанет следовать за вами.', // Camouflage
			'Скорость дает больше очков перемещения на карте мира. Кроме того, скорость немного увеличивает вероятность того, что хищники потеряют след.', // Speed
			'Чувствительность увеличивает дальность действия мини-карты в режиме выживания.', // Perception
			'Интелект незначительно улучшает большинство других качеств.', // Intelligence
		],
	},
} as const;
