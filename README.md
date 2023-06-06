# submarin-converter-plugin-template

[submarin-converter](https://github.com/souhait0614/submarin-converter)のプラグインモジュールのテンプレートです。
テンプレート機能を使って[新しくリポジトリを作成](https://github.com/souhait0614/submarin-converter-plugin-template/generate)してください。
リポジトリ作成後、以下の手順に従ってプラグインを作成してください。

## プラグイン作成手順

### 環境準備

プロジェクトルートで開発に必要なNodeモジュールをインストールします。

```sh
pnpm i
```

[pnpm](https://pnpm.io)の使用を推奨しますが、npmやyarnでも問題ないと思います。(コマンドは各自置き換えてください。)

### コードの変更

`src/index.ts`を変更してプラグインを作成してください。
`templatePlugin`の部分は作成しているプラグインの名前に修正することを推奨します。

### テストの修正

`test/index.test.ts`には`src/index.ts`を実際にsubmarin-converterで動作させるテストコードが書かれています。
変更した`src/index.ts`に合わせて修正してください。
テストコード修正後は実際にテストを実行して通過するかを確認してください。

```sh
pnpm test
```

### モジュール情報の修正

`vite.config.ts`内の`name: 'SubmarinConverterPluginTemplate'`を作成しているプラグインの名前に修正してください。
`package.json`内の`"name": "submarin-converter-plugin-template"`を作成しているプラグインの名前に修正し、`"description": "submarin-converterのプラグインモジュールのテンプレートです。"`もプラグインに合わせて修正してください。
(その他修正したい情報があれば修正してください。)

### READMEの修正

`README_template.md`の内容を作成したプラグインに合わせて修正してください。
`README.md`(このファイル)を削除やリネームし、`README_template.md`を`README.md`にリネームしてください。

### モジュールの公開

作成したモジュールを使用する場合、[npm](https://www.npmjs.com)で公開するのが一番簡単です。(npmのアカウントが必要です。)
`package.json`内の`"private": true`の行を削除してください。
以下のコマンドを実行してnpmにログインします。(ログイン済みの場合は飛ばしてください。)

```sh
npm login
```

以下のコマンドを実行します。

```sh
npm publish
```

自動でテストとビルドが実行され、`package.json`内の`name`に入れた名前でモジュールが公開されます。
