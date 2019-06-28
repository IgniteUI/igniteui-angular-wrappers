export module candidates {
	export function getData() {
		return [
			{name: 'Douglas Crockford', text: 'Douglas Crockford is an American computer programmer and entrepreneur who is best known for his ongoing involvement in the development of the JavaScript language, for having popularized the data format JSON (JavaScript Object Notation), and for developing various JavaScript related tools such as JSLint and JSMin. He is currently a senior JavaScript architect at PayPal, and is also a writer and speaker on JavaScript, JSON, and related web technologies such as the Yahoo! User Interface Library (YUI).', skills: [
				{description: 'JavaScript'},
				{description: 'JSON'},
				{description: 'HTML'},
				{description: 'JSLint'}
			], picture: 'http://www.igniteui.com/images/samples/tile-manager/450px-Douglas_Crockford.jpg', linkedin: 'http://www.linkedin.com/groups?gid=3165057&trk=group-name'
			},
			{name: 'John Resig', text: 'John Resig is the Dean of Computer Science at Khan Academy and the creator of the jQuery JavaScript library. He\'s also the author of the books Pro JavaScript Techniques and Secrets of the JavaScript Ninja. Currently, John is located in Brooklyn, NY and enjoys studying Ukiyo-e (Japanese Woodblock Printing) in his spare time.', skills: [
				{description: 'JavaScript'},
				{description: 'JSON'},
				{description: 'HTML'},
				{description: 'jQuery'}
			], picture: 'http://www.igniteui.com/images/samples/tile-manager/3450728563_69b0bd0743_m.jpg', linkedin: 'http://www.linkedin.com/groups?viewMembers=&gid=100943&sik=1360507269893&goback=%2Eanp_100943_1360507269892_1'
			},
			{name: 'Bill Gates', text: 'William Henry "Bill" Gates III (born October 28, 1955) is an American programmer, inventor, business magnate and philanthropist. Gates is the former chief executive and current chairman of Microsoft, the world\'s largest personal-computer software company, which he co-founded with Paul Allen. He is consistently ranked among the world\'s wealthiest people and was the wealthiest overall from 1995 to 2009, excluding 2008, when he was ranked third; in 2011 he was the wealthiest American and the second wealthiest person. During his career at Microsoft, Gates held the positions of CEO and chief software architect, and remains the largest individual shareholder, with 6.4 percent of the common stock. He has also authored and co-authored several books.', skills: [
				{description: 'Entrepreneurship'},
				{description: 'VB'},
				{description: 'Operating Systems'},
				{description: 'Programming Languages'}
			], picture: 'http://www.igniteui.com/images/samples/tile-manager/220px-BillGates2012.jpg', linkedin: 'http://www.linkedin.com/company/8736?trk=tyah'
			},
			{
				name: 'Jon Skeet', text: 'Author of C# in Depth. Currently a software engineer at Google, London. Usually a Microsoft MVP (C#, 2003-2010, 2011-)', skills: [
				   { description: 'C#' },
				   { description: '.NET' },
				   { description: 'Java' }
				], picture: 'http://www.igniteui.com/images/samples/tile-manager/jonskeet.jpg', linkedin: 'uk.linkedin.com/pub/jon-skeet/0/800/ba3'
			}
        ];
	}
};