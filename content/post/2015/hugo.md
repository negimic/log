+++
comments = true
date = "2015-03-09T19:07:14+09:00"
draft = false
image = "images/hugo.png"
outside = false
tags = ["hugo", "golang"]
title = "hugoでブログ ʕ◔ϖ◔ʔ"
slug = "hugo"
excerpt = "hugoとGitHubPagesでブログはじめました。node.jsが好きなので`Ghost`にしようか悩んだのですが、goを使ってみたかったのと、偉大な先輩方がhugo移行の記事を書いていたので、hugoでブログを作ることにしました。（実際はgo全然使わなかったｗ）以下、備忘録"

+++

hugoとGitHub Pagesでブログはじめました。

node.jsが好きなので `Ghost` にしようか悩んだのですが、goを使ってみたかったのと、偉大な先輩方がhugo移行の記事を書いていたので、hugoでブログを作ることにしました。（実際はgo全然使わなかったｗ）

以下、備忘録。

### 1. hugoをインストール

[Hugo Quickstart Guide](http://gohugo.io/overview/quickstart/)  
2分で開始できるhugoのクイックスタートガイド。

homebrewで入れました。

```zsh
$ brew install hugo
```

なにやらエラーが出たのでbrew updateします。

```zsh
$ brew update
```

brew updateでもまたエラー。うー。  
以下のサイトを参考にエラーを解消。

>[【Homebrew】updateの時にgitのエラーがでた](http://junko.hatenablog.com/entry/2013/08/13/000223)

hugoインストール完了。


### 2. 新しいサイトを作成する

```zsh
$ hugo new site [path]
```

```zsh
$ tree
.
├── archetypes
├── config.toml
├── content
├── data
├── layouts
└── static
```

こんな感じのフォルダ群が出来るよ。


### 3. テーマを設定

テーマをダウンロードする。

使いたいthemeをcloneすればいいのですが、わたしは全部持ってきました。  
（テーマを一覧で見れるページが見つからなかったので）

themesディレクトリを作ってgit clone。

```zsh
// 全部もりっと
$ git clone --recursive https://github.com/spf13/hugoThemes.git themes

// 個別で ex.hugo-base-theme
$ git clone --recursive https://github.com/crakjie/hugo-base-theme.git themes/hugo-base-theme
```

色々なテーマを適応して確認してたら、余計なファイルが生成されるので  
テーマを決めたらpublic以下を一旦削除した方がいいかも。


### 4. 記事を書く

```zsh
$ hugo new post/new_post.md
```

```zsh
.
├── archetypes
├── config.toml
├── content
│   └── post
│       └── test.md
├── data
├── layouts
└── static
```

content内にファイルが生成される。  
newするときに `.md` 忘れてエラー出た。  
マークダウンで記事を書く。


### 5. ローカルで立ち上げる

```zsh
$ hugo server --watch
$ hugo server -w
```

これでサーバーが立ち上がるので `http://localhost:1313` を開く。

`--watch` を付けることで変更を即反映してくれます。`-w`でもおk。  
LiveReloadみたいで便利です！

config.tomlの変更は反映されないので立ち上げ直す。


### 6. 設定ファイルをいじる

設定は`config.toml`に書くよ。
あんまり詳しくわからないけどとりあえず

```config.toml
baseurl = "http://blog.negimic.com/"
languageCode = "ja-jp"
title = "negimic blog"
theme = "casper"
copyright = "2015 negimic All Rights Reserved"

[params]
author = "negimic"
description = "ねぎみくのブログ |ω・)"
bio = "渋谷で働くフロントエンドエンジニア。もうすぐ３年目。"
```

こんな感じに変えときました。


### 7. ビルド

```zsh
$ hugo
```

`hugo server`をしたらpublic内のurlがローカルに向いてるので、  
公開前に必ず`hugo`でビルドする。（１回忘れてそのままデプロイした）


<!-- ## 参考サイト
- [hugo公式](http://gohugo.io/)
- [気ままなつぶやき](http://junko.hatenablog.com) -->

<!--
## 次回以降
- spot.im or discus
- github pages
  * custom URL
- theme/casper
  * 初めてプルリク出したよ！
  * go template （tag1番後ろの,を消したい）
  -->
