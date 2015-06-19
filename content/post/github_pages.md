+++
comments = true
date = "2015-03-12T21:48:46+09:00"
draft = false
image = "https://octodex.github.com/images/original.png"
outside = true
bgcolor = "#666"
slug = "github_pages"
tags = ["GitHub", "はじめてシリーズ"]
title = "はじめてのGitHub Pages"
excerpt = "このブログを作るにあたって、初めてGitHub Pagesを使ってみました。 今までタイミングがなくて使ったことなかったけど、やってみたらすごく簡単だった。 出来ることが増えると嬉しいなぁ。( ´ω` )ほくほく　以下、備忘録として手順を残します。"
+++

このブログを作るにあたって、初めてGitHub Pagesを使ってみました。

今までタイミングがなくて使ったことなかったけど、やってみたらすごく簡単だった。  
出来ることが増えると嬉しいなぁ。( ´ω` )ほくほく

以下、備忘録として手順を残します。

### 1. リポジトリを作成する

[GitHub Pages](https://pages.github.com/)  

GitHubで、GitHub Pages用のリポジトリを作成する。  
`[username] / [username].github.io`


### 2. リポジトリをcloneする

する。  


### 3. html等リモートにpushする

する。

参考サイトで`gh-pages`ブランチ作るって書いてたけどmasterに上げたら見れた。  
プロジェクトのページとユーザのページの違いかなぁ。後で調べる。

### 4. ページが見れるよ！

`http://[username].github.io/` にアクセスするとページができてる。

|ω・｀)oO(え、なんで「㌻」表記...casper先生やめてください...

### 番外編 独自ドメインを設定する

昔お名前ドットコムで取得したドメインをずっと持て余してたのでこのブログに設定してみました。

コチラ↓の記事を参考にさせてもらいました。

> [自分のGitHub Pagesと独自ドメインの設定方法](http://qiita.com/mofumofu3n/items/b859fb3c5d924cfcca15)

記事の通りにDNSの設定をする。

`CNAME`という名前のファイルを作り、自分の持ってるドメイン `ex. blog.negimic.com` を記述する。
リポジトリにPUSHする。

設定後、しばらく待ったら独自ドメインでページ開けました( •́ㅂ•̀)و

<!-- ### 番外編その2 プロジェクトのウェブページを試しに作ってみる

あとでやる

-->
