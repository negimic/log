+++
bgcolor = "#666"
comments = true
date = "2015-05-28T14:29:15+09:00"
draft = false
image = "https://octodex.github.com/images/original.png"
outside = true
tags = ['GitHub']
title = "chromeでgithubが見れなくなった時の対処"
slug = "chrome-github-error"
excerpt = "いつのまにかchromeでgithubが見れなくなってたｗfirefoxで見れるからいいや〜って放置してましたが、ちょっと時間ができたのでちゃんと直そうと思い立ちまして。プロキシの設定かな〜と思って前に調べたけどよくわからなかったんです..( ･᷄ὢ･᷅ )"
+++

いつのまにかchromeでgithubが見れなくなってたｗ

firefoxで見れるからいいや〜って放置してましたが、  
ちょっと時間ができたのでちゃんと直そうと思い立ちまして。  

プロキシの設定かな〜と思って前に調べたけどよくわからなかったんです..( ･᷄ὢ･᷅ )

結局は証明書の期限切れだったので、それを消したら直った。<br /><br /><br />

### 直し方

以下のサイトを参考に。ってかまんまこれ。笑

>[SSLエラーでgithubに接続できない場合の対処法(2014-07-27)](http://yasuharu519.hatenablog.com/entry/2014/07/28/013502)

このサイトまで辿りつくのが大変だったんすよ・・・（エラー読め  

1. キーチェーンアクセス（アプリケーション）を開く
2. 表示 ＞ 有効期限の過ぎた証明書を表示 をクリック
3. "DigiCert High Assurance EV Root CA" を削除

これで無事githubが見れるようになりました(∩´∀｀)∩わーい<br><br><br>

### 知らない単語・用語メモ

そのうち調べる、、、はず(～'ω'　)～

- 証明書
- ssl

