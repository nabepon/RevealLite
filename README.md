RevealLite
===========

## 概要
Reveal.jsを、1枚のhtmlでシンプルに使用可能にしたもの。  
Markdown記法でスライドを作ることができます。  

## 使い方
使い方はsample.htmlを見てください。  
基本のテンプレートは以下になります。  

```
<meta charset="utf-8">
<script src="http://nabepon.github.io/repos/RevealLite/RevealLite.js"></script>
<div class="reveal">
<div class="slides">
    <section data-markdown data-separator="---">
        <script type="text/template">
            # Demo 1
            Slide 1
            ---
            # Demo 1
            Slide 2
            ---
            # Demo 1
            Slide 3
        </script>
    </section>
</div>
</div>
```