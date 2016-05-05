function course_module() {

    var variants_data = {
        1: {
            benchmark_data: "var task1;",
            task_text: "Нарисуйте кругляш",
            decision_js_function: "var b = document.getElementsByTagName('body')[0];var node = document.createElement('LI');var textnode = document.createTextNode('task1');node.appendChild(textnode);b.appendChild(node);",
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            user_code: ""
        },
        2: {
            benchmark_data: "var task2;",
            task_text: "Кругляш с палками",
            decision_js_function: "var b = document.getElementsByTagName('body')[0];var node = document.createElement('LI');var textnode = document.createTextNode('task2');node.appendChild(textnode);b.appendChild(node);",
            user_code: ""
        },
        3: {
            benchmark_data: "var task3;",
            task_text: "доделать стили",
            decision_js_function: "var b = document.getElementsByTagName('body')[0];var node = document.createElement('LI');var textnode = document.createTextNode('task3');node.appendChild(textnode);b.appendChild(node);",
            user_code: ""
        },
        4: {
            benchmark_data: "var task4;",
            task_text: "что-то грандиозное",
            decision_js_function: "var b = document.getElementsByTagName('body')[0];var node = document.createElement('LI');var textnode = document.createTextNode('task4');node.appendChild(textnode);b.appendChild(node);",
            user_code: ""
        }
    };

    var variant = 1;
    var benchmark_data_editor;
    var code_area_js;
    var code_area_html;
    var iframe_content;
    var iframe;
    var iframe_pattern;
    var iframe_pattern_content;

    //function decision1(){
    //    var b = document.getElementsByTagName('body')[0];
    //    var node = document.createElement("LI");
    //    var textnode = document.createTextNode("task1");
    //    node.appendChild(textnode);
    //    b.appendChild(node);
    //    var svg = d3.select('body').append('svg');
    //
    //    svg
    //        .append('text')
    //        .text('click somewhere')
    //        .attr({'x': 25, 'y': 25});
    //
    //    var events = [];
    //    svg.on('click', function () {
    //        events.push(d3.event);
    //        if (events.length > 5) events.shift();
    //        var circles = svg.selectAll('circle')
    //            .data(events, function (e) {
    //                return e.timeStamp
    //            })
    //            .attr('fill', 'gray');
    //        circles
    //            .enter()
    //            .append('circle')
    //            .attr('cx', function (d) {
    //                return d.x || d.pageX
    //            })
    //            .attr('cy', function (d) {
    //                return d.y || d.pageY
    //            })
    //            .attr('fill', 'red')
    //            .attr('r', 10);
    //        circles
    //            .exit()
    //            .remove();
    //    });
    //}
    //
    //function decision2(){
    //    var b = document.getElementsByTagName('body')[0];
    //    var node = document.createElement("LI");
    //    var textnode = document.createTextNode("task2");
    //    node.appendChild(textnode);
    //    b.appendChild(node);
    //}
    //
    //function decision3(){
    //    var b = document.getElementsByTagName('body')[0];
    //    var node = document.createElement("LI");
    //    var textnode = document.createTextNode("task3");
    //    node.appendChild(textnode);
    //    b.appendChild(node);
    //}
    //
    //function decision4(){
    //    var b = document.getElementsByTagName('body')[0];
    //    var node = document.createElement("LI");
    //    var textnode = document.createTextNode("task4");
    //    node.appendChild(textnode);
    //    b.appendChild(node);
    //}

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

    function check() {

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
        write_js_into_frame("pattern-iframe", iframe_pattern_content, variants_data[variant_number].benchmark_data, "benchmark-script");
        write_js_into_frame("result-iframe", iframe_content, variants_data[variant_number].benchmark_data, "benchmark-script");
        if (benchmark_data_editor) {
            benchmark_data_editor.clearHistory();
            benchmark_data_editor.setValue(variants_data[variant_number].benchmark_data);
        } else {
            benchmark_data_editor = make_editor("benchmark-data", "text/javascript", "3024-day", true, variants_data[variant_number].benchmark_data, false);
        }
        if (code_area_js){
            code_area_js.clearHistory();
            code_area_js.setValue("//Располагайте здесь JavaScript-код");
        } else {
            code_area_js = make_editor("js-area", "text/javascript", "3024-day", false, "//Располагайте здесь JavaScript-код", false);
        }
        //setTimeout(function(){
        //    write_js_into_frame("pattern-iframe", iframe_pattern_content, make_task1+"\nmake_task1();", "complete-script");
        //}, 100);
        //setTimeout(function(){
        //    write_js_into_frame("pattern-iframe", iframe_pattern_content, variants_data[variant_number].decision_js_function, "complete-script");
        //}, 100);
        write_js_into_frame("pattern-iframe", iframe_pattern_content, variants_data[variant_number].decision_js_function, "complete-script");
    }

    function make_frame() {
        var iframe = document.createElement('iframe');
        iframe.src = "javascript:''";
        document.getElementsByClassName("workspace-result")[0].appendChild(iframe);
        var doc = iframe.contentDocument || iframe.contentWindow.document;
        return doc;
    }

    function write_html_into_frame(iframe, html) {
        iframe.write(html);
    }

    function write_js_into_frame(iframe_id, iframe, js_code, id) {
        var selector = "#"+id;
        var script = iframe.querySelector(selector);
        if (script == null){
            script = document.createElement('script');
            script.id = id;
            script.text  = js_code;
            iframe.body.appendChild(script);
        } else {
            var children = iframe.body.childNodes;
            for (var i= 0; i<children.length; i++){
                if (children[i].nodeName !== "SCRIPT"){
                    children[i].remove();
                }
            }
            script.remove();
            script = document.createElement('script');
            script.id = id;
            script.text  = js_code;
            iframe.body.appendChild(script);
        }
    }

    function init() {
        var mixed_mode = {
            name: "htmlmixed",
            scriptTypes: [{
                matches: /\/x-handlebars-template|\/x-mustache/i,
                mode: null
            },
                {
                    matches: /(text|application)\/(x-)?vb(a|script)/i,
                    mode: "vbscript"
                }]
        };
        code_area_html = make_editor("html-area", mixed_mode, "3024-day", true, '<!DOCTYPE html>\n<html>\n<head lang="en">\n    <meta charset="UTF-8">' +
        '\n    <title>coursed3</title>\n</head>\n<body>\n    <script src="js/d3.min.js"></script>\n</body>\n</html>', true);
        activate_show_help();
        iframe = $(".workspace-result iframe")[0];
        iframe.src = "javascript: '" + code_area_html.getValue() + "'";
        iframe_content = iframe.contentDocument || iframe.contentWindow.document;
        iframe_pattern = $(".workspace-pattern iframe")[0];
        iframe_pattern.src = "javascript: '" + code_area_html.getValue() + "'";
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
        code_area_js.on("change", function(){
            write_js_into_frame("result-iframe", iframe_content, code_area_js.getValue(), "user-script");
        });
    }

    init();

    return {
        check_task: function () {
            return check();
        }
    };
}

var d3_course = course_module();