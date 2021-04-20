
## structure conditionnelle 

```python
if([CONDITION]):
    [CODE]
```
<!-- .element: class="fragment" data-fragment-index="1" -->

Note: 
après avoir vue les conditions, nous allons rendre tout ceci utile (*comme je l'espère un jour mon humour*) avec les 'si', ce qui permettera d'exécuter du code seulement quand une condition est vrai.


## Si 

- si il fait nuit -> allumer lumière

```python [1|2]
if(temps == "nuit"):
    allumer_lumière()
```
<!-- .element: class="fragment" data-fragment-index="1" -->
Nous utilisons alors `if`
<!-- .element: class="fragment" data-fragment-index="2" -->

Note: 
par exemple nous voulons allumer la lumière si il fait nuit alors nous utilisons la structure "if" en python , ici nous avons la conditions et ici nous avons le code. Le code "allumer lumière" est exécuté seulement quand la condition est vrai


## Sinon si 

- si il fait nuit -> allumer lumière
- sinon si il pleut -> allumer lumière

```python [3|4|0]
if(temps == "nuit"):
    allumer_lumière()
elif(temps == "pleut"):
    allumer_lumière()
```
<!-- .element: class="fragment" data-fragment-index="1" -->
Nous utilisons alors `elif`
<!-- .element: class="fragment" data-fragment-index="2" -->

Note: 
Bon les personnes se sont rendu compte que quand il pleut, il fait très sombre, mais les lumières sont pas allumé, alors nous devons les allumés si il pleut et qu'elles sont éteintes, nous devons utiliser un sinon si, 


## Sinon

- si il fait nuit -> allumer lumière
- sinon si il pleut -> allumer lumière
- sinon -> éteindre la lumière 

```python [5|6|0]
if(temps == "nuit"):
    allumer_lumière()
elif(temps == "pleut"):
    allumer_lumière()
else:
    éteindre_lumière()
```
<!-- .element: class="fragment" data-fragment-index="1" -->

Nous utilisons alors `else`
<!-- .element: class="fragment" data-fragment-index="2" -->

Note:
Cette fois les personnes ce sont rendu compte que la lumière est allumé la nuit mais reste allumé le jours, nous avons oublié de l'éteindre, donc nous devons rajouter un sinon, car si elle ne doit pas être allumé nous devons l'éteindre
