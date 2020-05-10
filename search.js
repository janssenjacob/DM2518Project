ons.ready(function () {
  var list = document.getElementById('recipelist');
  list.delegate = {
    createItemContent: function (index) {
      // Return a DOM element here.
      return ons.createElement( '<ons-list-item>Item'+index+'</ons-list-item>');
    },
    countItems: function () {
      // Return the number of items here.
      return 20;
    },
    calculateItemHeight: function (index) {
      // Optional: return the height of the item at position `index`.
      // This can enhance calculations and allow better scrolling.
      return 60;
    },
    destroyItem: function (index, element) {
      // Remove event listeners, etc. here to avoid memory leaks.
    }
  };})