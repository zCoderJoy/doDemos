/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
var page = sm("do_Page");
var root = ui("$");

// //
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
// //
var code = ui("code");
code.on("touch", function() {
	app.openPage({
		source : "source://do_BarcodeView/view/codeviewer/index.ui",
		statusBarState : "transparent"
	});
});
// //
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "二维码扫描页面"}
		,{
	"index" : "2",
	"name" : "仿微信扫一扫页面"
} 
]);
listview.bindItems(listdata);
var bgImageView, eventView;
listview.on("touch",
		function(index) {
			switch (index) {
			case 0:
				app.openPage({
					source : "source://do_BarcodeView/view/barcode/index.ui",
					statusBarState : "transparent"
				});
				break;
			case 1:
				app.openPage({
					source : "source://do_BarcodeView/view/weixin/index.ui",
					statusBarState : "transparent"
				});
				break;
			}
		});

function addview(view, id, path) {
	if (!view) {
		root.add(id, path, 0, 128)
		view = ui(id);
	} else {
		view.visible = true;
	}
}