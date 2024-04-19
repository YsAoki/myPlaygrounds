# サンプルコード集

## 環境構築系を記入中。

- とりあえずサンプル程度なのであまり見ても有益ではない、

## vscode 上での READ ME プレビュー表示の手順

https://atmarkit.itmedia.co.jp/ait/articles/1804/20/news030.html<br>
※macbook では、Cmd+K を押してすぐに指を離し、その後に V を押す。

## 初回の環境構築について

```
npm create vite@latest
```

https://qiita.com/teradonburi/items/fcdd900adb069811bfda

## ライブラリのインストール一括コマンド

```
npm install @mui/material @mui/icons-material @emotion/react react-router-dom dayjs prettier-plugin-organize-imports
```

develop 環境のみで使用するライブラリのインストール

```
npm install --save-dev @types/react-router-dom
```

## プロジェクト内で管理できる改行設定について

このアプリ内のディレクトリにも反映してあるが、
prettier-plugin-organize-imports を使用することで import 文の自動ソートが可能。<br>
また、改行に関する設定もチーム内で合わせられるため使った方が良。<br>
以下の 2 ページを参照した。(vscode のデフォルト設定も変更。80→240)<br>
https://zenn.dev/rescuenow/articles/c07dd571dfe10f<br>
https://zenn.dev/wakamsha/articles/prettier-plugin-organize-imports

## Git の初期設定について。

- ローカルのターミナルで以下を実行する。

```
git init
```

実行すると隠しフォルダの.git が作成され、git 管理下となる。

```
隠しフォルダを表示するコマンド(mac)
「command」+「shift」+「.」
```

もしくは「ls -a」 でも確認可能。

- リモートリポジトリ作成後

```
git remote add origin "リモートリポジトリのURL"
```

