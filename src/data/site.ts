/** サイト全体の文言・リンク（会社名・個人の住所電話は載せない） */

export const siteMeta = {
	title: 'NARUTO WORKS',
	description:
		'屋号 NARUTO WORKS。Web サービスの企画・開発・運営、マーケティング支援、コンサルティング、アフィリエイトを扱っています。',
	lang: 'ja',
} as const;

export const hero = {
	tradeName: 'NARUTO WORKS',
	tagline: 'Web を軸に、企画から運用まで。',
} as const;

/** 開業届の事業概要に沿った要約 */
export const services = {
	heading: '事業内容',
	items: [
		'Web サービスの企画・開発・運営',
		'アプリケーション受託開発（法人向け）',
		'マーケティング支援',
		'コンサルティング業務',
		'アフィリエイト',
		'Web サービス開発全般',
	],
} as const;

export const pricing = {
	heading: '料金・取引条件',
	intro: '法人向けのアプリケーション受託開発を個別見積で提供しています。',
	plans: [
		{
			label: '受託開発費',
			value: '100,000円〜1,500,000円（税別）／案件',
		},
		{
			label: '課金タイミング',
			value: '着手金＋納品時、または月次請求',
		},
		{
			label: '納期目安',
			value: '2週間〜3か月（案件規模による）',
		},
	],
	note: '要件定義・設計・開発・保守まで対応可能です。内容に応じてお見積りします。',
} as const;

/** スキルシート由来。社名は掲載せず、期間・役割・技術で記載 */
export const career = {
	heading: '経歴・強み',
	intro:
		'B2B SaaS（請求・支出管理などのドメイン）や受託開発を中心に、バックエンドからフロント、UI 基盤まで幅広く担当してきました。設計は DDD やクリーンアーキテクチャを意識しつつ、PdM・デザイナーとも協働してプロダクトに落とし込むことに注力しています。',
	timelineHeading: '主な担当歴（社名は非掲載）',
	timeline: [
		{
			period: '2024年8月〜現在',
			title: '請求SaaSの開発（UI〜サーバ）',
			body: 'TypeScript / React / Kotlin。UI 基盤（Ark UI / Panda CSS）、MCP 連携、フルスタック寄りの機能開発。2025年春以降はエンジニアリング組織での Web 周辺開発に比重。',
		},
		{
			period: '2024年3月〜2025年3月',
			title: '請求プロダクトの設計とフルスタック実装',
			body: 'TypeScript / Kotlin、Express / Ktor、PostgreSQL、GCP。DDD・クリーンアーキテクチャに沿った BE/FE 実装と Terraform による IaC。',
		},
		{
			period: '2023年3月〜2024年2月',
			title: '社内Webシステムの開発',
			body: '社内Webシステムの開発において、Next.js（App / Pages Router）・SvelteKit、GraphQL、NestJS、gRPC を使用。Atomic Design やコンテナ／プレゼンテーショナル分離など、フロント設計もリード。',
		},
		{
			period: '2022年8月〜2023年4月',
			title: 'Web サービスの保守・機能追加',
			body: 'PHP（CakePHP）、jQuery、MySQL。レガシー改善と MVC ベースの機能開発。',
		},
		{
			period: '2022年5月〜2023年2月',
			title: 'SaaS 事業における Web 開発',
			body: 'JavaScript、HTML、Sass、jQuery、MongoDB、Linux、AWS を用いた開発。HTML/CSS・jQuery による画面実装と MongoDB を含む Web 周辺の実装。',
		},
	],
	highlights: [
		'ドメイン駆動設計・クリーンアーキテクチャに基づく設計と実装',
		'バックエンド（Kotlin / Node 系）とフロント（React）の横断',
		'インフラ寄り（Docker、GCP、Terraform）まで一貫して関与できる',
	],
	skills: [
		'TypeScript',
		'Kotlin',
		'React',
		'Next.js',
		'SvelteKit',
		'SQL（PostgreSQL / MySQL）',
		'GraphQL / gRPC',
		'NestJS / Express / Ktor',
		'GCP / AWS',
		'Docker / Terraform',
		'Git / GitHub / GitLab',
		'PHP（CakePHP）',
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
} as const;

export const footer = {
	/** 表示用（請求・契約と揃える） */
	operator: '屋号：NARUTO WORKS　氏名：近藤 成人',
} as const;
