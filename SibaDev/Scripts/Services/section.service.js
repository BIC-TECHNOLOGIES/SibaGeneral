(function (s, u) {
    s.add({
        save_section: function (classbusinesses, success, error) {
            u.post("/api/section/save", classbusinesses, success, error)
        },
        get_sections: function (success, error) {
            u.get("/api/section", success, error)
        },
        search_section: function (query, success, error) {
            u.get("/api/section/search/" + query, success, error);
        },
        check_section_code: function (code, success, error) {
            u.get("/api/section/check/" + code, success, error);
        }
    })
})(window.service, window.utility)