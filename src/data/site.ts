/** サイト全体の文言・リンク（会社名・個人の住所電話は載せない） */

export const siteMeta = {
	title: 'NARUTO WORKS',
	description:
		'屋号 NARUTO WORKS。Web サービスの企画・開発・運営、マーケティング支援、コンサルティング、アフィリエイトを扱う個人事業です。',
	lang: 'ja',
} as const;

export const hero = {
	tradeName: 'NARUTO WORKS',
	tagline: 'Web を軸に、企画から運用まで。',
	subline: '個人事業（開業届提出済）',
} as const;

/** 開業届の事業概要に沿った要約 */
export const services = {
	heading: '事業内容',
	items: [
		'Web サービスの企画・開発・運営',
		'マーケティング支援',
		'コンサルティング業務',
		'アフィリエイト',
		'Web サービス開発全般',
	],
} as const;

/** 会社名は出さず、職種・領域で表現 */
export const career = {
	heading: '経歴・強み',
	intro:
		'B2B SaaS を扱う事業会社で、バックエンド中心のソフトウェアエンジニアとして従事しています。個人事業として、開発全般と周辺の支援にも対応します。',
	highlights: [
		'設計・実装・運用を一気通貫で捉える',
		'ドメインと非機能要件のバランスを重視',
		'関係者と合意形成しながら進める',
	],
	skillsLabel: '扱いの例',
	skills: [
		'TypeScript / Node.js',
		'API・バックエンド設計',
		'クラウド上の運用',
		'ドキュメント・レビュー',
	],
} as const;

export const contact = {
	heading: '連絡先',
	intro: 'ご相談・お見積りはメールからどうぞ。',
	links: [
		{
			label: 'メール',
			href: 'mailto:kondonaruto083@gmail.com',
			external: false,
		},
		{
			label: 'GitHub',
			href: 'https://github.com/naruto1031',
			external: true,
		},
		{
			label: 'YOUTRUST（プロフィール）',
			href: 'https://youtrust.jp/users/4e131c5751b3e5ae0b04e3bf5a89d375',
			external: true,
		},
	],
	note: 'YOUTRUST には公開プロフィール情報が含まれる場合があります。',
} as const;

export const footer = {
	tradeName: 'NARUTO WORKS',
	legal: '個人事業主',
} as const;
