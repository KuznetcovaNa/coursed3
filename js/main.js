function course_module() {
    var variants_data = {
        1: {
            benchmark_data: "var nodes = [\n    {\n        name: 'test_question_1', \n        x: 250, \n        y: 100, \n        text: 'Вы любите эвкалипт?'\n    }\n];",
            task_text: "Нарисуйте круг с вопросом теста внутри.",
            decision_js_function: "var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 200);var node = svg.selectAll('.node').data(nodes).enter().append('g').attr('class', 'node');node.append('svg:circle').attr('r', '80px').attr('fill', '#F7C092').attr('cx', function(d) { return d.x; }).attr('cy', function(d) { return d.y; });node.append('text').attr('x', function(d) { return d.x - 75; }).attr('y', function(d) { return d.y; }).text(function(d) { return d.text; });",
            //user_code: "//Располагайте здесь JavaScript-код",
            user_code: 'var x = document.createElement("P");\nvar t = document.createTextNode("1");\nx.appendChild(t);\ndocument.body.appendChild(x);',
            checked: {true_percentage: 0,
                is_ok: false}
        },
        2: {
            benchmark_data: "var nodes = [{\n    name: 'test_question_1', \n    x: 250, \n    y: 100, \n    text: 'Вы любите какао?'\n    }, \n    {\n    name: 'test_question_2', \n    x: 400, \n    y: 300, \n    text: 'У Вас есть мех?'\n    }, \n    {\n    name: 'test_question_3', \n    x: 100, \n    y: 300, \n    text: 'Вы спите по 20 часов?'\n}];" +
            "\nvar links = [{\n    source: 'test_question_1', \n    target: 'test_question_2', \n    x: 150, \n    y: 200, \n    text: 'Да'\n    }, \n    {\n    source: 'test_question_1', \n    target: 'test_question_3', \n    x: 325, \n    y: 200, \n    text: 'Нет'\n}];",
            task_text: "Соедините вершины с вопросами ребрaми.",
            decision_js_function: "var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 500);var node = svg.selectAll('.node').data(nodes).enter().append('g').attr('class', 'node');" +
            "var link = svg.selectAll('.link').data(links).enter().append('g').attr('class', 'link');" +
            "link.append('text').attr('x', function(d) { return d.x; }).attr('y', function(d) { return d.y; }).text(function(d) { return d.text; });" +
            "link.append('line').attr('class', 'line').attr('stroke', '#000080').style('stroke-width', 2).attr('x1', function(d) { return nodes[get_key(nodes, d.source)].x; }).attr('x2', function(d) { return nodes[get_key(nodes, d.target)].x;}).attr('y1', function(d) { return nodes[get_key(nodes, d.source)].y; }).attr('y2', function(d) { return nodes[get_key(nodes, d.target)].y; });" +
            "node.append('svg:circle').attr('r', '80px').attr('fill', '#F7C092').attr('cx', function(d) { return d.x; }).attr('cy', function(d) { return d.y; });node.append('text').attr('x', function(d) { return d.x - 75; }).attr('y', function(d) { return d.y; }).text(function(d) { return d.text; });",
            //user_code: "//Располагайте здесь JavaScript-код",
            user_code: 'var x = document.createElement("P");\nvar t = document.createTextNode("2");\nx.appendChild(t);\ndocument.body.appendChild(x);',
            checked: {true_percentage: 0,
                is_ok: false}
        },
        3: {
            benchmark_data: "var nodes = [\n    {name: 'test_question_1', \n    x: 250, \n    y: 100, \n    text: 'Вы альпака!', \n    img: '../img/alpaka.png'}]",
            task_text: "доделать стили",
            decision_js_function: "var svg = d3.select('body').append('svg').attr('width', 500).attr('height', 500);var node = svg.selectAll('.node').data(nodes).enter().append('g').attr('class', 'node');node.append('svg:circle').attr('r', '80px')." +
            "attr('fill', '#F7C092').attr('cx', function(d) { return d.x; }).attr('cy', function(d) { return d.y; });" +
            "node.append('text').attr('x', function(d) { return d.x - 75; }).attr('y', function(d) { return d.y; }).text(function(d) { return d.text; });",
            //user_code: "//Располагайте здесь JavaScript-код",
            user_code: 'var x = document.createElement("P");\nvar t = document.createTextNode("3");\nx.appendChild(t);\ndocument.body.appendChild(x);',
            checked: {true_percentage: 0,
                is_ok: false}
        },
        4: {
            benchmark_data: "var task4;",
            task_text: "что-то грандиозное",
            decision_js_function: "var b = document.getElementsByTagName('body')[0];var node = document.createElement('LI');var textnode = document.createTextNode('task4');node.appendChild(textnode);b.appendChild(node);",
            //user_code: "//Располагайте здесь JavaScript-код",
            user_code: 'var x = document.createElement("P");\nvar t = document.createTextNode("4");\nx.appendChild(t);\ndocument.body.appendChild(x);',
            checked: {true_percentage: 0,
                is_ok: false}
        }
    };
    var variant = 1;
    var benchmark_data_editor;
    var code_area_js;
    var code_area_html = '<!DOCTYPE html>\n<html>\n<head lang="en">\n    <meta charset="UTF-8">' +
        '\n    <title>coursed3</title>\n</head>\n<body>\n    <script src="js/d3.min.js"></script>\n</body>\n</html>';
    var iframe_content;
    var iframe;
    var iframe_pattern;
    var iframe_pattern_content;

    function task1(){
        var svg = d3.select('body')
            .append('svg')
            .attr('width', 500)
            .attr('height', 500);

        var node = svg.selectAll('.node')
            .data(nodes)
            .enter().append('g')
            .attr('class', 'node');

        node.append('svg:circle')
            .attr('r', '80px')
            .attr('fill', '#F7C092')
            .attr('cx', function(d) { return d.x; })
            .attr('cy', function(d) { return d.y; });

        node.append('text')
            .attr('x', function(d) { return d.x - 75; })
            .attr('y', function(d) { return d.y; })
            .text(function(d) { return d.text; });
    }

    function get_key (obj, value) {
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
        resemble(image1).compareTo(image2).onComplete(function(data){
            var true_percentage = 100-data.misMatchPercentage;
            if (true_percentage >=98) {
                $(".control-check-indicator").html("ok: " + true_percentage + "%");
                variants_data[variant].checked.is_ok = true;
                variants_data[variant].checked.true_percentage = true_percentage;
            } else {
                $(".control-check-indicator").html("nope :(");
                variants_data[variant].checked.is_ok = false;
                variants_data[variant].checked.true_percentage = true_percentage;
            }
            return data;
        });
    }

    function decrease_task_number(variant_number){
        if (variant_number > 1) {
            variant_number --;
            change_task(variant_number);
        }
        return variant_number;
    }

    function increase_task_number(variant_number){
        if (variant_number < 4) {
            variant_number ++;
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
        if (code_area_js){
            code_area_js.clearHistory();
            code_area_js.setValue(variants_data[variant_number].user_code);
            code_area_js.clearHistory();
        } else {
            code_area_js = make_editor("js-area", "text/javascript", "3024-day", false, variants_data[variant_number].user_code, false);
        }
        setTimeout(function(){
            write_js_into_frame(iframe_content, variants_data[variant_number].user_code, "user-script");
            write_js_into_frame(iframe_pattern_content, variants_data[variant_number].decision_js_function, "complete-script");
        }, 100);
        $(".control-check-indicator").html("???");
    }

    function clear_iframe_body(iframe){
        iframe.body.innerHTML = "";
    }

    function write_js_into_frame(iframe, js_code, id) {
        var script = document.createElement('script');
        script.id = id;
        script.text  = js_code;
        iframe.body.appendChild(script);
    }

    function save_task_code(){
        code_area_js.on("focus", function(){
            $(this).on("mousedown", function(){
                variants_data[variant].user_code = code_area_js.getValue();
                clear_iframe_body(iframe_content);
                write_js_into_frame(iframe_content, variants_data[variant].benchmark_data, "benchmark-script");
                write_js_into_frame(iframe_content, get_key, "function-script");
                write_js_into_frame(iframe_content, variants_data[variant].user_code, "user-script");
            });
            $(this).on("keydown", function(){
                $(this).on("keyup", function(){
                    variants_data[variant].user_code = code_area_js.getValue();
                    clear_iframe_body(iframe_content);
                    write_js_into_frame(iframe_content, variants_data[variant].benchmark_data, "benchmark-script");
                    write_js_into_frame(iframe_content, get_key, "function-script");
                    write_js_into_frame(iframe_content, variants_data[variant].user_code, "user-script");
                    $(this).off("keyup");
                })
            });
            $(this).on("focusout", function(){
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
        $(".navigation-btn-prev").click(function(){
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
        $(".navigation-btn-next").click(function(){
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
        $(".control-check-btn").click(function(){
            //check("img/alpaka.png", "img/coala.jpg");
            html2canvas(iframe_content.body).then(function(result1) {
                html2canvas(iframe_pattern_content.body).then(function(result2) {
                    check(result1.toDataURL(), result2.toDataURL());
                });
            });
        })
    }

    init();

    return {};
}

var d3_course = course_module();