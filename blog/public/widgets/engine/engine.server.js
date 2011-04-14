feather.ns("blog");

blog.engine = feather.widget.create({
	name: "blog.engine",
	path: "widgets/engine/",
	prototype: {
		initialize: function($super, options) {
			$super(options);
		},
    doSomething: feather.widget.serverMethod(function(params, arg1, arg2) {
      return {
        clientArg1: arg1,
        clientArg2: arg2
      };
    })
	}		
});
