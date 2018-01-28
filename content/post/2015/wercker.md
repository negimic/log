+++
bgcolor = false
comments = true
date = "2015-06-18T22:27:30+09:00"
draft = false
excerpt = "先輩がwerckerを使って自動ビルドしてるのを見て、マネしたくなってチャレンジしたけど全然思い通りに動かなくて挫折。手動でビルドして生成されたpublicを手動デプロイして運用という、なんともゴリゴリなやり方。。やっぱちょっとかっこ悪いのでもっかいチャレンジする！"
image = ""
outside = false
slug = "wercker"
tags = ["wercker"]
title = "werckerに再チャレンジ。"

+++

先輩がwerckerを使って自動ビルドしてるのを見て、  
マネしたくなってチャレンジしたけど全然思い通りに動かなくて挫折。  

結局、手動でビルドして生成されたpublicを手動デプロイして運用という、  
なんともゴリゴリなやり方。。  

やっぱちょっとかっこ悪いのでもっかいチャレンジする！

<br>

#### werckerでやりたいこと

1. theme(casper) を使ってhugoのbuiild
2. github pagesにデプロイ

これだけなんす。
hugoの公式にもやり方書いてるし、werckerのstepも既に在る。
<small>のになんで出来なかったんだろう。。。残念だ。。。</small>

<br><br>

#### 1.  theme(casper) を使ってhugoのbuiild

公式にやり方が載ってあったのでラッキー！って思ったらエラー出まくった orz  
エラーをぐぐったら、ドンピシャ感のあるissueに辿り着いた。

[issue](https://github.com/ArjenSchwarz/wercker-step-hugo-build/issues/8)

適当にしか読めてないけど、おそらくbox: wercker/defaultの仕様が変わったようで  
修正を待たないと使えないっぽい。え、そんなことってあるの？

boxの種類、
wrecker/default と wrecker/rvm と debian を試してみて、
buildのstepちゃんと通ったのがdebianだけだった。

他のは上記issueと同じ所で止まった。

んで、debianのままでgh-pagesに自動デプロイ走ったらgitコマンドがないと怒られー・・・詰んだ。

今日はもう寝る (¦3ꇤ[__]　ふて寝じゃ。  
なんか根本から間違ってる気がするのでまた今度１からやる。

<br><br>

#### 追記

やはり根本から間違ってたｗｗ

くううううう

一応完成したので次の記事にまとめる。
