## les conditions
<div>

```python
true
```
vrai

</div><!-- .element: class="fragment" data-fragment-index="1" -->
<div>

```python
false
```
faux

</div><!-- .element: class="fragment" data-fragment-index="2" -->

est ce que 0 est plus petit que 9 ? <!-- .element: class="fragment" data-fragment-index="3" -->

oui (true)<!-- .element: class="fragment" data-fragment-index="4" -->


Note: 
alors maintenant nous allons voir les conditions en pythons, nous allons voir que les conditions sont très importantes en programmation
Les conditions sont comme si nous posions une question à l'ordinateur, par exemple est ce que 9 est plus grand que 0, alors il nous répond part un oui ou non. Cependant le oui en python équivaux à true (ou vrai) et le non à false (ou faux) 


## les opérateurs de conditions
<div>
l'opérateur égal:

```python
10 == 10
``` 
10 est égal à 10 donc c'est vrai (true)
</div>
<!-- .element: class="fragment" data-fragment-index="1" -->

<div>

----- 
l'opérateur n'est pas égal:

```python
10 != 9
``` 
10 n'est pas égal à 9 donc c'est vrai (true)
</div>
<!-- .element: class="fragment" data-fragment-index="2" -->

Note: 
comme nous avons vu, dans la partie où nous expliquons les maths en python, nous avons vu certains opérateur, ici nous allons vous expliquer quel sont les opérateur pour les conditions, qui sont pour certains très semblables à ceux en mathématique. Ici nous avons l'opérateur égal, c'est comme si on posait la question à l'ordinateur si 10 est égal à 10, c'est vrai (soit true), nous utilisons deux signes égal, et pas 1 pour la condition. Nous avons aussi l'opérateur n'est pas égal qui est comme l'opérateur égal sauf qu'a la place de deux égal il sécrit avec un point d'exclamation et égal, c'est comme si on posait la question : est ce que 10 et 9 sont pas égaux, c'est vrai.


## les opérateurs plus petit que/plus grand que

<div>
l'opérateur plus petit que:

```python
10 < 20
``` 
10 est plus petit que 20 donc c'est vrai (true)
</div>
<!-- .element: class="fragment" data-fragment-index="1" -->

<div>

----- 
l'opérateur plus grand que:

```python
2 > 1
``` 
2 est plus grand que 1 donc c'est vrai (true)
</div>
<!-- .element: class="fragment" data-fragment-index="2" -->

Note:
Nous trouvons aussi les opérateurs plus petit/plus grand que, ici c'est comme en mathématique: l'opérateur plus petit que pose la question est ce que a est plus petit que b, ici est ce que 10 est plus petit que 20, et c'est vrai: true. Nous avons aussi son signe contraire, "plus grand que", si a est plus grand que b, ici 2 est bien plus grand que 1, c'est vrai (trues)


## les opérateur plus petit/plus grand ou égal

<div>
l'opérateur plus petit que:

```python
10 <= 10
``` 
10 est plus petit ou égal à 10 donc c'est vrai (true)
</div>
<!-- .element: class="fragment" data-fragment-index="1" -->

<div>

----- 
l'opérateur plus grand que:

```python
0 >= 0
``` 
0 est plus grand ou égal à 0 donc c'est vrai (true)
</div>
<!-- .element: class="fragment" data-fragment-index="2" -->

Note:
Nous trouvons aussi les opérateurs plus petit/plus grand que ou égal, ici c'est comme en mathématique et comme les opérateur plus grand que/ plus petit que sauf que l'on peut avoir les deux valeurs qui sont égales, par exemple 10 est plus petit ou égal à 10 et 0 est plus grand ou égal à 0 (qui donnent tout les deux true)

## vérifier deux conditions

<div>

__pour 0 < 1 < 10__

est ce que 0 < 1 ?

  **et** 

est ce que 1 < 10 ?

</div><!-- .element: class="fragment" data-fragment-index="1" -->

<div>

---- 
l'opérateur 'et':

```python
(0 < 1) and (1 < 10)
``` 
0 est plus petit que 1 (vrai)
1 est plus petit que 10 (vrai)
donc si les deux sont vrai, la condition est vrai
</div>
<!-- .element: class="fragment" data-fragment-index="2" -->

<div>

```python
(true) and (true)
``` 
est vrai car (vrai et vrai = vrai)

</div>
<!-- .element: class="fragment" data-fragment-index="3" -->

Note: 
dans certains cas nous voulons avoir 2 conditions fusionnées par exemple ici nous voulons vérifier si 1 est plus grand que 0 et 1 est plus petit que 10 du coup nous avons est ce que 0 < 1 et est ce que 1 est plus petit que 10. Nous utilisons alors l'opérateur ET soit AND en python qui permet du coup ici nous avons 2 conditions
si 0 est plus petit que 1 ET si 1 est plus petit que 10, donc si les deux sont vrai alors la condition est vrai (true)

## vérifier l'une des deux condition

<div>

est ce que 0 < 1 ?

  **ou** 

est ce que 1 > 10 ?

</div><!-- .element: class="fragment" data-fragment-index="1" -->

<div>

---- 
l'opérateur 'ou':

```python
(0 < 1) or (1 > 10)
``` 
0 est plus petit que 1 (vrai)
1 est plus grand que 10 (faux)
donc l'un est vrai et l'autre faux
</div>
<!-- .element: class="fragment" data-fragment-index="2" -->

<div>

```python
(true) or (false)
``` 
est vrai car (vrai ou faux = vrai)

</div>
<!-- .element: class="fragment" data-fragment-index="3" -->

Note: 
comme l'opérateur ET nous pouvons avoir l'opérateur ou qui lui à la place d'être vrai seulement si les deux sous conditions sont vrai alors que le OU permet d'être vrai seulement si l'une des deux est vrai. Soit le OR en python

## stocker le résultat d'une condition dans une variable

```python
hauteur_valide = (hauteur < 100)
``` 
<!-- .element: class="fragment" data-fragment-index="1" -->
`hauteur_valide` est soit true (vrai) ou false (faux) <!-- .element: class="fragment" data-fragment-index="2" -->

Note: 
nous pouvons mettre le résultat d'une condition dans une variable, ici la variable hauteur_valide est soit vrai soit faux (true ou false)

## exemple vérifier la limite de température

est ce que la témpérature est entre 20 et 40 degrés (inclus) ?  <!-- .element: class="fragment" data-fragment-index="1" -->

est ce que la température est supérieure à 20 et inférieure ou égal à 40 ? <!-- .element: class="fragment" data-fragment-index="2" -->

est ce que température > 20 et température <= 40 ? <!-- .element: class="fragment" data-fragment-index="3" -->

```python
peut_fonctionner = (température > 20 and température <= 40)
```  
<!-- .element: class="fragment" data-fragment-index="4" -->

Note: 
On fait un rapide exemple, nous voulons avoir une limite de température pour une montre qui fonctionne seulement entre 20 degré et 40 degré inclus, soit nous posons la question "est ce que la témpérature est entre 20 et 40 degrés (inclus) " que nous pouvons convertir en: "est ce que la température est supérieure à 20 et inférieure ou égal à 40 " soit avec les opérateur "est ce que température > 20 et température <= 40 ?"