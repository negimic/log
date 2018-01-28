+++
bgcolor = false
comments = true
date = "2015-06-08T20:00:51+09:00"
draft = false
excerpt = "Hiveを使って数値を出すのはフロントのお仕事らしいのでお勉強します。前のチームではサーバサイドエンジニア様のお仕事だったな〜・・・でもなんだかエンジニアっぽいぞ！わくわく！"
image = ""
outside = false
slug = "hive"
tags = ['hive']
title = "Hiveを叩くってエンジニアっぽくて素敵。"

+++

Hiveを使って数値を出すのはフロントのお仕事らしいのでお勉強します。  
前のチームではサーバサイドエンジニア様のお仕事だったな〜・・・  
でもなんだかエンジニアっぽいぞ！わくわく！<br><br>


### Hive導入

割愛。笑  
というか、環境設定とかしてたら泥沼に陥ってしまいそう...  
機会があったら今度やってみようかな。<br><br>


### HiveQL

純粋にHadoopを叩こうとすると複雑?で難しく、  
HiveはHadoopをSQLライクに叩けるように糖衣してくれている子らしいです。  

"SQLみたいに簡単にかけるよ！！"  

・・・SQLわかんねー(;;;꒪⌓꒪)  
ってことでSQLの書き方を調べる。<br><br>


### SQL

#### **- SELECT**

```sql
SELECT "フィールド名" FROM "テーブル名";
```

"テーブル" から、"フィールド" を選択し、取得する。

<table>
  <caption>sales_table</caption>
  <tr>
    <th>fruit_type</th>
    <th>number_of_fruit</th>
    <th>fruit_sales</th>
  </tr>
  <tr>
    <td>apple</td>
    <td>1</td>
    <td>100</td>
  </tr>
  <tr>
    <td>orange</td>
    <td>3</td>
    <td>450</td>
  </tr>
  <tr>
    <td>apple</td>
    <td>5</td>
    <td>500</td>
  </tr>
  <tr>
    <td>grape</td>
    <td>2</td>
    <td>1000</td>
  </tr>
</table>

```sql
SELECT fruit_type FROM sales_table;
```
```sql
*fruit_type
apple
orange
apple
grape
```
<br>

#### **- Distinct**

重複した行をまとめる。

```sql
SELECT DISTINCT fruit_type FROM sales_table;
```
```sql
*fruit_type
apple
orange
grape
```
<br>

#### **- WHERE**

条件を絞って取得。

```sql
SELECT "フィールド名"
FROM "テーブル名"
WHERE "条件";
```  

例）売り上げが500円以上のフィールドを取得。

```sql
SELECT fruit_type
FROM sales_table
WHERE fruit_sales >= 500;
```
```sql
*fruit_type
apple
grape
```
<br>

#### **- AND/OR**

２つ以上の条件を組み合わせて使う。

```sql
SELECT "フィールド名"
FROM "テーブル名"
WHERE "簡単条件"
{[AND|OR] "簡単条件"}+;
```  

例）売り上げが300円以上800円未満のフィールドを取得。

```sql
SELECT fruit_type
FROM sales_table
WHERE fruit_sales >= 300
AND fruit_sales < 800;
```
```sql
*fruit_type
orange
apple
```

<br>

#### **- IN**

複数の条件を省略したやつ。ORで置き換えられる。

```sql
SELECT fruit_type
FROM sales_table
WHERE fruit_sales IN (100, 450);
```

```sql
*fruit_type
apple
orange
```

<br>

#### **- BETWEEN**

INは不連続の値だが、BETWEENはある程度の範囲 (range) 内で見てくれる。

```sql
SELECT fruit_type
FROM sales_table
WHERE fruit_sales BETWEEN 100 AND 450;
```

```sql
*fruit_type
apple
orange
```

<br>

#### **- LIKE**

パターンで取得。

```sql
SELECT fruit_type
FROM sales_table
WHERE fruit_type LIKE '%ra%';
```

```sql
*fruit_type
orange
grape
```

<br>

#### **- ORDER BY**

選ばれたデータを昇順(ASC)もしくは降順(DESC)に表示。  

```sql
SELECT "フィールド名"
FROM "テーブル名"
[WHERE "条件"]
ORDER BY "フィールド名" [ASC, DESC]; // デフォルト: ASC
```

```sql
SELECT fruit_type
FROM sales_table
ORDER BY fruit_sales DESC
```

```sql
*fruit_type
grape
apple
orange
apple
```

<br>

#### **- 関数**

- AVG (平均値)
- COUNT (カウント)
- MAX (最大値)
- MIN (最小値)
- SUM (合計値)

```sql
SELECT "関数名"("フィールド名")
FROM "テーブル名";
```

```sql
SELECT SUM(fruit_sales)
FROM sales_table
```

```sql
*SUM(fruit_sales)
2050
```

<br>

#### **- COUNT**

テーブルの中に読み込まれたデータがどれくらいあるのか、カウントできる。

```sql
SELECT COUNT(fruit_type)
FROM sales_table
WHERE fruit_sales IS NOT NULL;
```

```sql
*COUNT(fruit_type)
4
```

<br>

#### **- **




<br><br>

### ひとりごと

<small>
SELECTとかは大文字にした方がいいよって言われてそうしていたけど、社内のwikiを漁ってたら小文字で書いている人もいて、どっちやねん！って思ったので調べたら、  
構文的には大文字小文字どちらでも大丈夫。だが、裏の処理は大文字でやるので変換が無くなる分速くなるから大文字説を唱えている人と、それに反論している人がいて・・・あーこれも宗教か、と思いました。  
</small>

見やすいという理由で大文字でいきます。( •́ㅂ•̀)و


