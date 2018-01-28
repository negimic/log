+++
bgcolor = false
comments = true
date = "2016-05-20T19:03:07+09:00"
draft = false
excerpt = "disqusの導入と隠蔽をしました。"
image = ""
menu = ""
share = true
slug = "disqus"
tags = ["disqus"]
title = "disqusってみた"

+++

[disqus](https://disqus.com/)でアカウント作って、  
configにdisqusShortnameを書くだけで導入終わり。  

簡単( •́ㅂ•̀)و  
<br>

#### ついでに隠蔽  

ページロード時は非表示にしといて、ボタン押したらコメント欄を出すように変更する。  
<br>

#### 直す場所

disqusを読み込んでいる部分。  

```zsh
/themes/casper/layouts/partials/disqus.html  
```

```html:disqus.html
{{ if ne .Params.comments false}}
{{ if .Site.DisqusShortname }}
	<div id="disqus_thread"></div>
	<script type="text/javascript">
		var disqus_shortname = '{{ .Site.DisqusShortname }}';
		var disqus_url = '{{ .Permalink }}';
		(function() {
			var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
			dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		})();
	</script>
	<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{{ end }}
{{ end }}
```
<br>

#### 何するの

ページロード時にscriptタグを生成してdisqusのモジュールを読み込んでいるので、  
ボタンを用意してクリックイベント貼っ付けます。  

```html:disqus.html
{{ if ne .Params.comments false}}
{{ if .Site.DisqusShortname }}
	<div id="disqus_btn">ボタン</div>
	<div id="disqus_thread"></div>
	<script type="text/javascript">
		var disqus_shortname = '{{ .Site.DisqusShortname }}';
		var disqus_url = '{{ .Permalink }}';
		(function() {
			var btn = document.getElementById('disqus_btn');
			btn.addEventListener('click', dsqFnc, false);
			function dsqFnc() {
				btn.parentNode.removeChild(btn);
				var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
				dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
				(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
			}
		})();
	</script>
	<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{{ end }}
{{ end }}
```

ほぼそのまんま。笑  
クリックされたらボタン消しとく。  
<br>

#### 最後に

ボタンのスタイルを直す。  
webfontのアイコンでも入れようかと思ったら既に入ってた(∩´∀｀)∩  

<a href="/fonts/example.html#github">アイコン一覧</a>  
しかもこんなページがあるなんて！  
気付かなかったｗｗ  

<small>なんとなくCSSが破綻してる気がする...そのうち直そう...</small>

<br>