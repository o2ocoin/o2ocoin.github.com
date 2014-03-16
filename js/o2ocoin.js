$(document).ready(function() {

    function addItem() {
		items = Array('such currency', 'wow', 'amaze', 'much coin', 'awesome', 'so crypto', 'how money', 'plz mine', 'v rich', 'many coins', 'such profit', 'WOW');
		if (typeof gSplashItems != "undefined") {
			items = gSplashItems;
		}
        docHeight = $(document).innerHeight();
        docWidth = $(document).innerWidth()
        text = items[Math.floor(Math.random() * items.length)];
        textCol = '#' + Math.floor(Math.random() * 16777215).toString(16);
        textSize = Math.floor((Math.random() * 48) + 12);
        yPos = Math.floor((Math.random() * docHeight));
        xPos = Math.floor((Math.random() * docWidth));
        $('<div class="bubble" style="color:' + textCol + ';left:' + xPos + 'px;top:' + yPos + 'px;font-size:' + textSize + 'px;">' + text + '</div>').appendTo("body").fadeIn('fast').delay(2000).fadeOut('fast');
        $('.bubble:not(:last-child)').remove();
    }
    setInterval(addItem, 3000);

});
