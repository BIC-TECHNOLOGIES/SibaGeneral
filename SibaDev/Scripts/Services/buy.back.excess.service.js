(function(s,u) {
    s.add({
        getProdBuyBackExcess: function(prodCode, success, error) {
            u.get("/api/BuyBackExcess/product/rates/" + prodCode, success, error);
        },
        getProdBuyBackExcessLov: function(prodCode, success, error) {
            u.get("/api/BuyBackExcess/product/rates/lov/" + prodCode, success, error);
        }
    });
})(window.service,window.utility)