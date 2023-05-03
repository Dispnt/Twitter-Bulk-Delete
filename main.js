window.onload = (function() {
    var freq = 1000;
    var start_from = 1;
    var timer = setTimeout(Delete, freq);
    function Delete() {
      let selector = "#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div > div > div:nth-child(3) > div > section > div > div > div:nth-child("+ item +") > div > div > article > div > div > div.css-1dbjc4n.r-18u37iz > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-1777fci.r-kzbkwu > div.css-1dbjc4n.r-zl2h9q > div > div.css-1dbjc4n.r-1joea0r > div > div > div > div > div"
      console.log(selector)
      document.querySelector(selector).click();
      document.querySelector('div[role="menuitem"]').click();
      document.querySelector('div[data-testid="confirmationSheetConfirm"]').click();
      console.log(`deleted:${start_from}`);
      ++start_from;
      timer = setTimeout(Delete, freq);
    }
  })();