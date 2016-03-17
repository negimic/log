+++
bgcolor = false
comments = true
date = "2015-10-10T01:16:30+09:00"
draft = false
excerpt = ""
image = ""
outside = false
slug = "viminecraft"
tags = ["minecraft", "vim"]
title = "vim + minecraft"

+++

vimのキータイプ音をminecraftの音にする。  
<br>

### minecraft
2013年くらいにドはまりしたマインクラフト。  
久々にやってみたのですが、やっぱ面白い！  

マイクラは世界の音が心地いいです。石をカリカリする音とか。  
毎日1時間くらい無心でカリカリして癒されてる。  
<br>
<br>

### 1回目のチャレンジ（2013年）
社会人1年目の時、vimは諸事情で苦手意識が強かったのだが  
このブログを読んでかなり興味を持った。  

> [何故プログラミングに効果音は必要なのか、あるいはVimで爆発する方法](http://tekkoc.tumblr.com/post/63418217996/%E4%BD%95%E6%95%85%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%81%AB%E5%8A%B9%E6%9E%9C%E9%9F%B3%E3%81%AF%E5%BF%85%E8%A6%81%E3%81%AA%E3%81%AE%E3%81%8B%E3%81%82%E3%82%8B%E3%81%84%E3%81%AFvim%E3%81%A7%E7%88%86%E7%99%BA%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)

この記事を見ながらやってみたものの、すぐに挫折。  
そもそもbash/zshとvimの画面の違いもよくわかってなかった気がする。  
<small>ど、どっちも黒い画面だし・・・</small>  

あと困った時に調べる方法もよくわかってなかったような。  
昔は人（師匠）に聞くのが第一手段だったが、今は自分で調べてます！（普通）  
<small>ggrks言われ続けた日々が懐かしい・・・</smalL>  

<br>
<br>
### 2回目のチャレンジ（昨日）
冒頭に書いた通り、ひっさびさにminecraftを再開し  
あの記事のことを思い出したのでもっかいチャレンジしてみようと思ったわけです。    
<br>
#### やったこと
- vimのバージョンを7.4に上げる
- .vimrcを書く
- minecraftダウンロード
- 音声ファイルを変換  
<br>

#### vimのバージョンを7.4に上げる
[あの記事](http://tekkoc.tumblr.com/post/63418217996/%E4%BD%95%E6%95%85%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0%E3%81%AB%E5%8A%B9%E6%9E%9    C%E9%9F%B3%E3%81%AF%E5%BF%85%E8%A6%81%E3%81%AA%E3%81%AE%E3%81%8B%E3%81%82%E3%82%8B%E3%81%84%E3%81%AFvim%E3%81%A7%E7%88%86%E7%99%BA%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95)に書いてある通りにやってみたら動かなくて、  
自分のPCのvimを確認した所、バージョンが7.3で古かったので7.4に上げた。  

vimのバージョンの上げ方はこの記事を参考にしました。  
> [初心者がVimをインストールするメモ](http://qiita.com/South_STR/items/4bd3fb7acd0d5bdf519a)
``` zsh
# 移動
$ sudo mv /usr/bin/vim /usr/bin/old_vim
# ハードリンクを作成する
$ sudo ln /usr/local/Cellar/vim/7.4.903/bin/vim /usr/bin/
```  
<br>

#### .vimrcを書く
ホームディレクトリに.vimrcを作る。あの記事を参考にしました。  
NeoBundleなるパッケージ管理を使って諸々読み込んだ結果こんな感じになった。  

<script src="https://gist.github.com/negimic/55a9a957290efdfe5ce7.js"></script>
 
.vimrcに書いたパスに音声ファイルを置きます。  
自分の場合は`~/Documents/minecraftSounds/`配下に、`stone1.wav`を置く。  
<br>

#### minecraftダウンロード
音声ファイルを持ってくるためにminecraftをダウンロードする。  

##### - ログインしてダウンロード  
昔はmailとpassだけでログインできたのだが、  
久しぶりにログインしようとしたら秘密の質問を聞かれた。  
<small>質問の内容が`what is your mother's middle name?` だったから困ったｗ</small>  

ログイン方法がいつの間にか変わったらしい。  
販売会社のmojangにログインして秘密の質問を作成して無事ログイン。  


##### - 音声ファイルを探す  
音声ファイルは`~/Library/Application Support/minecraft/assets/objects`の中にある。  
でもこの中は「00」や「0a」といったフォルダしかなく、更にフォルダ内にあるのは`000c82756fd54e40cb236199f2b479629d0aca2f`といったファイル。。  

心が折れかけたが、以下のフォーラムを参考に仕組みを理解。  
[soundsフォルダが無い](http://forum.minecraftuser.jp/viewtopic.php?f=6&t=17697)

`~/Library/Application Support/minecraft/assets/indexes`にこんな感じで書いてある。

```
  "minecraft/sounds/mob/guardian/elder_idle3.ogg": {
    "hash": "ac95dc01a3ce7dffb0d55283a1236196b07cf6ee",
    "size": 14673
  },
  "minecraft/sounds/mob/bat/hurt1.ogg": {
    "hash": "fddba78b2426f8056be081c98fe82e8411a0a5cf",
    "size": 4878
  }
```

この`hash`の値をコピーして`assets/objects`の中から検索する。  

自分はfinderで検索した。  
finderでobjectsまでいき、そこで検索。objects内で絞らないと出てこないのが謎。隠しフォルダだからかな...  

で、検索して出てきたファイルが音声ファイル。  
コピーして適当にデスクトップとかに保存する。紛らわしいので`stone1.ogg`と名前を付けておく。  

#### 音声ファイルを変換
vim-soundで使えるように、`.ogg`から`.wav`に変換する。  

自分は[Switch](http://veadardiary.blog29.fc2.com/blog-entry-2454.html)というアプリで変換した。

あとは.vimrcに書いたパス（自分の場合は`~/Documents/minecraftSounds/`）に、
音声データを入れてvimを立ち上げ直したら出来るはず。  
あ、さいごにNeoBundleのパッケージ確認が必要かも？
<br>
<br>
### 終わり

疲れたのでメモ終わり。  
抜けてるとこありそうだけど・・・  
まぁ自分の環境では音が出るようになったので満足満足！
