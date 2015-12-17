require.config({
    baseUrl: './js/',
    paths:{    //相对这个js文件的路径
        mmState: 'tool/mmState',
        mmPromise: 'tool/mmPromise',
        mmRouter: 'tool/mmRouter',
        mmHistory : 'tool/mmHistory'
    },
    shim:{
    }
});

require(["mmState"], function() {
    avalon.config({debug:false});
    var vm = avalon.define({
        $id : 'test'
    });
    avalon.state("home", {
        controller: "test",
        url: "/",
        views: {
            "": {
                templateUrl: 'home.html'
            }
        }
    }).state("a", {
        controller: "test",
        url: "/a",
        views: {
            "": {
                templateUrl: 'a.html',
                controllerUrl: ["a.js"]
            }
        }
    }).state("b", {
        controller: "test",
        url: "/b",
        views: {
            "": {
                templateUrl: 'b.html'
            }
        }
    }); //avalon.state结束

    avalon.history.start();
    avalon.scan()
});