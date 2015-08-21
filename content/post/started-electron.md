+++
bgcolor = false
comments = true
date = "2015-08-21T20:19:34+09:00"
draft = false
excerpt = "electron はじめました。この週末で何か１個作ります。宣言。とりあえず導入だけやってみたのでメモメモ。"
image = ""
outside = false
slug = "started-electron"
tags = ["electron"]
title = "electron はじめました"

+++

electron はじめました。この週末で何か１個作ります。宣言。  
とりあえず導入だけやってみたのでメモメモ。  
<br>
### electron

electron(atom-shell)はフロントの技術を使ってクロスブラウザのデスクトップアプリが作れる技術で、node-webkitと似たようなあれ。（って言ったら怒られそう）

去年のnodefestでぁゃぴさんが神！神！言ってたのがnode-webkitで、  
あの時ぁゃぴさんはこーゆうことを言ってたのか〜〜と今になってフムった。

<br>
### 導入

このページを参考に起動する所までやってみます。  

> [Electronでアプリケーションを作ってみよう](http://qiita.com/Quramy/items/a4be32769366cfe55778)

```zsh
// インストール
npm -g install electron-prebuilt
```
<br>
package.json、index.html、main.jsをそれぞれ作る。

```zsh
vi package.json
vi index.html
vi main.js
```
一旦動かしたいだけなので中身はコピペ。  

<br>
実行！わくわく！
```zsh
electron .
```

<br>
鬼エラー！！！
```
[0821/190149:ERROR:file_io.cc(30)] read: expected 40, observed 0
[0821/190149:ERROR:http_transport_mac.mm(186)] Could not connect to the server. (NSURLErrorDomain -1004)
[0821/190150:WARNING:crash_report_exception_handler.cc(247)] UniversalExceptionRaise com.apple.ReportCrash: (ipc/mig) server died (0xfffffecc)
```

その後色々試したけど起動せず...  

もしかしてOS古い？と思い、
家にあった別のPC(Yosemite)で同じやり方でインストールしてみたらあっさり出来た。  

OSX 10.8.5 ダメなのかな  

<br>
### 導入完了(?)

ということで一旦コピペですが導入完了。  
今週末は、まず簡単にメモ帳から作ろう。  

最終的に「家庭内おしながき」的な構想があるので頑張りたい！  
データベース使えるかなぁ...  
<br>
