+++
bgcolor = false
comments = true
date = "2015-06-20T23:20:59+09:00"
draft = false
excerpt = "入社したばっかりの頃にスエ達に教えてもらったような記憶があるけど、なんか怖いし必要に迫られなかったのでずっと使ってなかった(っ´ω`ｃ)ぅぅ 異動したらなんか変なコミット入れにくくて(っ´ω`ｃ)ぅぅ ってことでやってみた"
image = ""
outside = false
slug = "git-rebase"
tags = ["git"]
title = "コミットまとめて爽快"

+++

入社したばっかりの頃にスエ達に教えてもらったような記憶があるけど、  
なんか怖いし必要に迫られなかったのでずっと使ってなかった(っ´ω`ｃ)ぅぅ  

異動したらなんか変なコミット入れにくくて(っ´ω`ｃ)ぅぅ  

ってことでやってみた！

<br>

### コミットまとめる

操作するコミットの個数分の`~`をつける。
```zsh
git rebase -i HEAD~~
```

コミットまとめる方（消える方）を `pick` から `squash` に変更して保存  

```zsh
pick b6bedea Change article
pick 729230c 変更１
```
```zsh
pick b6bedea Change article
squash 729230c 変更１ // squashに変更
```
コミットメッセージ不要なやつをコメントアウト

```zsh
# This is a combination of 2 commits.
# The first commit's message is:
Change article
# This is the 2nd commit message:
変更１
```

```zsh
# This is a combination of 2 commits.
# The first commit's message is:
Change article
# This is the 2nd commit message:
# 変更１ // コメントアウトしたよ
```

禁断のforce push  
終わり。  

> 参考：
> [サルでもわかるGit入門](http://www.backlog.jp/git-guide/stepup/stepup7_5.html)

<br>

### 追記

「`squash`じゃなくて`s`で大丈夫だよ」と、アドバイスもらったので追記。  

さらに「自分だったら`s`じゃなくて`f`にするけどねー」  
って言われてなんじゃそりゃーってなったのでちょっと調べる。

<br>

#### fってなんじゃ

`f`はfixupのエイリアスで、名前の変更をしないでコミットをまとめられるやつ。

> 参考：
> [git rebaseと仲良くなろう~part2](http://qiita.com/kkam0907/items/0c73c08df7d99edae09d)
