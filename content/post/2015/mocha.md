+++
bgcolor = false
comments = true
date = "2015-05-29T20:08:46+09:00"
draft = false
image = ""
outside = false
slug = "test-with-mocha"
tags = ['mocha']
title = "mochaでテスト書くどー٩(　`ω´　)۶"
excerpt = "今までのプロジェクトで書く機会があまりなかったのですが、異動してチャンスが！やってみたかったことBEST3 に入るテストコード（やれよ ・・・環境変えるって大事だよね！！mochaでテスト書いてみようっていう流れ（課題）があったので、乗ってみました。"

+++

今までのプロジェクトで書く機会があまりなかったのですが、異動してチャンスが！

やってみたかったこと **BEST3** に入るテストコード（やれよ  
・・・環境変えるって大事だよね！！  

mochaでテスト書いてみようっていう流れ（課題）があったので、乗ってみました。  

<small>世間はreactだのbabelだのwebworkerだの言っておりますが。私はnodeを勉強しまする。笑  
node好きだから嬉しいけどね。  
でもいつか流行に乗れるようになりたいなぁ。新規にアサインされるように実力付けよう。。</small>

でもまぁ一歩ずつ！諦めたらそこで試合終了！<br><br>

### mocha導入

[Mocha](http://mochajs.org/)

```zsh
  $ npm install -g mocha
```

いつものごとく、このままじゃ入らなかったので `sudo` を付ける。  
普通は`sudo`なしでインストール出来るのかな・・・私の環境がおかしいのかなぁ。<br><br>

### 書いてみる

まずはMochaのページにあるチュートリアルを実行してみる。

```javascript
  // test.js
  var assert = require("assert")
  describe('Array', function(){
    describe('#indexOf()', function(){
      it('should return -1 when the value is not present', function(){
        assert.equal(-1, [1,2,3].indexOf(5));
        assert.equal(-1, [1,2,3].indexOf(0));
      })
    })
  })
```

```zsh
  $ mocha
  Array
      #indexOf()
        ✓ should return -1 when the value is not present

    1 passing (6ms)
```

無事通った(～'ω'　)～（当たり前  

mochaはブラウザで実行するものと、ターミナルで実行するものがあり、  
上記のコードはターミナル上で実行するもの。  
ブラウザじゃないので、ここでwindowとかdocumentを参照しようとするとエラーになる。

```zsh
ReferenceError: document is not defined
```

実現するにはPhantomJS（mocha-phantom?）を入れれば出来るっぽいけど、一旦ブラウザ実行でいいや〜。あとで調べる←<br><br>

### 課題

`$.escapeHtml()` のテストコードを書いてみる。([chikuwa.js](https://github.com/ameba-proteus/chikuwa.js))  

```javascript
  describe('escapeHtml', function() {
    it('should return true when the value is escape html', function() {
      var beforeArr = ['<', '>', '&'],
        afterArr = ['&lt;', '&gt;', '&amp;'],
        flg = true;

      for (var i = 0, len = beforeArr.length; i < len; i++) {
        if ($.escapeHtml(beforeArr[i]) !== afterArr[i]) {
          flg = false;
          break;
        }
      }
      assert.ok(flg);
    });
  });
```

うーん、、やはりテストの書き方が自由すぎて不安。。  
抜け漏れのないように書く方法が知りたい。  

そしておしゃれにコード書けるようになりたい。笑  
いつまでもゴリゴリコード言われてたくないよぅ<br><br>


### 参考にするよ

jQueryやunderscoreの実際のテストコードを見てみると良いかも、とアドバイスを貰ったので見てみる。

[jquery/jquery test](https://github.com/jquery/jquery/blob/master/test/unit/core.js)

[jashkenas/underscore test](https://github.com/jashkenas/underscore/blob/master/test/arrays.js)

テストって、、、こんなにベタに書くものなん( ꒪⌓꒪)  
やっぱり抜け漏れめっちゃ出そうな予感しかしないのだが<br><br>


### アドバイスを頂いたので修正

師匠から。

<blockquote class="twitter-tweet" lang="ja"><p lang="ja" dir="ltr"><a href="https://twitter.com/negimic">@negimic</a> flg使わずにループ内で assert.equal($.escapeHtml(beforeArr[i]), afterArr[i]); のほうがfail時の情報量多いですよ <a href="http://t.co/k0o8YHDhqQ">http://t.co/k0o8YHDhqQ</a></p>&mdash; あ (@ahomu) <a href="https://twitter.com/ahomu/status/609638731402735616">2015, 6月 13</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

なるほど。ついクセでfor文の中でごにょごにょするのは悪だと思っていた。  

```javascript
  describe('escapeHtml', function() {
    it('should return true when the value is escape html', function() {
      var beforeArr = ['<', '>', '&'],
        afterArr = ['&lt;', '&gt;', '&amp;'];

      for (var i = 0, len = beforeArr.length; i < len; i++) {
        assert.equal($.escapeHtml(beforeArr[i]), afterArr[i]);
      }
    });
  });
```

こんな感じかしら。  
もしエラーが出ても止めないで情報を吐き出す感じで。  

アドバイスあざます！！<br><br>

<small>左下にコメントするところ（Spot.IM）あるんだけど気付かれてないのかな...  
Spot.IMじゃなくてdisqusにした方がよかったかなぁ(;;;꒪⌓꒪)</small>