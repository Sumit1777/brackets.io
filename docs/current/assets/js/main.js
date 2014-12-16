$(function () {
    $(".show-code").click(function () {
        var block = $(this).parent().find('pre[class*="language-"]');
        block.toggle();
        if (block.is(":visible")) {
            $(this).html("Hide code");
        } else {
            $(this).html("Show code");
        }
    });
    $("input.toggle-public").click(function(){
        var section = $(this).parents("section:eq(0)");
        if($(this).is(":checked")){
            section.addClass("show-private");
        }else{
            section.removeClass("show-private");
        }
    });

    $(".toggle-package").click(function() {
        var package = $(this).data().package,
            $modules = $("#" + package);
        
        $modules.toggle();
        $(this).find("i").removeClass();
        if ($modules.is(":visible")) {
            $(this).find("i").addClass("icon-folder-open");
        } else {
            $(this).find("i").addClass("icon-folder-close");
        }
    });
    
    // Typeahead initialization
    $("input.typeahead").typeahead([
        {
            name: "modules",
            local: [{"name":"brackets","value":"brackets","tokens":["brackets","brackets"]},{"name":"CommandManager","value":"command/CommandManager","tokens":["Command","Manager","CommandManager"]},{"name":"Commands","value":"command/Commands","tokens":["Commands","Commands"]},{"name":"DefaultMenus","value":"command/DefaultMenus","tokens":["Default","Menus","DefaultMenus"]},{"name":"KeyBindingManager","value":"command/KeyBindingManager","tokens":["Key","Binding","Manager","KeyBindingManager"]},{"name":"Menus","value":"command/Menus","tokens":["Menus","Menus"]},{"name":"dependencies","value":"dependencies","tokens":["dependencies","dependencies"]},{"name":"ChangedDocumentTracker","value":"document/ChangedDocumentTracker","tokens":["Changed","Document","Tracker","ChangedDocumentTracker"]},{"name":"Document","value":"document/Document","tokens":["Document","Document"]},{"name":"DocumentCommandHandlers","value":"document/DocumentCommandHandlers","tokens":["Document","Command","Handlers","DocumentCommandHandlers"]},{"name":"DocumentManager","value":"document/DocumentManager","tokens":["Document","Manager","DocumentManager"]},{"name":"InMemoryFile","value":"document/InMemoryFile","tokens":["In","Memory","File","InMemoryFile"]},{"name":"TextRange","value":"document/TextRange","tokens":["Text","Range","TextRange"]},{"name":"CodeHintList","value":"editor/CodeHintList","tokens":["Code","Hint","List","CodeHintList"]},{"name":"CodeHintManager","value":"editor/CodeHintManager","tokens":["Code","Hint","Manager","CodeHintManager"]},{"name":"CSSInlineEditor","value":"editor/CSSInlineEditor","tokens":["C","S","S","Inline","Editor","CSSInlineEditor"]},{"name":"Editor","value":"editor/Editor","tokens":["Editor","Editor"]},{"name":"EditorCommandHandlers","value":"editor/EditorCommandHandlers","tokens":["Editor","Command","Handlers","EditorCommandHandlers"]},{"name":"EditorManager","value":"editor/EditorManager","tokens":["Editor","Manager","EditorManager"]},{"name":"EditorOptionHandlers","value":"editor/EditorOptionHandlers","tokens":["Editor","Option","Handlers","EditorOptionHandlers"]},{"name":"EditorStatusBar","value":"editor/EditorStatusBar","tokens":["Editor","Status","Bar","EditorStatusBar"]},{"name":"ImageViewer","value":"editor/ImageViewer","tokens":["Image","Viewer","ImageViewer"]},{"name":"InlineTextEditor","value":"editor/InlineTextEditor","tokens":["Inline","Text","Editor","InlineTextEditor"]},{"name":"InlineWidget","value":"editor/InlineWidget","tokens":["Inline","Widget","InlineWidget"]},{"name":"MultiRangeInlineEditor","value":"editor/MultiRangeInlineEditor","tokens":["Multi","Range","Inline","Editor","MultiRangeInlineEditor"]},{"name":"ExtensionManager","value":"extensibility/ExtensionManager","tokens":["Extension","Manager","ExtensionManager"]},{"name":"ExtensionManagerDialog","value":"extensibility/ExtensionManagerDialog","tokens":["Extension","Manager","Dialog","ExtensionManagerDialog"]},{"name":"ExtensionManagerView","value":"extensibility/ExtensionManagerView","tokens":["Extension","Manager","View","ExtensionManagerView"]},{"name":"ExtensionManagerViewModel","value":"extensibility/ExtensionManagerViewModel","tokens":["Extension","Manager","View","Model","ExtensionManagerViewModel"]},{"name":"InstallExtensionDialog","value":"extensibility/InstallExtensionDialog","tokens":["Install","Extension","Dialog","InstallExtensionDialog"]},{"name":"Package","value":"extensibility/Package","tokens":["Package","Package"]},{"name":"registry_utils","value":"extensibility/registry_utils","tokens":["registry_utils","registry_utils"]},{"name":"FileUtils","value":"file/FileUtils","tokens":["File","Utils","FileUtils"]},{"name":"NativeFileError","value":"file/NativeFileError","tokens":["Native","File","Error","NativeFileError"]},{"name":"NativeFileSystem","value":"file/NativeFileSystem","tokens":["Native","File","System","NativeFileSystem"]},{"name":"Directory","value":"filesystem/Directory","tokens":["Directory","Directory"]},{"name":"File","value":"filesystem/File","tokens":["File","File"]},{"name":"FileIndex","value":"filesystem/FileIndex","tokens":["File","Index","FileIndex"]},{"name":"FileSystem","value":"filesystem/FileSystem","tokens":["File","System","FileSystem"]},{"name":"FileSystemEntry","value":"filesystem/FileSystemEntry","tokens":["File","System","Entry","FileSystemEntry"]},{"name":"FileSystemError","value":"filesystem/FileSystemError","tokens":["File","System","Error","FileSystemError"]},{"name":"FileSystemStats","value":"filesystem/FileSystemStats","tokens":["File","System","Stats","FileSystemStats"]},{"name":"AppshellFileSystem","value":"filesystem/impls/appshell/AppshellFileSystem","tokens":["Appshell","File","System","AppshellFileSystem"]},{"name":"FileWatcherDomain","value":"filesystem/impls/appshell/node/FileWatcherDomain","tokens":["File","Watcher","Domain","FileWatcherDomain"]},{"name":"WatchedRoot","value":"filesystem/WatchedRoot","tokens":["Watched","Root","WatchedRoot"]},{"name":"HelpCommandHandlers","value":"help/HelpCommandHandlers","tokens":["Help","Command","Handlers","HelpCommandHandlers"]},{"name":"CodeInspection","value":"language/CodeInspection","tokens":["Code","Inspection","CodeInspection"]},{"name":"CSSUtils","value":"language/CSSUtils","tokens":["C","S","S","Utils","CSSUtils"]},{"name":"HTMLDOMDiff","value":"language/HTMLDOMDiff","tokens":["H","T","M","L","D","O","M","Diff","HTMLDOMDiff"]},{"name":"HTMLInstrumentation","value":"language/HTMLInstrumentation","tokens":["H","T","M","L","Instrumentation","HTMLInstrumentation"]},{"name":"HTMLSimpleDOM","value":"language/HTMLSimpleDOM","tokens":["H","T","M","L","Simple","D","O","M","HTMLSimpleDOM"]},{"name":"HTMLTokenizer","value":"language/HTMLTokenizer","tokens":["H","T","M","L","Tokenizer","HTMLTokenizer"]},{"name":"HTMLUtils","value":"language/HTMLUtils","tokens":["H","T","M","L","Utils","HTMLUtils"]},{"name":"JSUtils","value":"language/JSUtils","tokens":["J","S","Utils","JSUtils"]},{"name":"LanguageManager","value":"language/LanguageManager","tokens":["Language","Manager","LanguageManager"]},{"name":"ConsoleAgent","value":"LiveDevelopment/Agents/ConsoleAgent","tokens":["Console","Agent","ConsoleAgent"]},{"name":"CSSAgent","value":"LiveDevelopment/Agents/CSSAgent","tokens":["C","S","S","Agent","CSSAgent"]},{"name":"DOMAgent","value":"LiveDevelopment/Agents/DOMAgent","tokens":["D","O","M","Agent","DOMAgent"]},{"name":"DOMHelpers","value":"LiveDevelopment/Agents/DOMHelpers","tokens":["D","O","M","Helpers","DOMHelpers"]},{"name":"DOMNode","value":"LiveDevelopment/Agents/DOMNode","tokens":["D","O","M","Node","DOMNode"]},{"name":"EditAgent","value":"LiveDevelopment/Agents/EditAgent","tokens":["Edit","Agent","EditAgent"]},{"name":"GotoAgent","value":"LiveDevelopment/Agents/GotoAgent","tokens":["Goto","Agent","GotoAgent"]},{"name":"HighlightAgent","value":"LiveDevelopment/Agents/HighlightAgent","tokens":["Highlight","Agent","HighlightAgent"]},{"name":"NetworkAgent","value":"LiveDevelopment/Agents/NetworkAgent","tokens":["Network","Agent","NetworkAgent"]},{"name":"RemoteAgent","value":"LiveDevelopment/Agents/RemoteAgent","tokens":["Remote","Agent","RemoteAgent"]},{"name":"RemoteFunctions","value":"LiveDevelopment/Agents/RemoteFunctions","tokens":["Remote","Functions","RemoteFunctions"]},{"name":"ScriptAgent","value":"LiveDevelopment/Agents/ScriptAgent","tokens":["Script","Agent","ScriptAgent"]},{"name":"CSSDocument","value":"LiveDevelopment/Documents/CSSDocument","tokens":["C","S","S","Document","CSSDocument"]},{"name":"CSSPreprocessorDocument","value":"LiveDevelopment/Documents/CSSPreprocessorDocument","tokens":["C","S","S","Preprocessor","Document","CSSPreprocessorDocument"]},{"name":"HTMLDocument","value":"LiveDevelopment/Documents/HTMLDocument","tokens":["H","T","M","L","Document","HTMLDocument"]},{"name":"JSDocument","value":"LiveDevelopment/Documents/JSDocument","tokens":["J","S","Document","JSDocument"]},{"name":"Inspector","value":"LiveDevelopment/Inspector/Inspector","tokens":["Inspector","Inspector"]},{"name":"LiveDevelopment","value":"LiveDevelopment/LiveDevelopment","tokens":["Live","Development","LiveDevelopment"]},{"name":"LiveDevMultiBrowser","value":"LiveDevelopment/LiveDevMultiBrowser","tokens":["Live","Dev","Multi","Browser","LiveDevMultiBrowser"]},{"name":"LiveDevServerManager","value":"LiveDevelopment/LiveDevServerManager","tokens":["Live","Dev","Server","Manager","LiveDevServerManager"]},{"name":"main","value":"LiveDevelopment/main","tokens":["main","main"]},{"name":"LiveCSSDocument","value":"LiveDevelopment/MultiBrowserImpl/documents/LiveCSSDocument","tokens":["Live","C","S","S","Document","LiveCSSDocument"]},{"name":"LiveDocument","value":"LiveDevelopment/MultiBrowserImpl/documents/LiveDocument","tokens":["Live","Document","LiveDocument"]},{"name":"LiveHTMLDocument","value":"LiveDevelopment/MultiBrowserImpl/documents/LiveHTMLDocument","tokens":["Live","H","T","M","L","Document","LiveHTMLDocument"]},{"name":"HTMLInstrumentation","value":"LiveDevelopment/MultiBrowserImpl/language/HTMLInstrumentation","tokens":["H","T","M","L","Instrumentation","HTMLInstrumentation"]},{"name":"HTMLSimpleDOM","value":"LiveDevelopment/MultiBrowserImpl/language/HTMLSimpleDOM","tokens":["H","T","M","L","Simple","D","O","M","HTMLSimpleDOM"]},{"name":"Launcher","value":"LiveDevelopment/MultiBrowserImpl/launchers/Launcher","tokens":["Launcher","Launcher"]},{"name":"LauncherDomain","value":"LiveDevelopment/MultiBrowserImpl/launchers/node/LauncherDomain","tokens":["Launcher","Domain","LauncherDomain"]},{"name":"LiveDevProtocol","value":"LiveDevelopment/MultiBrowserImpl/protocol/LiveDevProtocol","tokens":["Live","Dev","Protocol","LiveDevProtocol"]},{"name":"DocumentObserver","value":"LiveDevelopment/MultiBrowserImpl/protocol/remote/DocumentObserver","tokens":["Document","Observer","DocumentObserver"]},{"name":"LiveDevProtocolRemote","value":"LiveDevelopment/MultiBrowserImpl/protocol/remote/LiveDevProtocolRemote","tokens":["Live","Dev","Protocol","Remote","LiveDevProtocolRemote"]},{"name":"NodeSocketTransportDomain","value":"LiveDevelopment/MultiBrowserImpl/transports/node/NodeSocketTransportDomain","tokens":["Node","Socket","Transport","Domain","NodeSocketTransportDomain"]},{"name":"NodeSocketTransport","value":"LiveDevelopment/MultiBrowserImpl/transports/NodeSocketTransport","tokens":["Node","Socket","Transport","NodeSocketTransport"]},{"name":"NodeSocketTransportRemote","value":"LiveDevelopment/MultiBrowserImpl/transports/remote/NodeSocketTransportRemote","tokens":["Node","Socket","Transport","Remote","NodeSocketTransportRemote"]},{"name":"BaseServer","value":"LiveDevelopment/Servers/BaseServer","tokens":["Base","Server","BaseServer"]},{"name":"FileServer","value":"LiveDevelopment/Servers/FileServer","tokens":["File","Server","FileServer"]},{"name":"UserServer","value":"LiveDevelopment/Servers/UserServer","tokens":["User","Server","UserServer"]},{"name":"main","value":"main","tokens":["main","main"]},{"name":"PreferencesBase","value":"preferences/PreferencesBase","tokens":["Preferences","Base","PreferencesBase"]},{"name":"PreferencesDialogs","value":"preferences/PreferencesDialogs","tokens":["Preferences","Dialogs","PreferencesDialogs"]},{"name":"PreferencesImpl","value":"preferences/PreferencesImpl","tokens":["Preferences","Impl","PreferencesImpl"]},{"name":"PreferencesManager","value":"preferences/PreferencesManager","tokens":["Preferences","Manager","PreferencesManager"]},{"name":"PreferenceStorage","value":"preferences/PreferenceStorage","tokens":["Preference","Storage","PreferenceStorage"]},{"name":"FileIndexManager","value":"project/FileIndexManager","tokens":["File","Index","Manager","FileIndexManager"]},{"name":"FileSyncManager","value":"project/FileSyncManager","tokens":["File","Sync","Manager","FileSyncManager"]},{"name":"FileTreeView","value":"project/FileTreeView","tokens":["File","Tree","View","FileTreeView"]},{"name":"FileTreeViewModel","value":"project/FileTreeViewModel","tokens":["File","Tree","View","Model","FileTreeViewModel"]},{"name":"FileViewController","value":"project/FileViewController","tokens":["File","View","Controller","FileViewController"]},{"name":"ProjectManager","value":"project/ProjectManager","tokens":["Project","Manager","ProjectManager"]},{"name":"ProjectModel","value":"project/ProjectModel","tokens":["Project","Model","ProjectModel"]},{"name":"SidebarView","value":"project/SidebarView","tokens":["Sidebar","View","SidebarView"]},{"name":"WorkingSetSort","value":"project/WorkingSetSort","tokens":["Working","Set","Sort","WorkingSetSort"]},{"name":"WorkingSetView","value":"project/WorkingSetView","tokens":["Working","Set","View","WorkingSetView"]},{"name":"FileFilters","value":"search/FileFilters","tokens":["File","Filters","FileFilters"]},{"name":"FindBar","value":"search/FindBar","tokens":["Find","Bar","FindBar"]},{"name":"FindInFiles","value":"search/FindInFiles","tokens":["Find","In","Files","FindInFiles"]},{"name":"FindInFilesUI","value":"search/FindInFilesUI","tokens":["Find","In","Files","U","I","FindInFilesUI"]},{"name":"FindReplace","value":"search/FindReplace","tokens":["Find","Replace","FindReplace"]},{"name":"FindUtils","value":"search/FindUtils","tokens":["Find","Utils","FindUtils"]},{"name":"QuickOpen","value":"search/QuickOpen","tokens":["Quick","Open","QuickOpen"]},{"name":"ScrollTrackMarkers","value":"search/ScrollTrackMarkers","tokens":["Scroll","Track","Markers","ScrollTrackMarkers"]},{"name":"SearchModel","value":"search/SearchModel","tokens":["Search","Model","SearchModel"]},{"name":"SearchResultsView","value":"search/SearchResultsView","tokens":["Search","Results","View","SearchResultsView"]},{"name":"strings","value":"strings","tokens":["strings","strings"]},{"name":"AnimationUtils","value":"utils/AnimationUtils","tokens":["Animation","Utils","AnimationUtils"]},{"name":"AppInit","value":"utils/AppInit","tokens":["App","Init","AppInit"]},{"name":"Async","value":"utils/Async","tokens":["Async","Async"]},{"name":"BuildInfoUtils","value":"utils/BuildInfoUtils","tokens":["Build","Info","Utils","BuildInfoUtils"]},{"name":"ColorUtils","value":"utils/ColorUtils","tokens":["Color","Utils","ColorUtils"]},{"name":"Compatibility","value":"utils/Compatibility","tokens":["Compatibility","Compatibility"]},{"name":"DeprecationWarning","value":"utils/DeprecationWarning","tokens":["Deprecation","Warning","DeprecationWarning"]},{"name":"DragAndDrop","value":"utils/DragAndDrop","tokens":["Drag","And","Drop","DragAndDrop"]},{"name":"DropdownEventHandler","value":"utils/DropdownEventHandler","tokens":["Dropdown","Event","Handler","DropdownEventHandler"]},{"name":"EventDispatcher","value":"utils/EventDispatcher","tokens":["Event","Dispatcher","EventDispatcher"]},{"name":"ExtensionLoader","value":"utils/ExtensionLoader","tokens":["Extension","Loader","ExtensionLoader"]},{"name":"ExtensionUtils","value":"utils/ExtensionUtils","tokens":["Extension","Utils","ExtensionUtils"]},{"name":"Global","value":"utils/Global","tokens":["Global","Global"]},{"name":"KeyEvent","value":"utils/KeyEvent","tokens":["Key","Event","KeyEvent"]},{"name":"LocalizationUtils","value":"utils/LocalizationUtils","tokens":["Localization","Utils","LocalizationUtils"]},{"name":"NativeApp","value":"utils/NativeApp","tokens":["Native","App","NativeApp"]},{"name":"NodeConnection","value":"utils/NodeConnection","tokens":["Node","Connection","NodeConnection"]},{"name":"NodeDomain","value":"utils/NodeDomain","tokens":["Node","Domain","NodeDomain"]},{"name":"PerfUtils","value":"utils/PerfUtils","tokens":["Perf","Utils","PerfUtils"]},{"name":"Resizer","value":"utils/Resizer","tokens":["Resizer","Resizer"]},{"name":"ShellAPI","value":"utils/ShellAPI","tokens":["Shell","A","P","I","ShellAPI"]},{"name":"StringMatch","value":"utils/StringMatch","tokens":["String","Match","StringMatch"]},{"name":"StringUtils","value":"utils/StringUtils","tokens":["String","Utils","StringUtils"]},{"name":"TokenUtils","value":"utils/TokenUtils","tokens":["Token","Utils","TokenUtils"]},{"name":"UpdateNotification","value":"utils/UpdateNotification","tokens":["Update","Notification","UpdateNotification"]},{"name":"UrlParams","value":"utils/UrlParams","tokens":["Url","Params","UrlParams"]},{"name":"ValidationUtils","value":"utils/ValidationUtils","tokens":["Validation","Utils","ValidationUtils"]},{"name":"ViewUtils","value":"utils/ViewUtils","tokens":["View","Utils","ViewUtils"]},{"name":"MainViewFactory","value":"view/MainViewFactory","tokens":["Main","View","Factory","MainViewFactory"]},{"name":"MainViewManager","value":"view/MainViewManager","tokens":["Main","View","Manager","MainViewManager"]},{"name":"Pane","value":"view/Pane","tokens":["Pane","Pane"]},{"name":"PanelManager","value":"view/PanelManager","tokens":["Panel","Manager","PanelManager"]},{"name":"ThemeManager","value":"view/ThemeManager","tokens":["Theme","Manager","ThemeManager"]},{"name":"ThemeSettings","value":"view/ThemeSettings","tokens":["Theme","Settings","ThemeSettings"]},{"name":"ThemeView","value":"view/ThemeView","tokens":["Theme","View","ThemeView"]},{"name":"ViewCommandHandlers","value":"view/ViewCommandHandlers","tokens":["View","Command","Handlers","ViewCommandHandlers"]},{"name":"ViewStateManager","value":"view/ViewStateManager","tokens":["View","State","Manager","ViewStateManager"]},{"name":"WorkspaceManager","value":"view/WorkspaceManager","tokens":["Workspace","Manager","WorkspaceManager"]},{"name":"bootstrap-alerts","value":"widgets/bootstrap-alerts","tokens":["bootstrap-alerts","bootstrap-alerts"]},{"name":"bootstrap-button","value":"widgets/bootstrap-button","tokens":["bootstrap-button","bootstrap-button"]},{"name":"bootstrap-dropdown","value":"widgets/bootstrap-dropdown","tokens":["bootstrap-dropdown","bootstrap-dropdown"]},{"name":"bootstrap-modal","value":"widgets/bootstrap-modal","tokens":["bootstrap-modal","bootstrap-modal"]},{"name":"bootstrap-popover","value":"widgets/bootstrap-popover","tokens":["bootstrap-popover","bootstrap-popover"]},{"name":"bootstrap-scrollspy","value":"widgets/bootstrap-scrollspy","tokens":["bootstrap-scrollspy","bootstrap-scrollspy"]},{"name":"bootstrap-tab","value":"widgets/bootstrap-tab","tokens":["bootstrap-tab","bootstrap-tab"]},{"name":"bootstrap-tooltip","value":"widgets/bootstrap-tooltip","tokens":["bootstrap-tooltip","bootstrap-tooltip"]},{"name":"bootstrap-twipsy-mod","value":"widgets/bootstrap-twipsy-mod","tokens":["bootstrap-twipsy-mod","bootstrap-twipsy-mod"]},{"name":"DefaultDialogs","value":"widgets/DefaultDialogs","tokens":["Default","Dialogs","DefaultDialogs"]},{"name":"Dialogs","value":"widgets/Dialogs","tokens":["Dialogs","Dialogs"]},{"name":"DropdownButton","value":"widgets/DropdownButton","tokens":["Dropdown","Button","DropdownButton"]},{"name":"ModalBar","value":"widgets/ModalBar","tokens":["Modal","Bar","ModalBar"]},{"name":"PopUpManager","value":"widgets/PopUpManager","tokens":["Pop","Up","Manager","PopUpManager"]},{"name":"StatusBar","value":"widgets/StatusBar","tokens":["Status","Bar","StatusBar"]},{"name":"xorigin","value":"xorigin","tokens":["xorigin","xorigin"]}]
        }
    ]).on("typeahead:selected", function(evt){
        window.location.href = window.moduleLevel + "/modules/" + evt.currentTarget.value + ".html";
    });
});
