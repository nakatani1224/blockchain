
//初期設定みたいなもの
Router.configure({
	//Layoutテンプレートの指定
	layoutTemplate: 'walletLayout'
	    });

//リダイレクト設定
Router.route('/', function () {
	//リダイレクト設定
	this.redirect('/dashboard');
    });


//URLとRouteテンプレートのマッピングを指定
Router.route('/dashboard', {name: 'dashboard'});
Router.route('/send', {name: 'send'});
