# NARUTO WORKS サイト

屋号 **NARUTO WORKS**（個人事業）の紹介用静的サイトです。Astro + TypeScript、pnpm で管理しています。

## 必要環境

- Node.js 20.14 以上（推奨: 22 LTS）
- [pnpm](https://pnpm.io/) 9 以上（CI は 10 系）

## ローカル開発

```bash
pnpm install
pnpm dev
```

## 品質確認

```bash
pnpm check
pnpm build
pnpm preview
```

## GitHub Pages について

GitHub Actions（`.github/workflows/deploy.yml`）が `main` ブランチへのプッシュでビルドし、GitHub Pages に公開します。

初回はリポジトリの **Settings → Pages → Build and deployment** でソースを **GitHub Actions** に設定してください。

**注意:** 「Deploy from a branch」（`build_type: legacy`）のままだと、GitHub が **Jekyll**（`jekyll-build-pages`）でリポジトリ全体をビルドしようとします。Astro の `---` が YAML と衝突して失敗するため、必ず **GitHub Actions** に切り替えてください（このリポジトリの `deploy.yml` が `dist` を公開します）。

### `site` と `base` の扱い

ビルド時に次の環境変数で上書きします（ワークフロー内で自動設定）。

| 変数 | 意味 |
|------|------|
| `SITE_URL` | 公開オリジン（例: `https://naruto1031.github.io`） |
| `BASE_PATH` | サブディレクトリ公開時のベース（例: `/<リポジトリ名>/`）。`ユーザー名.github.io` リポジトリのときは `/` |

ローカルでは未設定時の既定値として `SITE_URL=https://naruto1031.github.io`・`BASE_PATH=/` を使います。別ドメインやリポジトリ名で試す場合は:

```bash
SITE_URL=https://naruto1031.github.io BASE_PATH=/リポジトリ名/ pnpm build
```

## 文言・リンクの編集

`src/data/site.ts` を編集します。開業届の写しなど機微なファイルはリポジトリに含めていません。
