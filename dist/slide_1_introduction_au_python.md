## introduction au python
### la simplicité du python <!-- .element: class="fragment" data-fragment-index="1" -->
<div class="r-hstack justify-center">
<div data-id="box_asm" style="width: 40%;" >

```x86
section   .text
global    _start
_start:
    mov       rax, 1
    mov       rdi, 1
    mov       rsi, message
    mov       rdx, 13
    syscall
    mov       rax, 60
    xor       rdi, rdi
    syscall

section   .data
message:  
    db        "bonjour !", 10     

```
### nasm (64bit)
</div><!-- .element: class="fragment" data-fragment-index="2" -->
<div data-id="box_cpp" style="width: 33%;">

```cpp
#include <stdio.h>
int main(){
    printf("bonjour !\n");
    return 0;
}
```
### c++
</div><!-- .element: class="fragment" data-fragment-index="3" -->

<div data-id="box_python" style="width: 22%;">

```python
print("bonjour !")
```
### python
</div><!-- .element: class="fragment" data-fragment-index="4" -->

</div>

Note: 
pour progammer on doit choisir un language, il y en a beaucoup, même énormément, il y aurait plus de 8000 languages de programmation (source: https://web.archive.org/web/20201107223555/https://hopl.info/) le python a été choisis par l'éducation nationale pour apprendre les languages de programmations, en effet c'est un language assez simple et facile à apprendre. 
Par exemple voici comment écrire bonjour en assembly, ici en c++ et voila l'équivalent en python


## qui utilise le python ?

Note:
Beaucoup d'entreprises utilisent le python, nous avons la nasa, google, wikipedia, Yahoo, le Cern, et beaucoup d'autres personnes en effet 16% des projets github sont codés en python, ce qui fait que ce language est le 2e language le plus utilisé sur github. (source: https://madnight.github.io/githut/#/pull_requests/2021/1)
et aussi c'est le language utilisé générallement pour commencer la programmation.
Après cette introduction rapide, nous allons vous montrer un simple exemple du language.
