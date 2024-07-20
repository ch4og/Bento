// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
	// ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
	// ├┴┐├─┤└─┐││  └─┐
	// └─┘┴ ┴└─┘┴└─┘└─┘

	// General
	name: 'ch',
	imageBackground: true,
	openInNewTab: true,
	twelveHourFormat: false,

	// Greetings
	greetingMorning: 'Good morning!',
	greetingAfternoon: 'Good afternoon,',
	greetingEvening: 'Good evening,',
	greetingNight: 'Good night!',

	// Layout
	bentoLayout: 'bento', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '184e2f5e3b290f89d578af24b38c0be6', // Write here your API Key
	weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: false, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '55.755825',
	defaultLongitude: '37.617298',

	// Autochange
	autoChangeTheme: true,

	// Autochange by OS
	changeThemeByOS: true,

	// Autochange by hour options (24hrs format, string must be in: hh:mm)
	changeThemeByHour: false,
	hourDarkThemeActive: '18:30',
	hourDarkThemeInactive: '07:00',

	// ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
	// ├┴┐│ │ │  │ │ ││││└─┐
	// └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

	firstButtonsContainer: [
		{
			id: '1',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '2',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://twitch.com',
		},
		{
			id: '3',
			name: 'Reddit',
			icon: 'bot',
			link: 'https://reddit.com/',
		},
		{
			id: '4',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/ch4og',
		},
		{
			id: '5',
			name: 'Y.Mail',
			icon: 'mail',
			link: 'https://mail.yandex.ru/',
		},

		{
			id: '6',
			name: 'ch4og.com',
			icon: 'circle-user-round',
			link: 'https://ch4og.com',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'a.com',
			icon: 'popcorn',
			link: 'https://hd.kinopoisk.ru',
		},
		{
			id: '2',
			name: 'Google Spreadsheets',
			icon: 'table-2',
			link: 'https://docs.google.com/spreadsheets/',
		},
		{
			id: '3',
			name: 'timeweb',
			icon: 'server',
			link: 'https://timeweb.cloud/my',
		},
		{
			id: '4',
			name: 'Yandex.Mail',
			icon: 'mail',
			link: 'https://mail.yandex.ru/',
		},
		{
			id: '5',
			name: 'RuTracker.org',
			icon: 'hard-drive-download',
			link: 'https://rutracker.org/',
		},
		{
			id: '6',
			name: 'repack.me',
			icon: 'package-open',
			link: 'https://repack.me/',
		},
	],

	// ┬  ┬┌─┐┌┬┐┌─┐
	// │  │└─┐ │ └─┐
	// ┴─┘┴└─┘ ┴ └─┘

	// First Links Container
	firstlistsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'CyberChef',
					link: 'https://gchq.github.io/CyberChef/',
				},
				{
					name: 'TryHackMe',
					link: 'https://tryhackme.com/hacktivities?tab=practice',
				},
				{
					name: 'Codeby',
					link: 'https://codeby.games/ru',
				},
				{
					name: 'HackTheBox',
					link: 'https://app.hackthebox.com',
				},
			],
		},
		{
			icon: 'cloud-download',
			id: '2',
			links: [
				{
					name: 'RuTracker',
					link: 'https://rutracker.org/',
				},
				{
					name: 'CrackStatus',
					link: 'https://crackstatus.net/',
				},
				{
					name: 'AnyBT',
					link: 'https://anybt.eth.limo/',
				},
				{
					name: 'RepackMe',
					link: 'https://repack.me/',
				},
			],
		},
	],

	// Second Links Container
	secondListsContainer: [
		{
			icon: 'binary',
			id: '1',
			links: [
				{
					name: 'Spotify',
					link: 'https://www.spotify.com',
				},
				{
					name: 'Reddit',
					link: 'https://www.reddit.com',
				},
				{
					name: 'Hashnode',
					link: 'https://www.hashnode.com',
				},
				{
					name: 'Pocket',
					link: 'https://www.pocket.com',
				},
			],
		},
		{
			icon: 'github',
			id: '2',
			links: [
				{
					name: 'Front',
					link: 'https://www.reddit.com/r/Frontend/',
				},
				{
					name: 'Rust',
					link: 'https://www.reddit.com/r/rust/',
				},
				{
					name: 'Go',
					link: 'https://www.reddit.com/r/golang/',
				},
				{
					name: 'Repos',
					link: 'https://github.com/migueravila',
				},
			],
		},
	],
};
