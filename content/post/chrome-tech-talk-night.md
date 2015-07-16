+++
bgcolor = false
comments = true
date = "2015-07-16T19:26:26+09:00"
draft = false
excerpt = "Googleのスゴイ人の話を聞きにきたよ。英語すぎてやばい。PolymerやService Worker、Material Design Liteの話をしてくれるらしいのでがんばって聞くよ。"
image = ""
outside = false
slug = "chrome-tech-talk-night"
tags = ["google", "勉強会"]
title = "Chrome Tech Talk Night #8 (～'ω'　)～"

+++

Googleのスゴイ人の話を聞きにきたよ。英語すぎてやばい。  
PolymerやService Worker、Material Design Liteの話をしてくれるらしいので  
がんばって聞くよ。  
<br>
<br>
### Future of web apps
speaker: [Matt Gaunt](https://github.com/gauntface)  
<br>
chromeアプリを開いたときにホームに追加する？って出るのは  
オフラインでも動くの。  
<br>
これはwebページからservice workerにアクセスしてるよ。  
service workerは情報をキャッシュしてて、そこにアクセスしてるよ。  
<br>
service workerには色んな機能があるよ。  
push notification  
他  
<br>
<br>
### Building production Polymer apps on google
speaker: [Eric Bidelman](https://github.com/ebidel)  
<br>
web componentで色々作れるよっ！  
<br>
https://santatracker.google.com/#village  
googleのこのページもPolymerで作ったよー  
<br>
<br>

##### - PolymerでのSPAの作り方（templateの使い方？）  
jsでidを切り替えるだけで簡単にhtml差し替えられるよ！
<br>
<br>
##### - オフラインGA
オフラインの時はservice workerに送っといて、次にオンラインになったら通信する。  
<br>
オフラインの場合でブックマークしても次にオンラインになったときにシンクする。  
<br>
<br>

### Material Design for the Web
speaker: [Addy Osmani](https://github.com/addyosmani)  
<br>
＿人人人人人人人人人人人人人人＿  
＞　オフライン対応大事！！！　＜  
￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^￣  
<br>
[スライド](https://dl.dropboxusercontent.com/u/27182/Tokyo_Talk_Thursday.pdf)
<br>
<br>

### Offline apps with Polymer and Service Worker
speaker: [Jeffrey Posnick](https://github.com/jeffposnick) & [Mat Scales](https://github.com/wibblymat)
<br>
東京はネット(4G)繋がって良いよね！  
<br>
＿人人人人人人人人人人人人人人＿  
＞　オフライン対応大事！！！　＜  
￣Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^Y^￣  
<br>
<br>

ダメだ、疲れた。後でスライドとtwitter見よう。。  
[#chromejp](https://twitter.com/hashtag/chromejp?src=hash&vertical=default&f=tweets&lang=ja)  
<br>
<br>
まぁ結論、オフライン対応がんばろうな！！って話だった気がする(～'ω'　)～
<br>
<br>
### メモ
- offline（オフラインGA)
- browsersync
- pre-cache
