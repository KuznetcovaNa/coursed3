function course_module() {
    var variants_data = {
        1: {
            benchmark_data: "var circles = [\n    {\n        name: 'circle_1', \n        x: 250, \n        y: 150\n    }\n];" +
            "\nvar lines = [\n    {\n        name: 'line_1', \n        x_1: 100, \n        y_1: 240, \n        x_2: 400, \n        y_2: 240\n    }\n];",
            task_text: "Нарисуйте линию и круг. Цвет заливки круга - #fafbff, цвет обводки круга - #000080, цвет линии - #000080.",
            decision_js_function: "var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 270);" +
            "var line = svg.selectAll('.line').data(lines).enter().append('g').attr('class', 'line');" +
            "line.append('line').attr('stroke', '#000080').style('stroke-width', 20).attr('x1', function (d) {return d.x_1})" +
            ".attr('x2', function (d) {return d.x_2}).attr('y1', function (d) {return d.y_1}).attr('y2', function (d) {return d.y_2});" +
            "var circle = svg.selectAll('.circle').data(circles).enter().append('g').attr('class', 'circle');" +
            "circle.append('svg:circle').attr('r', '60px').attr('fill', '#fafbff').attr('stroke', '#000080')." +
            "attr('cx', function(d) { return d.x; }).attr('cy', function(d) { return d.y; });",
            user_code: "//Располагайте здесь JavaScript-код",
            checked: {
                true_percentage: 0,
                is_ok: false
            }
        },
        2: {
            benchmark_data: "var nodes = [\n    {\n        name: 'node_1', \n        x: 250, \n        y: 100,\n    }," +
            " \n    {\n        name: 'node_2', \n        x: 400, \n        y: 300,\n    }," +
            " \n    {\n        name: 'node_3', \n        x: 100, \n        y: 300,\n    }\n];" +
            "\nvar links = [\n    {\n        name: 'link_1',\n        source: 'node_1', \n        target: 'node_2', " +
            "\n        x: 150, \n        y: 200,\n    }, \n    {\n        name: 'link_2',\n        source: 'node_1'," +
            " \n        target: 'node_3', \n        x: 325, \n        y: 200,\n    }\n];",
            task_text: "Соедините рёбрами вершины. Цвет заливки вершин - #fafbff, цвет обводки вершин - #000080, цвет рёбер - #000080.",
            decision_js_function: "var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 500);" +
            "var link = svg.selectAll('.link').data(links).enter().append('g').attr('class', 'link');" +
            "var node = svg.selectAll('.node').data(nodes).enter().append('g').attr('class', 'node');" +
            "link.append('line').attr('class', 'line').attr('stroke', '#000080').style('stroke-width', 2)." +
            "attr('x1', function(d) { return nodes[get_key(nodes, d.source)].x; }).attr('x2', function(d) " +
            "{ return nodes[get_key(nodes, d.target)].x;}).attr('y1', function(d) " +
            "{ return nodes[get_key(nodes, d.source)].y; }).attr('y2', function(d) { return nodes[get_key(nodes, d.target)].y; });" +
            "node.append('svg:circle').attr('r', '60px').attr('fill', '#fafbff').attr('stroke', '#000080')." +
            "attr('cx', function(d) { return d.x; }).attr('cy', function(d) { return d.y; });",
            user_code: "//Располагайте здесь JavaScript-код",
            checked: {
                true_percentage: 0,
                is_ok: false
            }
        },
        3: {
            benchmark_data: "var nodes = [\n    {\n        name: 'test_question_1', \n        x: 250, \n        y: 100, \n        text: 'Здесь будет вопрос.'\n    }\n]" +
            "\nvar links = [\n    {\n        name: 'link_1', \n        x_1: 225, \n        y_1: 450, \n        x_2: 275, \n        y_2: 250,\n        text: 'А здесь ответ на вопрос.'\n    }\n];",
            task_text: "Добавим вершинам и рёбрам текст. Цвет заливки вершины - #fafbff, цвет обводки вершины - #000080, цвет рeбра - #000080.",
            decision_js_function: " var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 570);" +
            "var link = svg.selectAll('.line').data(links).enter().append('g').attr('class', 'line');" +
            "var node = svg.selectAll('.nodes').data(nodes).enter().append('g').attr('class', 'circle');" +
            "link.append('line').attr('stroke', '#000080').style('stroke-width', 2).attr('x1', function (d) " +
            "{ return d.x_1 }).attr('x2', function (d) { return d.x_2 }).attr('y1', function (d) { return d.y_1 })" +
            ".attr('y2', function (d) { return d.y_2 });link.append('svg:circle').attr('r', 40).attr('fill', 'transparent')" +
            ".attr('cx', function (d) { return (d.x_1); }).attr('cy', function (d) { return (d.y_1+(d.y_2- d.y_1)/2); });" +
            "link.append('text').text(function (d) { return d.text; }).each(function (d) {d3plus.textwrap().container(d3.select(this))" +
            ".valign('middle').draw();});node.append('svg:circle').attr('r', '60px').attr('fill', '#fafbff').attr('stroke', '#000080')" +
            ".attr('cx', function(d) { return d.x; }).attr('cy', function(d) { return d.y; });node.append('text').text(function (d) " +
            "{return d.text;}).each(function (d) {d3plus.textwrap().container(d3.select(this)).valign('middle').draw();});",
            user_code: "//Располагайте здесь JavaScript-код",
            checked: {
                true_percentage: 0,
                is_ok: false
            }
        },
        4: {
            benchmark_data: "var nodes = [\n        {\n            " +
            "name: 'test_question_1',\n            x: 250,\n            y: 100,\n            text: 'Вы общительный?'\n        },\n        {\n            " +
            "name: 'test_question_2',\n            x: 125,\n            y: 275,\n            text: 'Как предпочтете провести выходные?'\n        },\n        {\n            " +
            "name: 'test_question_3',\n            x: 375,\n            y: 275,\n            text: 'Что пожелаете съесть на завтрак?'\n        },\n        {\n            " +
            "name: 'result_1',\n            x: 60,\n            y: 450,\n            text: 'Серьезная капибара',\n            img: '../img/capybara.png'\n        },\n        {\n            " +
            "name: 'result_2',\n            x: 187,\n            y: 450,\n            text: 'Грациозная альпака',\n            img: '../img/alpaka.png'\n        },\n        {\n            " +
            "name: 'result_3',\n            x: 314,\n            y: 450,\n            text: 'Таинственная лисица',\n            img: '../img/tibetan_fox.png'\n        },\n        {\n            " +
            "name: 'result_4',\n            x: 440,\n            y: 450,\n            text: 'Неторопливая коала',\n            img: '../img/koala.png'\n        }\n    ];\nvar links = [\n        {\n            " +
            "source: 'test_question_1',\n            target: 'test_question_2',\n            text: 'Да'\n        },\n        {\n            " +
            "source: 'test_question_1',\n            target: 'test_question_3',\n            text: 'Нет'\n        },\n        {\n            " +
            "source: 'test_question_2',\n            target: 'result_1',\n            text: 'Плавание в бассейне'\n        },\n        {\n            " +
            "source: 'test_question_2',\n            target: 'result_2',\n            text: 'Прогулка в горах'\n        },\n        {\n            " +
            "source: 'test_question_3',\n            target: 'result_3',\n            text: 'Мясная котлета'\n        },\n        {\n            " +
            "source: 'test_question_3',\n            target: 'result_4',\n            text: 'Овощной салат'\n        }\n    ];",
            task_text: "Постройте диаграмму. Цвет заливки вершин - #fafbff, цвет обводки вершин - #000080, цвет рёбер - #000080.",
            decision_js_function: "var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 570);var link = svg.selectAll('.link').data(links).enter().append('g').attr('class', 'link');var node = svg.selectAll('.node').data(nodes).enter().append('g').attr('class', 'node');link.append('line').attr('class', 'line').attr('stroke', '#000080').style('stroke-width', 2).attr('x1', function (d) { return nodes[get_key(nodes, d.source)].x; }).attr('x2', function (d) { return nodes[get_key(nodes, d.target)].x; }).attr('y1', function (d) { return nodes[get_key(nodes, d.source)].y; }).attr('y2', function (d) { return nodes[get_key(nodes, d.target)].y; });link.append('svg:circle').attr('r', 40).attr('fill', 'transparent').attr('cx', function (d) { return (nodes[get_key(nodes, d.target)].x); }).attr('cy', function (d) {return (nodes[get_key(nodes, d.source)].y+Math.abs(nodes[get_key(nodes, d.source)].y-nodes[get_key(nodes, d.target)].y)/2);});link.append('text').text(function (d) { return d.text; }).each(function (d) {d3plus.textwrap().container(d3.select(this)).valign('middle').draw();});node.append('svg:circle').attr('r', '60px').attr('fill', '#fafbff').attr('stroke', '#000080').attr('cx', function (d) { return d.x; }).attr('cy', function (d) { return d.y; });node.append('text').text(function (d) { return d.text; }).each(function (d) {d3plus.textwrap().container(d3.select(this)).valign('middle').draw();});",
            user_code: "//Располагайте здесь JavaScript-код",
            checked: {
                true_percentage: 0,
                is_ok: false
            }
        }
    };
    var variant = 1;
    var benchmark_data_editor;
    var code_area_js;
    var code_area_html = '<!DOCTYPE html>\n<html>\n<head lang="en">\n    <meta charset="UTF-8">' +
        '\n    <title>coursed3</title>\n</head>\n<body>\n    <script src="js/d3.min.js"></script>\n<script src="js/d3plus.js"></script>\n</body>\n</html>';
    var iframe_content;
    var iframe;
    var iframe_pattern;
    var iframe_pattern_content;

    function task1() {
        var svg = d3.select('body')
            .append('svg')
            .attr('width', 500)
            .attr('height', 570);
        var line = svg.selectAll('.line')
            .data(lines)
            .enter()
            .append('g')
            .attr('class', 'line');
        line.append('line')
            .attr('stroke', '#000080')
            .style('stroke-width', 20)
            .attr('x1', function (d) { return d.x_1 })
            .attr('x2', function (d) { return d.x_2 })
            .attr('y1', function (d) { return d.y_1 })
            .attr('y2', function (d) { return d.y_2 });
        var circle = svg.selectAll('.circle')
            .data(circles).enter()
            .append('g')
            .attr('class', 'circle');
        circle.append('svg:circle')
            .attr('r', '60px')
            .attr('fill', '#fafbff')
            .attr('stroke', '#000080')
            .attr('cx', function(d) { return d.x; })
            .attr('cy', function(d) { return d.y; });
    }

    function task2() {
        var svg = d3.select('body')
            .append('svg')
            .attr('width', 500)
            .attr('height', 500);
        var link = svg.selectAll('.link')
            .data(links)
            .enter()
            .append('g')
            .attr('class', 'link');
        var node = svg.selectAll('.node')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', 'node');
        link.append('line')
            .attr('class', 'line')
            .attr('stroke', '#000080')
            .style('stroke-width', 2)
            .attr('x1', function (d) { return nodes[get_key(nodes, d.source)].x; })
            .attr('x2', function (d) { return nodes[get_key(nodes, d.target)].x; })
            .attr('y1', function (d) { return nodes[get_key(nodes, d.source)].y; })
            .attr('y2', function (d) { return nodes[get_key(nodes, d.target)].y; });
        node.append('svg:circle')
            .attr('r', '60px')
            .attr('fill', '#fafbff')
            .attr('stroke', '#000080')
            .attr('stroke', '#000080')
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; });
    }

    function task3() {
        var svg = d3.select('body')
            .append('svg')
            .attr('width', 500)
            .attr('height', 570);
        var link = svg.selectAll('.line')
            .data(links)
            .enter()
            .append('g')
            .attr('class', 'line');
        var node = svg.selectAll('.nodes')
            .data(nodes).enter()
            .append('g')
            .attr('class', 'circle');
        link.append('line')
            .attr('stroke', '#000080')
            .style('stroke-width', 2)
            .attr('x1', function (d) { return d.x_1 })
            .attr('x2', function (d) { return d.x_2 })
            .attr('y1', function (d) { return d.y_1 })
            .attr('y2', function (d) { return d.y_2 });
        link.append('svg:circle')
            .attr('r', 40)
            .attr('fill', 'transparent')
            .attr('cx', function (d) { return (d.x_1); })
            .attr('cy', function (d) { return (d.y_1+(d.y_2- d.y_1)/2); });
        link.append('text')
            .text(function (d) { return d.text; })
            .each(function (d) {
                d3plus.textwrap()
                    .container(d3.select(this))
                    .valign('middle')
                    .draw();
            });
        node.append('svg:circle')
            .attr('r', '60px')
            .attr('fill', '#fafbff')
            .attr('stroke', '#000080')
            .attr('cx', function(d) { return d.x; })
            .attr('cy', function(d) { return d.y; });
        node.append('text')
            .text(function (d) {
                return d.text;
            })
            .each(function (d) {
                d3plus.textwrap()
                    .container(d3.select(this))
                    .valign('middle')
                    .draw();
            });
    }

    function task4() {
        var svg = d3.select('body')
            .append('svg')
            .attr('width', 500)
            .attr('height', 570);
        var link = svg.selectAll('.link')
            .data(links)
            .enter()
            .append('g')
            .attr('class', 'link');
        var node = svg.selectAll('.node')
            .data(nodes)
            .enter()
            .append('g')
            .attr('class', 'node');
        link.append('line')
            .attr('class', 'line')
            .attr('stroke', '#000080')
            .style('stroke-width', 2)
            .attr('x1', function (d) { return nodes[get_key(nodes, d.source)].x; })
            .attr('x2', function (d) { return nodes[get_key(nodes, d.target)].x; })
            .attr('y1', function (d) { return nodes[get_key(nodes, d.source)].y; })
            .attr('y2', function (d) { return nodes[get_key(nodes, d.target)].y; });
        link.append('svg:circle')
            .attr('r', 40)
            .attr('fill', 'transparent')
            .attr('cx', function (d) { return (nodes[get_key(nodes, d.target)].x); })
            .attr('cy', function (d) {
                return (nodes[get_key(nodes, d.source)].y+Math.abs(nodes[get_key(nodes, d.source)].y-nodes[get_key(nodes, d.target)].y)/2);
            });
        link.append('text')
            .text(function (d) { return d.text; })
            .each(function (d) {
                d3plus.textwrap()
                    .container(d3.select(this))
                    .valign('middle')
                    .draw();
            });
        node.append('svg:circle')
            .attr('r', '60px')
            .attr('fill', '#fafbff')
            .attr('stroke', '#000080')
            .attr('cx', function (d) { return d.x; })
            .attr('cy', function (d) { return d.y; });
        node.append('text')
            .text(function (d) { return d.text; })
            .each(function (d) {
                d3plus.textwrap()
                    .container(d3.select(this))
                    .valign('middle')
                    .draw();
            });
    }

    function get_key(obj, value) {
        for (var key in obj) {
            if (obj[key].name == value) {
                return key;
            }
        }
        return null;
    }

    function make_editor(id, mode, theme, readonly, value, selection_pointer) {
        var editor_object = CodeMirror.fromTextArea(document.getElementById(id), {
            lineNumbers: true,
            matchBrackets: true,
            autoCloseBrackets: true,
            tabSize: 4,
            indentWithTabs: false,
            indentUnit: 4,
            lineWrapping: true,
            historyEventDelay: 500,
            styleActiveLine: true,
            readOnly: readonly,
            mode: mode,
            theme: theme,
            selectionPointer: selection_pointer
        });
        editor_object.setValue(value);
        editor_object.clearHistory();
        return editor_object;
    }

    function activate_show_help() {
        $(".help-theory-show").click(function () {
            $(".help-theory-article").addClass("show");
        });
        $(".help-theory-hide").click(function () {
            $(".help-theory-article").removeClass("show");
        });
    }

    function check(image1, image2) {
        resemble(image1).compareTo(image2).onComplete(function (data) {
            var true_percentage = 100 - data.misMatchPercentage;
            if (true_percentage >= 98) {
                $(".control-check-indicator").html("ок: " + true_percentage + "%").css("display", "inline-block");
                variants_data[variant].checked.is_ok = true;
                variants_data[variant].checked.true_percentage = true_percentage;
            } else {
                $(".control-check-indicator").html("незачёт").css("display", "inline-block");
                variants_data[variant].checked.is_ok = false;
                variants_data[variant].checked.true_percentage = true_percentage;
            }
            return data;
        });
    }

    function decrease_task_number(variant_number) {
        if (variant_number > 1) {
            variant_number--;
            change_task(variant_number);
        }
        return variant_number;
    }

    function increase_task_number(variant_number) {
        if (variant_number < 4) {
            variant_number++;
            change_task(variant_number);
        }
        return variant_number;
    }

    function change_task(variant_number) {
        $(".navigation-number")[0].innerHTML = variant_number + "/4";
        $(".control-text-task")[0].innerHTML = variants_data[variant_number].task_text;
        clear_iframe_body(iframe_content);
        clear_iframe_body(iframe_pattern_content);
        write_js_into_frame(iframe_pattern_content, variants_data[variant_number].benchmark_data, "benchmark-script");
        write_js_into_frame(iframe_content, variants_data[variant_number].benchmark_data, "benchmark-script");
        write_js_into_frame(iframe_pattern_content, get_key, "function-script");
        write_js_into_frame(iframe_content, get_key, "function-script");
        if (benchmark_data_editor) {
            benchmark_data_editor.clearHistory();
            benchmark_data_editor.setValue(variants_data[variant_number].benchmark_data);
            benchmark_data_editor.clearHistory();
        } else {
            benchmark_data_editor = make_editor("benchmark-data", "text/javascript", "3024-day", true, variants_data[variant_number].benchmark_data, false);
        }
        if (code_area_js) {
            code_area_js.clearHistory();
            code_area_js.setValue(variants_data[variant_number].user_code);
            code_area_js.clearHistory();
        } else {
            code_area_js = make_editor("js-area", "text/javascript", "3024-day", false, variants_data[variant_number].user_code, false);
        }
        setTimeout(function () {
            write_js_into_frame(iframe_content, variants_data[variant_number].user_code, "user-script");
            write_js_into_frame(iframe_pattern_content, variants_data[variant_number].decision_js_function, "complete-script");
        }, 100);
        $(".control-check-indicator").css("display", "none").html("?");
    }

    function clear_iframe_body(iframe) {
        iframe.body.innerHTML = "";
    }

    function write_js_into_frame(iframe, js_code, id) {
        var script = document.createElement('script');
        script.id = id;
        script.text = js_code;
        iframe.body.appendChild(script);
    }

    function save_task_code() {
        code_area_js.on("focus", function () {
            $(this).on("mousedown", function () {
                variants_data[variant].user_code = " try { \n" + code_area_js.getValue() + "\n } catch (e) {console.log(e)};";
                clear_iframe_body(iframe_content);
                write_js_into_frame(iframe_content, variants_data[variant].benchmark_data, "benchmark-script");
                write_js_into_frame(iframe_content, get_key, "function-script");
                write_js_into_frame(iframe_content, variants_data[variant].user_code, "user-script");
            });
            $(this).on("keydown", function () {
                $(this).on("keyup", function () {
                    variants_data[variant].user_code = " try { \n" + code_area_js.getValue() + "\n } catch(e) {console.log(e)};";
                    clear_iframe_body(iframe_content);
                    write_js_into_frame(iframe_content, variants_data[variant].benchmark_data, "benchmark-script");
                    write_js_into_frame(iframe_content, get_key, "function-script");
                    write_js_into_frame(iframe_content, variants_data[variant].user_code, "user-script");
                    $(this).off("keyup");
                })
            });
            $(this).on("focusout", function () {
                $(this).off("mousedown");
                $(this).off("keydown");
                $(this).off("focusout");
            })
        });
    }

    function init() {
        activate_show_help();
        iframe = $(".workspace-result iframe")[0];
        iframe.src = "javascript: '" + code_area_html + "'";
        iframe_content = iframe.contentDocument || iframe.contentWindow.document;
        iframe_pattern = $(".workspace-pattern iframe")[0];
        iframe_pattern.src = "javascript: '" + code_area_html + "'";
        iframe_pattern_content = iframe_pattern.contentDocument || iframe_pattern.contentWindow.document;
        change_task(1);
        $(".navigation-btn-prev").click(function () {
            if (variant > 1) {
                variant = decrease_task_number(variant);
                if (variant === 1) {
                    $(".navigation-btn-prev").addClass("not-active");
                }
            }
            if (variant < 4) {
                $(".navigation-btn-next").removeClass("not-active");
            }
        });
        $(".navigation-btn-next").click(function () {
            if (variant < 4) {
                variant = increase_task_number(variant);
                if (variant === 4) {
                    $(".navigation-btn-next").addClass("not-active");
                }
            }
            if (variant > 1) {
                $(".navigation-btn-prev").removeClass("not-active");
            }
        });
        save_task_code();
        $(".control-check-btn").click(function () {
            html2canvas(iframe_content.body).then(function (result1) {
                html2canvas(iframe_pattern_content.body).then(function (result2) {
                    check(result1.toDataURL(), result2.toDataURL());
                });
            });
        })
    }

    init();

    return {};
}

var d3_course = course_module();