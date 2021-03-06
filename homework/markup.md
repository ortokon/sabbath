## Задание: Разметка главной страницы

Что нужно сделать? У сайта комитета газеты должен быть какой-то интерфейс. Предположим, что вы его знаете, или придумаете по ходу. Цель задания в том, чтобы выбрать себе кусочек с главной страницы (их 4 кусочка) и наполнить его разметкой, которая, вам кажется, должна там быть. 


Я разделил файл `index.html` на 4 большие секции-тега: 
 - `<header>` - для щапки сайта
 - `<nav>` - для навигации
 - `<main>` - для главного содержимого
 - `<footer>` - для подвала сайта


Они выглядят следующим образом:
```html
<!-- Для задания -->
<header>
	<p>Здесь будет шапка сайта</p>
</header>
```

Внутри тега `header` и нужно писать код, например.


Суть задания такова: вы берете один из этих тегов и наполняете его контентом. Предположим, тег `<nav>` - навигация, очевидно там должен быть список разделов сайта и ссылки на них. Главное помнить одно: не нужно стилизовать документ. HTML - это иерархия и семантика документа, поэтому наполняйте документ тем, что, вам кажется, должно там быть по смыслу. 


Кроме того, заодно вы потренируетесь в Git и github, так как работать будете над одним документом. И как вежливые люди, я предлагаю каждому сделать свою ветку и работать в ней, а потом самый храбрый попробует их смёржить (или это сделаю я в вашем присутствии, если возникнут трудности).

### Кто что делает
**Илья**
 - `nav` и `footer`


**Оля**
 - `header` и `main`


### Алгоритм выполнения
 - Удостовериться, что у вас актуальная ветка `master`. Если нет, то подтянуть изменения через `git pull`
 - Отбранчеваться от ветки `master` в какую-нибудь свою новую ветку, где вы будете работать над файлом `index.html`
 - Начать писать там HTML код. Не нужно думать о внешнем облике, а попытаться продумать иерархию и содержимое документа
 - Комитить свои изменения]
 - Запушить свои ветки на github и открыть pull-request
 - Выбрать, кто из вас попробует их смёржить и сделать **это**
 - ...
 - PROFIT!!!