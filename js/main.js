function course_module(){

    var benchmark_data = "";
    var benchmark_data_editor;
    var code_area_editor;

    function make_editor(id, mode, theme, readonly, value){
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
            theme: theme
        });
        editor_object.setValue(value);
        editor_object.clearHistory();
        return editor_object;
    }

    function activate_show_help(){
        $(".help-theory-show").click(function(){
            $(".help-theory-article").addClass("show");
        });
        $(".help-theory-hide").click(function(){
            $(".help-theory-article").removeClass("show");
        });
    }

    function check(){

    }

    function change_task(){

    }

    function init(){
        benchmark_data_editor = make_editor("benchmark-data", "text/javascript", "3024-day", true, "benchmark data here");
        code_area_editor = make_editor("code-area", "text/javascript", "3024-day", false, "put your code here");
        activate_show_help();
    }

    init();

    return {
        get_benchmark_data: function(){
            return benchmark_data;
        },
        check_task: function(){
            return check();
        }
    };
}

var d3_course = course_module();