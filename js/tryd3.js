var svg = d3.select('body').append('svg');

svg
    .append('text')
    .text('click somewhere')
    .attr({'x': 250, 'y': 20});

var events = [];
svg.on('click', function () {
    events.push(d3.event);
    if (events.length > 5) events.shift();
    var circles = svg.selectAll('circle')
        .data(events, function (e) {
            return e.timeStamp
        })
        .attr('fill', 'gray');
    circles
        .enter()
        .append('circle')
        .attr('cx', function (d) {
            return d.x || d.pageX
        })
        .attr('cy', function (d) {
            return d.y || d.pageY
        })
        .attr('fill', 'red')
        .attr('r', 10);
    circles
        .exit()
        .remove();
});

var chart_area =
        d3
            .select("body")   // Выборка состоит из элемента <body>
            .append('div')    // Выборка состоит из вновь созданного элемента <div>
            .classed('chart_area', true) // Задаем класс выбранному элементу <div class='chart_area'></div>
    ;


var RANDOM_MIN = 0, RANDOM_MAX = 100;
// Функция генерации случайного целого числа в диапазоне [lo..up]
function irand(lo, up) {
    return Math.floor(Math.random() * (up - lo + 1) + lo);
}
// Массив случайных чисел
var data = [];
for (var i = 0; i < 10; i++) {
    data.push(irand(RANDOM_MIN, RANDOM_MAX));
}


// Берем предыдущую выборку элементов (хранящуюся в переменной chart_area)
chart_area
    // Делаем выборку всех дочерних элементов <div> из текущей выборки;
    // на данный момент таких элементов нет, и эта выборка пока пуста
    .selectAll('div')
    // Связываем выборку с массивом данных
    .data(data)
    // Из всего множества элементов выделяем подмножество добавляемых элементов 'enter';
    // в данном случае это элементы, соответствующие всем элементам массива
    .enter()
    // Добавляем новые элементы <div> </div>
    .append('div')
    .style('background-color', 'hsl(240,50%,75%)')
    .style('height', '20px')
    .style('margin', '2px 0px')
    // Задаем стиль width='<d>px', где d — значение элемента массива
    .style('width', function (d, i) {
        return d + 'px';
    })
// Задаем строковое значение равным значению элемента массива
    .text(String)
    // Задаем класс выбранным элементам class='bar_area'
    .classed('bar_area', true)
;