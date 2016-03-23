function course_module() {

    var benchmark_data = "";
    var benchmark_data_editor;
    var code_area_js;
    var code_area_html;

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

    function change_task() {

    }

    function init() {
        benchmark_data_editor = make_editor("benchmark-data", "text/javascript", "3024-day", true, "var small_array = [1, 2, 3]", false);
        code_area_js = make_editor("js-area", "text/javascript", "3024-day", false, "//Располагайте здесь JavaScript-код", false);
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
    }

    init();

    return {
        get_benchmark_data: function () {
            return benchmark_data;
        },
        check_task: function () {
            return check();
        }
    };
}

var d3_course = course_module();