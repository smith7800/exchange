var trade = function(){
     document.getElementById('tradingsection').scrollIntoView(-100);
}

var buybitcoin = function() {
		var owned = Number($('#buycalctotal').attr('href'));
		var price = Number(document.getElementById('buyprice').value);
		var total = owned / price;
		document.getElementById('buyamount').value = total.toFixed(4);
		document.getElementById('success_msg_1').click();
    }
var buybitcoinamount = function($term) {
		var owned = $term;
		var price = Number(document.getElementById('buyprice').value);
		var total = owned / price;
		document.getElementById('buyamount').value = total.toFixed(4);
		document.getElementById('success_msg_1').click();
    }

var sellbitcoin = function() {
		var owned = Number($('#buyorderamount').attr('href'));
		document.getElementById('sellamount').value = owned.toFixed(4);
		document.getElementById('success_msg_2').click();
    }
var sellbitcoinamount = function($term) {
		var owned = $term;
		document.getElementById('sellamount').value = owned.toFixed(4);
		document.getElementById('success_msg_2').click();
    }
var depositpage = function(){
        window.location.replace("https://cryptxe.co/dashboard/deposit/");
}
var withdraw = function($term){
        window.location.replace("https://cryptxe.co//transfer/withdraw/?market=$term");
}
var settings = function($term){
        window.location.replace("https://cryptxe.co/user/edit/");
}
var security = function($term){
        window.location.replace("https://cryptxe.co/user/security");
}
var messages = function($term){
        window.location.replace("https://cryptxe.co/user/messages/");
}
var api = function($term){
        window.location.replace("https://cryptxe.co/user/api");
}
var generateapi = function($term){
        document.getElementById('generateapi').click();
}
var trades = function($term){
        window.location.replace("https://cryptxe.co/dashboard/trades/");
}
var transactions = function($term){
        window.location.replace("https://cryptxe.co/dashboard/transactions/");
}
var dashboard = function($term){
        window.location.replace("https://cryptxe.co/dashboard/");
}
	
if (annyang) {
  var commands = {
	'dashboard': dashboard,
	'start trading': trade,
    'buy all': buybitcoin,
	'buy *term ': buybitcoinamount,
	'remove all': sellbitcoin,
	'remove *term': sellbitcoinamount,
	'deposit': depositpage,
    'withdraw *term': withdraw,	
	'withdraw': depositpage,	
	'edit settings': settings,
	'security': security,
	'messages': messages,
	'api': api,
	'generate api': generateapi,
	'trades': trades,
	'transactions': transactions
	};
  annyang.addCommands(commands);
  annyang.debug();
  annyang.start();
}
