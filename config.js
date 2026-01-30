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
	greetingMorning: 'good morning,',
	greetingAfternoon: 'good afternoon,',
	greetingEvening: 'good evening,',
	greetingNight: 'good night,',

	// Layout
	bentoLayout: 'buttons', // 'bento', 'lists', 'buttons'

	// Weather
	weatherKey: '184e2f5e3b290f89d578af24b38c0be6', // Write here your API Key
	weatherIcons: 'airy', // 'Onedark', 'Nord', 'Dark', 'White'
	weatherUnit: 'C', // 'F', 'C'
	language: 'en', // More languages in https://openweathermap.org/current#multi

	trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
	defaultLatitude: '55.7522',
	defaultLongitude: '37.6156',

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
			name: 'Codeberg',
			icon: 'mountain-snow',
			link: 'https://codeberg.org',
		},
		{
			id: '2',
			name: 'Github',
			icon: 'github',
			link: 'https://github.com/ch4og',
		},
		{
			id: '5',
			name: 'Mail',
			icon: 'mail',
			link: 'https://mail.timeweb.com',
		},
		{
			id: '3',
			name: 'Guix Toys',
			icon: 'blocks',
			link: 'https://toys.whereis.social',
		},
		{
			id: '4',
			name: 'TimeWeb',
			icon: 'server',
			link: 'https://timeweb.cloud/my',
		},
		{
			id: '6',
			name: 'ChatGPT',
			icon: 'message-circle',
			link: 'https://chatgpt.com',
		},
	],

	secondButtonsContainer: [
		{
			id: '1',
			name: 'Reddit',
			icon: 'bot',
			link: 'https://reddit.com',
		},
		{
			id: '2',
			name: 'YouTube',
			icon: 'youtube',
			link: 'https://youtube.com/',
		},
		{
			id: '5',
			name: 'Twitch',
			icon: 'twitch',
			link: 'https://twitch.tv',
		},
		{
			id: '3',
			name: 'GeoGuessr',
			icon: 'map-pin',
			link: 'https://geoguessr.com',
		},
		{
			id: '4',
			name: 'CyberChef',
			icon: 'chef-hat',
			link: 'https://gchq.github.io/CyberChef',
		},
		{
			id: '6',
			name: 'RuTracker.org',
			icon: 'hard-drive-download',
			link: 'https://rutracker.org/',
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
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
			],
		},
		{
			icon: 'cloud-download',
			id: '2',
			links: [
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
				},
				{
					name: '',
					link: '',
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
