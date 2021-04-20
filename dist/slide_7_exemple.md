## exemple de code

**objectif:** 

allumer une lumière d'une gourde à partir de la température <!-- .element: class="fragment" data-fragment-index="1" -->

- nous voulons que la lumière soit rouge quand la température est supérieure à 30 <!-- .element: class="fragment" data-fragment-index="2" -->
- et nous voulons que la lumière soit bleue quand la température est inférieure à 15  <!-- .element: class="fragment" data-fragment-index="3" -->
- sinon la lumière est verte  <!-- .element: class="fragment" data-fragment-index="4" -->

Note: Cette fois nous allons essayer de vous montrer un autre exemple, celui d'allumer la lumière d'une gourde à une certaine température, (lire présentation) 


## passons au code
> nous voulons que la lumière soit rouge quand la température est supérieure à 30

```python [1|3|4]
temperature = obtenir_temperature_gourde()

if(temperature > 30):
    mettre_couleur_lumiere("rouge")
``` 
<!-- .element: class="fragment" data-fragment-index="1" -->

Note: passons au code, ici nous voulions commencer par le premier objectif, (lire présentation), pour commencer on doit obtenir la température de la gourde, nous la mettons dans la variable température, puis nous vérifions si la température est au dessus de 30 alors nous mettons la lumière au rouge 


## la lumière bleu
> et nous voulons que la lumière soit bleue quand la température est inférieure à 15

```python [5|6]
temperature = obtenir_temperature_gourde()

if(temperature > 30):
    mettre_couleur_lumiere("rouge")
elif(temperature < 15):
    mettre_couleur_lumiere("bleu")
``` 
<!-- .element: class="fragment" data-fragment-index="1" -->

Note: Cette fois nous voulons que la lumière soie bleu quand la température est inférieure à 15, nous vérifions si la température est en dessous de 15 et si elle l'est alors nous mettons la lumière bleu 


## la lumière verte
> sinon la lumière est verte 

```python [7|8]
temperature = obtenir_temperature_gourde()

if(temperature > 30):
    mettre_couleur_lumiere("rouge")
elif(temperature < 15):
    mettre_couleur_lumiere("bleu")
else:
    mettre_couleur_lumiere("verte")
```
<!-- .element: class="fragment" data-fragment-index="1" -->

Note: Sinon nous allumons alors la lumière verte  

## tout le code
```python [1|3|4|5|6|7|8|0-8]
temperature = obtenir_temperature_gourde()

if(temperature > 30):
    mettre_couleur_lumiere("rouge")
elif(temperature < 15):
    mettre_couleur_lumiere("bleu")
else:
    mettre_couleur_lumiere("verte")
```
 <!-- .element: class="fragment" data-fragment-index="1" -->

Note: Voici tout le code