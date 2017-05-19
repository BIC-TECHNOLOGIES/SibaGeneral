(function (s, u) {
    s.add({
        save_homeowners: function (companys, success, error) {
            u.post("/api/homeowners/save", companys, success, error);
        },
        get_homeowners: function (success, error) {
            u.get("/api/homeowners", success, error);
        },
        search_homeowners: function (query, success, error) {
            u.get("/api/homeowners/search/" + query, success, error);
        },
        get_lov_product: function (success, error) {
            u.get("/api/product/lov", success, error);
        },
        get_lov_section: function (success, error) {
            u.get("/api/section/lov", success, error);
        },
        get_lov_cover: function (success, error) {
            u.get("/api/cover/lov", success, error);
        },
        check_product_code: function (code, success, error) {
            u.get("/api/product/check/" + code, success, error);
        }
    });
})(window.service, window.utility)