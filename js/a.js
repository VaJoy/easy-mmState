define('a', [], function () {
    var vm = avalon.define({
        $id: "a",
        p:[]
    });

    return avalon.controller(function($ctrl) {
        $ctrl.$vmodels = [vm];
        $ctrl.$onEnter = function() {
            $.ajax({
                url:"a.json",
                type:"post",
                success: function (data) {
                    vm.p = data
                }
            });
        }
    })
});