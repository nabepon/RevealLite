RevealLite
===========

## 概要
Reveal.jsを、1枚のhtmlでシンプルに使用可能にしたもの。  
Markdown記法でスライドを作ることができます。  

## サンプル
以下のように、1枚のhtmlでスライドを作成できます。
https://nabepon.github.io/RevealLite/sample.html

## 使い方
使い方はsample.htmlを見てください。  
基本のテンプレートは以下になります。  

```
<meta charset="utf-8">
<!-- 使い方：https://github.com/nabepon/RevealLite -->
<script src="https://nabepon.github.io/RevealLite/RevealLite.js"></script>
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