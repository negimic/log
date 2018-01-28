+++
bgcolor = false
comments = true
date = "2015-06-22T12:13:58+09:00"
draft = false
excerpt = "試行錯誤した結果、やり方がわかったので備忘録。"
image = ""
outside = false
slug = "wercker-success"
tags = ["wercker"]
title = "werckerでhugoビルド→githubにデプロイ"

+++

試行錯誤した結果、やり方がわかったので備忘録。

1. hugoでサイト作る。
2. werckerにアプリを登録
3. 自動デプロイ設定をしてgithubのトークンを登録
4. wercker.ymlを作ってルートフォルダに置く

<br>

#### 1. hugoでサイトを作る
簡単。過去の記事参照で。  
あと、publicフォルダはgit管理から外しておく。

<br>

#### 2. werckerにアプリを登録
werckerに新規登録して、アプリを登録する。  
アプリ登録の際に気をつけるべきはこれ。  
→ werckerにアプリを登録するとき、dockerを有効にするチェックをOFFにする

![ここのチェックをOFFにする](../../images/wercker-success.png)

これのせいですごい悩んだ。。  
このチェックをOFFです、OFF。

<br>

#### 3. 自動デプロイ設定をしてgithubのトークンを登録

werckerでアプリを登録したら、アプリの設定ページへ。  
以下もろもろ設定する。

1. `DEPLOY TARGETS`を設定する。
2. `Add deploy target`は`Custom deploy`を選ぶ。
3. `Deploy target name`は適当に分かりやすい名前付ける。
4. `Auto deploy`はチェックを入れて対象のブランチ名を選ぶ。  
<small>自分はmasterにプッシュしたらデプロイされるようにしました。</small>
5. `Deploy pipeline`には、githubで作ったトークンを記述する。  
<small>ここで登録した変数をwercker.ymlで使う（自分は`GIT_TOKEN`で登録）</small>

<br>

#### 4. プロジェクトのルートフォルダにwercker.ymlを置く

置く。

```yml
box: wercker/default
build:
  steps:
    - arjen/hugo-build:
        version: "0.14"
        theme: casper
        flags: --buildDrafts=true
deploy:
  steps:
    - lukevivier/gh-pages@0.2.1:
        token: $GIT_TOKEN
        domain: blog.negimic.com
        basedir: public
```

`domain` 部分は、カスタム使ってないなら `[username].github.io/[repository]`かな？

<br>